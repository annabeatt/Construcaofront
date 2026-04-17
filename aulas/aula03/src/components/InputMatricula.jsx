function InputMatricula({ erro, mudaValor }) {
  return (
    <>
      <label htmlFor="matricula">Matrícula</label>
      <input
        type="number"
        id="matricula"
        name="matricula"
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputMatricula;
