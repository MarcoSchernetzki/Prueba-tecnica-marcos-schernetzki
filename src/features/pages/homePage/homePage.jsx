import { useEffect } from "react";
import { useSite } from "../../site/hook/useSite";
import Style from "./homePage.module.css";

export function HomePage() {
    const { sites, handleLoad, handleSelect, handleDelete } = useSite();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <>
            {sites.sites.length > 0 ? (
                <div>
                    <ul className={Style.container_list}>
                        {sites.sites?.map((item) => {
                            return (
                                <li key={item._id} className={Style.list_card}>
                                    <p>{item.name}</p>
                                    <button
                                        className={Style.card_button}
                                        onClick={() => {
                                            handleSelect(item);
                                        }}
                                    >
                                        Detalles
                                    </button>
                                    <button
                                        className={Style.card_button}
                                        onClick={() => {
                                            handleDelete(item._id);
                                        }}
                                    >
                                        Eliminar
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
