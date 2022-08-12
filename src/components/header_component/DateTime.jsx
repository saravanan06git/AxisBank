import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='datediv'>
            <p className='datep fw-bold m-0 px-2 rounded-pill shadow'> Time : {date.toLocaleTimeString()}</p>
            <p className='datep fw-bold m-0 px-2 rounded-pill mt-2 shadow'> Date : {date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime