import React from "react";
import { Link } from "react-router-dom";

function getIDFromUrl(url) {
  const withoutPrefix = url.replace("http://swapi.dev/api/people/", "");
  return withoutPrefix.replace("/", "");
}

export default ({ person }) => {
  const id = getIDFromUrl(person.url);
  return (
    <tr>
      <td>
        <Link to={"/person/" + id}>{person.name}</Link>
      </td>
      <td>{person.gender}</td>
      <td>{person.birth_year}</td>
    </tr>
  );
};
