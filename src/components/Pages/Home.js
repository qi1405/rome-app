import loading from "../../UI/loading.svg";
import LinkStyle from "./pageComponents/LinkStyle.module.css";

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
            This site is under development and changes will occur eventually.
          </p>
          <p>
            You can check the finished demo site below.
          </p>
          <a
            className={LinkStyle}
            style={{textTransform: "uppercase"}}
            href="https://jpsols.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo app
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
