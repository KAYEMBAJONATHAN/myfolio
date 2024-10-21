import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, name, password } = req.body;
        const newUser = await prisma.user.create({
          data: {
            email,
            name,
            password,
          },
        });
        return res.status(201).json(newUser);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to create user' });
      }

    // Get all users
    case 'GET':
      try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
      } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch users' });
      }

    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
