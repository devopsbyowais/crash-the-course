import {
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Globe,
  PenTool,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

function WebArt() {
  return (
    <>
      <span className="art-grid" aria-hidden="true" />
      <span className="art-orb art-orb--one" aria-hidden="true" />
      <span className="art-orb art-orb--two" aria-hidden="true" />
      <div className="art-code-window">
        <div className="art-window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="art-code-lines">
          <span className="code-line code-line--short" />
          <span className="code-line code-line--long" />
          <span className="code-line code-line--mid" />
          <span className="code-line code-line--tiny" />
          <span className="code-line code-line--mid" />
        </div>
      </div>
      <span className="art-float-tag">
        <Code2 size={13} />
        React + Node
      </span>
    </>
  );
}

function CyberArt() {
  return (
    <>
      <span className="art-cyber-glow" aria-hidden="true" />
      <span className="art-cyber-ring art-cyber-ring--one" aria-hidden="true" />
      <span className="art-cyber-ring art-cyber-ring--two" aria-hidden="true" />
      <span className="art-cyber-ring art-cyber-ring--three" aria-hidden="true" />
      <div className="art-shield">
        <ShieldCheck size={54} strokeWidth={1.45} />
        <span className="art-shield__dot" />
      </div>
      <span className="art-float-tag art-float-tag--dark">
        <span className="status-dot" />
        Security lab
      </span>
      <span className="art-corner-code">001101</span>
    </>
  );
}

function AiArt() {
  return (
    <>
      <svg className="art-network" viewBox="0 0 320 190" aria-hidden="true">
        <g className="art-network__lines">
          <path d="M48 48 118 74M48 48 66 132M118 74 66 132M118 74 168 40M118 74 190 105M66 132 154 150M168 40 190 105M190 105 154 150M190 105 262 62M154 150 262 62M262 62 270 138M154 150 270 138" />
        </g>
        <g className="art-network__nodes">
          <circle cx="48" cy="48" r="7" />
          <circle cx="118" cy="74" r="9" />
          <circle cx="66" cy="132" r="6" />
          <circle cx="168" cy="40" r="5" />
          <circle cx="190" cy="105" r="11" />
          <circle cx="154" cy="150" r="7" />
          <circle cx="262" cy="62" r="8" />
          <circle cx="270" cy="138" r="5" />
        </g>
      </svg>
      <div className="art-ai-core">
        <BrainCircuit size={32} strokeWidth={1.6} />
      </div>
      <span className="art-float-tag">
        <Sparkles size={13} />
        Neural networks
      </span>
    </>
  );
}

function MarketingArt() {
  return (
    <>
      <span className="art-chart-baseline" aria-hidden="true" />
      <div className="art-bars" aria-hidden="true">
        <span style={{ height: '30%' }} />
        <span style={{ height: '48%' }} />
        <span style={{ height: '42%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '82%' }} />
      </div>
      <svg className="art-trend" viewBox="0 0 260 120" aria-hidden="true">
        <path d="M12 96C55 91 66 58 103 68c38 11 44-40 82-34 25 4 41-17 63-27" />
      </svg>
      <span className="art-float-tag art-float-tag--white">
        <TrendingUp size={13} />
        Growth strategy
      </span>
    </>
  );
}

function DesignArt() {
  return (
    <>
      <span className="art-design-circle art-design-circle--one" aria-hidden="true" />
      <span className="art-design-circle art-design-circle--two" aria-hidden="true" />
      <span className="art-design-square" aria-hidden="true" />
      <div className="art-pen">
        <PenTool size={34} strokeWidth={1.5} />
      </div>
      <div className="art-swatches" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <span className="art-float-tag art-float-tag--white">Visual systems</span>
    </>
  );
}

function BusinessArt() {
  return (
    <>
      <span className="art-grid" aria-hidden="true" />
      <div className="art-business-card">
        <span className="art-business-icon">
          <Briefcase size={20} />
        </span>
        <span className="art-business-line art-business-line--wide" />
        <span className="art-business-line" />
        <span className="art-business-line art-business-line--short" />
      </div>
      <span className="art-business-badge">Launch plan</span>
      <span className="art-orb art-orb--one" aria-hidden="true" />
    </>
  );
}

function DataArt() {
  return (
    <>
      <span className="art-chart-baseline" aria-hidden="true" />
      <div className="art-donut" aria-hidden="true">
        <span />
      </div>
      <div className="art-bars art-bars--compact" aria-hidden="true">
        <span style={{ height: '28%' }} />
        <span style={{ height: '52%' }} />
        <span style={{ height: '44%' }} />
        <span style={{ height: '76%' }} />
      </div>
      <span className="art-float-tag art-float-tag--white">
        <TrendingUp size={13} />
        Data insights
      </span>
    </>
  );
}

function BrandArt() {
  return (
    <>
      <span className="art-brand-ring" aria-hidden="true" />
      <div className="art-brandmark" aria-hidden="true">
        c<span>.</span>
      </div>
      <div className="art-swatches art-swatches--brand" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="art-float-tag art-float-tag--white">Brand identity</span>
    </>
  );
}

function SaasArt() {
  return (
    <>
      <span className="art-grid" aria-hidden="true" />
      <span className="art-orb art-orb--two" aria-hidden="true" />
      <div className="art-saas-window">
        <div className="art-window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="art-saas-body">
          <span className="art-saas-cloud">
            <Cloud size={26} strokeWidth={1.5} />
          </span>
          <span className="art-saas-line art-saas-line--wide" />
          <span className="art-saas-line" />
          <span className="art-saas-line art-saas-line--short" />
        </div>
        <div className="art-saas-bars" aria-hidden="true">
          <span style={{ height: '34%' }} />
          <span style={{ height: '56%' }} />
          <span style={{ height: '78%' }} />
        </div>
      </div>
      <span className="art-saas-badge">Recurring revenue</span>
      <span className="art-float-tag">
        <Rocket size={13} />
        SaaS business
      </span>
    </>
  );
}

function ShopifyArt() {
  return (
    <>
      <span className="art-grid" aria-hidden="true" />
      <span className="art-orb art-orb--one" aria-hidden="true" />
      <div className="art-shop-window">
        <div className="art-window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="art-shop-grid" aria-hidden="true">
          <span className="art-shop-tile" />
          <span className="art-shop-tile" />
          <span className="art-shop-tile" />
          <span className="art-shop-tile" />
        </div>
        <div className="art-shop-row">
          <span className="art-shop-line art-shop-line--wide" />
          <span className="art-shop-price">
            <ShoppingCart size={12} />
          </span>
        </div>
      </div>
      <span className="art-shop-badge">
        <Globe size={12} />
        Global store
      </span>
      <span className="art-float-tag">
        <ShoppingCart size={13} />
        Online store
      </span>
    </>
  );
}

const artMap = {
  web: WebArt,
  cyber: CyberArt,
  ai: AiArt,
  marketing: MarketingArt,
  design: DesignArt,
  business: BusinessArt,
  data: DataArt,
  brand: BrandArt,
  saas: SaasArt,
  shopify: ShopifyArt,
};

export default function CourseArt({ type = 'web', className = '' }) {
  const Art = artMap[type] || WebArt;

  return (
    <div className={`course-art course-art--${type} ${className}`.trim()} aria-hidden="true">
      <Art />
    </div>
  );
}
