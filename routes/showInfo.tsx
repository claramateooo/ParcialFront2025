import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { validatePhone } from "../types.ts";
import CountryForm from "../components/Countryform.tsx";


// Definir el handler para manejar la solicitud
export const handler: Handlers = {
    GET: async (req:Request,ctx)=>{
      const url= new URL(req.url);
      const phone=url.searchParams.get("phone") || "";
      try{
        const {data}= await axios.get(`https://www.api-ninjas.com/api/validatephone?numer=${phone}`);
        return ctx.render( {data, phone});
      }catch(error){
        return new Response("Ha habido un error ",{status:500});
      }
    }
    
  };
  // Página que maneja la presentación de los resultados
  const Page = (props: PageProps<{phone:string; data:validatePhone}>) => {
      const {phone,data} = props.data;
      return (
        <div>
          <CountryForm phone={phone}/>
          {phone && <h1>El telefono es: {phone}</h1>}
          <h2>La ciudad es:</h2><a href="/coutry/">{data.country}</a>
        </div>
    
      );
    };
    
    export default Page;
    
    