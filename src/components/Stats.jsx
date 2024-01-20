export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  if (percentage === 100) {
    return (
      <footer className="bg-aqua py-10 text-2xl font-bold">
        <em>You packed all items. Now you are ready to go ✈️</em>
      </footer>
    );
  }

  return (
    <footer className="bg-aqua py-10 text-2xl font-bold">
      <em>
        {totalItems > 0
          ? `💼 You have ${totalItems} items on your list, and you already packed ${packedItems}(${percentage}%)`
          : `Start adding some items to your packing list 🚀`}
      </em>
    </footer>
  );
}
