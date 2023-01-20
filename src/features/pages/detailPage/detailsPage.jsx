import { useNavigate } from "react-router-dom";

import { useSite } from "../../site/hook/useSite";

export function DetailsPage() {
    const navigate = useNavigate();
    const { sites } = useSite();

    return (
        <>
            {sites.selectedSite ? (
                <div>
                    <h2> Detalle del sitio</h2>
                    <p>{sites.selectedSite.name}</p>
                    <p>{sites.selectedSite.description}</p>
                    <p>{sites.selectedSite.path}</p>

                    <button
                        onClick={() => {
                            navigate("/home");
                        }}
                    >
                        Volver
                    </button>
                    <button
                        onClick={() => {
                            navigate("/edit");
                        }}
                    >
                        Editar
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
