import { useState } from "react";
import "./lottery.css";
import { genrateTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";


export default function Lottery({n=3, winCondition}) { // Deafult value if props is not passed 3 and will be considered
  let [ticket, setTicket] = useState(genrateTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genrateTicket(n))
    }
 
  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
        <br />
      {/* <button onClick={buyTicket}>Buy New Ticket</button>
       */}
       <Button action={buyTicket}/>
      <h3> {isWinning && "Congratualtions, you won"}</h3>
    </div>
  );
}
