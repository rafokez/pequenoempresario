import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Transforme seu pequeno negócio em algo grande
        </h1>
        <p className="text-gray-600 text-lg">
          Cadastre-se gratuitamente na plataforma <strong>Pequeno Empresário</strong> e comece sua jornada com conteúdos, ferramentas e suporte.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Entrar
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
}
