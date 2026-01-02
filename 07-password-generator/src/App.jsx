import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    const nums = "1234567890";
    const chars = "!@$%%^&*()";

    if (isNumAllowed) {
      str += nums;
    }
    if (isCharAllowed) str += chars;

    let pass = "";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, isCharAllowed, isNumAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumAllowed, isCharAllowed]);

  const handleCopyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="min-h-screen flex pt-24 justify-center items-start">
        <div className="w-full max-w-xl bg-gray-200 p-3 rounded-xl">
          <h1 className="text-4xl text-center mb-5">Password Generator</h1>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              className="outline-1 w-full "
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button onClick={handleCopyPassword}>Copy</button>
          </div>
          <div className="flex gap-4">
            <div>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={isNumAllowed}
                onChange={() => {
                  setIsNumAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={isCharAllowed}
                onChange={() => {
                  setIsCharAllowed((prev) => !prev);
                }}
              />
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
