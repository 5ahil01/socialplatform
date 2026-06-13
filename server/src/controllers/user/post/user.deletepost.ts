import prisma from "../../../db/prisma";
import { Request, Response } from "express";

const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({ where: { id: id as string } });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await prisma.post.delete({ where: { id: id as string } });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default deletePost;
