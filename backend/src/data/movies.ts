import { Movie } from "../types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal past.",
    image_url: "/public/movies/inception.jpg",
    genre: "Science Fiction",
  },
  {
    id: 2,
    title: "The Dark Knight",
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    image_url: "/public/movies/dark-knight.jpg",
    genre: "Action",
  },
  {
    id: 3,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image_url: "/public/movies/interstellar.jpg",
    genre: "Adventure",
  },
  {
    id: 4,
    title: "La La Land",
    description:
      "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    image_url: "/public/movies/la-la-land.jpg",
    genre: "Romance",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of decency.",
    image_url: "/public/movies/shawshank.jpg",
    genre: "Drama",
  }
];