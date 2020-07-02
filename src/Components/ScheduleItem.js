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
      details: false,
      score: false,
    };
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
    console.log(this.state);
  };

  handleSubmitInputs = (event) => {
    event.preventDefault();
    this.setState({ details: true });
  };

  handleScoreInputs = (event) => {
    event.preventDefault();
    this.setState({ score: true });
  };

  render() {
    const inputs = (
      <form onSubmit={this.handleSubmitInputs}>
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
        <input type="submit" value="Create Game" />
      </form>
    );

    const needScore = (
      <h2>
        {this.props.team} {this.state.home ? "vs" : "@"} {this.state.opponent}{" "}
        {this.state.date} {this.state.time}
        <form onSubmit={this.handleScoreInputs}>
          {this.props.team}:{" "}
          <input
            type={"text"}
            name={"teamScore"}
            value={this.state.teamScore}
            onChange={this.handleChange}
          />{" "}
          {this.state.opponent}:{" "}
          <input
            type={"text"}
            name={"opponentScore"}
            value={this.state.opponentScore}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit Score" />
        </form>
      </h2>
    );

    const finishedGame = (
      <h2>
        {this.props.team} {this.state.home ? "vs" : "@"} {this.state.opponent}{" "}
        <div>
          {this.props.team}: {this.state.teamScore} {this.state.opponent}:{" "}
          {this.state.opponentScore}
        </div>
      </h2>
    );

    return (
      <div>
        {this.state.score
          ? finishedGame
          : this.state.details
          ? needScore
          : inputs}
      </div>
    );
  }
}
