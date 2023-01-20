import { Menu } from "../menu/menu";
import Style from "./header.module.css";

export function Header() {
    return (
        <header className={Style.container_header}>
            <h1>ATRES player</h1>
            <div>
                <Menu />
            </div>
        </header>
    );
}
