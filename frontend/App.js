// React frontend entry point

import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {

  const [notices, setNotices] = useState([]);

  // Fetch notices from backend

  useEffect(() => {

    axios.get('/api/notices')

      .then(res => setNotices(res.data))

      .catch(err => console.error(err));

  }, []);

  return (
<div>
<h1>📢 Digital Notice Board</h1>

      {notices.map((notice, idx) => (
<div key={idx}>
<h3>{notice.title}</h3>
<p>{notice.content}</p>
</div>

      ))}
</div>

  );

}

export default App;
 
