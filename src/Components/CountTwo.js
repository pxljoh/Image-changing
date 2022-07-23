import React, { useEffect, useState } from 'react'

function CountTwo() {
  const [items, setItems] = useState([])

  const addItems = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  };
    useEffect(()=>{
      console.log("Item added")
    },[items])
  return (
    <div>
      <button onClick={addItems}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={items.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default CountTwo;