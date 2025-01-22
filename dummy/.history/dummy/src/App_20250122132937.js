import { response } from "express";
import React, { useEffect, useState } from "react";


function App() {
  const [data, setdata] = useState([{}]);

  useEffect(() => {
    fetch('/')
     .then(response => response.json())
     .then(console.log(response));
  }, []);
  return (
    <>

    </>
  );
}

export default App;
