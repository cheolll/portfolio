import './Skills.css';

const skillGroups = [
  {
    number: '01',
    title: 'Backend',
    description: '서비스의 핵심 로직과 API를 설계하고 구현합니다.',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express'],
  },
  {
    number: '02',
    title: 'Database',
    description: '데이터의 구조와 흐름을 고민하며 안정적으로 관리합니다.',
    skills: ['MariaDB', 'MySQL', 'MongoDB', 'JPA', 'MyBatis'],
  },
  {
    number: '03',
    title: 'Frontend',
    description: '사용자 경험을 이해하고 필요한 화면을 직접 구현합니다.',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    number: '04',
    title: 'Tools & DevOps',
    description: '개발과 배포 환경을 이해하고 서비스 운영을 경험했습니다.',
    skills: ['Git', 'Docker', 'PM2', 'Linux', 'Postman'],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__container">
        <div className="skills__header">
          <span className="skills__eyebrow">
            SKILLS
          </span>

          <h2 className="skills__title">
            기술을 이해하고,
            <br />
            <span>문제에 맞게 사용합니다.</span>
          </h2>

          <p className="skills__description">
            하나의 기술에만 의존하기보다 문제의 특성과
            서비스의 요구사항에 맞는 기술을 선택하려고 합니다.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skill-card"
              key={group.title}
            >
              <div className="skill-card__top">
                <span className="skill-card__number">
                  {group.number}
                </span>

                <span className="skill-card__arrow">
                  ↗
                </span>
              </div>

              <div className="skill-card__content">
                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-card__list">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;