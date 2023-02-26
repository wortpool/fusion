import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './logo.svg';
import light from './light.png';
import alert from './alert.png';
import example from './example.png'
import { useDispatch, useSelector } from 'react-redux';
import burger from './navigation-bar.png'
import { useEffect, useState } from 'react';
import { Cookies, useCookies } from 'react-cookie'

const Header = () => {
    const isLogin = useSelector(store => store.isLogin)
    // const isLogin = store.isLogin
    const [isOpen, setIsOpen] = useState(false);
    const [numberOfLink, setNumberOfLink] = useState()
    const [cookies, setCookies, removeCookies] = useCookies('user')
    let skin
    if(isLogin){
        skin = cookies.user.decoded_skin;
    } 

    const dispatch = useDispatch()
    // const adminArray = ['Stilever', 'UnleashDaBeast']
    
    const links = [
        {
            href: '/news',
            title:  'Новости'
        },
        {
            href: '/rules',
            title:  'Правила'
        },
        {
            href: '/guides',
            title:  'Гайды'
        },
        {
            href: '/map',
            title:  'Карта'
        }
    ]

    isOpen ? document.body.classList.add('lock') : document.body.classList.remove('lock')

    function createLinks(classOfLi){
        return links.map((element, index) => {
            return(
                <li className={`${classOfLi}`} key={index} onClick={() => setNumberOfLink(index)}>
                    <Link to={element.href} style={numberOfLink === index  ? {color: '#7939FF'} : {color: '#A9A9A9'}}>{element.title}</Link>
                </li>
            )
        })
    }
    
    return (    
        <header className={classes.header}>
            <div className="container">
                <div className={classes.header__inner}>
                    {window.innerWidth <= 768 && <div className={classes.burger} onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}}><img src={burger} alt="" style={{zIndex: 100, position: 'relative'}}/></div>} 
                    <div className={classes.logo}>
                        <Link to="/" onClick={() => setNumberOfLink(null)}><img src={logo} alt=""/></Link>
                        <ul className={classes.links}>
                            {createLinks(classes.link)}
                        </ul>
                    </div>
                            
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {isLogin === true 
                        ?   
                        <>
                            <div className={classes.alerts} >
                                <img src={alert} alt="" />
                            </div>
                            <div className={classes.avatar}>
                               <Link to={'/home'}><button><img src={`https://crafatar.com/avatars/${skin}?overlay`} alt="" style={{ borderRadius: '18px' }} width='45' height='45' /></button></Link>  
                            </div>
                        </>
                        :   
                        <Link to="/login" className={classes.button} onClick={() => setNumberOfLink(null)}>Войти</Link>
                        }
                    </div>
                </div>
            </div>
            <div className={`${classes.burger__inner} ${isOpen ? classes.active : ''}`}>
                <ul className={classes.burger__links}>
                    {createLinks(classes.burger__link)}
                </ul> 
            </div>
            <div className={classes.light}>
                {/* <img src={light} alt="" style={{width: '100%', height: '100%'}}/> */}
            </div>
        </header>
    );
}
 
export default Header;


