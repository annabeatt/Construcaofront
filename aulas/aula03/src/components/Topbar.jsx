import avatar from "../assets/avatar.svg";

function Topbar(props) {
  return (
    <header>
      <h1>{props.titulo}Olá, Aluno</h1>
      <img src={avatar} alt="Imagem do avatar" />
    </header>
  );
}

export default Topbar;
