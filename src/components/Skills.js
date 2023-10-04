import React from 'react';

function Skills({ id, icon, name }) {
  return (
    <li className="w3-padding w3-center" key={id}>
      <i className={`w3-container__skills__icons ${icon}`}></i>
      <p className="w3-container__body-content">{name}</p>
    </li>
  );
}

export default Skills;
