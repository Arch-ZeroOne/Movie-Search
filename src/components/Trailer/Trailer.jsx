import React from "react";
import { useVisibility } from "../ContextProvider/ContextProvider";
import { useCurrentKey } from "../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
function Trailer({ id }) {
  const { setVisible } = useVisibility();
  const { setKey } = useCurrentKey();
  const trailer_key = `https://www.youtube.com/embed/${id}`;

  if (!id) {
    Swal.fire({
      title: "No trailer found",
      text: "No trailer is available for this movie",
      icon: "error",
    });

    setVisible(false);
  }

  const changeVisibility = () => {
    setVisible(false);
    setKey("");
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
