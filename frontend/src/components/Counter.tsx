import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);

  function tambah() {
    setCounter(counter + 1);
  }

  function kurang() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
    </>
  );
}
