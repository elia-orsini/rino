import { createClient } from "./supabase/client";

export default async function getCafes() {
  const supabase = createClient();

  const { data: cafes } = await supabase.from("cafes").select("*");

  if (cafes?.length) {
    return cafes;
  }

  return undefined;
}
