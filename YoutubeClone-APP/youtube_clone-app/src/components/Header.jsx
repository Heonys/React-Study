import React, { useEffect, useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();

  useEffect(() => setText(keyword || ""), [keyword]);

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    navigate(`/video/${text}`);
  };

  return (
    <div className=" pl-5 w-full pb-3 border-b-2 border-[#555555] flex justify-center  my-2 ">
      <Link className=" flex items-center" to="/">
        <IoLogoYoutube className="text-brand" size="30" />
        <p className="text-white ml-2 font-bold text-2xl">YouTube</p>
      </Link>

      <form action="" onSubmit={onSubmit} className="flex w-full justify-center">
        <input
          className="w-7/12 outline-none bg-black text-gray-50"
          placeholder="search..."
          type="text"
          value={text}
          onChange={onChange}
        />

        <button className="bg-zinc-600 px-2">
          <AiOutlineSearch color="white" size={20} />
        </button>
      </form>
    </div>
  );
};

export default Header;
