import React, { useState, useEffect } from 'react';
import car from '../assets/car.png';

const Dino = ({ startGame, setStartGame }) => {
    const [active, setActive] = useState(false);
    const [score, setScore] = useState(0);

    const jump = () => {
        if(!active) {
            setScore(score + 1);
            setActive(true);            
        }
        setTimeout(() => {
            setActive(false);
        }, 500)
    }

    const collision = () => {
        var element = document.getElementById('car');
        var carTop = parseInt(getComputedStyle(element).top);


        var element1 = document.querySelector('span');
        var blockLeft = parseInt(getComputedStyle(element1).right);
        

        if(blockLeft >= 530 && blockLeft <= 590 && carTop >= 360){
            alert('Game Over');

            element1.style.display = "none";
            var getScore = parseInt(localStorage.getItem('score'));
            if(getScore !== null){
                if(getScore < score){                    
                    localStorage.setItem('score', score);
                }
            }
            if(getScore === undefined){
                localStorage.setItem('score', score);
            }
            setScore(0)
            setStartGame(false);
        }
    }

    const startPlay = () => {
        localStorage.setItem('score', 0);
        setStartGame(true);
        var element1 = document.querySelector('span');
        element1.style.display = "inline";
    }

    useEffect(() => {        
        if(startGame){
            document.addEventListener('keypress', jump);
        }
        const interval = setInterval(collision, 10);
        return () => {
            clearInterval(interval);
        }
    })

    return (        
        <>
            <p>Score : {score}</p>
            <p className="highScore">Hi Score : {localStorage.getItem('score')}</p>
            <button onClick={startPlay}>START</button>            
            <div className="car">
                <img id="car" className={active ? 'car-jump' : null} src={car} alt="" />                
            </div>
            <span className="block"></span>
        </>
    )
}

export default Dino
