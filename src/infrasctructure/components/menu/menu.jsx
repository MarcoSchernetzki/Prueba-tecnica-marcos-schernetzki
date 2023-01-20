import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

export function Menu() {
    const menuOptions = [{ id: "1", path: "create", label: "Añade un sitio" }];
    return (
        <nav className={Styles.header_nav}>
            <ul className={Styles.header_nav_ul}>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link
                            className={Styles.header_nav_ul_link}
                            to={item.path}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
