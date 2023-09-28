import { CSSProperties, memo, useEffect, useRef, useState } from "react";
import AppRouter from "pages/AppRouter";
import { Header } from "modules/header";
import { Footer } from "modules/footer";
import 'react-photo-view/dist/react-photo-view.css';

const App = () => {
    const [mainMarginTop, setMainMarginTop] = useState<number>();
    const headerRef = useRef<HTMLElement>(null);
    const style = {"--margin-top": `${mainMarginTop}px`} as CSSProperties;

    useEffect(() => {
        setMainMarginTop(headerRef.current.clientHeight)        
    }, [])

    return (
        <>
            <Header headerRef={headerRef}/>
            <main style={style}>
                <AppRouter />
            </main>
            <Footer />
        </>
    )
}

export default memo(App);