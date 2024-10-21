import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const user = await prisma.user.findUnique({
          where: { id: id as string },
        });
        if (!user) return res.status(404).json({ message: 'User not found' });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch user' });
      }

    case 'PUT':
      try {
        const { email, name } = req.body;
        const updatedUser = await prisma.user.update({
          where: { id: id as string },
          data: { email, name },
        });
        return res.status(200).json(updatedUser);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to update user' });
      }

    case 'DELETE':
      try {
        await prisma.user.delete({
          where: { id: id as string },
        });
        return res.status(204).end();
      } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user' });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
