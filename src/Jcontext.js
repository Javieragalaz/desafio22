import { createContext, useState, useEffect } from 'react'

export const Jcontext = createContext();

export function Provider({ children }) {

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("/fotos.json");
        const data = await res.json();
        const photos = data.photos.map((photos) => {


            return {
                src: photos.src.tiny,
                liked: false
            };
        });

        setData(photos);
    };

    useEffect(() => {
        getData();
    }, []);

    const globalState = {
        data,
        setData
    };

    return <Jcontext.Provider value={globalState}> {children} </Jcontext.Provider>
}
