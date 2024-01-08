import { Express, Request, Response } from "express";

export async function registerUser(req: Request, res: Response) {
  res.status(200).json({ staus: "successful" });
}
