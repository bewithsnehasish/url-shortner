import supabase from "./supabase";

export async function longin(email, password) {
  const { data, error } = await supabase.auth.signIn({ email, password });
  if (error) throw new Error(error.message);
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
