import { createClient } from "./supabase/client";
import { redirect } from "next/navigation";

export default async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/");
}
