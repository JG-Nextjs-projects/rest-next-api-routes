import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET /api/filterTags?tag=:searchString
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tag } = req.query;
  const resultTags = await prisma.book.findMany({
    where: {
      OR: [
        {
          tags: { contains: tag },
        },
      ],
    },
  });
  res.json(resultTags);
}
