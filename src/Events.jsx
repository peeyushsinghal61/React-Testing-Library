import React from 'react'

const Events = () => {
    const [data, setData] = React.useState("");
    const [buttonData,setButtonData]=React.useState("");
  return (
    <div>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <button onClick={()=>{setButtonData("updated Data")}}>click to update data</button>
        <h1 >{buttonData}</h1>
    </div>
  )
}

export default Events;