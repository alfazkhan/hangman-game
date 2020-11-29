import React, { Component } from 'react'

export class Keyboard extends Component {


    state = {
        alphabets: [],
        inputs: ""
    }

    componentDidMount() {
        const alphabets = []
        const qwerty = "qwertyuiopasdfghjklzxcvbnm"
        for (var i = 0; i < qwerty.length; i++) {
            // alphabets.push((i + 10).toString(36))
            alphabets.push(qwerty[i])
        }
        this.setState({
            alphabets: alphabets
        })
        if (window.innerWidth > 768) {
            window.addEventListener("keypress", (e) => {
                this.removeAlphabet(e.key)
            })
        }
    }



    removeAlphabet = (char, e) => {
        if (!(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
            e.target.value = ""
            return
        }
        this.props.charSelect(char)
        const alphabets = this.state.alphabets
        for (let i = 0; i < alphabets.length; i++) {
            if (alphabets[i] === char) {
                // alphabets.splice(i,1)
                alphabets[i] = ""
            }
        }

        this.setState({
            alphabets: alphabets,
            inputs: this.state.inputs + char + ", "
        })
    }

    mobilePlatformInputHandler = (e) => {

        e.target.value = e.target.value[e.target.value.length - 1].toLowerCase()
        const char = e.target.value[e.target.value.length - 1].toLowerCase()


        this.removeAlphabet(char, e)
    }


    render() {
        return (
            <div className="container">
                <div className="row" style={{ margin: 40 }}>
                    {
                        this.state.alphabets.map((char, i) => {
                            return (
                                <>
                                    {window.innerWidth > 768
                                        ?
                                        <>
                                            <div className={"mx-2 card col-1 my-2"} onClick={this.removeAlphabet.bind(this, char)}>
                                                <div className="btn" >
                                                    <h6 className="text-bold text-uppercase">{char}</h6>
                                                </div>
                                            </div>
                                            <div className={i === 9 ? "col-1" : " "}>

                                            </div>
                                            <div className={i === 18 ? "col-2" : " "}>

                                            </div>
                                        </>
                                        : null
                                    }
                                </>
                            )
                        })
                    }
                </div>
                {window.innerWidth <= 768
                    ?
                    <div style={{ margin: 20 }} >
                        <input type="text" placeholder="Enter Character" onChange={this.mobilePlatformInputHandler} />
                        <p>{this.state.inputs}</p>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Keyboard
