import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";

type Props = {
  type?: string;
};

const Accordion: React.FC<Props> = ({ type }) => {
  return (
    <>
      {type == "Person" ? (
        <div className="w-full h-16 flex items-center border-b px-4 text-colorPrimary max-md:bg-bgTerciary max-md:rounded-md mb-2 max-md:h-14">
          <div className="w-1/5 max-md:w-1/2">
            <h2 className="max-md:text-sm max-md:font-bold">Nome Sobrenome</h2>
          </div>
          <div className="w-1/5 max-md:1/2 max-md:hidden">
            <h2 className="max-md:text-sm max-md:font-bold">
              email@example.com
            </h2>
          </div>
          <div className="w-1/5 max-md:hidden">
            <h2 className="max-md:text-sm max-md:font-bold">000.000.000-00</h2>
          </div>
          <div className="w-1/5 max-md:hidden">
            <h2 className="max-md:text-sm max-md:font-bold">00 00000-000</h2>
          </div>
          <div className="w-1/5 max-md:w-1/2 flex items-center justify-center max-md:justify-end">
            <BsThreeDotsVertical className="cursor-pointer max-md:hidden" />

            <IoIosArrowDown className="hidden cursor-pointer max-md:block" />
          </div>
        </div>
      ) : (
        <div className="w-full h-16 flex items-center border-b px-4 text-colorPrimary max-md:bg-bgTerciary max-md:rounded-md mb-2 max-md:h-14">
          <div className="w-1/3 max-md:w-1/2">
            <h2 className="max-md:text-sm max-md:font-bold">CAMINHÃO AX</h2>
          </div>
          <div className="w-1/3 max-md:hidden">
            <h2>CAMINHÃO AX</h2>
          </div>
          <div className="w-1/3 h-full flex items-center justify-center max-md:w-1/2 max-md:justify-end">
            <button className="w-24 mr-4 border border-colorPrimary items-center text-colorPrimary h-10 rounded-md flex p-2 max-md:hidden">
              <RiPencilFill size={20} />

              <span className="ml-4 text-sm">Editar</span>
            </button>

            <IoIosArrowDown className="cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Accordion;
