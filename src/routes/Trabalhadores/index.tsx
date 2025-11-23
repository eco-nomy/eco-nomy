import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Funcionarios() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Trabalhadores";
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <main className="bg-[var(--c-bg)] text-[var(--c-text)] min-h-screen flex items-center justify-center p-6">
      <section className="bg-[var(--c-bg)] text-[var(--c-text)] w-full max-w-md p-6 rounded-lg shadow-md space-y-4 text-center">
        <h2 className="text-2xl font-bold text-[var(--c-text)] mb-4">
          Trabalhadores
        </h2>

        <h2 className="text-2xl p-4 rounded font-bold bg-[var(--c-bg1)] text-white mb-4 hover:bg-[var(--c-bg2)]">
<Link to='/trabalhos'>Ver propóstas de trabalhos</Link>
        </h2>

        <button
          className="cursor-pointer w-full bg-[#CC2004] text-white py-2 px-4 mt-6 rounded hover:bg-[#941600] transition"
          onClick={handleLogout}
        >
          Deslogar
        </button>

      </section>
    </main>
  );
}