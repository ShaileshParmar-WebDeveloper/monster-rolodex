import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // we need to bind 'this' only when we use normal function
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // componentDidMount run only once when page loads 1sr time.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterdMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filterdMosters} />
      </div>
    );
  }
}

export default App;
