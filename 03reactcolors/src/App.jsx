import { useState } from "react";

function App() {
  const [Color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: Color,
        }}
      >
        <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-xl">
            <button
              className=" outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className=" outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Red
            </button>

            <button
              className=" outline-none px-4 py-1 rounded"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
