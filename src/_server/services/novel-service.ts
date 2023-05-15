import bookRepo from '_server/repositories/book-repo';

const findByID = async (id: number) => {
  return bookRepo.findByID(id);
};

const novelService = {
  findByID,
};

export default novelService;
