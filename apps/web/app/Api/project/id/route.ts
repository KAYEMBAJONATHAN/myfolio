import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const project = await prisma.project.findUnique({
          where: { id: id as string },
        });
        if (!project) return res.status(404).json({ message: 'Project not found' });
        return res.status(200).json(project);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch project' });
      }

    case 'PUT':
      try {
        const { title, description, link } = req.body;
        const updatedProject = await prisma.project.update({
          where: { id: id as string },
          data: { title, description, link },
        });
        return res.status(200).json(updatedProject);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to update project' });
      }

    case 'DELETE':
      try {
        await prisma.project.delete({
          where: { id: id as string },
        });
        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ error: 'Failed to delete project' });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
