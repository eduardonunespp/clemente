import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Paginator = () => {
  return (
    <div className="w-full flex items-center justify-between mt-4 px-2">
      <button className="text-slate-500 flex items-center">
        <FaArrowLeftLong />

        <span className="ml-2 max-md:text-sm">Anterior</span>
      </button>

      <div className="gap-2 flex">
        <button className="py-2 px-3 rounded-md bg-colorPrimary text-bgTerciary max-md:py-1 max-md:px-1">
          1
        </button>

        <button className="py-2 px-3 rounded-md bg-bgTerciary text-slate-500">
          2
        </button>

        <button className="py-2 px-3 rounded-md bg-bgTerciary text-slate-500 max-md:hidden">
          3
        </button>
      </div>

      <button className="text-slate-500 flex items-center">
        <span className="mr-2 max-md:text-sm">Anterior</span>

        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Paginator;
