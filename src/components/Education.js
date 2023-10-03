import React from "react";

function Education({institution, degree, description, startDate, endDate}) {
  return (
    <tr>
      <td className="w3-center">{institution}</td>
      <td className="w3-center">{degree}</td>
      <td className="w3-center">{description}</td>
      <td className="w3-center">{startDate}</td>
      <td className="w3-center">{endDate}</td>
    </tr>
  );
}

export default Education;