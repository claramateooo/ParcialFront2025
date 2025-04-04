import { FunctionComponent } from "preact/src/index.d.ts";


type Phoneprops={
  phone:string;
};
const CountryForm:FunctionComponent<Phoneprops>=(props)=>{
    const { phone }=props;
    return(
        <div>
        <form method="GET" action="/showInfo">
        <input type="phone" name="phone "value={phone || ""}  placeholder="Introducir telefono" required/>
        <button type="submit">Buscar</button>
        </form>
        </div>
    )
};
export default CountryForm;