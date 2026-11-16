import { ChevronDown } from 'lucide-react';
import { infoTopics } from '../data/info';
import Button from './Button';
import Modal from './Modal';

// Renders inline emphasis written as **bold text** inside a paragraph.
function renderInline(text) {
  return String(text)
    .split('**')
    .map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : <span key={index}>{part}</span>,
    );
}

// Groups the "- " prefixed paragraphs into a single list so bullet points keep
// their own block inside the existing section layout.
function renderBlocks(paragraphs) {
  const blocks = [];
  let items = null;

  paragraphs.forEach((paragraph, index) => {
    if (paragraph.startsWith('- ')) {
      if (!items) {
        items = [];
        blocks.push({ type: 'list', items, key: `list-${index}` });
      }
      items.push(paragraph.slice(2).trim());
      return;
    }

    items = null;
    blocks.push({ type: 'paragraph', text: paragraph, key: `paragraph-${index}` });
  });

  return blocks.map((block) =>
    block.type === 'list' ? (
      <ul key={block.key}>
        {block.items.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>
    ) : (
      <p key={block.key}>{renderInline(block.text)}</p>
    ),
  );
}

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
              {renderBlocks(section.paragraphs)}
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
