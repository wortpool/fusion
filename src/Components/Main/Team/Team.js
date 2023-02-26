import styles from './style.module.css';
import player from './player.png'
import arrowPrev from './arrow-left.png'
import arrowNext from './arrow-right.png'
import { useState } from 'react';
import firstSkin from './first-skin.png'
// import secondSkin from './second-skin.png'
// import thirdSkin from './third-skin.png'
// import fourSkin from './four-skin.png'
// import fourSkin from './four-skin.png'
// import fourSkin from './four-skin.png'
// import fourSkin from './four-skin.png'
// import fourSkin from './four-skin.png'

const Team = () => {
    const [index, setIndex] = useState(0);

    const arrayOfInfo = [
        {
            nickname: 'Stilever_',
            roleText: 'Администратор',
            roleStyle: styles.role__administation,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the rele",
            skinLink: firstSkin,
            avatarLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            roleText: 'Игрок',
            roleStyle: styles.role__player,
            description: 'Checking to do2',
            skinLink: firstSkin,
            photoLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            description: 'The best "React Dev" in the world',
            photoLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            description: 'Checking to do4',
            photoLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            description: 'Checking to do5',
            photoLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            description: 'Checking to do6',
            photoLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            description: 'Checking to do7',
            photoLink: null,
        },
        {
            nickname: 'UnleashDaBeast',
            description: 'Checking to do8',
            photoLink: null,
        }
    ]

    const tabsIncrement = () => {
        index === 7 ? setIndex(0) : setIndex(index + 1)
    } 

    const tabsDecrement = () => {
        index === 0 ? setIndex(7) : setIndex(index - 1)
    }

    return ( 
        <section className={styles.team}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.info}>
                        <div className={styles.title}>Наша команда</div>
                        <div className={styles.text}>Узнайте немного больше о тех, кто делает Fusion!</div>
                        <div className={styles.about}>
                            <div className={styles.nickname}>{arrayOfInfo[index].nickname}</div>
                            <div className={`${styles.role} ${arrayOfInfo[index].roleStyle}`}>{arrayOfInfo[index].roleText}</div>
                        </div>
                        <div className={styles.description}>
                            {arrayOfInfo[index].description}
                        </div>
                        <div className={styles.dots}>
                            <div className={styles.players__inner}>
                                <div className={styles.players}>
                                    {
                                        arrayOfInfo.map((e, id) => {
                                            return(
                                                <div className={index === id ?  `${styles.player} ${styles.active}` : styles.player} key={id}>
                                                    <img src={player} alt=""/>
                                                </div>   
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.arrays}>
                                    <div className={`${styles.array} ${styles.array__prev}`} onClick={tabsDecrement}>
                                        <img src={arrowPrev} alt="" />
                                    </div>
                                    <div className={`${styles.array} ${styles.array__next}`} onClick={tabsIncrement}>
                                        <img src={arrowNext} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__img}>
                        <div className={styles.img__inner}>
                            <img key={index} src={arrayOfInfo[index].skinLink} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Team;