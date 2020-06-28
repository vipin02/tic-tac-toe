import React from 'react';
import Box from './box';
import '../styles/playmode.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: {
                name: 'You',
                score: 0
            },
            o: {
                name: (this.props.data.gameMode === 'single') ? 'AI' : 'Friend',
                score: 0
            },
            boxes: ['', '', '', '', '', '', '', '', ''],
            currentPlayer: this.props.data.side,
            gameActive: true,
            gameMode: this.props.data.gameMode
        }
    }
    updateArena = (indexVal) => {
        if (this.state.gameActive && this.state.boxes[indexVal] === '') {
            if (this.state.boxes[indexVal] !== '' && !this.state.gameActive) {
                return;
            }
            const boxes = this.state.boxes;
            boxes[indexVal] = this.state.currentPlayer;
            this.setState({
                boxes: boxes
            }, () => {
                this.checkForWin();
            });
        }
    }
    checkForWin = () => {
        const winningScenario = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let result = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningScenario[i];
            const a = this.state.boxes[winCondition[0]];
            const b = this.state.boxes[winCondition[1]];
            const c = this.state.boxes[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                result = true;
                break;
            }
        }
        if (result) {
            const winner = this.state.currentPlayer === this.props.data.side ? 'x' : 'o';
            const newState = this.state;
            newState[winner] = {
                name: this.state[winner].name,
                score: this.state[winner].score + 1
            };
            newState.gameActive = false;
            this.setState(newState, alert(newState[winner].name + " WON!"));
        } else {
            let nextPlayer = this.state.currentPlayer;
            if (this.state.gameMode === 'double') {
                nextPlayer = this.state.currentPlayer === 'x' ? 'o' : 'x';
            }
            const boxes = this.state.boxes;
            let draw = true;
            for (let i = 0; i < 9; i++) {
                if (boxes[i] === '') {
                    draw = false;
                    break;
                }
            }
            if (draw) {
                this.setState({
                    gameActive: false
                });
                alert("DRAW!!!!!");
            } else {
                if (this.state.gameMode !== 'double') {
                    if (this.state.currentPlayer === this.props.data.side) {
                        const newState = this.state;
                        let indexAI = Math.floor(Math.random() * 10);
                        while (newState.boxes[indexAI] !== '') {
                            indexAI = Math.floor(Math.random() * 10);
                        }
                        const nextPlayer1 = this.props.data.side === 'x' ? 'o' : 'x';
                        newState.boxes[indexAI] = nextPlayer1;
                        newState.currentPlayer = nextPlayer1;
                        this.setState(newState, () => {
                            this.checkForWin();
                        });
                    } else {
                        this.setState({
                            currentPlayer: this.props.data.side
                        })
                    }
                } else {
                    this.setState({
                        currentPlayer: nextPlayer
                    });
                }
            }
        }
    }
    restartGame = () => {
        this.setState({
            boxes: ['', '', '', '', '', '', '', '', ''],
            currentPlayer: this.props.data.side,
            gameActive: true
        })
    }
    render() {
        const { x, o, boxes, gameActive, currentPlayer } = this.state;
        return (
            <div>
                <div className="score-wrapper">
                    <div>{x.name}</div>
                    <div className="score-card">{x.score} - {o.score}</div>
                    <div>{o.name}</div>
                </div>
                <div className="arena">
                    {boxes.map((box, index) => <Box key={index} id={index} emitValue={(val) => this.updateArena(val)} value={box} />)}
                </div>
                <i className="fa fa-cog settings" aria-hidden="true" onClick={this.restartGame}></i>
            </div>
        )
    }
}

export default Game;