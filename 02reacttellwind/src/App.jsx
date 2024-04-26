import "./App.css";
import Card from "./components/Card";
function App() {
  let Object = {
    name: "Harsh",
    age: 28,
    info: "I'm a developer and working in MERN stack developer",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind</h1>
      <Card title="Harsh" myObject={Object} />
    </>
  );
}

export default App;
