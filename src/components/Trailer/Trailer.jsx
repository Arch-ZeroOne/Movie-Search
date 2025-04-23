import React, { useEffect } from "react";
import {
  useCurrentTrailer,
  useVisibility,
} from "../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
function Trailer({ trailer }) {
  const { setVisible } = useVisibility();
  const { hastrailer } = useCurrentTrailer();

  // Takes on the embedded video
  const trailer_link = `https://www.youtube.com/embed/${trailer}`;

  // Closes the modal using the exit icon
  const changeVisibility = () => {
    setVisible(false);
  };

  //Triggers when the hasTrailer global state is fale
  if (!hastrailer) {
    Swal.fire({
      title: "No trailer found",
      text: "No trailer is available for this movie",
      icon: "error",
    });
  }

  return (
    <>
      {hastrailer && (
        <div className="h-80   flex absolute top-50 md:top-10   md:h-full flex-col  lg:w-[90%] xl:w-[65%]  w-[80%]">
          <i
            className=" fa-solid fa-right-from-bracket text-3xl cursor-pointer text-red-600 self-end hover:opacity-50 absolute top-3  border-0 "
            onClick={changeVisibility}
          ></i>
          <iframe
            src={trailer_link}
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-100 md:h-130"
          ></iframe>
        </div>
      )}
    </>
  );
}

export default Trailer;
