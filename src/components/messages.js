import React from 'react'
import Message from './message'

const Messages = ({usermsg}) => {
  // console.log(usermsg)
  return (
    <div style={{}} >
       {usermsg.map((data)=>{
            return(
 <Message 
  text={data.text}
  id={data.id}
 
 
 />
 )
})

}
     
        
       
    </div>
  )
}

export default Messages