import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("RECIBIDO:", body);

  const { data, error } = await supabase
    .from("configuracion")
    .update({
      intereses: Number(body.interes),
    })
    .eq("identificación", 1)
    .select();

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return NextResponse.json({
    data,
    error,
  });
}