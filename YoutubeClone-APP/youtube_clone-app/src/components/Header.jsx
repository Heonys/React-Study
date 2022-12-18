import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div className=" pb-3 border-b-2 border-[#555555] flex justify-center relative my-2 ">
      <div className="absolute left-5 flex items-center" onClick={() => navigate("/")}>
        <IoLogoYoutube color="red" size="30" />
        <p className="text-white ml-2">YouTube</p>
      </div>
      <input className="px-2 w-[400px] mr-2" placeholder="search..." type="text" value={text} onChange={onChange} />
      <AiOutlineSearch color="white" size={30} onClick={e => console.log(e)} />
    </div>
  );
};

export default Header;
