import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState(null);

    const login = (dados) => {
        console.log ("Loguei")
        setUsuario({
            id: 0,
            nome: "Ana",
            email: "ana@iesb.edu.br"
        });
        setLogado(true);
    };

    const logout = () => {
        setUsuario(null);
        setLogado(false);
    };

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuthContext() {
    return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };