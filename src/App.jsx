import { useState } from 'react';
import datas from './data.js';
import Card from './components/Card.jsx';
function App() {
  let [data] = useState(datas);
  console.log(data);
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="flex flex-col max-w-[200px]">
        {data.map((data, index) => {
          return <Card data={data} key={index} />;
        })}
      </section>
    </main>
  );
}

export default App;
