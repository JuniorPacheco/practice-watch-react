import React, { useEffect, useState } from 'react'

const Watch = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Watch