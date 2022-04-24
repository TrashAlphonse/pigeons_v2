import { birds } from '../db/birds.js'
import Head from 'next/head'
import styles from '../styles/Item.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { formatName } from '../utils/Format'


export const getStaticPaths = async () => {

    const paths = birds.map(bird => {
        return {
            params: { id: bird.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    return {
        props: {
            bird: birds[context.params.id - 1]
        }
    }
}


const Bird = ({bird}) => {

    return ( 
        <>
        <Head>
            <title>{ `Pigeons | ${bird.name}`} </title>
            <meta name="description" content={ `Info about ${bird.name}`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.content}>
            <div className={styles.carousel}>
            <Carousel showThumbs={false} emulateTouch={true} showIndicators={false}>
                <div>
                    <img className={styles.img} decoding="async" loading="lazy" src={`/images/${formatName(bird.name)}/1.jpg`} height="400px"/>
                </div>
                <div>
                    <img className={styles.img} decoding="async" loading="lazy" src={`/images/${formatName(bird.name)}/2.jpg`} height="400px" />
                </div>
                <div>
                    <img className={styles.img} decoding="async" loading="lazy" src={`/images/${formatName(bird.name)}/3.jpg`} height="400px" />
                </div>
            </Carousel>
            </div>

            <div className={styles.desc}>
                <h1 className={styles.title}>{bird.name}</h1>
                <p>{bird.summary && bird.summary}</p>
                {bird.food && <h3 className={styles.subtitle}>What they eat</h3>}
                <p>{bird.food && bird.food}</p>
                {bird.habitat && <h3 className={styles.subtitle}>Where to find</h3>}
                <p>{bird.habitat && bird.habitat}</p>
            </div>
        </div>
        </>
     );
}
 
export default Bird;