import React from "react";

function Trailer({ id }) {
  const trailer_key = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="w-[80%] h-100 flex absolute top-10 right-30 ">
      <iframe
        src={trailer_key}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-120 w-[90vw] "
      ></iframe>
    </div>
  );
}

export default Trailer;
