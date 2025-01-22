import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/')
      .then(response => {
        // Check the response status and content type
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('Response:', response); // Log the raw response for inspection
        return response.text(); // Use response.text() to check the raw response first
      })
      .then(text => {
        console.log('Raw text:', text);
        try {
          const jsonData = JSON.parse(text); // Manually parse JSON
          console.log('Parsed JSON:', jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <>
      {/* Render UI components here */}
    </>
  );
}

export default App;
