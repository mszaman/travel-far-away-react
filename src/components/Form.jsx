import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPack = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newPack);
    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="bg-tangelo">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 px-16 py-10 lg:mx-auto lg:w-[1140px] lg:flex-row lg:justify-center"
      >
        <p className="text-2xl font-bold">What do you need for your 😍 trip?</p>
        <div className="mx-auto flex w-60 flex-col items-center gap-5 md:w-4/5 md:flex-row md:justify-center lg:w-1/2">
          <select
            name=""
            id=""
            className="w-full rounded-full bg-peach py-3 indent-2 md:w-60"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            className="w-full rounded-full bg-peach py-2 indent-4 text-lg text-liver placeholder:text-taupe md:w-60"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="w-28 rounded-full bg-aqua py-2 text-lg font-bold">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
