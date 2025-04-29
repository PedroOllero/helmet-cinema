import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.movie.createMany({
    data: [
        {
            id: 3,
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            imageUrl: "/assets/movies/interstellar.jpg",
            genre: "Adventure",
          },
          {
            id: 4,
            title: "La La Land",
            description: "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
            imageUrl: "/assets/movies/la-la-land.jpg",
            genre: "Romance",
          },
          {
            id: 5,
            title: "The Shawshank Redemption",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of decency.",
            imageUrl: "/assets/movies/shawshank.jpg",
            genre: "Drama",
          },
          {
            id: 6,
            title: "Avatar",
            description: "A paraplegic Marine dispatched to Pandora becomes torn between following orders and protecting an alien civilization.",
            imageUrl: "/assets/movies/avatar.jpg",
            genre: "Fantasy",
          },
          {
            id: 7,
            title: "Pulp Fiction",
            description: "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.",
            imageUrl: "/assets/movies/pulp-fiction.jpg",
            genre: "Crime",
          },
          {
            id: 8,
            title: "The Godfather",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            imageUrl: "/assets/movies/godfather.jpg",
            genre: "Crime",
          },
          {
            id: 9,
            title: "Dune",
            description: "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis.",
            imageUrl: "/assets/movies/dune.jpg",
            genre: "Science Fiction",
          },
          {
            id: 10,
            title: "Spider-Man: No Way Home",
            description: "Peter Parker seeks help from Doctor Strange when his identity as Spider-Man is revealed, leading to multiverse chaos.",
            imageUrl: "/assets/movies/spiderman-no-way-home.jpg",
            genre: "Action",
          }
    ]
  });
}

main()
  .then(() => {
    console.log("✅ Datos insertados");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });