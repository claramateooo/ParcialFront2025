import { Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Country } from "../../types.ts";

export const handler: Handlers = {
    GET: async (req:Request,ctx)=>{
      const url= new URL(req.url);
      const country=url.searchParams.get("country") || "";
      try{
        const {data}= await axios.get(`https://api.api-ninjas.com/v1/country?name=${country}`);
        return ctx.render( {data, country});
      }catch(error){
        return new Response("Ha habido un error ",{status:500});
      }
    }
    
  };
  // Página que maneja la presentación de los resultados
  const Page = (props: PageProps<{country:string; data:Country}>) => {
      const {country,data} = props.data;
      return (
        <div>
          {country && <h1>El pais es: {country}</h1>}
          <h2>La capital es:</h2><a href="/city/">{data.capital}</a>
        </div>
    
      );
    };
    
    export default Page;
    
    