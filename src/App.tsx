import React, { useState } from 'react';
import { Form, List } from './components/Repos';


function App() {
  const [data, setData] = useState<any[]>([]);
  return (
    <div>
      <h1>Search Repos</h1>
      <Form setData={setData} />
      <List data={data} />
    </div>
  );
}

export default App;
