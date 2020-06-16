import React from "react";
import PeopleItem from "./PeopleItem";

export default ({ people }) => {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Genre</th>
          <th>Année de naissance</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <PeopleItem person={person} key={index} />
        ))}
      </tbody>
    </table>
  );
};
