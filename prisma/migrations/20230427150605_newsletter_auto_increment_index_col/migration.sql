-- AlterTable
CREATE SEQUENCE newsletter_index_seq;
ALTER TABLE "Newsletter" ALTER COLUMN "index" SET DEFAULT nextval('newsletter_index_seq');
ALTER SEQUENCE newsletter_index_seq OWNED BY "Newsletter"."index";
