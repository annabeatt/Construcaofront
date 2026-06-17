import api from "./api";

function getToken() {
  const auth = JSON.parse(
    localStorage.getItem("auth")
  );

  return auth?.token;
}

export async function listarRequerimentos() {
  const token = getToken();

  if (!token) {
    throw {
      status: 401,
      message: "Não autorizado",
    };
  }

  return api.get("/requerimentos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function cadastrarRequerimento(
  requerimento
) {
  const token = getToken();

  if (!token) {
    throw {
      status: 401,
      message: "Não autorizado",
    };
  }

  return api.post(
    "/requerimentos",
    requerimento,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}