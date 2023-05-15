import services from '_server/services';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (!id) {
    res.status(400).json({
      message: 'Bad request',
    });
  }

  const novel = await services.novel.findByID(Number(id));
  if (!novel) {
    res.status(404).json({
      message: 'Not found',
    });
  }

  res.status(200).json({
    data: novel,
  });
};

export default handler;
