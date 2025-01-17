import { createClient } from "./supabase/client";

export default async function getDiaryEntries() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const currentUser = data.user!;

  const { data: entries, error } = await supabase
    .from("diary_entries")
    .select("*, cafe:cafe(name)")
    .eq("user", currentUser.id);

  if (entries?.length) {
    return entries;
  }

  return undefined;
}
