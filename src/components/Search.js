import React, { useState } from "react";
import Country from "./Country";

const Search = ({ datas }) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="form_group">
        <input
          className="form_input"
          placeholder="Search Any Country"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {datas
        .filter((data) => {
          if (!query) {
            return <Country key={data.name} data={data} />;
          } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
            return <h1>{data.name}</h1>;
          }
          // return data;
        })
        .map((data) => {
          return <Country key={data.name} data={data} />;
        })}
    </>
  );
};

export default Search;
