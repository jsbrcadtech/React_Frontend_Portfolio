import React, { useContext } from 'react';
import Skills from './Skills';
import { SkillsContext } from './SkillsContext';

function AboutSkills() {
  const [skills] = useContext(SkillsContext);

  return (
    <section className="w3-container">
      <h2 className="w3-center w3-container__title">Tech Skills</h2>
      <ul className="w3-ul w3-container__skills">
        {skills.map((skill) => (
          <Skills icon={skill.icon} name={skill.name} key={skill.id} />
        ))}
      </ul>
    </section>
  );
}

export default AboutSkills;
