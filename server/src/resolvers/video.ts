import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    videos: async () => {
      return prisma.video.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
    },
    video: async (_, { id }) => {
      return prisma.video.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createVideo: async (_, { title, description, youtubeUrl }) => {
      return prisma.video.create({
        data: {
          title,
          description,
          youtubeUrl,
        },
      });
    },
    updateVideo: async (_, { id, title, description, youtubeUrl }) => {
      return prisma.video.update({
        where: { id },
        data: {
          title,
          description,
          youtubeUrl,
        },
      });
    },
    deleteVideo: async (_, { id }) => {
      await prisma.video.delete({
        where: { id },
      });
      return true;
    },
  },
}; 