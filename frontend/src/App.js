import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost/api')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: Could not fetch message'));
  }, []);

  return (
    <div>
      <h1>React + Express + WAF</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
