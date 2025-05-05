import React from 'react';

function Education() {
  return (
    <div className="container">
      <h2>Education</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', backgroundColor: '#fff' }}>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BS Computer Science</td>
            <td>Information Technology University (ITU)</td>
            <td>2022 - Present</td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>Govt. Graduate Degree College</td>
            <td>2017 - 2019</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
