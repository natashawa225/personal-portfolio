import { Section } from 'components';
import { useTranslation } from 'next-i18next';
import React, { FC, useMemo } from 'react';

import { ProjectCard } from './libs/ProjectCard';

export const Projects: FC = () => {
  const { t } = useTranslation('common');

  const projects = useMemo(
    () => [
      {
        title: 'Quiz Application',
        subtitle: t('projects.msmr.subtitle'),
        description: t('projects.msmr.description'),
        technologies: ['Java', 'JavaFX'],
        externalLink: 'https://arxiv.org/abs/2404.05553',
        githubLink: 'https://github.com/natashawa225',
        imageLink: `/images/alljoined.jpg`,
      },
      {
        title: 'TinDog',
        subtitle: t('projects.uwcribs.subtitle'),
        description: t('projects.uwcribs.description'),
        technologies: ['Figma'],
        externalLink: 'https://www.uwcribs.com/search',
        githubLink: 'https://github.com/natashawa225',
        imageLink: `/images/uwcribs.jpg`,
      },
      {
        title: 'Note-Taking App',
        subtitle: t('projects.squiggles.subtitle'),
        description: t('projects.squiggles.description'),
        // disclaimer: t('projects.squiggles.disclaimer'),
        technologies: ['Node.js', 'Python', 'React'],
        externalLink: 'https://treeline.vercel.app/',
        githubLink: 'https://github.com/natashawa225',
        imageLink: `/images/treeline.jpg`,
      },
    ],
    [t]
  );

  return (
    <Section className="mt-20 mb-16 md:mt-28" title={t('projects.title')} description={t('projects.description')}>
      <div className="px-4 mx-auto mt-10 md:mt-20 md:px-8 max-w-screen-lg">
        {projects.map((project, i) => (
          <ProjectCard key={i} rightShift={i % 2 === 0} {...project} />
        ))}
      </div>
    </Section>
  );
};
