import React from "react";
import "./App.css";
import PeopleList from "./PeopleList";
import PeopleFilter from "./PeopleFilter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      people: [],
      loading: true,
    };
  }

  getInput = (newValue) => {
    this.setState({ input: newValue });
  };

  componentDidMount = () => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((body) =>
        this.setState({
          people: body.results,
        })
      )
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const filteredPeople = this.state.people.filter((person) => {
      return person.name.includes(this.state.input);
    });

    if (this.state.loading) {
      return (
        <progress class="progress is-small is-primary" max="100"></progress>
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
        <PeopleFilter onChangeHandler={this.getInput} />
        <PeopleList people={filteredPeople} />
      </section>
    );
  }
}

export default App;
