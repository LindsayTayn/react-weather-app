import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <footer>
          {" "}
          This project is coded by Lindsay Tayenne, is open sourced on{" "}
          <a
            href="https://github.com/LindsayTayn/react-weather-app"
            target="blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weather-app-lindsay-tayenne.netlify.app/"
            target="blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
