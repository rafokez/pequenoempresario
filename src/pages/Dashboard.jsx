import { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center px-8">
        <h1 className="text-xl font-bold text-blue-700">Pequeno Empresário</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sair
        </button>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Olá, <span className="text-blue-600">{user?.email}</span> 👋
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Conteúdos Exclusivos</h3>
            <p className="text-gray-600 text-sm">
              Acesse vídeos, e-books e materiais práticos para alavancar seu negócio.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Comunidade</h3>
            <p className="text-gray-600 text-sm">
              Conecte-se com outros pequenos empresários e troque experiências.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Ferramentas</h3>
            <p className="text-gray-600 text-sm">
              Utilize calculadoras, checklists e planners personalizados.
            </p>
            <button
            onClick={() => navigate("/tools")}
            className="bg-blue-600 text-white px-6 py-1 rounded-md hover:bg-green-700 transition"
            >
            Criar Conta
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
