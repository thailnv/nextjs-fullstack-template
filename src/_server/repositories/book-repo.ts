import db from '_server/db';

const findByID = async (id: number) => {
  const result = await db().book.findFirst({
    where: { id: id },
  });

  return result;
};

const bookRepo = {
  findByID,
};

export default bookRepo;
