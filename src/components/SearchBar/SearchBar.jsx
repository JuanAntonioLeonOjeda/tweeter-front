export default function SearchBar () {

  const handleKeyDown = (e) => {
    console.log(e)
    // if (e.target.value)
  }

  return (
    <>
      <input type="number" placeholder="Search User Id" onKeyDown={handleKeyDown}/>
    </>
  )
} 