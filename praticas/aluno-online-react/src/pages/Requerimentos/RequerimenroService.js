const API_URL = "http://localhost:3000/requerimentos";

export async function listarRequerimentos() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function cadastrarRequerimento(requerimento) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requerimento),
  });

  return await response.json();
}