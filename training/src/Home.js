import React, { useState } from "react";
import PeopleList from "./PeopleList";
import PeopleFilter from "./PeopleFilter";
import { useStarWarsPeople } from "./useStarWarsPeople";
import { connect } from "react-redux";
import { getNumberLikedPeople } from "./store";
import { useTranslation } from "react-i18next";

const Home = ({ numberLikedPeople }) => {
  const { t, i18n } = useTranslation();
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
      <div className="is-pulled-right">
        <button
          className="button"
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          FR
        </button>
        <button
          className="button"
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </button>
      </div>
      <div className="container">
        <h1 className="title">{t("HELLO_WORLD")}</h1>
        <p className="subtitle">
          {t("NB_LIKED_PEOPLE", { nb: numberLikedPeople })}
        </p>
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
