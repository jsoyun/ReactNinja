import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      x_o : null,
      // index : props.index
    }
  } //이거 생성자이고



  render() {

    return (
      <button
        className="square"
        onClick={() =>  //클릭할 때 둘 중 하나가 출력되어야함. 
        
            // this.setState({x_o :'X'})     
            
            this.props.onClick()
         
     
        }
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null), //얘를 공유해서 써야되는데..
      xIsNext : true,
    }
  }

  handleClick (i) {
    const squares = this.state.squares.slice();
    squares[i] =this.state.xIsNext ? 'X':'O';
    this.setState({
      squares:squares,
    xIsNext : !this.state.xIsNext
    });

  }
  renderSquare(i) {
    return <Square  
    value ={this.state.squares[i]}
    onClick ={() => this.handleClick(i)}
    />;
  }



  render() {
    const status = "Next player: X" ;

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
