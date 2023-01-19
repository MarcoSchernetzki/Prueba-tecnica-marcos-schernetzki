import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSite } from "../../../site/hook/useSite";

export function CreateForm() {
    const navigate = useNavigate();

    const { handleAdd } = useSite();
    const [addFormState, setAddFormState] = useState({
        name: "",
        description: "",
        path: "visual 2",
        publicPath: "",
        key: "72373242672",
    });

    const handleInput = (ev) => {
        const element = ev.target;
        setAddFormState({
            ...addFormState,
            [element.name]: element.value,
        });
    };

    const handleAddSubmit = (ev) => {
        ev.preventDefault();
        handleAdd(addFormState);
    };

    return (
        <div>
            <form onSubmit={handleAddSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ingrese un nombre"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Ingrese una descripcion"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="path"
                        placeholder="Ingrese la direccion URL"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="publicPath"
                        placeholder="Ingrese la direccion URL publica"
                        onInput={handleInput}
                    />
                </label>

                <label>
                    <button type="submit">Guardar</button>
                    <button
                        onClick={() => {
                            navigate("");
                        }}
                    >
                        Cancelar
                    </button>
                </label>
            </form>
        </div>
    );
}

export default CreateForm;
