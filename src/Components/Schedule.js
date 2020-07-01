import React from "react";
import { ScheduleItem } from "./ScheduleItem";

export class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: "",
      displayed: false,
    };
  }

  handleChange = (event) => {
    this.setState({ team: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({ displayed: true });
    event.preventDefault();
  };

  render() {
    const title = <h1> Schedule for {this.state.team}: </h1>;

    return (
      <div>
        <div>
          Who's schedule is this?
          {"  "}
          <form onSubmit={this.handleSubmit}>
            <input
              type={"text"}
              onChange={this.handleChange}
              value={this.state.team}
            />
            <input type="submit" value="Create Schedule" />
          </form>
        </div>
        {this.state.displayed ? title : null}
        <div>
          {" "}
          {this.state.displayed ? (
            <ScheduleItem team={this.state.team} />
          ) : null}
        </div>
      </div>
    );
  }
}