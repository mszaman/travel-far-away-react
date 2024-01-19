export default function Item() {
  return (
    <li className="text-peach flex items-center text-2xl">
      <input type="checkbox" className="accent-tangelo mr-2 h-5 w-5" />
      <span className="line-through">1 Item</span>
      <button>❌</button>
    </li>
  );
}
