import React from 'react';

function Background({ company, description, startDate, endDate }) {
  return (
    <tr>
      <td className="w3-center">{company}</td>
      <td className="w3-center">{description}</td>
      <td className="w3-center">{startDate}</td>
      <td className="w3-center">{endDate}</td>
    </tr>
  );
}

export default Background;
