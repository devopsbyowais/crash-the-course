import { ArrowRight } from 'lucide-react';
import { courses } from '../data/courses';
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
            description="Every course in one place, each marked with its enrollment status. Active courses can be joined straight from their own WhatsApp group."
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
            ? Array.from({ length: 4 }, (_, index) => <CourseSkeleton key={index} />)
            : courses.map((course, index) => (
                <Reveal key={course.id} delay={index * 55} className="course-grid__item">
                  <CourseCard course={course} onView={onViewCourse} />
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
