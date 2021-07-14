import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://api.github.com/search/users?q=sagar")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response.items)
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <h3>Users</h3>
        {data && data.map((user) => (
          <div key={user.login}>
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.login}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
