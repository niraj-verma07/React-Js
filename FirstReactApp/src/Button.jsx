function printHello(event){
    console.log("Hello");
    console.log(event);
}

function printBye(){
    console.log("Bye");
}

function dblClick(){
    console.log("Double clicked!");
}

export default function Button(){
    return(
       <div>
        <button onClick={printHello}>Click Me!</button>
        <p onClick={printBye}>Click on me!</p>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque nemo sint odio ducimus perferendis id libero expedita odit molestias.</p>
        <button onDoubleClick={dblClick}>Double Click on me!</button>
       </div> 
    )
}