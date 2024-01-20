import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  if (!items) return;

  return (
    <div className="flex flex-col justify-between bg-liver px-10 py-10">
      <ul className="mb-10 flex flex-wrap gap-5">
        {items.map((i) => (
          <Item
            key={i.id}
            {...i}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="text-sm font-bold">
        <select
          name=""
          id=""
          className="mb-5 mr-4 rounded-full bg-peach px-2 py-2 uppercase"
        >
          <option value="">sort by input order</option>
          <option value="">sort by description</option>
          <option value="">sort by packed list</option>
        </select>
        <button
          className="rounded-full bg-peach px-4 py-2 uppercase"
          onClick={onClearList}
        >
          clear list
        </button>
      </div>
    </div>
  );
}
