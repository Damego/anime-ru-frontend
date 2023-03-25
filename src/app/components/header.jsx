export default function Header() {
  return (
    <div className="flex flex-row justify-between bg-white shadow-md h-12">
      <div className="ml-2 self-center">
        <a>Аниме ру</a>
      </div>

      <input
        type={"text"}
        placeholder={"поиск аниме..."}
        name={"search"}
        id={"search"}
        className={
          "w-1/2 rounded-full border-2 border-slate-150 focus:outline-none focus:border-slate-500 h-8 self-center pl-2"
        }
      />

      <div className="mr-2 self-center">
        <a>Вход</a>
      </div>
    </div>
  );
}
