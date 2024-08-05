"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoClose, IoPersonSharp, IoHomeSharp } from "react-icons/io5";
import { MdViewModule } from "react-icons/md";
import { RiHammerFill } from "react-icons/ri";
import Icon from "@/app/shared/assets/logo";

type Props = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ sidebarOpen, toggleSidebar }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<string>("");

  useEffect(() => {
    if (pathname.includes("home")) {
      setIsActive("inicio");
    } else if (pathname.includes("ecu-modules")) {
      setIsActive("ecu-modules");
    } else if (pathname.includes("repairs")) {
      setIsActive("reparos");
    } else if (pathname.includes("users")) {
      setIsActive("usuarios");
    } else if (pathname.includes("metrics")) {
      setIsActive("metricas");
    }
  }, [pathname]);

  const handleNavigation = (page: string, route: string) => {
    setIsActive(page);
    router.push(route);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-center p-2 bg-bgTerciary">
          <Icon width="190" height="80" />
          <button onClick={toggleSidebar} className="md:hidden px-2">
            <IoClose size={24} className="text-colorPrimary" />
          </button>
        </div>
        <nav className="p-4">
          <button
            onClick={() => handleNavigation("inicio", "/home")}
            className={`w-full mb-1 rounded-md flex items-center justify-start p-3 text-lg ${
              isActive == "inicio"
                ? "bg-bgSecundary text-colorPrimary"
                : "bg-bgTerciary  text-slate-400"
            }`}
          >
            <IoHomeSharp />
            <span className="ml-4">Início</span>
          </button>

          <button
            onClick={() => handleNavigation("ecu-modules", "/ecu-modules")}
            className={`w-full mb-1 rounded-md flex items-center justify-start p-3 text-lg ${
              isActive == "ecu-modules"
                ? "bg-bgSecundary text-colorPrimary"
                : "bg-bgTerciary  text-slate-400"
            }`}
          >
            <MdViewModule />
            <span className="ml-4">Módulos</span>
          </button>

          <button
            onClick={() => handleNavigation("reparos", "/repairs")}
            className={`w-full mb-1 rounded-md flex items-center justify-start p-3 text-lg ${
              isActive == "reparos"
                ? "bg-bgSecundary text-colorPrimary"
                : "bg-bgTerciary  text-slate-400"
            }`}
          >
            <RiHammerFill />
            <span className="ml-4">Reparos</span>
          </button>

          <button
            onClick={() => handleNavigation("usuarios", "/users")}
            className={`w-full mb-1 rounded-md flex items-center justify-start p-3 text-lg ${
              isActive == "usuarios"
                ? "bg-bgSecundary text-colorPrimary"
                : "bg-bgTerciary  text-slate-400"
            }`}
          >
            <IoPersonSharp />
            <span className="ml-4">Usuários</span>
          </button>

          <button
            onClick={() => handleNavigation("metricas", "/metrics")}
            className={`w-full mb-1 rounded-md flex items-center justify-start p-3 text-lg ${
              isActive == "metricas"
                ? "bg-bgSecundary text-colorPrimary"
                : "bg-bgTerciary  text-slate-400"
            }`}
          >
            <BsBarChartLineFill />
            <span className="ml-4">Metricas</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
