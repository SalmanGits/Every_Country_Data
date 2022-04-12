import React from "react";

const Country = ({ data }) => {
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country Name</th>
            <th>Capital</th>
            <th>Language</th>
            <th>Region</th>
            <th>Area</th>
            <th>Population</th>
            <th>Calling Code</th>
            <th>Demonym</th>
            {/* <th>Currencies</th> */}
          </tr>
        </thead>
        <tbody>
          <tr key={data.name}>
            <td>
              <img className="flag" src={data.flags.png} alt="flag" />
            </td>
            <td>{data.name}</td>
            <td>{data.capital}</td>
            <td>{data.languages[0].name}</td>
            <td>{data.region}</td>
            <td>{data.area}</td>
            <td>{data.population}</td>
            <td>{data.callingCodes[0]}</td>
            <td>{data.demonym}</td>
            {/* <td>{data.currencies.name}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;
