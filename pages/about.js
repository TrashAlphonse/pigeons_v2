import styles from '../styles/About.module.css'
import Head from 'next/head'

const About = () => {
    return ( 
        <>
       <Head>
        <title>Pigeons | Interesting Facts</title>
        <meta name="description" content="Short info about pigeons." />
        <link rel="icon" href="/favicon.ico" />
       </Head>
        <div className={ styles.container }>
        <h1 className={styles.title}>Interesting Facts</h1>
        <section className={ styles.articles }>

            <article className={`${styles.article} ${styles.article1}`}>
                <h2 className={styles.articleTitle}>THEY MIGHT BE <span className={styles.highlight}>THE FIRST DOMESTICATED BIRD</span> .</h2> 
                <p>The common city pigeon (Columba livia), also known as the rock pigeon, might be the first bird humankind ever domesticated. You can see them in art dating back as far as 4500 BCE in modern Iraq, and they have been a valuable source of food for thousands of years.</p> 
            </article>

            <article className={`${styles.article} ${styles.article2}`}>
            <h2 className={styles.articleTitle}>THEY CAN FIND THEIR WAY BACK TO THE NEST <span className={styles.highlight}>FROM 1300 MILES AWAY</span> .</h2> 
            <p>The birds can do this even if they have been transported in isolation—with no visual, olfactory, or magnetic clues—while scientists rotate their cages so they dont know what direction they are traveling in. How they do this is a mystery, but people have been exploiting the pigeons navigational skills since at least 3000 BCE, when ancient peoples would set caged pigeons free and follow them to nearby land. 
            Their navigational skills also make pigeons great long-distance messengers. Sports fans in ancient Greece are said to have used trained pigeons to carry the results of the Ancient Olympics. Further east, Genghis Khan stayed in touch with his allies and enemies alike through a pigeon-based postal network.</p>
            </article>

            <article className={`${styles.article} ${styles.article3}`}>
            <h2 className={styles.articleTitle}>THEY WON OVER <span className={styles.highlight}>CHARLES DARWIN—AND NIKOLA TESLA </span> .</h2>
            <p>Pigeon-breeding was a common hobby in Victorian England for everyone from well-off businessmen to average Joes, leading to some fantastically weird birds. Few hobbyists had more enthusiasm for the breeding process than Charles Darwin, who owned a diverse flock, joined London pigeon clubs, and hobnobbed with famous breeders. Darwins passion for the birds influenced his 1868 book The Variation of Animals and Plants Under Domestication, which has not one but two chapters about pigeons (dogs and cats share a single chapter). Nikola Tesla was another great mind who enjoyed pigeons. He used to care for injured wild pigeons in his New York City hotel room. Hands down, Teslas favorite was a white female—about whom he once said: <blockquote cite="https://books.google.ru/books"><i>I loved that pigeon, I loved her as a man loves a woman and she loved me. When she was ill, I knew and understood; she came to my room and I stayed beside her for days. I nursed her back to health. That pigeon was the joy of my life. If she needed me, nothing else mattered. As long as I had her, there was a purpose in my life.</i></blockquote> Reportedly, he was inconsolable after she died.</p>
            </article>

            <article className={`${styles.article} ${styles.article4}`}>
            <h2 className={styles.articleTitle}>THEY <span className={styles.highlight}>SAVED THOUSANDS OF HUMAN LIVES</span> DURING WORLD WARS I AND II.</h2>
            <p>Pigeons homing talents continued to shape history during the 20th century. In both World Wars, rival nations had huge flocks of pigeon messengers. (America alone had 200,000 at its disposal in WWII.) By delivering critical updates, the avians saved thousands of human lives. One racing bird named Cher Ami completed a mission that led to the rescue of 194 stranded U.S. soldiers on October 4, 1918.</p>
            </article>

        </section>
        </div>
        </>
     );
}
 
export default About;