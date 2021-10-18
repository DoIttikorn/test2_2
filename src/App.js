import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [api, setApi] = useState([]);
  const [input, setInput] = useState('');
  const api_fetch = () => {
    fetch('https://api.publicapis.org/categories')
      .then(res => res.json())
      .then(data => {
        setApi(data);
      })
  }
  const filter_api = (event) => {
    let value = event.target.value;
    setInput(value);
    let result = [];
    result = api.filter((data) => { return data.search(value) != -1; });
    setApi(result);
  }
  useEffect(() => { api_fetch() }, [])
  useEffect(() => { if (input === '') { api_fetch() } }, [input])
  return (
    <div className="App">
      <div>
        <h1>Hello World</h1>
        <input type="text"
          // @ts-ignore
          onChange={filter_api} />
        <div>
          {api.map((data, index) => {
            return <p key={index}>{data}</p>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
