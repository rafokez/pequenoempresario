import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth";
import { auth } from "../services/firebase";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await register(email, password);
      const token = await userCredential.user.getIdToken(); // 🔑 token JWT aqui
      console.log("JWT Token:", token);

      alert("Cadastro realizado com sucesso!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 border rounded-md mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Cadastrar
        </button>

        <p className="text-sm text-center mt-4">
          Já tem uma conta?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Entrar
          </span>
        </p>
      </div>
    </div>
  );
}
