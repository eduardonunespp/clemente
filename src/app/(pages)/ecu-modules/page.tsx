"use client";

import { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import { IoMenu, IoPersonSharp } from "react-icons/io5";
import Header from "@/app/components/header/header";
import Accordion from "@/app/components/accordion/accordion";
import { Form, InputGroup } from "react-bootstrap";
import { IoMdSearch } from "react-icons/io";
import InfoIcon from "@/app/shared/assets/info";

const EcuModules = () => {
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
          <Header Title="ECU/Módulos" />

          <section className="mt-10 p-6 h-auto rounded-t-xl bg-bgTerciary max-md:bg-bgSecundary max-md:p-1 ">
            <div className="w-full flex h-12 items-center mb-4">
              <div className="w-2/3 h-full flex items-center justify-center gap-2 max-md:w-full">
                <InputGroup className="">
                  <InputGroup.Text id="basic-addon1">
                    <IoMdSearch className="text-slate-500" />
                  </InputGroup.Text>
                  <Form.Control
                    className="h-12"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <div className="text-slate-500 h-full rounded-md flex items-center justify-center w-14 border max-md:hidden">
                  <InfoIcon />
                </div>
              </div>

              <div className="w-1/3 flex justify-end max-md:hidden">
                <button className="p-3 bg-colorPrimary rounded-md text-sm">
                  {" "}
                  + Adicionar módulo
                </button>
              </div>
            </div>

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

export default EcuModules;
