import { Logo } from "components/logo/Logo";
import s from "./styles.module.scss";
import classnames from "classnames";
import { memo } from "react";

export const Header = memo(() => {  
    
    return (
        <header className={s.wrapper}>
            <div className={classnames("container", s.header)}>
                <Logo />
            </div>
        </header>
    );
})