import Item from "./Item";

export default function PackingList() {
  return (
    <div className="bg-liver flex flex-col justify-between px-10 py-10">
      <ul className="mb-10 flex flex-wrap gap-5">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
      <div className="text-sm font-bold">
        <select
          name=""
          id=""
          className="bg-peach mr-4 rounded-full px-2 py-2 uppercase"
        >
          <option value="">sort by input order</option>
          <option value="">sort by description</option>
          <option value="">sort by packed list</option>
        </select>
        <button className="bg-peach rounded-full px-4 py-2 uppercase">
          clear list
        </button>
      </div>
    </div>
  );
}
