import { Jcontext } from "../Jcontext";
import { useContext } from "react";

function Favoritos() {

  const { data } = useContext(Jcontext);

  const favoritos = data.filter((pic) => pic.liked === true);

  return (

    <div>

      <h1>Fotos favoritas</h1>

      <div className="p-3 galeria grid-columns-4">

        {favoritos.map((photo) => {

          return (

            <div className="foto"

              style={{ backgroundImage: `url('${photo.src}')` }}>

            </div>
          );

        })}

      </div>

    </div>

  );
}

export default Favoritos;