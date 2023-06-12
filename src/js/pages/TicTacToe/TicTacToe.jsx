import React, { useState, useEffect } from 'react';

// Patterns
import { WinPatterns } from './Patterns'

// Css
import './TicTacToe.css'
export const TicTacToe = () => {
    const [isBoardChanged, setIsBoardChanged] = useState(false)
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
    const [currPlayer, setCurrPlayer] = useState('X')
    const [result, setResult] = useState({winner: '', state: ''})

    useEffect(() => {
        checkWin()
        checkTie()


        if (isBoardChanged && result.winner === '') {
            if (currPlayer === 'X') {
                setCurrPlayer('O')
            } else {
                setCurrPlayer('X')
            }
        }

    }, [board])

    useEffect(() => {
        if (result.winner !== ''){
            alert(`Game finished! Winning Player: ${result.winner}`)
            setResult({winner: '', state: ''})
            restartGame()

        }
    }, [result])

    const chooseUnit = (unitIndex) => {
        setIsBoardChanged(false)
        setBoard(board.map((data, idx) => {
            if (idx === unitIndex && data === '') {
                setIsBoardChanged(true)
                return currPlayer
            } else {
                return data;
            }
        }))
    }

    const checkWin = () => {
        WinPatterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]];
            let foundingWinningPattern = true

            if (firstPlayer === '') return;

            currPattern.forEach((idx) => {
                if (board[idx] !== firstPlayer) {
                    foundingWinningPattern = false;
                }
            })

            if (foundingWinningPattern) {
                setResult({winner: currPlayer, state: 'won'})
            }
        })
    }
    
    const checkTie = () => {
        let filled = true;

        board.forEach((unit) => {
            if (unit === '') {
                filled = false
            }
        })

        if (filled) {
            setResult({winner: 'No One', state: 'Tie'})
        }
    }

    const restartGame = () => {
        setBoard(['', '', '', '', '', '', '', '', ''])
        setCurrPlayer('O')
    }

    return (
        <div className="game-wrapper">
            <div className="scene">
                {
                    board.map((data, idx) => {
                        return (
                            <div
                                key={idx}
                                className="unit"
                                onClick={() => chooseUnit(idx)}
                            >
                                <span>{data}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};