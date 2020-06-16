import React from "react";

export default ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.gender}</td>
      <td>{person.birth_year}</td>
    </tr>
  );
};
