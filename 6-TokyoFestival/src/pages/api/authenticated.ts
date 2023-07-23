import { verify } from 'jsonwebtoken';
import { secret } from '../../../api/secret';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const authenticated = (fn: NextApiHandler) => async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    const authToken = req.cookies.auth; // Extract the JWT token from the auth cookie
    
    if (!authToken) {
      res.status(401).json({ message: 'Não autenticado' });
      return;
    }
  
    try {
      const decoded = verify(authToken, secret); // Verify the JWT token
  
      if (decoded) {
        return await fn(req, res);
      }
    } catch (error) {
      res.status(401).json({ message: 'Não autenticado' });
    }
  };

  export default authenticated;