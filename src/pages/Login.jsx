import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { auth } from "../services/firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await login(email, password);
      const token = await userCredential.user.getIdToken(); // 🔑 token JWT aqui
      console.log("JWT Token:", token);

      alert("Login bem-sucedido!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Erro ao fazer login: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

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
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Entrar
        </button>

        <p className="text-sm text-center mt-4">
          Não tem uma conta?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Cadastre-se
          </span>
        </p>
      </div>
    </div>
  );
}
