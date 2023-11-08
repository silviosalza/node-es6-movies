
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
      genre: "Fantasy",
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
      genre: "Thriller",
      rating: 9.5,
      type: "tv",
      seasons: 5
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
      type: "movie"
    },
    {
      title: "Friends",
      year: 1994,
      genre: "Comedy",
      rating: 8.9,
      type: "tv",
      seasons: 10
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime",
      rating: 8.9,
      type: "movie"
    },
    {
      title: "Game of Thrones",
      year: 2011,
      genre: "Action",
      rating: 9.2,
      type: "tv",
      seasons: 8
    },
    {
      title: "The Matrix",
      year: 1999,
      genre: "Action",
      rating: 8.7,
      type: "movie"
    },
    {
      title: "Stranger Than Fiction",
      year: 2006,
      genre: "Comedy",
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

    //METODI
    toString(){
        return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nell'anno ${this.year} ed ha una media voto di ${this.rating}`;
    }



  }

  class TVSeries extends Movie{
    seasons

    constructor (title,year,genre,rating,type,seasons){
        super(title,year,genre,rating,type)
        this.seasons = seasons
    }

    toString(){
        return `${this.title} è un ${this.type} di genere ${this.genre}. E' stato rilasciato nell'anno ${this.year}, per un totale di ${this.seasons} stagioni, ed ha una media voto di ${this.rating}`;
    }


  
  };

let instances = catalogoMedia.map(item =>
    {
        if (item.type === "movie")
        {
            return new Movie(item.title , item.year , item.genre ,item.rating ,item.type )
        }else {
             return new TVSeries(item.title , item.year , item.genre ,item.rating ,item.type , item.seasons)
            
        }
    })

    //FUNZIONI

    function avgRat(array){
        let totalRat = 0;
         array.map(item =>
             {
                 totalRat += item.rating
         });
    return avg = totalRat / array.length}

    function genreList(array){
        let genreArray = [];
        array.map(item =>
            {if (!genreArray.includes(item.genre)){
                genreArray.push(item.genre)
            }     
        });
        return genreArray
        
    }







//TEST

const movie1 = new Movie("LaLaLand", 2018, "Romance", 9.2, "movie")
console.log(movie1.toString());
const tvseries1 = new TVSeries("Initial D", 1998, "Anime", 9.8, "tv", 8)
console.log(tvseries1.toString());

console.log(instances);
console.log("La media voto è " + avgRat(catalogoMedia));
console.log(genreList(catalogoMedia));