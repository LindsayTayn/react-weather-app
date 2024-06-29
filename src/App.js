import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project is created by Lindsay Tayenne and is open sourced on {""}
          <a
            href="https://github.com/LindsayTayn/react-weather-app"
            target="blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
