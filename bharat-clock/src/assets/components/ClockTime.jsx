function ClockTime(){
  
  let time = new Date();

  const textStyle = {
    display:'inline-block',
    fontSize:'1.2rem',
    border:'3px solid black',
    padding:'5px',
  };

  return <p className="time border" style={textStyle}>Current Time is : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>

}

export default ClockTime;