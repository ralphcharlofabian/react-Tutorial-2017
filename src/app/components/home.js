import React from 'react';

export class Home extends React.Component{

    submit(n, text, event) {
        console.log(n, 'hello');
        console.log(text);
    }

    render(){

        console.log(this.props);
        return(
            <div>
                <p>New Component!</p>
                <p onClick={this.submit.bind(200, 'world')}>Your name is {this.props.name}</p>
                <p onClick={(event) => this.submit(100, event)}>Your age is {this.props.age}</p>
                <p>Your names {this.props.userInfo.names}</p>
                <div>
                    <h4>Hobbies Are</h4>
                    <ul>
                        {this.props.userInfo.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}