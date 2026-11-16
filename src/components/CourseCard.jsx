import { ArrowUpRight, BookOpen, Clock, Star } from 'lucide-react';
import Button from './Button';
import CourseArt from './CourseArt';
import { getAvailabilityLabel, getAvailabilityTone } from '../data/courses';

export function formatAmount(value, currency) {
  if (currency && currency !== 'USD') {
    return `${currency} ${Number(value).toLocaleString('en-US')}`;
  }

  return `$${Number(value).toFixed(2)}`;
}

export function formatPrice(course) {
  const price = course?.price;

  if (price === null || price === undefined) return 'Contact for pricing';
  if (price === 'Free') return 'Free';

  return formatAmount(price, course.priceCurrency);
}

export function hasPrice(course) {
  return course.price !== null && course.price !== undefined;
}

export function hasDiscount(course) {
  return (
    course.originalPrice !== null &&
    course.originalPrice !== undefined &&
    Boolean(course.priceDiscount)
  );
}

export function CourseStatusBadge({ course, className = '' }) {
  return (
    <span className={`course-status course-status--${getAvailabilityTone(course)} ${className}`.trim()}>
      <span className="course-status__dot" aria-hidden="true" />
      {getAvailabilityLabel(course)}
    </span>
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
          {hasDiscount(course) ? (
            <div className="course-card__pricing">
              <span className="course-card__price-original">
                {formatAmount(course.originalPrice, course.priceCurrency)}
              </span>
              <span className="course-card__discount">{course.priceDiscount}</span>
              <span className="course-card__price">
                {formatPrice(course)}
              </span>
            </div>
          ) : (
            <span
              className={`course-card__price ${course.price === 'Free' ? 'is-free' : ''} ${
                hasPrice(course) ? '' : 'is-custom'
              }`.trim()}
            >
              {formatPrice(course)}
            </span>
          )}
          {/* Only courses that are open for registration can be opened, so the
              upcoming courses stay informational. */}
          {course.enrollmentCourse && (
            <Button
              variant="soft"
              size="sm"
              icon={<ArrowUpRight size={16} />}
              onClick={() => onView(course)}
              aria-label={`View ${course.title}`}
            >
              View Course
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
