-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('ON_GOING', 'COMPLETED');

-- CreateEnum
CREATE TYPE "BookType" AS ENUM ('COMIC', 'NOVEL');

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "names" TEXT[],
    "description" TEXT NOT NULL,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "follow_count" INTEGER NOT NULL DEFAULT 0,
    "release_date" INTEGER NOT NULL,
    "updated_date" INTEGER NOT NULL,
    "author_id" INTEGER,
    "genres" INTEGER[],
    "status" "BookStatus" NOT NULL,
    "type" "BookType" NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "images" TEXT[],
    "image_indexes" INTEGER[],

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
