import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const booksByauthor = await prisma.book.findMany({
    where: {
      authorId: Number(id)
    }
  });
  res.json(booksByauthor);
}
