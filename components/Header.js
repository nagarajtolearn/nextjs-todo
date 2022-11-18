import React, { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className=" sticky top-0 w-full left-0 flex justify-between items-center p-4 border-b-2 bg-slate-900 select-none">
        <h1 className="text-sm sm:text-2xl lg:text-4xl text-white">
          ToDO List
        </h1>
        <i
          onClick={() => setOpenModal(true)}
          className="fa-solid fa-user text-sm sm:text-2xl lg:text-4xl cursor-pointer text-white duration-300 hover:opacity-40"
        ></i>
      </div>
    </>
  );
};

export default Header;
