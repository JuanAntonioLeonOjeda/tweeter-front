import { useContext } from "react"
import SearchContext from "../../context/searchContext"

export default function SearchBar () {
  const { setSearch } = useContext(SearchContext)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
    }
  }

  return (
    <>
      <input type="number" placeholder="Search User Id" onKeyDown={handleKeyDown}/>
    </>
  )
} 