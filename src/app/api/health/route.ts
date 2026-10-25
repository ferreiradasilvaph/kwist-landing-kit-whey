import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const produtos = await prisma.produto.count();
  return NextResponse.json({ ok: true, produtos });
}
