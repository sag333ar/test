import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.hits);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <main>
        <h3>Users</h3>
        {data && data.map((n, i) => <p key={i}>{n.title}</p>)}
      </main>
    </div>
  );
}

export default App;
