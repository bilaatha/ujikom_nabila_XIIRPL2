import { Nav, React } from "../export";

const LayoutForm = ({ children, className, align }) => {
  return (
    <div className={`flex flex-col p-0 md:p-5 h-screen ${className}`}>
      <Nav />
      <div className={`w-full h-full relative flex justify-center flex-col px-10 pt-20 md:pt-0 md:pl-0 pb-10 ${align}`}>
        {children}
      </div>
    </div>
  );
};

export default LayoutForm;
