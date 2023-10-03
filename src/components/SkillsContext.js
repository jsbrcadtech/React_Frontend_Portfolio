import React, { createContext, useState } from 'react';
import axios from 'axios';
import config from '../config.json';

export const SkillsContext = createContext();

export const SkillsProvider = (props) => {
  const [skills, setSkills] = useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + '/skills')
      .then((response) => {
        // console.log(response.data);
        setSkills(response.data['items']);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  return (
    <SkillsContext.Provider value={[skills, setSkills]}>
      {props.children}
    </SkillsContext.Provider>
  );
};
