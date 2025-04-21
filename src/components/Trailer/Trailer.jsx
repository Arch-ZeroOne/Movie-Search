import React, { useEffect } from "react";
import {
  useCurrentTrailer,
  useVisibility,
} from "../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
function Trailer({ trailer }) {
  //!Global state that handles the visibility of the embedded youtube video
  const { setVisible } = useVisibility();
  //! Global state that handles if the resulting array result has content if yes it has available trailers, if not there is no available trailer
  const { hastrailer } = useCurrentTrailer();

  //! Takes on the embedded video
  const trailer_key = `https://www.youtube.com/embed/${trailer}`;

  //! Closes the modal using the exit icon
  const changeVisibility = () => {
    setVisible(false);
  };

  //! Triggers when the hasTrailer global state is fale
  if (!hastrailer) {
    //! Fires the modal
    Swal.fire({
      title: "No trailer found",
      text: "No trailer is available for this movie",
      icon: "error",
    });
  }

  //! Returns the dynamic youtube video using iframe
  return (
    <>
      {hastrailer && (
        <div className="flex absolute top-10  flex-col w-[80%]">
          <i
            className=" fa-solid fa-right-from-bracket text-3xl cursor-pointer text-red-600 self-end hover:opacity-50"
            onClick={changeVisibility}
          ></i>

          <iframe
            src={trailer_key}
            allowFullScreen
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className="w-full h-100 md:h-130"
          ></iframe>
        </div>
      )}
    </>
  );
}

export default Trailer;
