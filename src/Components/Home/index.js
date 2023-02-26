import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './styles.module.css'

const Home = () => {        
    const isLogin = useSelector(store => store.isLogin);
    
    if (isLogin === false) {
        return <Navigate to={'/login'} replace/>;
    }
    
    return ( 
        <>
            <Navbar />
        </>
    );

}
 
export default Home;