import React, { useState, useEffect } from "react";
import "./App.css";
import PeopleList from "./PeopleList";
import PeopleFilter from "./PeopleFilter";

function useStarWars() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((body) => setPeople(body.results))
      .finally(() => setLoading(false));
  }, []);

  return [people, loading];
}

const App = () => {
  const [input, setInput] = useState("");
  const [people, loading] = useStarWars();

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

export default App;
