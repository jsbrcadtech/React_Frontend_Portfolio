import React, { useContext } from 'react';
import Skills from './Skills';
import { SkillsContext } from './SkillsContext';

function SkillsPromoter() {
  const [skills] = useContext(SkillsContext);
  return (
    <section className="container-fluid">
      <h2 className="w3-center w3-container__title">RPA Developer</h2>
      <ul className="list-unstyled w3-container__skills">
        {skills.map((skill) => (
          <Skills icon={skill.icon} name={skill.name} key={skill.id} />
        ))}
      </ul>
      <ul className="list-unstyled w3-container__skills fs-6 gap-3">
        <li className="border border-black border-2 rounded-3 p-2">.NET</li>
        <li className="border border-black border-2 rounded-3 p-2">
          Power Platform
        </li>
        <li className="border border-black border-2 rounded-3 p-2">
          Office Script
        </li>
        <li className="border border-black border-2 rounded-3 p-2">
          Excel VBA
        </li>
        <li className="border border-black border-2 rounded-3 p-2">
          Oracle Apex
        </li>
      </ul>
      <p className="fs-1 text-center">#Passion4Learning</p>
    </section>
  );
}

export default SkillsPromoter;
