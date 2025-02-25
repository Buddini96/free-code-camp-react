import { BiWorld } from "react-icons/bi";

function Header() {
  return (
    <div className="w-full bg-red-500 ">
      <div className="p-5 flex text-center justify-center items-center gap-3">
        <BiWorld className="text-white w-6 h-6" />
        <h1 className="text-center text-white font-bold text-lg">My Travel Journal</h1>
      </div>
    </div>
  );
}

export default Header;
