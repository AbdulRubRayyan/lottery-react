import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props)
        this.state = {
            nums: Array.from({length: this.props.maxBalls})
        }
    }

    generate = () => {
        this.setState(curState => ({
            nums: curState.nums.map(m => Math.floor(Math.random() * this.props.maxNum) + 1 )
        }));
        
    }

    handleClick = () => {
        this.generate()
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button className="Button" onClick={this.handleClick}>Generate Numbers</button>
            </section>
        )
    }
}

export default Lottery