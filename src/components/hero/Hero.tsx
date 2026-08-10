import '../hero/Hero.css';

const stack = ['Java', 'Spring', 'JavaScript', 'TypeScrypt', 'Node.js', 'React', 'MongoDB', 'Oracle', 'MariaDB'];

const codeLines = [
  <>
    <span className="code-keyword">const</span>{' '}
    <span className="code-variable">developer</span>{' '}
    <span className="code-symbol">= {'{'}</span>
  </>,
  <>
    <span className="code-property">name</span>
    <span className="code-symbol">:</span>{' '}
    <span className="code-string">'장철'</span>
    <span className="code-symbol">,</span>
  </>,
  <>
    <span className="code-property">role</span>
    <span className="code-symbol">:</span>{' '}
    <span className="code-string">'Backend Developer'</span>
    <span className="code-symbol">,</span>
  </>,
  <>
    <span className="code-property">stack</span>
    <span className="code-symbol">:</span>{' '}
    <span className="code-symbol">[</span>
  </>,
  ...stack.map((item) => (
    <>
      <span className="code-string code-indent">'{item}'</span>
      {item !== 'MongoDB' && (
        <span className="code-symbol">,</span>
      )}
    </>
  )),
  <>
    <span className="code-symbol">],</span>
  </>,
  <>
    <span className="code-property">mindset</span>
    <span className="code-symbol">:</span>{' '}
    <span className="code-string">'Problem Solver'</span>
  </>,
  <span className="code-symbol">{'}'}</span>,
];

const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__dot" />
            AVAILABLE FOR WORK
          </p>

          <h1 className="hero__title">
            Backend
            <br />
            <span>Developer.</span>
          </h1>

          <p className="hero__description">
            안녕하세요, 변장철입니다.
            <br />
            문제를 해결하고 더 나은 서비스를 만드는
            <br />
            개발자입니다.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="hero__button hero__button--primary"
              onClick={scrollToProjects}
            >
              View Projects
              <span>↗</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hero__button hero__button--secondary"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>

          <div className="hero__stack">
            {stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="hero__code">
          <div className="code-window">
            <div className="code-window__header">
              <div className="code-window__dots">
                <span />
                <span />
                <span />
              </div>

              <span className="code-window__filename">
                developer.ts
              </span>
            </div>

            <div className="code-window__body">
              {codeLines.map((line, index) => (
                <div key={index}>
                  <span className="code-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="hero__code-badge">
            <span>●</span>
            Building things that matter.
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;