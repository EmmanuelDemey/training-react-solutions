import React, { useState } from "react";
import PeopleList from "./PeopleList";
import PeopleFilter from "./PeopleFilter";
import { useFetch } from "./useFetch";

const Home = () => {
  const [input, setInput] = useState("");
  const [people, loading] = useFetch();

  const filteredPeople = people.filter((person) => {
    return person.name.includes(input);
  });

  if (loading) {
    return (
      <progress className="progress is-small is-primary" max="100"></progress>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Hello World</h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!x
        </p>
      </div>
      <PeopleFilter onChangeHandler={setInput} />
      <PeopleList people={filteredPeople} />
    </section>
  );
};

export default Home;
