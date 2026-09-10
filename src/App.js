import { useState } from "react";
import { useStore } from "./store";

function App() {
  const [name, setName] = useState("");

  const names = useStore((state) => state.names);
  const addName = useStore((state) => state.addName);

  function add() {
    if (name.trim() !== "") {
      addName(name);
      setName("");
    }
  }

  return (
    <div>
      <h1>Список имён</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />

      <button onClick={add}>Добавить</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;