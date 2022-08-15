import React, { useEffect } from "react";
import { useState } from "react";

const UserImg = () => {
  const [postImg, setPostImg] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=1")
      .then((res) => res.json())
      .then((result) => {
        setPostImg(result);
      });
  }, []);
  return (
    <ul>
      <li>
        {postImg.map((items) => (
          <img src={items.thumbnailUrl} alt="userimg" />
        ))}
      </li>
      <div></div>
    </ul>
  );
};

export default UserImg;
