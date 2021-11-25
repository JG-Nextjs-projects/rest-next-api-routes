import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const author = await prisma.author.findMany({
    where: {
      id: Number(id)
    }
  });
  res.json(author);
}
