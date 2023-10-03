import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config.json';
import Background from './Background';

function BackgroundDetails() {
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    axios
      .get(config.BASE_URL + '/background')
      .then((response) => {
        setBackgrounds(response.data['items']);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="container-fluid ">
        <h2 className="w3-center w3-container__title">Work Experience</h2>
        <table className="table table-sm">
          <thead>
            <tr>
              <th className="w3-center">Company</th>
              <th className="w3-center">Description</th>
              <th className="w3-center">Start</th>
              <th className="w3-center">End</th>
            </tr>
          </thead>
          <tbody>
            {backgrounds.map((background, index) => (
              <Background
                key={index}
                company={background.background_name}
                description={background.background_details}
                startDate={background.start_date}
                endDate={background.end_date || 'Current Job'}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default BackgroundDetails;
