export default function Tools() {
    const tools = [
      {
        title: "Calculadora de Preço de Venda",
        description:
          "Calcule o preço ideal com base no custo, margem e taxas de venda.",
      },
      {
        title: "Simulador MEI / Simples Nacional",
        description:
          "Compare regimes de tributação e entenda qual é o melhor para você.",
      },
      {
        title: "Gerador de Contrato em PDF",
        description:
          "Preencha os dados do seu cliente e gere contratos personalizados automaticamente.",
      },
      {
        title: "Checklist de Formalização",
        description:
          "Saiba passo a passo como abrir e organizar sua empresa formalmente.",
      },
      {
        title: "Painel Financeiro (Mini ERP)",
        description:
          "Controle entradas e saídas, e visualize seu fluxo de caixa.",
      },
      {
        title: "Planner de Conteúdo para Instagram",
        description:
          "Planeje suas postagens semanais com ideias prontas e organização visual.",
      },
      {
        title: "Simulador de Meta de Faturamento",
        description:
          "Descubra quanto precisa vender por dia para atingir sua meta mensal.",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Ferramentas para Pequenos Empresários
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
                <button
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  onClick={() => alert("Em breve...")}
                >
                  Acessar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }