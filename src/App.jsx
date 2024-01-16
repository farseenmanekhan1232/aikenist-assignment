import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [layout, setLayout] = useState(1);
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  useEffect(() => {
    setLayout(x * y);
  }, [x, y]);

  return (
    <>
      <input
        className="border "
        type="number"
        onChange={(e) => setX(e.target.value)}
      />
      <input
        className="border "
        type="number"
        onChange={(e) => setY(e.target.value)}
      />
      <div className={`grid grid-cols-${x} grid-rows-${y}`}>
        {Array.from({ length: layout }, (_, i) => i).map((_, index) => {
          return (
            <div className="flex items-center justify-center">
              <img
                src="/images/image.jpg"
                alt=""
                key={index}
                className="w-full h-auto object-cover"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
