import { CreateForm } from "./createForm/createForm";
import Style from "./create.module.css";

export function CreatePage() {
    return (
        <>
            <h2 className={Style.form_tittle}>Añade un sitio</h2>
            <div>
                <CreateForm />
            </div>
        </>
    );
}
