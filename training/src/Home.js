import React, { useState } from "react";
import PeopleList from "./PeopleList";
import PeopleFilter from "./PeopleFilter";
import { useStarWarsPeople } from "./useStarWarsPeople";
import { connect } from "react-redux";
import { getNumberLikedPeople } from "./store";

const Home = ({ numberLikedPeople }) => {
  const [input, setInput] = useState("");
  const [people, loading] = useStarWarsPeople();

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
        <p className="subtitle">Vous aimez {numberLikedPeople} personnages</p>
      </div>
      <PeopleFilter onChangeHandler={setInput} />
      <PeopleList people={filteredPeople} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    numberLikedPeople: getNumberLikedPeople(state),
  };
};
export default connect(mapStateToProps)(Home);
