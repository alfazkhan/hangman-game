import React, { Component } from 'react'

export class WordBlanks extends Component {

    
    state = {
        word: this.props.word,
    }

    componentDidMount() {
        const selectedChar = this.props.selectedChar
    }




    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center col-12">{this.props.string}</h1>
                </div>
            </div>
        )
    }
}

export default WordBlanks
