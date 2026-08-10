import { useEffect, useState } from 'react';
import './SectionNav.css';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className="section-nav" aria-label="Section navigation">
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            type="button"
            className={`section-nav__item ${
              isActive ? 'active' : ''
            }`}
            onClick={() => scrollToSection(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="section-nav__label">
              {section.label}
            </span>

            <span className="section-nav__dot" />
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;