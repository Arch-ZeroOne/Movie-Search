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

  //! Triggers when the hasTrailer global state is fale
  if (!hastrailer) {
    //! Fires the modal
    Swal.fire({
      title: "No trailer found",
      text: "No trailer is available for this movie",
      icon: "error",
    });

    //! Hides the embedded youtube video
    setVisible(false);
  }

  //! Closes the modal using the exit icon
  const changeVisibility = () => {
    setVisible(false);
  };

  //! Returns the dynamic youtube video using iframe
  return (
    <>
      {hastrailer && (
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
      )}
    </>
  );
}

export default Trailer;
