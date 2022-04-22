import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Episodes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
    };
  }

  async componentDidMount() {
    let url = "https://rickandmortyapi.com/api/episode";
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

    this.setState({ episodes: result.data.results });
  }

  render() {
    const { episodes } = this.state;

    let mapArray = episodes.map((episode) => {
      return (
        <div className="episode">
          <h1>{episode.name}</h1>
          <h2>
            {episode.episode
              .split("S")
              .join("Season ")
              .split("E")
              .join(" Episode ")
              .split("0")}
          </h2>
          <p>Released: {episode.air_date}</p>
        </div>
      );
    });

    return (
      <>
        <div className="image">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
            alt=""
          />
        </div>
        <div className="episodes">{mapArray}</div>
      </>
    );
  }
}
export default Episodes;
