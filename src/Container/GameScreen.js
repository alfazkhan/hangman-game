import React, { Component } from 'react'
import Keyboard from '../Component/Keyboard'
import LoserModel from '../Component/LoserModel'
import WinnerModal from '../Component/WinnerModal'
import WordBlanks from '../Component/WordBlanks'
import { words } from '../Constant/Words'



class GameScreen extends Component {

    state = {
        word: words[Math.floor(Math.random() * words.length)],
        chancesRemaining: 5,
        hiddenString: "",
        loading: true,
        winner: false,
        loser: false
    }

    componentDidMount() {
        const hiddenString = "_ ".repeat(this.state.word.length)
        this.setState({
            hiddenString: hiddenString,
            loading: false
        })

    }

    newGame = () => {
        console.log("loaded")
        const word = words[Math.floor(Math.random() * words.length)]
        const hiddenString = "_ ".repeat(word.length)
        this.setState({
            hiddenString: hiddenString,
            word: word,
            loading: false,
            chancesRemaining: 5,
            winner: false,
            loser: false
        })
    }



    checkStatus = (char) => {
        let hiddenString = this.state.hiddenString.split('')
        const word = this.state.word
        let correctWord = false
        let chancesRemaining = this.state.chancesRemaining


        for (var j = 0; j < word.length; j++) {
            if (word[j] === char) {
                hiddenString[2 * j] = char
                correctWord = true
            }
        }

        if (!correctWord) {
            // chancesRemaining -= 1
        }

        this.setState({
            hiddenString: hiddenString.join(""),
            winner: this.checkWinner(hiddenString.join("")),
            chancesRemaining: chancesRemaining,
            loser: chancesRemaining === 0
        })

    }

    checkWinner = (string) => {
        for (var i = 0; i < string.length; i++) {
            if (string[i] === "_") {
                return false
            }
        }
        return true
    }

    render() {
        return (

            this.state.loading
                ?
                <h1>Loading... </h1>
                : this.state.winner
                    ? <WinnerModal newGame={this.newGame} />

                    :
                    this.state.loser
                        ? <LoserModel newGame={this.newGame} />
                        :
                        <div>
                            <h1>Hangman {this.state.word}</h1>
                            <WordBlanks word={this.state.word} string={this.state.hiddenString} />
                            <Keyboard charSelect={this.checkStatus} />
                            <h4>Chances Remaining: {this.state.chancesRemaining}</h4>
                        </div>

        )
    }
}



export default GameScreen
