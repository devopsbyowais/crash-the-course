import { ChevronDown } from 'lucide-react';
import { infoTopics } from '../data/info';
import Button from './Button';
import Modal from './Modal';

export default function InfoModal({ topicKey, onClose }) {
  const topic = infoTopics[topicKey];

  if (!topic) return null;

  return (
    <Modal onClose={onClose} labelledBy="info-modal-title" size="md" className="info-modal">
      <span className="modal-eyebrow">{topic.eyebrow}</span>
      <h2 id="info-modal-title">{topic.title}</h2>
      <p className="info-modal__intro">{topic.intro}</p>

      {topic.sections && (
        <div className="info-modal__sections">
          {topic.sections.map((section) => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      )}

      {topic.faqs && (
        <div className="faq-list">
          {topic.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>
                {faq.question}
                <ChevronDown size={18} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      )}

      <div className="info-modal__footer">
        <Button variant="secondary" onClick={onClose}>
          Got it
        </Button>
      </div>
    </Modal>
  );
}
