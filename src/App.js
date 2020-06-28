import React from 'react';
import './App.css';
import Game from './components/game';
import PickSide from './components/pickside';
import PlayMode from './components/playmode';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameMode: '',
      side: ''
    }
  }
  setMode = (mode) => {
    this.setState({
      gameMode: mode
    });
  }
  setSide = (side) => {
    this.setState({
      side: side
    });
  }
  render() {
    const {gameMode,side} = this.state;
    let childComponent = <PlayMode setMode={this.setMode} />;
    if(gameMode !== '') {
      childComponent = <PickSide setSide={this.setSide} />
    }
    if(side !== '') {
      childComponent = <Game data={this.state}/>
    }
    return ( 
        <div className="App">
         {childComponent}
        </div>
    );
  }
}

export default App;
