import Calculator from "./components/calculator.jsx";

function App() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-blue-500 font-extrabold mb-4 text-2xl">Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
