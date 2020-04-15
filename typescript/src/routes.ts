import { Request, Response } from 'express';

export function returnRes(req: Request, res: Response) {
  return res.json({ ok: true });
};