import "./App.css";
import logo from "./assets/learn.svg";

function Cabecalho() {
  return (
    <header>
      <h1>Titulo</h1>
    </header>
  );
}
// Prettier => ALT +SHIFT + F (formatador)tudo que a gente cria é componente e componente é uma função | deixar em minísco as funções do html e com iníco maíusculo as funçoes que eu crio
//aqui ele vai chamando as funções
function App() {
  //   <div>
  //  {/* não quebrar linha no retorno, se quebrar add parenteses abrindo e fechando(comentario crtl+;) */}
  //     <Cabecalho />
  //     <div>{ 2 + 2 }</div>
  //     <img src={logo} alt="" />
  //     <p></p>
  //   </div>
  // ;
  return (
    <main>
      <img src={logo} alt="Icone chapeu formatura" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}
export default App;
