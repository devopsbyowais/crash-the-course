import { ArrowUpRight, BookOpen, Clock, Mail, MessageCircle, Sparkles, Star } from 'lucide-react';
import Button from './Button';
import CourseArt from './CourseArt';
import {
  AVAILABILITY,
  getAvailabilityLabel,
  getAvailabilityTone,
  getEnrollmentContactLink,
  isCourseActive,
} from '../data/courses';

export function formatPrice(price) {
  if (price === null || price === undefined) return 'Contact for pricing';
  return price === 'Free' ? 'Free' : `$${Number(price).toFixed(2)}`;
}

export function hasPrice(course) {
  return course.price !== null && course.price !== undefined;
}

export function CourseStatusBadge({ course, className = '' }) {
  return (
    <span className={`course-status course-status--${getAvailabilityTone(course)} ${className}`.trim()}>
      <span className="course-status__dot" aria-hidden="true" />
      {getAvailabilityLabel(course)}
    </span>
  );
}

export function CourseJoinButton({ course, className = '' }) {
  if (!isCourseActive(course)) {
    const comingSoon = course.availabilityStatus === AVAILABILITY.COMING_SOON;

    return (
      <Button
        variant="secondary"
        size="sm"
        disabled
        icon={comingSoon ? <Sparkles size={15} /> : <Clock size={15} />}
        iconPosition="left"
        className={className}
      >
        {comingSoon ? 'Coming Soon' : 'Enrollment Opening Soon'}
      </Button>
    );
  }

  if (!course.whatsappGroupLink) {
    return (
      <Button
        as="a"
        href={getEnrollmentContactLink(course)}
        variant="secondary"
        size="sm"
        icon={<Mail size={15} />}
        iconPosition="left"
        className={className}
      >
        Contact for Enrollment
      </Button>
    );
  }

  return (
    <Button
      as="a"
      href={course.whatsappGroupLink}
      target="_blank"
      rel="noopener noreferrer"
      size="sm"
      icon={<MessageCircle size={15} />}
      iconPosition="left"
      className={className}
    >
      Join Now
    </Button>
  );
}

export default function CourseCard({ course, onView, compact = false }) {
  return (
    <article className={`course-card ${compact ? 'course-card--compact' : ''}`.trim()}>
      <div className="course-card__media">
        <CourseArt type={course.art} />
        <CourseStatusBadge course={course} className="course-card__status" />
        {course.rating !== null && course.rating !== undefined && (
          <span className="course-card__rating" aria-label={`Rated ${course.rating} out of 5`}>
            <Star size={13} fill="currentColor" />
            {course.rating}
          </span>
        )}
      </div>

      <div className="course-card__body">
        <div className="course-card__topline">
          <span className="course-card__category">{course.categoryShort}</span>
          <span className="course-card__level">{course.level}</span>
        </div>

        <h3>{course.title}</h3>
        <p className="course-card__description">{course.shortDescription}</p>

        <div className="course-card__meta">
          {course.duration && (
            <span>
              <Clock size={14} />
              {course.duration}
            </span>
          )}
          {course.lessons !== null && course.lessons !== undefined && (
            <span>
              <BookOpen size={14} />
              {course.lessons} lessons
            </span>
          )}
        </div>

        <div className="course-card__footer">
          <span
            className={`course-card__price ${course.price === 'Free' ? 'is-free' : ''} ${
              hasPrice(course) ? '' : 'is-custom'
            }`.trim()}
          >
            {formatPrice(course.price)}
          </span>
          <Button
            variant="soft"
            size="sm"
            icon={<ArrowUpRight size={16} />}
            onClick={() => onView(course)}
            aria-label={`View ${course.title}`}
          >
            View Course
          </Button>
        </div>

        <div className="course-card__action">
          <CourseJoinButton course={course} />
        </div>
      </div>
    </article>
  );
}
