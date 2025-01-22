import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null); // Start with null to signify "no data yet"
  
  useEffect(() => {
    fetch('http://127.0.0.1:5000/members')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data); // This will log {"members": ["me1", "me2"]}
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  if (!data) {
    // While data is being fetched, display a loading message
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Safely access and render the data */}
      <p>{data.members.join(", ")}</p>
    </div>
  );
}

export default App;
