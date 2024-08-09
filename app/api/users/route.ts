import { prisma } from '@/prisma/prisma-client';
import { NextResponse, NextRequest } from 'next/server';
export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({
    message: users,
  });
}
export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const newUser = await prisma.user.create({
    data,
  });


  return NextResponse.json({
    message: 'Пользователь успешно создан!',
  });
}
