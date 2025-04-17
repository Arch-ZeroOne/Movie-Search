import React from "react";
import { useVisibility } from "../ContextProvider/ContextProvider";
function Trailer({ id }) {
  const { setVisible } = useVisibility();
  const trailer_key = `https://www.youtube.com/embed/${id}`;

  const changeVisibility = () => {
    setVisible(false);
  };
  return (
    <div className="w-[80%] h-300 flex absolute top-10 right-30 flex-col ">
      <i
        className=" fa-solid fa-right-from-bracket text-3xl cursor-pointer text-red-600 self-end hover:opacity-50"
        onClick={changeVisibility}
      ></i>
      <iframe
        src={trailer_key}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-100 w-full "
      ></iframe>
    </div>
  );
}

export default Trailer;
