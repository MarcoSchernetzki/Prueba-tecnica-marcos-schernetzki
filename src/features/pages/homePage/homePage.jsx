import { useEffect } from "react";
import { useSite } from "../../site/hook/useSite";

export function HomePage() {
    const { sites, handleLoad, handleSelect } = useSite();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <>
            {sites.sites.length > 0 ? (
                <div>
                    <ul>
                        {sites.sites?.map((item) => {
                            return (
                                <li key={item._id}>
                                    <p> Nombre: {item.name}</p>
                                    <button
                                        onClick={() => {
                                            handleSelect(item);
                                        }}
                                    >
                                        Detalles
                                    </button>
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
