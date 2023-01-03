
import CardGrafica from "./CardGrafica"
import Cards from "./Cards"
import Grafica from "./Grafica"

const OverView = () => {
  return (
    <div className="bg-slate-100 sm:p-6 w-full mt-[100px] sm:mt-[0px] sm:w-[80.5%] min-h-[100vh]">
      <h1 className="hidden sm:block font-semibold text-2xl">Overview</h1>

      <div className="w-full p-1 sm:p-4 grid grid-cols-2 lg:grid-cols-4  gap-2 sm:gap-6">
        <Cards texto="Unresolved" numero="60" />
        <Cards texto="Overdue" numero="16" />
        <Cards texto="Open" numero="43" />
        <Cards texto="On hold" numero="64" />
      </div>

      <div className="sm:ml-4 sm:mr-4 w-[97%]  bg-white flex " >
        <Grafica />
        <div className="hidden lg:flex lg:flex-col w-[30%]">
          <CardGrafica texto="Resolved" numero="449" />
          <CardGrafica texto="Received" numero="426" />
          <CardGrafica texto="Average first response time" numero="33m" />
          <CardGrafica texto="Average first time" numero="3h 8m" />
          <CardGrafica texto="Resolution within SLA" numero="94%" />
        </div>
      </div>
      
  </div>
  )
}

export default OverView
