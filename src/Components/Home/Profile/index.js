import styles from './styles.module.css';
import avatar from './avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { isLoginFunc } from '../../../data/dataSlice';
import configData, { username } from '../config';
import { useEffect } from 'react';
import { Cookies, useCookies } from 'react-cookie'


const Profile = () => {
    const isLogin = useSelector(store => store.isLogin);
    const [cookies, setCookies, removeCookies] = useCookies('user')

    const dispatch = useDispatch()
    const skin =cookies.user.decoded_skin;
    const realname = cookies.user.user_data.realname
    
    return ( 
        <div className={styles.profile}>
            <div className={styles.profile__UI}>
                <div className={styles.avatar}>
                    <img src={`https://crafatar.com/avatars/${skin}?overlay`} alt="avatar" style={{ borderRadius: '9px' }} width='180' height='180'/>
                </div>
                <div className={styles.button}><button><span>Редактировать</span></button></div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.card__title}>Основная</div>
                        <div className={styles.card__money}>23 АР</div>
                        <div className={styles.card__pin}>123123</div>
                    </div>
                </div>
            </div>
            <div className={styles.profile__info}>
                <div className={styles.nickname}>Привет, {realname} </div>
                <div className={styles.description}>БигБосс статус сайта йоу</div>
                <div className={styles.roles}>
                    <div className={styles.role__administration + ' ' + styles.role}>Администратор</div>
                    <div className={styles.role__mayor + ' ' + styles.role}>Мэр</div>
                    <div className={styles.role__policeman + ' ' + styles.role}>Полицейский</div>
                    {/* <div className={styles.role__policeman + ' ' + styles.role}>Полицейский</div> */}
                </div>
                <button onClick={() => {removeCookies('user'); dispatch(isLoginFunc(false))}}>LogOut</button>
            </div>
        </div>
    );
}
 
export default Profile;