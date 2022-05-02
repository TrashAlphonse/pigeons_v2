import styles from '../styles/Navbar.module.css'


const Search = (props) => {

    const onChange = e => {
        props.onChange(e)
    }

    const onSubmit = e => {
        props.onSubmit(e)
    }

    const onClick = () => {
        props.onClick()
    }

    return ( 
        <section className={styles.search}>
            <form onSubmit={onSubmit}>
                      <div>
                        <input className={styles.searchInput} value={props.value} type="search" id="search" name="q" placeholder="Search a pigeon..." aria-label="Search through different pigeons" onChange={onChange} />
                        <button className={styles.searchBtn} type='submit'>Search</button>
                      </div>
            </form>
            {props.pigeons.length < props.birds.length && <button onClick={onClick} className={styles.searchBtn}>View all</button>}
        </section>
     );
}
 
export default Search;