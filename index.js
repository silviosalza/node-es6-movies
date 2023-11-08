
//array di movie e serie tv
const catalogoMedia = [
    {
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      type: "movie"
    },
    {
      title: "Stranger Things",
      year: 2016,
      genre: "Drama, Fantasy, Horror",
      rating: 8.7,
      type: "tv",
      seasons: 3
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      rating: 9.3,
      type: "movie"
    },
    {
      title: "Breaking Bad",
      year: 2008,
      genre: "Crime, Drama, Thriller",
      rating: 9.5,
      type: "tv",
      seasons: 5
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: "Action, Crime, Drama",
      rating: 9.0,
      type: "movie"
    },
    {
      title: "Friends",
      year: 1994,
      genre: "Comedy, Romance",
      rating: 8.9,
      type: "tv",
      seasons: 10
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime, Drama",
      rating: 8.9,
      type: "movie"
    },
    {
      title: "Game of Thrones",
      year: 2011,
      genre: "Action, Adventure, Drama",
      rating: 9.2,
      type: "tv",
      seasons: 8
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: "Action, Sci-Fi",
      rating: 8.7,
      type: "movie"
    },
    {
      title: "Stranger Than Fiction",
      year: 2006,
      genre: "Comedy, Drama, Fantasy",
      rating: 7.6,
      type: "movie"
    }
  ];
// CLASSI

  class Movie{
    title
    year
    genre
    rating
    type

    constructor(title,year,genre,rating,type){
        this.title = title
        this.year = year
        this.genre = genre
        this.rating = rating
        this.type = type

    }
  }

  class TVSeries extends Movie{


  }


  //TEST

  const movie1 = new Movie("LaLaLand", 2018, "Romance", 9.2, "movie")
  console.log(movie1);