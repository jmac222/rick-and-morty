import axios from "axios";
import { Dropdown } from "bootstrap";
import React from "react";

class Episodes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: [],
      episodes2: [],
      episodes3: [],
      season: "",
    };
  }

  async componentDidUpdate() {
    let url = "https://rickandmortyapi.com/api/episode?page=1";
    let url2 = "https://rickandmortyapi.com/api/episode?page=2";
    let url3 = "https://rickandmortyapi.com/api/episode?page=3";

    let result1 = null;
    let result2 = null;
    let result3 = null;

    try {
      result1 = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(result1);
      result2 = await axios(url2, {
        headers: {
          Accept: "application/json",
        },
      });
      result3 = await axios(url3, {
        headers: {
          Accept: "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }

    this.setState({ episodes: result1.data.results });

    this.setState({ episodes2: result2.data.results });
    this.setState({ episodes3: result3.data.results });
  }




 

  render() {
    const { episodes, episodes2, episodes3 } = this.state;
    console.log(episodes);
    console.log(this.state.season);

    let mapArray = this.state.episodes
      .filter((episode) => {
        return Object.values(episode)
          .join("")
          .toLowerCase()
          .includes(this.state.season);
      })
      .map((episode) => {
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
    let mapArray2 = episodes2
      .filter((episode) => {
        return Object.values(episode)
          .join("")
          .toLowerCase()
          .includes(this.state.season);
      })
      .map((episode) => {
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
    let mapArray3 = episodes3
      .filter((episode) => {
        return Object.values(episode)
          .join("")
          .toLowerCase()
          .includes(this.state.season);
      })
      .map((episode) => {
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
        {/* <input
          onChange={(e) => {
            this.setState({ season: e.target.value });
          }}
        ></input> */}
        <br></br>
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <button value = "s01" onClick={(e) => {
              this.setState({ season: e.target.value })
            }}>Link 1</button>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="episodes">
          {mapArray} {mapArray2} {mapArray3}
        </div>
      </>
    );
  }
}
export default Episodes;
