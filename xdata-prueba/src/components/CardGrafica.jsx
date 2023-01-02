

const CardGrafica = ( {texto="Texto", numero="01"} ) => {
  return (
    <div className="w-[100%] bg-white h-[20%] rounded shadow flex flex-col justify-center items-center" >
        <p className="font-semibold text-gray-400 mb-1 text-sm" >{ texto }</p>
        <p className="font-semibold text-xl" >{ numero }</p>
    </div>
  )
}

export default CardGrafica;
