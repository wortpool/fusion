import { Link, useLocation } from "react-router-dom";
import footerLogo from "./footer-logo.svg";
import classes from "./Footer.module.css"

const Footer = () => {
    const location = useLocation();

    return ( 
        <footer className="footer" style={location.pathname === '/' ? {position: 'relative'} : {position: 'absolute'}}>
            <div className={classes.container}>
                <div className={classes.footer__inner}>
                    <div className="footer__image">
                        <Link to="/"><img src={footerLogo} alt="" /></Link>
                    </div>
                    <div className={classes.footer__text}>
                        Copyright © Fusion 2023. Все права защищены. Сервер Fusion никаким  образои не относятся к Mojang Studios.
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;