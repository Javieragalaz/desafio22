import "../assets/css/galeria.css";
import Heart from "./Heart";
import { Jcontext } from "../Jcontext";
import { useContext } from "react";

export default function Gallery() {

  const { data, setData } = useContext(Jcontext);

  return (

    <div className="galeria grid-columns-5 p-3">

      {data.map((photos, i) => { 

        return (

          <div
            className="photo"
            key = {photos.id}
            style={{ backgroundImage: `url('${photos.src}')` }}
            onClick={() => {

              const pic = data[i];
              const likedState = pic.liked;
              if (likedState) pic.liked = false;
              else pic.liked = true;
              setData([...data]);
            }}
          >


            {photos.liked ? (
              <Heart filled={"red"} />
            ) : (
              <Heart />
            )}
          </div>
        )
      })}
    </div>
  );
}