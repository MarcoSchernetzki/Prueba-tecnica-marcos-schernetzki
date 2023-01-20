import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSite } from "../../../site/hook/useSite";

export function UpdateForm() {
    const navigate = useNavigate();
    const { sites, handleUpdate } = useSite();
    const [updateFormState, setUpdateFormState] = useState({
        name: sites.selectedSite?.name,
        description: sites.selectedSite?.description,
        path: sites.selectedSite?.path,
        publicPath: sites.selectedSite?.publicPath,
        key: sites.selectedSite?.key,
    });

    const handleInput = (ev) => {
        const element = ev.target;
        setUpdateFormState({
            ...updateFormState,
            [element.name]: element.value,
        });
    };

    const handleUpdateSubmit = (ev) => {
        ev.preventDefault();
        handleUpdate(sites.selectedSite?._id, updateFormState);
    };

    return (
        <div>
            <form onSubmit={handleUpdateSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={updateFormState.name}
                        placeholder="Ingrese un nombre"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="description"
                        value={updateFormState.description}
                        placeholder="Ingrese una descripcion"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="path"
                        value={updateFormState.path}
                        placeholder="Ingrese la direccion URL"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="publicPath"
                        value={updateFormState.publicPath}
                        placeholder="Ingrese la direccion URL publica"
                        onInput={handleInput}
                    />
                </label>

                <label>
                    <button type="submit">Guardar</button>
                    <button
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Cancelar
                    </button>
                </label>
            </form>
        </div>
    );
}
