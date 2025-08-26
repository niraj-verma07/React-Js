import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);

    let styles = {color : "red"}; 

    function toogleLike(){
        setIsLiked(!isLiked);
    }
    return(
        <div>
            <p onClick={toogleLike}>
                {isLiked ? (<i className="fa-solid fa-heart" style={styles}></i>) : (<i className="fa-regular fa-heart"></i>) }
                </p>
        </div>
    )
}