import { useEffect, useState } from 'react';
import Profile from '../Profile';
import styles from './styles.module.css';

const Navbar = () => {
    const [tabs, setTabs] = useState('');

    function renderSwitch(tabs){
        if(tabs.length > 0){
            switch(tabs){
                case 'profile': 
                    return <Profile /> 
                default: 
                    return '404 -> page not found'
            }
        }else{
            setTabs('profile')
        }
    }
    
    return ( 
        <>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.inner}>
                        <ul className={styles.items}>
                            <li className={tabs ==='profile' ? `${styles.item} ${styles.active}` : styles.item} onClick={() => setTabs('profile')}>Профиль</li>
                            <li className={tabs ==='news' ? `${styles.item} ${styles.active}` : styles.item} onClick={() => setTabs('news')}>Новости</li>
                            <li className={tabs ==='bank' ? `${styles.item} ${styles.active}` : styles.item} onClick={() => setTabs('bank')}>Банк</li>
                            <li className={tabs ==='players' ? `${styles.item} ${styles.active}` : styles.item} onClick={() => setTabs('players')}>Игроки</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.tab}>
                    {renderSwitch(tabs)}
                </div>
            </div>
        </>
    );
}
 
export default Navbar;