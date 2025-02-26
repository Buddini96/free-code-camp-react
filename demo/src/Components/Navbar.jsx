import { Link } from "react-router-dom";

function Navbar() {
    const navLinks = [
      { name: "Travel Journal", path: "/" },
      { name: "Chef Claude", path: "/chef" },
      { name: "User Contact", path: "/user" },
    ];

  return (
    <div className="w-full bg-blue-950 ">
      <div className="p-5 flex text-center justify-center items-center gap-5">
        {navLinks.map((links) => (
          <Link key={links.name} to={links.path}>
            <h1 className="text-center text-white font-bold text-lg">{links.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar