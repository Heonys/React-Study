import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onClick = () => {
    navigate(`/about/${text}`);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>이동</button>
    </div>
  );
};

export default About;
