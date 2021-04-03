import Logo from "components/Logo";

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full flex overflow-auto bg-white">
      <div className="m-auto">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default Loader;
