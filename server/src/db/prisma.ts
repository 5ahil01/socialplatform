import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

//database connected
async function main() {
  await prisma.$connect();
  console.log("database connected");
}
main();

export default prisma;
