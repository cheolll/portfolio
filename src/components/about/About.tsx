import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="about__eyebrow">
            ABOUT ME
          </span>

          <h2 className="about__title">
            문제를 해결하고,
            <br />
            <span>더 나은 서비스를 만듭니다.</span>
          </h2>
        </div>

        <div className="about__content">
          <div className="about__description">
            <p>
              안녕하세요, 장철입니다.
            </p>

            <p>
              사용자에게 필요한 서비스를 고민하고,
              문제를 해결하는 과정에서 성장하는
              백엔드 개발자입니다.
            </p>

            <p>
              Java와 Spring을 기반으로 서버를 개발하고,
              Node.js와 React 등 다양한 기술을 활용해
              서비스의 전체적인 흐름을 이해하려고 노력합니다.
            </p>

            <p>
              단순히 기능을 구현하는 것보다
              왜 필요한지 고민하고,
              유지보수하기 좋은 코드를 만드는 것을 중요하게 생각합니다.
            </p>
          </div>

          <div className="about__values">
            <div className="about__value">
              <span className="about__value-number">01</span>

              <div>
                <h3>Problem Solver</h3>
                <p>
                  문제의 원인을 파악하고
                  해결 방법을 찾아갑니다.
                </p>
              </div>
            </div>

            <div className="about__value">
              <span className="about__value-number">02</span>

              <div>
                <h3>Backend Focused</h3>
                <p>
                  안정적인 서버와 데이터 흐름을
                  설계하는 것을 좋아합니다.
                </p>
              </div>
            </div>

            <div className="about__value">
              <span className="about__value-number">03</span>

              <div>
                <h3>Keep Growing</h3>
                <p>
                  새로운 기술을 배우고
                  더 나은 방법을 끊임없이 고민합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;