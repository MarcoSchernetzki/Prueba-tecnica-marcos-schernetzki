import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

export function Menu() {
    const menuOptions = [{ id: "1", path: "create", label: "Añadir" }];
    return (
        <nav className={Styles.nav}>
            <ul className={Styles.ul}>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link className={Styles.link} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
