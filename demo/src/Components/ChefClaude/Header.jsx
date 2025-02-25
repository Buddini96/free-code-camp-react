import chefLogo from '../../assets/images/chef.png'

function Header() {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-center gap-3 p-3 shadow-md">
        <img src={chefLogo} className="w-10 h-10" />
        <h1 className="font-bold text-2xl">Chef Claude</h1>
      </div>
    </div>
  );
}

export default Header