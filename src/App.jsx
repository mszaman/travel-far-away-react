function App() {
  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      <h1 className="bg-merigold font-monoton py-10 text-6xl lg:text-[80px]">
        🌴 travel far away 👜
      </h1>
      <div className="bg-tangelo">
        <form className="flex flex-col gap-10 px-16 py-10 lg:mx-auto lg:w-[1140px] lg:flex-row lg:justify-center">
          <p className="text-2xl font-bold">
            What do you need for your 😍 trip?
          </p>
          <div className="mx-auto flex w-60 flex-col items-center gap-5 md:w-4/5 md:flex-row md:justify-center lg:w-1/2">
            <select
              name=""
              id=""
              className="bg-peach w-full rounded-full py-3 indent-2 md:w-60"
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
              className="bg-peach text-liver placeholder:text-taupe w-full rounded-full py-2 indent-4 text-lg md:w-60"
            />
            <button className="bg-aqua w-28 rounded-full py-2 text-lg font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="bg-liver flex flex-col justify-between px-10 py-10">
        <ul className="flex flex-wrap gap-5">
          <li className="text-peach flex items-center text-2xl">
            <input type="checkbox" className="accent-tangelo mr-2 h-5 w-5" />
            <span className="line-through">1 Item</span>
            <button>❌</button>
          </li>
          <li className="text-peach flex items-center text-2xl">
            <input type="checkbox" className="accent-tangelo mr-2 h-5 w-5" />
            <span className="line-through">1 Item</span>
            <button>❌</button>
          </li>
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
      <footer className="bg-aqua py-10 text-2xl font-bold">
        <em>💼 You have X items on your list, and you already packed X(X%)</em>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    </div>
  );
}

export default App;
