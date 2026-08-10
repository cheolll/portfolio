import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__eyebrow">
            GET IN TOUCH
          </span>

          <h2 className="contact__title">
            함께 만들고,
            <br />
            <span>함께 성장하고 싶습니다.</span>
          </h2>
        </div>

        <div className="contact__content">
          <p className="contact__description">
            새로운 프로젝트와 좋은 기회에 열려 있습니다.
            <br />
            편하게 연락해주세요.
          </p>

          <div className="contact__links">
            <a
              href="mailto:your-email@example.com"
              className="contact__link"
            >
              <span className="contact__link-label">
                EMAIL
              </span>

              <span className="contact__link-value">
                your-email@example.com
              </span>

              <span className="contact__link-arrow">
                ↗
              </span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__link-label">
                GITHUB
              </span>

              <span className="contact__link-value">
                github.com
              </span>

              <span className="contact__link-arrow">
                ↗
              </span>
            </a>
          </div>
        </div>

        <footer className="contact__footer">
          <span>
            © 2026 JANG CHEOL
          </span>

          <span>
            Backend Developer
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;