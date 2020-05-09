import React from 'react';

const WindowSill = () => {

    
    return(
        <div>
            WindowSill
        </div>
    )
}

export default WindowSill;

// You need to use setInterval to trigger the change, 
// but you also need to clear the timer when the component unmounts 
// to prevent it leaving errors and leaking memory:

// componentDidMount() {
//   this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
// }
// componentWillUnmount() {
//   clearInterval(this.interval);
// }