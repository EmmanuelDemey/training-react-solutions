import React from "react";
import { useParams, Link } from "react-router-dom";
import { useStarWarsPeople } from "./useStarWarsPeople";

const Person = () => {
  const { id } = useParams();
  const [person, loading] = useStarWarsPeople(id);

  if (loading) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{person.name}</h1>
        <Link to={"/person/" + (+id + 1)}>Personnage Suivant</Link>
      </div>
    </section>
  );
};

export default Person;
