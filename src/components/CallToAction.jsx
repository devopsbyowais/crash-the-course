import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Button from './Button';
import Reveal from './Reveal';

export default function CallToAction({ onExplore }) {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            <div className="cta-card__decoration" aria-hidden="true">
              <span className="cta-card__ring cta-card__ring--one" />
              <span className="cta-card__ring cta-card__ring--two" />
              <span className="cta-card__float cta-card__float--book">
                <BookOpen size={20} />
              </span>
              <span className="cta-card__float cta-card__float--spark">
                <Sparkles size={18} />
              </span>
              <span className="cta-card__line" />
            </div>

            <div className="cta-card__content">
              <span className="cta-card__eyebrow">
                <span />
                Start today
              </span>
              <h2 id="cta-heading">
                Your Next Chapter
                <br />
                <span>Starts Here.</span>
              </h2>
              <p>
                Don't wait for the perfect moment. Start learning today and take the next step
                toward your goals.
              </p>

              <div className="cta-card__actions">
                <Button icon={<ArrowRight size={18} />} onClick={onExplore}>
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
