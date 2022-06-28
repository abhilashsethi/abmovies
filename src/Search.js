import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext()
  return (
    <div>
      <section className='search-section'>
        <h2>Search your favourite movie</h2>
        <form action="#" onSubmit={(e)=>{e.preventDefault()}}>
          <div>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Search here' />
          </div>
        </form>
        <div className="card-error">
          <p>{ isError.show && isError.msg }</p>
        </div>
      </section>
    </div>
  )
}

export default Search
