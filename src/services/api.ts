import { auth } from "./firebase";

export const sendProtectedRequest = async (dados) => {
  const token = await auth.currentUser?.getIdToken();
  const response = await fetch("https://minhaapi.com/rota", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });

  const result = await response.json();
  return result;
};