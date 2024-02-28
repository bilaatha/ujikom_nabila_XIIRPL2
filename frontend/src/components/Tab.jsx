import { Link, React } from "../export";

const Tab = () => {
  const tab = [
    {
      icon: "/pp.png",
      path: "/profile",
    },
    {
      icon: "/Planet.svg",
      path: "/",
    },
    {
      icon: "/Heart-white.svg",
      path: "/like",
    },
  ];
  return (
    <div className="tab">
      {tab.map((ele, i) => (
        <Link key={i} to={ele.path}>
          <img src={ele.icon} alt="" className="icon-8" />
        </Link>
      ))}
      <Link to={"/posting"} className="tab-btn">
        <img src="/upload.svg" alt="" className="icon-5" />
        <p className="hidden lg:block">Buat</p>
      </Link>
    </div>
  );
};

export default Tab;
