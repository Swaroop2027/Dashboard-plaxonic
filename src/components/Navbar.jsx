const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 h-16">
        <div className="flex items-center">
          <img
            src="https://www.evernote.design/assets/images/tablericons.jpg"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <p className="font-bold text-2xl">tabler</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="border-2 border-blue-500 border-solid rounded text-blue-500 p-1">
            Source code
          </button>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
            alt=""
            className="h-[20px] w-[20px]"
          />

          <div className="flex items-center gap-2">
            <img
              src="https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg"
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div>
              <p>Jane Pearson</p>
              <p>Administrator</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
