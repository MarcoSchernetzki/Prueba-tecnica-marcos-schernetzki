import { useNavigate } from "react-router-dom";
import { Menu } from "../menu/menu";
import Style from "./header.module.css";

export function Header() {
    const navigate = useNavigate();
    return (
        <header className={Style.container_header}>
            <h1>ATRES player</h1>
            <img
                src="./ATRESplayer.svg"
                alt="logo ATRESplayer"
                width="180rem"
                className={Style.logo}
                onClick={() => {
                    navigate("/home");
                }}
            />
            <div>
                <Menu />
            </div>
        </header>
    );
}
