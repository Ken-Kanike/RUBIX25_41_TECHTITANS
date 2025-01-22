import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/members')
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
      });
       // Log the data instead of the response
  }, [data]);

  return (
    <>
    <p>{data.member.toString()}</p>
      {/* Add any UI components here if necessary */}
    </>
  );
}

export default App;
