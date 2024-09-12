import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null, //흠 얘는 뭘까?
      // change: "df",
    };
  } //이거 생성자이고

  render() {
    return (
      <button
        className="square"
        //온클릭을 했을 때 x로!
        onClick={() => {
          console.log("클릭"); //
          // {
          //   this.props.value = "X";
          // }
          // this.value =
          this.setState({ value: "X" });
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player:" + {};

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
