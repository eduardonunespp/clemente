"use client";

import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { IoMenu, IoPersonSharp } from "react-icons/io5";
import Header from "@/app/components/header/header";
import Accordion from "@/app/components/accordion/accordion";
import { FaUserPlus, FaUserShield } from "react-icons/fa6";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 max-md:hidden"></div>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <header className="bg-bgTerciary text-colorPrimary p-4 flex justify-between items-center md:hidden">
          <button className="flex" onClick={toggleSidebar}>
            <IoMenu size={24} />
            <span className="ml-4 font-bold">Início</span>
          </button>
        </header>
        <main className="flex-1 p-4 w-full h-dvh bg-bgSecundary">
          <Header Title="Início" />

          <section className="mt-10  p-6 h-auto rounded-t-xl bg-bgTerciary max-md:bg-bgSecundary max-md:p-1">
            <h2 className="text-colorPrimary text-xl mb-4 max-md:text-sm font-bold">
              Métricas
            </h2>

            <div className="w-full flex gap-4 justify-between mb-4">
              <div className="flex w-1/3 h-24 rounded-md items-center text-colorPrimary font-bold border p-2">
                <div className="w-1/3 flex items-center justify-center text-xl max-md:w-2/5 ">
                  <IoPersonSharp />
                </div>

                <div className="flex flex-col max-md:w-3/5">
                  <h2 className="mb-1 max-md:text-xs text-slate-500">
                    Usuários Totais
                  </h2>
                  <span className="text-xl max-md:text-sm">105</span>
                </div>
              </div>

              <div className="flex w-1/3 h-24 rounded-md items-center text-colorPrimary font-bold border p-2">
                <div className="w-1/3 flex items-center justify-center text-xl max-md:w-2/5 ">
                  <FaUserPlus />
                </div>

                <div className="flex flex-col max-md:w-3/5">
                  <h2 className="mb-1 max-md:text-xs text-slate-500">
                    Usuários Novos
                  </h2>
                  <span className="text-xl max-md:text-sm">105</span>
                </div>
              </div>

              <div className="flex w-1/3 h-24 rounded-md items-center text-colorPrimary font-bold border p-2">
                <div className="w-1/3 flex items-center justify-center text-xl max-md:w-2/5 ">
                  <FaUserShield />
                </div>

                <div className="flex flex-col max-md:w-3/5">
                  <h2 className="mb-1 max-md:text-xs text-slate-500">
                    Administradores
                  </h2>
                  <span className="text-xl max-md:text-sm">105</span>
                </div>
              </div>
            </div>

            <h2 className="text-colorPrimary text-xl mb-4  max-md:text-sm font-bold">
              Esquemas adicionados recentemente
            </h2>

            <div className="w-full h-12 bg-bgSecundary rounded-md px-4 flex items-center text-colorPrimary max-md:hidden">
              <div className="w-1/3">
                <h2>CAMINHÃO</h2>
              </div>

              <div className="w-1/3">
                <h2>MODELO</h2>
              </div>
            </div>

            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
