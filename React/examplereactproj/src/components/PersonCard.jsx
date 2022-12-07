import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={
            count: this.props.age
        };
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.count}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={()=> {this.setState({count : this.state.count+1})}}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
