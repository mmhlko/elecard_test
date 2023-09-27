import {SyntheticEvent, memo} from "react";
import {Link, useLocation} from "react-router-dom";
import s from "./styles.module.scss";

export const Logo = memo(() => {

    const location = useLocation();
    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault();
        }
    };

    return (
        <Link to={"/"} className={s.logo} onClick={handleClick}>
            <h2 className={s.text}>LOGO</h2>
        </Link>
    );
})