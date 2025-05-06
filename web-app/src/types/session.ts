export type Session = {
  id: string;
  time: string;
  movieId: string;

  movie?: {
    id: string;
    title: string;
    description: string;
    genre: string;
    imageUrl: string;
  };
};
