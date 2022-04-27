import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


class Characters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    let url = "https://rickandmortyapi.com/api/character";
    let result = null;

    try {
      result = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }

    this.setState({ characters: result.data.results });
  }

  render() {
    const { characters } = this.state;

    let mapArray = characters.map((character) => {
      return (
        <div className="character">
          <div className="pfp">
            <img src={character.image} />
          </div>
          <div className="content">
            <h2>{character.name}</h2>
            <div className="status">
              <div
                className={`status-icon ${
                  character.status == "Alive" ? "green" : "red"
                } ${character.status == "unknown" ? "unknown" : ""}`}
              ></div>
              <p>{character.status}</p>
            </div>
            <p>Species: {character.species}</p>
            <p>Last Known Location: {character.location.name}</p>
          </div>
        </div>
      );
    });

    return (
      <>
      
        <div className="character-container">{mapArray}</div>
      </>
    );
  }
}
export default Characters;
