"use client";

import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { IoMenu, IoPersonSharp } from "react-icons/io5";
import Header from "@/app/components/header/header";
import ChartIcon from "@/app/shared/assets/chart";
import EsquemaCard from "./components/esquema";
import { FaUserPlus, FaUserShield } from "react-icons/fa6";

const MetricPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [isButtonActive, setIsButtonActive] =
    useState<string>("Tempo de reparo");

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
                  <h2 className="mb-1 max-md:text-xs text-slate-500">Usuários Totais</h2>
                  <span className="text-xl max-md:text-sm">105</span>
                </div>
              </div>

              <div className="flex w-1/3 h-24 rounded-md items-center text-colorPrimary font-bold border p-2">
                <div className="w-1/3 flex items-center justify-center text-xl max-md:w-2/5 ">
                <FaUserPlus />
                </div>

                <div className="flex flex-col max-md:w-3/5">
                  <h2 className="mb-1 max-md:text-xs text-slate-500">Usuários Novos</h2>
                  <span className="text-xl max-md:text-sm">105</span>
                </div>
              </div>

              <div className="flex w-1/3 h-24 rounded-md items-center text-colorPrimary font-bold border p-2">
                <div className="w-1/3 flex items-center justify-center text-xl max-md:w-2/5 ">
                <FaUserShield />
                </div>

                <div className="flex flex-col max-md:w-3/5">
                  <h2 className="mb-1 max-md:text-xs text-slate-500">Administradores</h2>
                  <span className="text-xl max-md:text-sm">105</span>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-4 max-md:flex-col">
              <div className="w-3/5 rounded-md max-md:w-full overflow-auto">
              <div className="max-md:hidden">
                  <ChartIcon width="660px" height="589px" />
                </div>
                <div className="overflow-auto hidden w-96 h-96 max-md:block">
                  <ChartIcon width="690px" height="589px" />
                </div>
              </div>

              <div className="w-2/5 rounded-md border px-2 py-3 max-md:w-full">
                <h2 className="text-md text-slate-500 font-bold">Esquemas</h2>

                <div className="w-full flex h-12 items-center my-4">
                  <div className="w-2/3 h-full flex items-center justify-start max-md:w-full">
                    <div className="h-full w-72 bg-bgSecundary text-colorPrimary rounded-md flex items-center justify-center gap-4 max-md:bg-bgTerciary max-md:w-full">
                      <button
                        onClick={() => setIsButtonActive("Tempo de reparo")}
                        className={` p-2 rounded-md text-sm ${
                          isButtonActive == "Tempo de reparo"
                            ? "bg-bgTerciary max-md:bg-bgSecundary"
                            : "bg-bgSecundary max-md:bg-bgTerciary"
                        }`}
                      >
                        Tempo de reparo
                      </button>
                      <button
                        onClick={() => setIsButtonActive("Acessos")}
                        className={` p-2 rounded-md text-sm ${
                          isButtonActive == "Acessos"
                            ? "bg-bgTerciary max-md:bg-bgSecundary"
                            : "bg-bgSecundary max-md:bg-bgTerciary"
                        }`}
                      >
                        Acessos
                      </button>
                    </div>
                  </div>
                </div>

                <EsquemaCard />
                <EsquemaCard />
                <EsquemaCard />
                <EsquemaCard />
                <EsquemaCard />
                
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MetricPage;
