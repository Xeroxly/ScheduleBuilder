import React from "react";
import { ScheduleItem } from "./ScheduleItem";

export class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      displayed: false,
      games: [],
    };
  }

  handleChange = (event) => {
    this.setState({ team: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({ displayed: true });
    event.preventDefault();
  };

  handleNewGame = (event) => {
    console.log("new game");
  };

  render() {
    const title = <h1> Schedule for {this.state.team}: </h1>;

    const input = (
      <div>
        <h1>Who's schedule is this?</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type={"text"}
            onChange={this.handleChange}
            value={this.state.team}
          />
          <input type="submit" value="Create Schedule" />
        </form>
      </div>
    );

    return (
      <div>
        {this.state.displayed ? null : input}
        {this.state.displayed ? title : null}
        <div>
          {this.state.displayed ? (
            <ScheduleItem team={this.state.team} />
          ) : null}
        </div>
        <div>
          {this.state.displayed ? (
            <input
              type="button"
              value="Add new game"
              onClick={this.handleNewGame}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
