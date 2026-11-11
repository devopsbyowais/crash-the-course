import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  LayoutGrid,
  Lock,
  MessageCircle,
  Play,
  Sparkles,
} from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

export default function Hero({ onExplore }) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <Sparkles size={14} />
            Learn skills that move you forward
          </span>

          <h1 id="hero-heading">
            Stop scrolling.
            <br />
            <span className="hero__highlight">Start learning.</span>
            <br />
            Crash the Course.
          </h1>

          <p className="hero__description">
            Discover in-demand skills, learn from expert-designed courses, and turn your ambitions
            into real-world achievements. Your next learning journey starts here.
          </p>

          <div className="hero__actions">
            <Button icon={<ArrowRight size={18} />} onClick={onExplore}>
              Explore Courses
            </Button>
          </div>

          <div className="hero__assurances" aria-label="Learning benefits">
            <span>
              <Check size={15} />
              Practical, project-based learning
            </span>
            <span>
              <Check size={15} />
              Learn at your own pace
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <span className="hero__orbit hero__orbit--one" />
          <span className="hero__orbit hero__orbit--two" />

          <div className="learning-app">
            <div className="learning-app__topbar">
              <div className="learning-app__dots">
                <i />
                <i />
                <i />
              </div>
              <span className="learning-app__address">
                <Lock size={9} />
                crashthecourse.app/courses
              </span>
              <span className="learning-app__avatar">
                <Sparkles size={11} />
              </span>
            </div>

            <div className="learning-app__body">
              <aside className="learning-app__sidebar">
                <Logo compact />
                <span className="learning-app__nav is-active">
                  <LayoutGrid size={15} />
                </span>
                <span className="learning-app__nav">
                  <BookOpen size={15} />
                </span>
                <span className="learning-app__nav">
                  <BarChart3 size={15} />
                </span>
                <span className="learning-app__nav learning-app__nav--last">
                  <MessageCircle size={15} />
                </span>
              </aside>

              <div className="learning-app__main">
                <div className="learning-app__heading">
                  <div>
                    <span>Featured course</span>
                    <strong>Full-Stack Web Development</strong>
                  </div>
                  <span className="learning-app__percent">4.9</span>
                </div>

                <div className="learning-app__video">
                  <span className="learning-app__video-grid" />
                  <span className="learning-app__code">
                    <i className="is-long" />
                    <i className="is-mid" />
                    <i className="is-short" />
                    <i className="is-mid" />
                    <i className="is-tiny" />
                  </span>
                  <span className="learning-app__play">
                    <Play size={16} fill="currentColor" />
                  </span>
                  <span className="learning-app__lesson-tag">Beginner</span>
                </div>

                <div className="learning-app__lesson">
                  <div>
                    <span>Course includes</span>
                    <strong>128 lessons · 42 hours</strong>
                  </div>
                  <span className="learning-app__time">$89.99</span>
                </div>

                <div className="learning-app__progress-label">
                  <span>Enrollment</span>
                  <strong>Join via WhatsApp</strong>
                </div>
                <div className="learning-app__progress">
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card floating-card--goal">
            <div className="week-ring">
              <span>4.9</span>
            </div>
            <div>
              <span>Course rating</span>
              <strong>4.9 out of 5</strong>
              <small>128 lessons included</small>
            </div>
          </div>

          <div className="floating-card floating-card--skill">
            <span className="floating-card__icon">
              <Award size={19} />
            </span>
            <div>
              <strong>Beginner friendly</strong>
              <span>No experience needed</span>
            </div>
            <span className="floating-card__check">
              <Check size={12} />
            </span>
          </div>

          <span className="hero__mini-chip">
            <MessageCircle size={14} />
            Join the course group
          </span>
        </div>
      </div>
    </section>
  );
}
