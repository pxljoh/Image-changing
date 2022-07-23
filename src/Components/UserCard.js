import React from 'react'
import { useState } from 'react'



function UserCard(props) {
 
  const [BtnText, setBtnText] = useState(false);

  function btnClicked() {
      setBtnText(!BtnText)
  }
  return (
    <div className="card-container user-card mw6 washed-green ph3 pv3 h-50 mr2">
      <div className="poke-pic-name mt4 br5 tc">
        <img className=" mb2 br3 bg-black w5 h5" src={props.img} alt="userImg" />
      </div>
      <div className="card-info tc">
        <h2 className="mb0  tc center w f1">{props.name} </h2>
        <p className="w-50 text-center center f6 tl mt3  ">{props.description}</p>
        <button className="mt5 mb5 pointer " onClick={btnClicked}>{BtnText?"✔":"Catch this Pokemon"}</button>
      </div>
    </div>
  )
}
//user pic     title
//name         description
export default UserCard

/*
state 1 = 'CATCH THIC POKEMON'
state 2 = '✔'


INIT STATE - 0
IF BUTTON PRESS STATE+1 
IF BUTTON PRESS AND STATE =1 INIT STATE
*/