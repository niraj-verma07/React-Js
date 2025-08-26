import { useState } from "react"

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue :0, red: 0, yellow: 0, green: 0});

    let updateBlue = ()=>{
        // moves.blue += 1;
        console.log(moves)
        setMoves((prevMoves)=>{
            return {...prevMoves, blue : moves.blue+1};
            //Used spread opertator to update the objects value because we cannot update it directly so we made a copy by spread(...) operator and makes changes on it
        });
    }
     let updateYellow = ()=>{
      
        console.log(moves)
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow : moves.blue+1};
        });
    }
     let updateGreen = ()=>{
        
        console.log(moves)
        setMoves((prevMoves)=>{
            return {...prevMoves, green : moves.blue+1};
        });
    }
     let updateRed = ()=>{
        
        console.log(moves)
        setMoves((prevMoves)=>{
            return {...prevMoves, red : moves.blue+1};
        });
    }
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color : "black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}