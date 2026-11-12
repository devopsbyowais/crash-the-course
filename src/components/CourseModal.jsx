import { BarChart3, BookOpen, Check, Clock, Mail, MessageCircle, Sparkles, Star } from 'lucide-react';
import Button from './Button';
import CourseArt from './CourseArt';
import Modal from './Modal';
import { CourseStatusBadge, formatPrice, hasPrice } from './CourseCard';
import {
  AVAILABILITY,
  getEnrollmentContactLink,
  isCourseActive,
} from '../data/courses';

function descriptionParagraphs(description) {
  return String(description || '')
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function CourseModal({ course, onClose }) {
  const active = isCourseActive(course);
  const hasWhatsAppGroup = Boolean(course.whatsappGroupLink);
  const hasRating = course.rating !== null && course.rating !== undefined;
  const hasLessons = course.lessons !== null && course.lessons !== undefined;
  const priced = hasPrice(course);
  const comingSoon = course.availabilityStatus === AVAILABILITY.COMING_SOON;
  const outcomes = course.topics || course.learningOutcomes || [];

  return (
    <Modal onClose={onClose} labelledBy="course-modal-title" size="lg" className="course-modal">
      <div className="course-modal__art">
        <CourseArt type={course.art} />
        <span className="course-modal__art-badge">{course.categoryShort}</span>
        {hasRating && (
          <span className="course-modal__art-rating">
            <Star size={14} fill="currentColor" />
            {course.rating} rating
          </span>
        )}
      </div>

      <div className="course-modal__content">
        <div className="course-modal__status-row">
          <span className="modal-eyebrow">Course overview</span>
          <CourseStatusBadge course={course} />
        </div>
        <h2 id="course-modal-title">{course.title}</h2>

        {course.summary && <p className="course-modal__summary">{course.summary}</p>}

        {descriptionParagraphs(course.description).map((paragraph, index) => (
          <p
            className={`course-modal__description ${
              paragraph.length <= 95 ? 'course-modal__description--headline' : ''
            }`.trim()}
            key={index}
          >
            {paragraph}
          </p>
        ))}

        <div className="course-modal__meta">
          {course.level && (
            <span>
              <BarChart3 size={16} />
              {course.level}
            </span>
          )}
          {course.duration && (
            <span>
              <Clock size={16} />
              {course.duration}
            </span>
          )}
          {hasLessons && (
            <span>
              <BookOpen size={16} />
              {course.lessons} lessons
            </span>
          )}
          {hasRating && (
            <span>
              <Star size={16} />
              {course.rating} out of 5
            </span>
          )}
        </div>

        <div className="course-modal__topics">
          <h3>What you'll learn</h3>
          <ul>
            {outcomes.map((topic) => (
              <li key={topic}>
                <span>
                  <Check size={13} />
                </span>
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {(course.closingHeading || course.closingText) && (
          <div className="course-modal__closing">
            {course.closingHeading && (
              <h3 className="course-modal__closing-title">{course.closingHeading}</h3>
            )}
            {course.closingText && (
              <p className="course-modal__closing-text">{course.closingText}</p>
            )}
          </div>
        )}

        {course.closingStatement && (
          <p className="course-modal__statement">
            <Sparkles size={15} />
            {course.closingStatement}
          </p>
        )}

        <div className="course-modal__footer">
          <div className="course-modal__price">
            <span>
              {priced
                ? course.price === 'Free'
                  ? 'Free access'
                  : 'One-time payment'
                : 'Course price'}
            </span>
            <strong className={priced ? '' : 'is-custom'}>{formatPrice(course.price)}</strong>
          </div>
          {!active ? (
            comingSoon ? (
              <Button variant="secondary" disabled icon={<Sparkles size={18} />}>
                Coming Soon
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                Enrollment Opening Soon
              </Button>
            )
          ) : hasWhatsAppGroup ? (
            <Button
              as="a"
              href={course.whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageCircle size={18} />}
            >
              Join Now
            </Button>
          ) : (
            <Button
              as="a"
              href={getEnrollmentContactLink(course)}
              variant="secondary"
              icon={<Mail size={18} />}
            >
              Contact for Enrollment
            </Button>
          )}
        </div>
        <p className="course-modal__note">
          {course.enrollmentNote ||
            (!active
              ? comingSoon
                ? 'This course is still in the pipeline. Join the course WhatsApp group to be notified when it launches.'
                : 'Enrollment for this course opens soon. Join the course WhatsApp group to stay updated.'
              : hasWhatsAppGroup
                ? 'Join the WhatsApp group for course updates and enrollment details.'
                : 'This course is open. Contact us and we will share the WhatsApp group and enrollment details.')}
        </p>
      </div>
    </Modal>
  );
}
