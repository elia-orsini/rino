import { createClient } from "./supabase/client";

export default async function getCurrentUser() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  const currentUser = data.user!;

  return currentUser;
}
