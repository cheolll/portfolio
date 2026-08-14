import './Projects.css';

interface Project {
  number: string;
  title: string;
  description: string;
  period: string;
  role: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: '실시간 채팅 서비스',
    description:
      'Socket.IO와 MongoDB를 기반으로 구현한 실시간 채팅 서비스입니다.',
    period: '2026',
    role: 'Backend / Full Stack',
    tech: ['Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/cheolll',
    demo: 'https://github.com/cheolll',
  },
  {
    number: '02',
    title: 'tourView',
    description: '한국관광공사 TourAPI를 활용해 전국의 여행 정보를 검색하고 관광지 상세 정보를 탐색할 수 있는 반응형 여행 정보 웹 서비스입니다.',
    period: '2026',
    role: 'Frontend / API Integration',
    tech: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'Axios', 'CSS'],
    github: 'https://github.com/cheolll/tourView',
    demo: 'https://cheolll.github.io/tourView/',
},
  {
    number: '03',
    title: '기업 서비스 프로젝트',
    description:
      '사용자 인증부터 데이터 처리, 알림 기능까지 다양한 서버 기능을 구현했습니다.',
    period: '2025',
    role: 'Backend Developer',
    tech: ['Java', 'Spring Boot', 'MariaDB', 'Docker'],
    github: 'https://github.com/cheolll',
    demo: 'https://github.com/cheolll',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div>
            <span className="projects__eyebrow">
              PROJECTS
            </span>

            <h2 className="projects__title">
              직접 만들고,
              <br />
              <span>문제를 해결했습니다.</span>
            </h2>
          </div>

          <p className="projects__description">
            프로젝트를 진행하며 단순한 기능 구현을 넘어
            실제 서비스에서 발생하는 문제를 해결하는
            경험을 쌓았습니다.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-card__number">
                {project.number}
              </div>

              <div className="project-card__main">
                <div className="project-card__info">
                  <div className="project-card__meta">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-card__tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card__action">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <span>LIVE DEMO</span>
                      <strong>↗</strong>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      <span>GITHUB</span>
                      <strong>↗</strong>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
