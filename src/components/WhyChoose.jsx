import { Clock, MessageCircle, Route, Sparkles } from 'lucide-react';
import { features } from '../data/features';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const iconMap = {
  Clock,
  Sparkles,
  Route,
  MessageCircle,
};

export default function WhyChoose() {
  return (
    <section className="section why-section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="The Crash difference"
            id="why-heading"
            title="Why Learn With Crash the Course?"
            description="We make learning simple, accessible, practical, and engaging."
            align="center"
          />
        </Reveal>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;

            return (
              <Reveal key={feature.title} delay={index * 65} className="feature-grid__item">
                <article className="feature-card">
                  <span className="feature-card__index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="feature-card__icon">
                    <Icon size={23} strokeWidth={1.9} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
