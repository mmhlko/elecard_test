import { memo } from "react";
import AppRouter from "pages/AppRouter";
import { Header } from "modules/header";
import { Footer } from "modules/footer";
import 'react-photo-view/dist/react-photo-view.css';

const App = () => {
    return (
        <>
            <Header />
            <main >
                <AppRouter />
            </main>
            <Footer />
        </>
    )
}

export default memo(App);