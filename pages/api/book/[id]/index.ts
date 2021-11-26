import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const book = await prisma.book.findMany({
    where: {
      id: Number(id)
    }
  });
  res.json(book);
}
