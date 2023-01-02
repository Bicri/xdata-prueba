

const Cards = ( { texto = "Texto", numero = "01" } ) => {
  return (
    <div className="w-[100%] bg-white h-[134px] rounded shadow flex flex-col justify-center items-center" >
        <p className="font-semibold text-gray-400 mb-3" >{ texto }</p>
        <p className="font-semibold text-4xl" >{ numero }</p>
    </div>
  )
}

export default Cards