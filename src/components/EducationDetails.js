import React from 'react';
import axios from 'axios';
import config from '../config.json';
import Education from './Education';

function EducationDetails() {
  const [educations, setEducations] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(config.BASE_URL + '/education')
      .then((response) => {
        // console.log(response.data['items']);
        setEducations(response.data['items']);
      })
      .catch((error) => {
        // console.error(error);
      });
  }, []);
  return (
    <>
      <section className="container-fluid">
        <h2 className="w3-center w3-container__title">Education</h2>
        <table className="table table-sm">
          <thead>
            <tr>
              <th className="w3-center">Institution</th>
              <th className="w3-center">Degree / Certificate</th>
              <th className="w3-center">Description</th>
              <th className="w3-center">Start</th>
              <th className="w3-center">End</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((education, index) => (
              <Education
                key={index}
                institution={education.name}
                degree={education.title}
                description={education.description}
                startDate={education.startdate}
                endDate={education.enddate}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default EducationDetails;
