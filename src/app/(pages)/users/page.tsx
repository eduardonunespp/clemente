"use client";

import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { IoMenu } from "react-icons/io5";
import Header from "@/app/components/header/header";
import Accordion from "@/app/components/accordion/accordion";
import Paginator from "@/app/shared/components/paginator/paginator";

const UsersPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState<string>("Ativos");

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
          <Header Title="Usuários" />

          <section className="mt-10 p-6 h-auto rounded-t-xl bg-bgTerciary max-md:bg-bgSecundary max-md:p-1 ">
            <div className="w-full flex h-12 items-center mb-4">
              <div className="w-2/3 h-full flex items-center justify-start max-md:w-full">
                <div className="h-full w-96 bg-bgSecundary text-colorPrimary rounded-md flex items-center justify-center gap-4 max-md:bg-bgTerciary max-md:w-full">
                  <button
                    onClick={() => setIsButtonActive("Ativos")}
                    className={` p-2 rounded-md text-sm ${
                      isButtonActive == "Ativos"
                        ? "bg-bgTerciary max-md:bg-bgSecundary"
                        : "bg-bgSecundary max-md:bg-bgTerciary"
                    }`}
                  >
                    Ativos
                  </button>
                  <button
                    onClick={() => setIsButtonActive("Pendentes")}
                    className={` p-2 rounded-md text-sm ${
                      isButtonActive == "Pendentes"
                        ? "bg-bgTerciary max-md:bg-bgSecundary"
                        : "bg-bgSecundary max-md:bg-bgTerciary"
                    }`}
                  >
                    Pendentes
                  </button>
                  <button
                    onClick={() => setIsButtonActive("Inativos")}
                    className={` p-2 rounded-md text-sm ${
                      isButtonActive == "Inativos"
                        ? "bg-bgTerciary max-md:bg-bgSecundary"
                        : "bg-bgSecundary max-md:bg-bgTerciary"
                    }`}
                  >
                    Inativos
                  </button>
                </div>
              </div>

              <div className="w-1/3 flex justify-end max-md:hidden">
                <button className="p-3 bg-colorPrimary rounded-md text-sm">
                  {" "}
                  + Adicionar usuário
                </button>
              </div>
            </div>

            <div className="w-full h-12 bg-bgSecundary rounded-md px-4 flex items-center text-colorPrimary max-md:hidden">
              <div className="w-1/5">
                <h2>Nome</h2>
              </div>

              <div className="w-1/5">
                <h2>Email</h2>
              </div>

              <div className="w-1/5">
                <h2>Cpf/Cnpj</h2>
              </div>

              <div className="w-1/5">
                <h2>Telefone</h2>
              </div>

              <div className="w-1/5">
                <h2>Opções</h2>
              </div>
            </div>

            <Accordion type="Person" />
            <Accordion type="Person" />
            <Accordion type="Person" />
            <Accordion type="Person" />
            <Accordion type="Person" />

            <Paginator />
          </section>
        </main>
      </div>
    </div>
  );
};

export default UsersPage;
