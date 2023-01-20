import { UpdateForm } from "./updateForm/updateForm";
import Style from "../createPage/create.module.css";

export function UpdatePage() {
    return (
        <>
            <h2 className={Style.form_tittle}>Edita tu sitio</h2>
            <UpdateForm />
        </>
    );
}
