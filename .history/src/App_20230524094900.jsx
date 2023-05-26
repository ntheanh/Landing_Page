import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";

function App() {
  return (
    <div className="font-sora h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <NavBar />
      <Slogan />
    </div>
  );
}

export default App;
