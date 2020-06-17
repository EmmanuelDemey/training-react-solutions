import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isLiked, likeAction, dislikeAction } from "./store";

function getIDFromUrl(url) {
  const withoutPrefix = url.replace("http://swapi.dev/api/people/", "");
  return withoutPrefix.replace("/", "");
}

const PeopleItem = ({ person, isLiked, like, dislike }) => {
  const id = getIDFromUrl(person.url);
  return (
    <tr>
      <td>
        <Link to={"/person/" + id}>{person.name}</Link>
      </td>
      <td>{person.gender}</td>
      <td>{person.birth_year}</td>
      <td>
        {isLiked && <button onClick={() => dislike(person)}>I dislike</button>}
        {!isLiked && <button onClick={() => like(person)}>I like</button>}
      </td>
    </tr>
  );
};

const mapStateToProps = (state, props) => {
  const { person } = props;
  return {
    isLiked: isLiked(state, person),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    like: (person) => dispatch(likeAction(person)),
    dislike: (person) => dispatch(dislikeAction(person)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleItem);
