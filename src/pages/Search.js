import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import "./Search.css"
import StudentCard from "../components/StudentCard";
import data from "../data/data.json"

export default function Search(){
  //mock data
  const studentsList = data.students

  const [ students ] = useState(studentsList)
  const [searchText, setSearchText] = useState("")

  const history = useHistory()
  const params = useParams().searchTerm

  //filtering the array to check if it contains the search term
  const filtredArray = students.filter(student => {
    return student.firstName.toLowerCase().includes(searchText) || 
    student.lastName.toLowerCase().includes(searchText) || 
    student.house.toLowerCase().includes(searchText)
  })

  //once we submit the form, the searchText is stored in the url
  const handleSubmit = (event) => {
    event.preventDefault()
    history.push(`/search/${searchText}`)
    setSearchText("")
  }

  //useEffect is responsible for putting the params in the searchText
  //that's why we get the same results when we re-render
  useEffect(() => {
    if (params) {
      setSearchText(params)
    } 
  }, [params])

  //checking if we have any params, if so we map over the filteredArray
  //else we map over the original data
  const toMap = params ? filtredArray : students

  return (
    <div>
      <h3>Search Page</h3>
      {/* wrapping our input in a form so we can pass a function onSubmit */}
      <form onSubmit={handleSubmit}>
      <input 
        type="search" 
        value={searchText} 
        onChange={(event) => { 
          setSearchText(event.target.value.toLowerCase());
        }}
      />
      </form>

      {/* showing the amount of search results with 3 different cases:
      no results, 1 result, more than 1 */}
      <p>{toMap.length < 1 
            ? "Sorry, nothing matches your search" 
            : toMap.length === 1
            ? `${toMap.length} result`
            : `${toMap.length} results`}
      </p>

      <div className="map-container">
      {toMap.map(student => {
        return (
          <StudentCard 
            key={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
            img={student.img}
            house={student.house}
          />
        )
      })}
      </div>
    </div>
  )
}