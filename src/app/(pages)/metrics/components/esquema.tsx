import { TaticIcon } from "@/app/shared/assets/tatic"

const EsquemaCard: React.FC = () => {
    return (
        <div className="flex justify-around px-2 gap-2 border-b py-3">
        <div className="bg-colorSecundary p-2.5 rounded-md">
          <TaticIcon />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-md text-colorPrimary font-bold">
            Placa ABX Lorem Ipsum 2001
          </h2>
          <span className="text-sm text-slate-500">
            Caminhão 123D
          </span>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-colorPrimary">105</h2>
        </div>
      </div>
    )
}

export default EsquemaCard