import s from "./styles.module.scss";
import classNames from "classnames";

export const Footer = () => {
    return (
        <footer className={classNames(s.footer, "container")}>
            <span>© Elecard 2023</span>
        </footer>
    )
}