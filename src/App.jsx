import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
      <footer className="text-center font-medium text-black-300 pt-10">
        Made by Zaid with 💛 @2023
      </footer>
    </main>
  );
}

export default App;
