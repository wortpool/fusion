import Info from '../UI/Info';
import styles from './style.module.css';
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addingData, isLoginFunc } from '../../data/dataSlice';


const Login = () => {

    const [username, setUsername] = useState('')    
    const [password, setPassword] = useState('')
    const [validationLogin, setValidationLogin] = useState(false)
    const [validationPassword, setValidationPassword] = useState(false);
    const unsuccessEl = useRef()

    const navigateToHome = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector(store => store.isLogin)

    if(isLogin === true){
        return <Navigate to={'/home'} replace/>
    }

    function submit(){
        if(username && password){
            axios.post('http://localhost:5111/api/authorization',{
                username: username,
                password: password
            }).then(response => {
                // response = response.data;В
                console.log('\nresponce: ', response);

                if(response.data.msg === 'error'){
                    unsuccessEl.current.style.right = '50px';
                    setTimeout(() => {
                        unsuccessEl.current.style.right = '-2000px';
                    }, 2000)
                }else{
                    const cookieTime = () => {
                        const nowDate = new Date()
                        return new Date(nowDate.getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString()
                    }

                    document.cookie = `user=${JSON.stringify(response.data)}; expires=${cookieTime()}; path=/;`
                    dispatch(isLoginFunc(true))
                    navigateToHome('/home')
                }
            }).catch( (err) => {
                console.log('\nerr: ', err);
            })
        }else{
            username ? setValidationLogin(false) : setValidationLogin(true)
            password ? setValidationPassword(false) : setValidationPassword(true)
        }
    }

    return ( 
        <section className={styles.login}>
            <div className={styles.unsuccess} ref={unsuccessEl}>Login unsuccessful</div>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.autorization}>
                        <div className={styles.login__title}>Авторизация</div>
                        <div className="">
                            <label htmlFor="username" className={styles.label}>Логин</label>
                            <input type="text" id='username' className={validationLogin ? styles.input + ' ' + styles.active : styles.input} placeholder='login...' onChange={e => setUsername(e.currentTarget.value)}/>
                        </div>
                        <div className="">
                            <label htmlFor="password" className={styles.label}>Пароль</label>
                            <input type="password" id='password' className={validationPassword ? styles.input + ' ' + styles.active : styles.input} placeholder='password...' onChange={e => setPassword(e.currentTarget.value)}/>
                        </div>
                        <div className="" style={{textAlign: 'center'}}>
                            <button className={styles.login__button} onClick={submit}>Вход</button>
                        </div>  
                    </div>
                    <Info />
                </div>
            </div>
        </section>
    );
}
 
export default Login;