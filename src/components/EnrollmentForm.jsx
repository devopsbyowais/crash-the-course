import { useRef, useState } from 'react';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';
import { ENROLLMENT_ENDPOINT } from '../config/enrollment';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SCRIPT_ERROR_PATTERN = /error|invalid|failed|cannot|unable/i;

const MESSAGES = {
  confirmed:
    'Your registration has been submitted successfully! Our team will contact you with the enrollment details.',
  sent:
    'Your registration request has been sent. We are confirming it with our team and will contact you with the enrollment details shortly.',
  error: 'We could not send your registration. Please check your connection and try again.',
};

function validate(values) {
  const errors = {};
  const name = values.studentName.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, '');

  if (!name || name.length < 2) errors.studentName = 'Please enter your full name.';

  if (!email) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.';

  if (!phone) errors.phone = 'Please enter your phone number.';
  else if (digits.length < 7) errors.phone = 'Please enter a valid phone number.';

  if (!values.course) errors.course = 'Please select a course.';

  return errors;
}

export default function EnrollmentForm({ course, options, onCourseChange, onSubmitted }) {
  const [values, setValues] = useState({ studentName: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const formRef = useRef(null);
  const submittedRef = useRef(false);
  const timerRef = useRef(null);
  const statusRef = useRef('idle');

  const sending = status === 'sending';
  statusRef.current = status;

  const updateValue = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const handleCourseChange = (event) => {
    onCourseChange(event.target.value);
  };

  const finish = (nextStatus, customMessage) => {
    window.clearTimeout(timerRef.current);
    setStatus(nextStatus);
    setMessage(customMessage || MESSAGES[nextStatus]);
  };

  const handleFrameLoad = () => {
    if (!submittedRef.current) return;
    // The fallback transport cannot be read (cross-origin iframe), so we only
    // know that the endpoint answered - never that the row was written.
    finish('sent');
  };

  /**
   * Fallback transport: a native POST into a hidden iframe. The browser sends
   * the request without any CORS preflight, so the registration always reaches
   * the script, but the response cannot be read back.
   */
  const submitViaIframe = () => {
    const hiddenForm = formRef.current;
    if (!hiddenForm) {
      finish('error');
      return;
    }

    hiddenForm.studentName.value = values.studentName.trim();
    hiddenForm.email.value = values.email.trim();
    hiddenForm.phone.value = values.phone.trim();
    hiddenForm.course.value = course.enrollmentCourse;

    submittedRef.current = true;
    hiddenForm.submit();

    timerRef.current = window.setTimeout(() => {
      if (statusRef.current !== 'confirmed') finish('sent');
    }, 12000);
  };

  /**
   * Verified transport: a CORS POST whose response can be read. The Apps
   * Script answers with the text "Registration successful!" when the student
   * was written to the matching spreadsheet, and with an error message when
   * the request could not be processed.
   */
  const submitWithVerification = async () => {
    const body = new URLSearchParams({
      studentName: values.studentName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      course: course.enrollmentCourse,
    });

    try {
      const response = await fetch(ENROLLMENT_ENDPOINT, {
        method: 'POST',
        body,
        redirect: 'follow',
      });

      const text = (await response.text()).trim();

      if (!response.ok) {
        finish('error', `We could not send your registration (server responded with ${response.status}). Please try again.`);
        return;
      }

      if (text && SCRIPT_ERROR_PATTERN.test(text)) {
        finish('error', text);
        return;
      }

      finish('confirmed');
      setValues({ studentName: '', email: '', phone: '' });
      onSubmitted?.();
    } catch {
      // The response could not be read. Deliver the registration through the
      // hidden iframe instead and be explicit that it was only sent.
      submitViaIframe();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sending) return; // one submission at a time

    const nextErrors = validate({ ...values, course: course.enrollmentCourse });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setMessage('Please correct the highlighted fields and try again.');
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      setStatus('error');
      setMessage('You appear to be offline. Please reconnect and try again.');
      return;
    }

    setStatus('sending');
    setMessage('Sending your registration...');
    submitWithVerification();
  };

  const feedbackIcon = {
    confirmed: <CheckCircle2 size={17} />,
    sent: <Send size={17} />,
    error: <TriangleAlert size={17} />,
  }[status];

  return (
    <div className="enroll">
      <span className="modal-eyebrow">Enrollment</span>
      <h3 className="enroll__title">Course Registration</h3>
      <p className="enroll__intro">
        Complete the form below to register for your selected course.
      </p>

      <span className="enroll__selected">
        Selected course:
        <strong>{course.enrollmentCourse}</strong>
      </span>

      <form className="enroll__form" onSubmit={handleSubmit} noValidate>
        <div className="enroll__field">
          <label htmlFor="enroll-student-name">Full Name</label>
          <input
            id="enroll-student-name"
            name="studentName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.studentName}
            onChange={updateValue('studentName')}
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? 'enroll-student-name-error' : undefined}
            required
          />
          {errors.studentName && (
            <span className="enroll__error" id="enroll-student-name-error">
              {errors.studentName}
            </span>
          )}
        </div>

        <div className="enroll__field">
          <label htmlFor="enroll-email">Email Address</label>
          <input
            id="enroll-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={updateValue('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'enroll-email-error' : undefined}
            required
          />
          {errors.email && (
            <span className="enroll__error" id="enroll-email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="enroll__field">
          <label htmlFor="enroll-phone">Phone Number</label>
          <input
            id="enroll-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={updateValue('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'enroll-phone-error' : undefined}
            required
          />
          {errors.phone && (
            <span className="enroll__error" id="enroll-phone-error">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="enroll__field">
          <label htmlFor="enroll-course">Select Course</label>
          <select
            id="enroll-course"
            name="course"
            value={course.enrollmentCourse}
            onChange={handleCourseChange}
            aria-invalid={Boolean(errors.course)}
            required
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.course && (
            <span className="enroll__error" id="enroll-course-error">
              {errors.course}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn--primary enroll__submit"
          disabled={sending}
          aria-busy={sending}
        >
          {sending ? (
            <>
              <span className="btn__icon">
                <Loader2 size={17} className="enroll__spinner" />
              </span>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Registration</span>
              <span className="btn__icon">
                <Send size={16} />
              </span>
            </>
          )}
        </button>
      </form>

      {message && (
        <p className={`enroll__feedback enroll__feedback--${status}`} role="status" aria-live="polite">
          {feedbackIcon}
          <span>{message}</span>
        </p>
      )}

      {/* Fallback transport: a native POST form targeting an invisible iframe. */}
      <form
        ref={formRef}
        className="enroll__transport"
        action={ENROLLMENT_ENDPOINT}
        method="POST"
        target="enroll-frame"
        aria-hidden="true"
      >
        <input type="hidden" name="studentName" defaultValue="" readOnly />
        <input type="hidden" name="email" defaultValue="" readOnly />
        <input type="hidden" name="phone" defaultValue="" readOnly />
        <input type="hidden" name="course" defaultValue="" readOnly />
      </form>
      <iframe
        name="enroll-frame"
        title="Enrollment submission"
        className="enroll__frame"
        onLoad={handleFrameLoad}
      />
    </div>
  );
}
