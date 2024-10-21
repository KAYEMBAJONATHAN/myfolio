import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { title, description, link, userId } = req.body;
        const newProject = await prisma.project.create({
          data: {
            title,
            description,
            link,
            user: { connect: { id: userId } },
          },
        });
        return res.status(201).json(newProject);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to create project' });
      }

    case 'GET':
      try {
        const projects = await prisma.project.findMany();
        return res.status(200).json(projects);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch projects' });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
