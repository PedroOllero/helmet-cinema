import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.session.deleteMany();
  await prisma.movie.deleteMany();

  await prisma.movie.createMany({
    data: [
      {
        id: "1",
        title: "El Padrino",
        description: "Drama mafioso sobre la familia Corleone.",
        genre: "Crimen",
        imageUrl: "https://via.placeholder.com/300x400?text=El+Padrino",
      },
      {
        id: "2",
        title: "Interestelar",
        description: "Viaje espacial para salvar la humanidad.",
        genre: "Ciencia Ficción",
        imageUrl: "https://via.placeholder.com/300x400?text=Interestelar",
      },
      {
        id: "3",
        title: "Pulp Fiction",
        description: "Historias entrelazadas de crimen y redención.",
        genre: "Crimen",
        imageUrl: "https://via.placeholder.com/300x400?text=Pulp+Fiction",
      },
      {
        id: "4",
        title: "La La Land",
        description: "Musical moderno en Los Ángeles.",
        genre: "Romance",
        imageUrl: "https://via.placeholder.com/300x400?text=La+La+Land",
      },
      {
        id: "5",
        title: "Matrix",
        description: "Realidad simulada y rebelión tecnológica.",
        genre: "Acción",
        imageUrl: "https://via.placeholder.com/300x400?text=Matrix",
      },
      {
        id: "6",
        title: "Toy Story",
        description: "Juguetes que cobran vida cuando nadie los ve.",
        genre: "Animación",
        imageUrl: "https://via.placeholder.com/300x400?text=Toy+Story",
      },
      {
        id: "7",
        title: "Gladiator",
        description: "Venganza en el Coliseo romano.",
        genre: "Acción",
        imageUrl: "https://via.placeholder.com/300x400?text=Gladiator",
      },
      {
        id: "8",
        title: "Coco",
        description: "Viaje musical al mundo de los muertos.",
        genre: "Animación",
        imageUrl: "https://via.placeholder.com/300x400?text=Coco",
      },
      {
        id: "9",
        title: "Inception",
        description: "Sueños dentro de sueños y robo de ideas.",
        genre: "Thriller",
        imageUrl: "https://via.placeholder.com/300x400?text=Inception",
      },
      {
        id: "10",
        title: "Titanic",
        description: "Tragedia y amor a bordo del famoso barco.",
        genre: "Drama",
        imageUrl: "https://via.placeholder.com/300x400?text=Titanic",
      },
    ],
  });

  const sessions = [
    { time: "12:00", movieId: "1" },
    { time: "15:00", movieId: "1" },
    { time: "18:00", movieId: "2" },
    { time: "21:00", movieId: "3" },
    { time: "16:00", movieId: "4" },
    { time: "20:00", movieId: "5" },
    { time: "14:00", movieId: "6" },
    { time: "17:00", movieId: "7" },
    { time: "19:00", movieId: "8" },
    { time: "22:00", movieId: "9" },
    { time: "23:00", movieId: "10" },
  ];

  for (const session of sessions) {
    await prisma.session.create({ data: session });
  }

  console.log("✅ Seed completado con películas y sesiones.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });