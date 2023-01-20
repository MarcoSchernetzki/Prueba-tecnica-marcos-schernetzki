import { useNavigate } from "react-router-dom";
import { useSite } from "../../site/hook/useSite";
import Style from "./detailsPage.module.css";

export function DetailsPage() {
    const navigate = useNavigate();
    const { sites } = useSite();

    return (
        <>
            {sites.selectedSite ? (
                <div className={Style.container_details}>
                    <h2> Detalle del sitio</h2>
                    <p>Nombre: {sites.selectedSite.name}</p>
                    <p>Descripcion: {sites.selectedSite.description}</p>
                    <p>Url: {sites.selectedSite.path}</p>

                    <div className={Style.container_details_button}>
                        <button
                            className={Style.details_button}
                            onClick={() => {
                                navigate("/home");
                            }}
                        >
                            Volver
                        </button>
                        <button
                            className={Style.details_button}
                            onClick={() => {
                                navigate("/edit");
                            }}
                        >
                            Editar
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
