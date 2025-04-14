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
    "https://api.themoviedb.org/3/discover/tv",
    options
  );

  if (request.ok) {
    const convert = await request.json();
    return convert;
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
