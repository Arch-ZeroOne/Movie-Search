const accessToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY";

export async function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    "https://api.themoviedb.org/3/discover/movie",
    options
  );

  if (request.ok) {
    const convert = await request.json();
    return convert;
  }
}
export async function searchMovie(query) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  if (request.ok) {
    return await request.json();
  }
}

export async function getTopRated() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );

  if (request.ok) {
    const convert = await request.json();
    return convert;
  }
}

export async function getUpcoming() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  );

  if (request.ok) {
    const convert = await request.json();
    return convert;
  }
}

export async function getTvShows() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    options
  );

  if (request.ok) {
    const convert = await request.json();
    return convert;
  }
}

export async function searchTv(query) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  if (request.ok) {
    return await request.json();
  }
}

export async function getMovieById(movie_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}

export async function getTvShowById(show_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${show_id}`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}
export async function getMovieTrailer(movie_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}

export async function getTvShowTrailer(tv_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${tv_id}/videos`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}

export async function getMovieCast(movie_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}

export async function getTvCasts(series_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${series_id}/credits`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}

export async function getSimilarMovies(movie_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/similar`,
    options
  );
  if (request.ok) {
    return await request.json();
  }
}

export async function getSimilarTv(tv_id) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: accessToken,
    },
  };

  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${tv_id}/similar`,
    options
  );

  if (request.ok) {
    return await request.json();
  }
}
