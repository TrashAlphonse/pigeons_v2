import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { birds } from '../db/birds.js'
import Link from 'next/link'
import { formatName } from '../utils/Format'
import { useState } from 'react'
// import Search from '../comps/Search'

export default function Home() {

  const [pigeons, setPigeons] = useState(birds)
  const [searchBird, setSearchBird] = useState('')

  const handleChange = e => {
    const { value } = e.target
    setSearchBird(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredPigeons = birds.filter(bird => bird.name.toLowerCase().includes(searchBird.toLowerCase()))
    setPigeons(filteredPigeons) 
}

const handleClick = () => {
  setPigeons(birds)
}

  return (
      <>
      <Head>
        <title>Pigeons | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Search value={searchBird} onChange={handleChange} onSubmit={handleSubmit} onClick={handleClick} pigeons={pigeons} birds={birds} /> */}
      <section className={styles.cards}>
      <h1 className='sr-only'>Pigeon species</h1>
      { pigeons.map(bird => (
        <article className={styles.card} key={ bird.id }>
        <h2>{ bird.name }</h2>
        <Link href={`/${bird.id}`} scroll={false}>
          <div className={styles.cardimg}>
            <img alt={`${bird.name} drawing`} className={styles.img} decoding="async" loading="lazy" src={`/images/${formatName(bird.name)}/logo.jpg`} height="240px" />
          </div>
        </Link>
        </article>
      ))}
      {pigeons.length === 0 && <p>Sorry, there're no such pigeons at the moment...</p>}
    </section>
    </>
  )
}
