import React, { useState } from 'react'

function Replies(props) {
    const initState=0;
    let [likes, setLikes] = useState(initState);
    function handleLikes(){
        setLikes(likes+=1);
    };

        return (
            <div className="Reply mb2 pt2 pb4 ph3 bg-orange w5 ">
                <p className="mt2 f3 white">{props.comment}</p>
                <button className="pa2 pointer" onClick={handleLikes}>{likes} Likes</button>
            </div>
        )
  
};

export default Replies