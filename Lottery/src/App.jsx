import './App.css'
import Lottery from './Lottery';
import Ticket from './Ticket';
import { sum } from './helper';

function App() {

  let winCondition = (ticket)=>{
    // return sum(ticket ) === 15;
    return ticket.every((num) => num === ticket[0]); // Every number need to be same for winning
  }
  return (
    <>
      <Lottery n={3} winningSum={15} winCondition={winCondition}/>
    </>
  )
}

export default App;
