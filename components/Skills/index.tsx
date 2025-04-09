import { Container, Section } from 'components';
import { useAnimation } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import React, { FC, useEffect } from 'react';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiGraphql, SiJavascript, SiLatex, SiNodeDotJs, SiPytorch } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

import { MongoIcon, PostgresIcon } from './libs/Icons';
import { Skill } from './libs/Skill';

const skills = [
  {
    name: 'Java',
    href: 'https://www.java.com/',
    icon: <FaJava />,
  },
  {
    name: 'React',
    href: 'https://reactjs.org/',
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: 'Python',
    href: 'https://www.https://pyton.com/',
    icon: <FaPython color="#FF6F00" />,
  },
  {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    icon: <SiNodeDotJs color="#539E43" />,
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    icon: <MongoIcon />,
  },
  {
    name: 'Postgres',
    href: 'https://www.postgresql.org/',
    icon: <PostgresIcon />,
  },
  {
    name: 'SiPytorch',
    href: 'https://www.sipytorch.com/',
    icon: <SiPytorch />,
  },
  {
    name: 'GraphQL',
    href: 'https://graphql.org/',
    icon: <SiGraphql color="#E535AB" />,
  },
  {
    name: 'Latex',
    href: 'https://www.overleaf.com/',
    icon: <SiLatex color="#0DB7ED" />,
  },
  {
    name: 'JavaScript',
    href: 'https://www.javascript.com/',
    icon: <SiJavascript />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation('common');

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section className="md:mt-20 mt-14" title={t('skills.title')} description={t('skills.description')}>
      <Container>
        <div className="max-w-xl mt-8 grid grid-cols-2 lg:grid-cols-5 gap-6" ref={ref}>
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
