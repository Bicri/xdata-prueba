import Image from "next/image"
import ImgGrafica from '/img/grafica.svg'

const Grafica = () => {
  return (
    <div className="w-full lg:w-[70%] p-4" >
        <h2 className='font-semibold text-xl'>Today's trends</h2>
        <div className="mb-6" >
            <p className="text-gray-400 mt-1 text-xs">as of 25 May 2019 09:41 PM</p>
        </div>

        <Image 
            src={ImgGrafica}
            alt="Imagen de gráfica"
        />
    </div>
  )
}

export default Grafica