import React from "react";

export class ScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opponent: "",
      home: false,
      date: "",
      time: "",
      teamScore: "",
      opponentScore: "",
    };
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>
          {" "}
          Enter the Opponent:{" "}
          <input
            type={"text"}
            name={"opponent"}
            value={this.state.opponent}
            onChange={this.handleChange}
          />
        </h2>
        <h2>
          Home Game?{" "}
          <input
            type={"checkbox"}
            name={"home"}
            checked={this.state.home}
            onChange={this.handleChange}
          />
        </h2>
        <h2>
          Enter Game's Date:{" "}
          <input
            type={"date"}
            name={"date"}
            value={this.state.date}
            onChange={this.handleChange}
          />
        </h2>
        <h2>
          Enter Game's Start Time:{" "}
          <input
            type={"time"}
            name={"time"}
            value={this.state.time}
            onChange={this.handleChange}
          />
        </h2>
      </div>
    );
  }
}
