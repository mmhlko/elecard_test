import { Logo } from "components/logo/Logo";
import s from "./styles.module.scss";
import classnames from "classnames";
import { LegacyRef, memo } from "react";

type THeaderProps = {
    headerRef: LegacyRef<HTMLElement>
}

export const Header = memo(({headerRef}: THeaderProps) => {  

    return (
        <header ref={headerRef} className={s.wrapper}>
            <div className={classnames("container", s.header)}>
                <Logo />
            </div>
        </header>
    );
})