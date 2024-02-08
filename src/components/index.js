import React, { useState } from 'react'

function Index() {
    const[isPara,setIsPara]=useState('')

  return (
    <div style={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'30px'}}>
      <input placeholder='Enter para' onChange={(e)=>setIsPara(e.target.value)} />
  
        <h3>
            {isPara.split('').reverse()}
        </h3>
    </div>
  )
}

export default Index
