function handleForm(event){
    console.log("Form Submitted");
    console.log(event);
    event.preventDefault();
}

export default function Form(){
    return(
        <form onSubmit={handleForm}>
            <input type="text" placeholder="Write something" />
            <button>Submit</button>
        </form>
    )
}