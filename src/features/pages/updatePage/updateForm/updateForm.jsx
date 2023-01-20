import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSite } from "../../../site/hook/useSite";
import Style from "../../createPage/create.module.css";

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
            <form
                className={Style.container_form}
                onSubmit={handleUpdateSubmit}
            >
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

                <label className={Style.container_form_button}>
                    <button className={Style.form_button} type="submit">
                        Guardar
                    </button>
                    <button
                        className={Style.form_button}
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
