'use server';
import prisma from '@/lib/db';

export async function handleDummyData(data: { message: String }) {
  try {
    await prisma.testTable.create({
      data: {
        ...data,
      },
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
