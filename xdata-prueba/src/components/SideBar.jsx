import Image from "next/image";
import ItemBar from "./ItemBar";
// Imagenes
import LoginLogo from "/img/logoD.svg";
import Over from "/img/overview.svg";
import Tickets from "/img/tickets.svg";
import Ideas from "/img/ideas.svg";
import Contactos from "/img/contacts.svg";
import Agentes from "/img/agents.svg";
import Articulos from "/img/articles.svg";
import Settings from "/img/settings.svg";
import Subscription from "/img/subscription.svg";

const SideBar = () => {
  return (
    <div className="bg-gray-700 w-full sm:w-[20%] h-[100px] sm:h-[100vh] p-6 fixed">
        <div className="h-auto flex items-center mb-10" >      
            <Image
                src={LoginLogo}
                alt="Logo"
                className="mx-0 sm:mx-auto lg:mx-0 lg:mr-4"
            />
            <span className="hidden lg:inline-block text-gray-400 font-semibold ">Dashboard Kit</span>
        </div>
        <ItemBar texto={"Overview"} img={Over} />
        <ItemBar texto={"Tickets"} img={Tickets} />
        <ItemBar texto={"Ideas"} img={Ideas} />
        <ItemBar texto={"Contactos"} img={Contactos} />
        <ItemBar texto={"Agentes"} img={Agentes} />
        <ItemBar texto={"Articulos"} img={Articulos} />
        <hr className="my-3 hidden sm:block" />
        <ItemBar texto={"Settings"} img={Settings} />
        <ItemBar texto={"Subscription"} img={Subscription} />
    </div>
  )
}

export default SideBar