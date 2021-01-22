import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function returnRes(req: Request, res: Response) {
  const user = createUser({
    email:'alex@email.com',
    password: 'alex123',
    techs: [
      'ReactJS',
      'NodeJS',
      { title: 'Javascript', experience: 100 },
    ]
  });

  return res.json(user);
};