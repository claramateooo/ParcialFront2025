import { Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { City, Country } from "../../types.ts";

export const handler: Handlers = {
    GET: async (req:Request,ctx)=>{
      const url= new URL(req.url);
      const city=url.searchParams.get("city") || "";
      try{
        const {data}= await axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`);
        return ctx.render( {data, city});
      }catch(error){
        return new Response("Ha habido un error ",{status:500});
      }
    }
    
  };
  // Página que maneja la presentación de los resultados
  const Page = (props: PageProps<{city:string; data:City}>) => {
      const {city,data} = props.data;
      return (
        <div>
          {city && <h1>La ciudad es: {city}</h1>}
          <h2>La temperatura es:{data.temperature}</h2>
        </div>
    
      );
    };
    
    export default Page;
    
    