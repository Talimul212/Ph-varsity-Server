/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';

const notFound = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    statusCode: 404,
  });
};

export default notFound;
