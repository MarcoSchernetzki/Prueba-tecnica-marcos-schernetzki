import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
