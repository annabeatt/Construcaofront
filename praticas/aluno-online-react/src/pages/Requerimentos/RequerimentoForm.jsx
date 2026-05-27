import { useForm } from "react-hook-form";
import "./RequerimentoForm.css" ; 

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Requerimento enviado:", data);

    // limpa o formulário
    reset();
  }

  return (
    <div className="container mt-4">
      <h2>Novo Requerimento</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Tipo */}
        <div className="form-group">
          <label className="form-label">
            Tipo de Requerimento
          </label>

          <select
            className="form-select"
            {...register("tipo", {
              required: "O tipo de requerimento é obrigatório",
            })}
          >
            <option value="">Selecione</option>
            <option value="declaracao">
              Declaração
            </option>
            <option value="segunda-via">
              Segunda Via
            </option>
            <option value="historico">
              Histórico
            </option>
          </select>

          {errors.tipo && (
            <p className="text-danger">
              {errors.tipo.message}
            </p>
          )}
        </div>

        {/* Descrição */}
        <div className="form-group">
          <label className="form-label">
            Descrição
          </label>

          <textarea
            className="form-control"
            rows="4"
            {...register("descricao", {
              required: "A descrição é obrigatória",
              minLength: {
                value: 10,
                message:
                  "A descrição deve ter no mínimo 10 caracteres",
              },
            })}
          />

          {errors.descricao && (
            <p className="text-danger">
              {errors.descricao.message}
            </p>
          )}
        </div>

        <button className="btn btn-primary">
          Enviar Requerimento
        </button>
      </form>
    </div>
  );
}

export default RequerimentoForm;