import api from "./api";

export async function autenticar(email, senha) {
  const response = await api.get(`/usuarios?email=${email}`);

  const usuario = response.data[0];

  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  if (usuario.senha !== senha) {
    throw new Error("Senha inválida");
  }

  const token = btoa(`${usuario.email}:${Date.now()}`);

  return {
    usuario,
    token,
  };
}

