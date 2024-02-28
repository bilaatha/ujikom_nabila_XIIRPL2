import { Nav, React, Tab } from "../export";

const LayoutPage = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="p-3 lg:p-10 h-screen w-full">{children}</div>
    </div>
  );
};

export default LayoutPage;
