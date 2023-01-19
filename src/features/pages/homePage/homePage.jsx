import { useEffect } from "react";
import { useSite } from "../../site/hook/useSite";

export function HomePage() {
    const { sites, handleLoad } = useSite();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <>
            {sites.sites ? (
                <div>
                    <ul>
                        {sites.sites?.map((item) => {
                            return (
                                <li key={item.id}>
                                    <p> Nombre: {item.name}</p>
                                    <button onClick={() => {}}>Detalles</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </>
    );
}
