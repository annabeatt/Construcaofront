import { createContext, useState} from "react";
import { autenticar } from "../services/AuthService";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const auth = localStorage.getItem("auth");
    const dados = JSON.parse(auth);
  const [logado, setLogado] = useState(!!dados?.token);
  const [usuario, setUsuario] = useState(dados?.usuario);


  const login = async (email, senha) => {
    const resposta= await autenticar (email, senha)
    setUsuario(resposta?.usuario);
    setLogado(!!resposta?.token);


    localStorage.setItem(
      "auth",
      JSON.stringify({
        usuario: resposta?.usuario,
        token: resposta?.token,
      }),
    );
  };

  const logout = () => {
    setUsuario(null);
    setLogado(false);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider
      value={{
        logado,
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
