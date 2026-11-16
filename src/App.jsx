import { useEffect, useState } from 'react';
import CallToAction from './components/CallToAction';
import CatalogModal from './components/CatalogModal';
import CourseModal from './components/CourseModal';
import FeaturedCourses from './components/FeaturedCourses';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoModal from './components/InfoModal';
import Navbar from './components/Navbar';
import WhyChoose from './components/WhyChoose';
import { enrollmentCourses } from './data/courses';

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

export default function App() {
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [infoTopic, setInfoTopic] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setCoursesLoading(false), 750);
    return () => window.clearTimeout(timer);
  }, []);

  const openCatalog = () => setCatalogOpen(true);

  const openCourseFromCatalog = (course) => {
    setCatalogOpen(false);
    setSelectedCourse(course);
  };

  // The registration form lets students switch course, so the modal follows
  // the selected enrollment course.
  const changeEnrollmentCourse = (courseName) => {
    const next = enrollmentCourses.find((course) => course.enrollmentCourse === courseName);
    if (next) setSelectedCourse(next);
  };

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero onExplore={() => scrollToSection('courses')} />

        <FeaturedCourses
          loading={coursesLoading}
          onViewCourse={setSelectedCourse}
          onViewAll={openCatalog}
        />

        <WhyChoose />

        <CallToAction onExplore={() => scrollToSection('courses')} />
      </main>

      <Footer onSupport={setInfoTopic} />

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onCourseChange={changeEnrollmentCourse}
        />
      )}

      {catalogOpen && (
        <CatalogModal
          onClose={() => setCatalogOpen(false)}
          onViewCourse={openCourseFromCatalog}
        />
      )}

      {infoTopic && <InfoModal topicKey={infoTopic} onClose={() => setInfoTopic(null)} />}
    </>
  );
}
