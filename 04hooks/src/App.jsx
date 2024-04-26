import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const PasswordRef = useRef(null);
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [NumberAllow, setNumberAllow] = useState(false);
  const [CharatersAllow, setCharatersAllow] = useState(false);

  const PasswordGenerator = useCallback(() => {
    //user rrf

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllow) str += "0123456789";
    if (CharatersAllow) str += "!@#$&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, NumberAllow, CharatersAllow, setPassword]);

  useEffect(() => {
    console.log(length, NumberAllow, CharatersAllow, "useEffect");
    PasswordGenerator();
  }, [length, NumberAllow, CharatersAllow, PasswordGenerator]);

  const CopyPWD = useCallback(() => {
    console.log(PasswordRef.current);
    PasswordRef.current.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={PasswordRef}
        />
        <button
          onClick={CopyPWD}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-center gap-x-1">
        <div className="flex items-center gap-x-1">
          <input
            id="Length"
            className="cursor-pointer"
            type="range"
            name=""
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(parseInt(e.target.value, 10));
            }}
          />
          <label htmlFor="Length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={NumberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={CharatersAllow}
            id="Charater"
            onChange={() => {
              setCharatersAllow((prev) => !prev);
            }}
          />
          <label htmlFor="Charater">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
