import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { itemList } from "./data";

function App() {
  const [items, setItems] = useState([]);
  // console.log(items);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleToggleItem = (id) => {
    console.log(id);
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i)),
    );
    console.log(items);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((i) => i.id !== id));
  };

  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
