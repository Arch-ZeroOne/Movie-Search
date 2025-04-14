import React from "react";

function Trailer({ id }) {
  const trailer_key = `https://www.youtube.com/embed/${id}`;
  return (
    <div className="w-full h-100 ">
      <iframe
        src={trailer_key}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="w-xl absolute h-100 top-0"
      ></iframe>
    </div>
  );
}

export default Trailer;
