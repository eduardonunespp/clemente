import { IoMdNotifications } from "react-icons/io";

type Props = {
  Title: string;
};

const Header: React.FC<Props> = ({ Title }) => {
  return (
    <header className="w-full h-16 flex max-md:hidden">
      <div className="h-full flex flex-col justify-between w-2/3">
        <h1 className="text-colorPrimary text-2xl font-bold">{Title }</h1>

        <p className="text-colorPrimary text-sm max-md:text-xs max-md:mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          tincidunt mi.
        </p>
      </div>

      <div className="flex justify-end h-full items-start w-1/3">
        <button className="h-4 p-3 rounded-md flex justify-between items-center border text-colorPrimary border-yellow-700 border-solid">
          <IoMdNotifications className="text-colorPrimary text-xl" />
          <span className="ml-2">Notificações</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
