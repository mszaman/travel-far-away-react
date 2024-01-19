export default function Form() {
  return (
    <div className="bg-tangelo">
      <form className="flex flex-col gap-10 px-16 py-10 lg:mx-auto lg:w-[1140px] lg:flex-row lg:justify-center">
        <p className="text-2xl font-bold">What do you need for your 😍 trip?</p>
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
  );
}
