import React, { useState } from 'react';
 
import Reactpip from 'react-picture-in-picture';
 
const CardVideo= () =>{
  const[active, setActive] = useState(false)
  
    return (
      <>
        <Reactpip isActive= {active} >
          <source src=""/>
        </Reactpip>
        {/* <button onClick = {() => setActive(!active)}>Toggle Picture in Picture</button> */}
      </>
    )
  }

export default  CardVideo;