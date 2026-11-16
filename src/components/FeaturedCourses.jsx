import { ArrowRight } from 'lucide-react';
import { enrollmentCourses } from '../data/courses';
import Button from './Button';
import CourseCard from './CourseCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function CourseSkeleton() {
  return (
    <div className="course-card course-card--skeleton" aria-hidden="true">
      <div className="skeleton skeleton--media" />
      <div className="course-card__body">
        <div className="skeleton skeleton--short" />
        <div className="skeleton skeleton--title" />
        <div className="skeleton skeleton--line" />
        <div className="skeleton skeleton--line" />
        <div className="skeleton-row">
          <div className="skeleton skeleton--pill" />
          <div className="skeleton skeleton--button" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCourses({ loading, onViewCourse, onViewAll }) {
  return (
    <section className="section courses-section" id="courses" aria-labelledby="courses-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Explore courses"
            id="courses-heading"
            title="Explore Our Courses"
            description="Register for the course you want and our team will get back to you with the enrollment details."
            actions={
              <Button
                variant="secondary"
                icon={<ArrowRight size={17} />}
                onClick={onViewAll}
              >
                View All Courses
              </Button>
            }
          />
        </Reveal>

        <div className="course-grid" aria-busy={loading}>
          {loading && (
            <span className="sr-only" role="status">
              Loading featured courses...
            </span>
          )}
          {loading
            ? Array.from({ length: 2 }, (_, index) => <CourseSkeleton key={index} />)
            : enrollmentCourses.map((course, index) => (
                <Reveal key={course.id} delay={index * 55} className="course-grid__item">
                  <CourseCard course={course} onView={onViewCourse} />
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
