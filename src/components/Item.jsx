export default function Item({
  id,
  description,
  packed,
  quantity,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li className="flex items-center text-2xl text-peach">
      <input
        type="checkbox"
        className="mr-2 h-5 w-5 accent-tangelo"
        value={packed}
        onChange={() => onToggleItem(id)}
      />
      <span className={packed ? "line-through" : ""}>
        {quantity} {description}
      </span>
      <button className="ml-2 text-base" onClick={() => onDeleteItem(id)}>
        ❌
      </button>
    </li>
  );
}
