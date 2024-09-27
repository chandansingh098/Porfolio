// \src\app\components\Students\Students.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import students from '../StudentData/StudentData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(students);
}
