import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notices")
      .then((response) => {
        setNotices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching notices:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📢 Digital Notice Board</h1>

      {loading ? (
        <p>Loading notices...</p>
      ) : notices.length === 0 ? (
        <p>No notices available.</p>
      ) : (
        notices.map((notice, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
            }}
          >
            <h3>{notice.title}</h3>
            <p>{notice.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App; 
useEffect(() => {
  axios
    .get("http://localhost:5000/api/notices")
    .then((response) => {
      console.log("DATA RECEIVED:", response.data);
      setNotices(response.data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
}, []);
