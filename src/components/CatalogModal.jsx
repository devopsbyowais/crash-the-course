import { courses } from '../data/courses';
import CourseCard from './CourseCard';
import Modal from './Modal';

export default function CatalogModal({ onClose, onViewCourse }) {
  return (
    <Modal onClose={onClose} labelledBy="catalog-title" size="xl" className="catalog-modal">
      <div className="catalog-modal__header">
        <span className="modal-eyebrow">Course catalog</span>
        <h2 id="catalog-title">All Courses</h2>
        <p>
          Every course in the catalog, each marked with its enrollment status. Active courses can
          be joined from their own WhatsApp group.
        </p>
      </div>

      <div className="catalog-modal__count" aria-live="polite">
        {courses.length} courses shown
      </div>

      <div className="catalog-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} onView={onViewCourse} compact />
        ))}
      </div>
    </Modal>
  );
}
