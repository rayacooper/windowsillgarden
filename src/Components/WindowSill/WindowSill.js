import React from 'react';
import NavBar from './../NavBar/NavBar';
import './WindowSill.css';

import windowsillBackground from './../../Assets/WindowsillArt.png'

import corgiPot from './../../Assets/Pot_01_Corgi.png'

import blueStraw01 from './../../Assets/Blue_Strawberry_Stage_01.png'

const WindowSill = () => {

    
    return(
        <div className="WindowsillMain">
            <NavBar />
            
            <div className="WindowsillProper">
                <div className="WindowsillPots">
                    <div className="SinglePot">
                        <img className="PlantImg" src={blueStraw01}/>
                        <img className="PotImg" src={corgiPot}/>
                    </div>
                    <div className="SinglePot">
                        <img className="PlantImg" src={blueStraw01}/>
                        <img className="PotImg" src={corgiPot}/>
                    </div>
                    <div className="SinglePot">
                        <img className="PlantImg" src={blueStraw01}/>
                        <img className="PotImg" src={corgiPot}/>
                    </div>
                    <div className="SinglePot">
                        <img className="PlantImg" src={blueStraw01}/>
                        <img className="PotImg" src={corgiPot}/>
                    </div>
                    <div className="SinglePot">
                        <img className="PlantImg" src={blueStraw01}/>
                        <img className="PotImg" src={corgiPot}/>
                    </div>
                    <div className="SinglePot">
                        <img className="PlantImg" src={blueStraw01}/>
                        <img className="PotImg" src={corgiPot}/>
                    </div>
                </div>
            </div>
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