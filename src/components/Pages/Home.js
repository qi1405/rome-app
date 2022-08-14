import loading from "../../UI/loading.svg";

function Home() {
  return (
    <div className="App">
      <header className="header">
        <p>This is the main page!</p>
      </header>
      <div className="container">
        <div>
          <div>
            <img src={loading} className="loading" alt="logo" />
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
