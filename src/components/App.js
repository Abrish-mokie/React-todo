import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    // console.log(items);
    if (items.length !== 0) {
      const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
      );
      if (confirmed) setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        onToggleItems={handleToggleItem}
        items={items}
        onDeleteItem={handleDeletItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
