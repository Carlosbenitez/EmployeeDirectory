import React from "react"

//don't know if I should be rendering the search here

//function won't work inside of this page

function Search(props) {
    return (
        <input type="text" id="sBar" name="search" onChange={props.handleInputChange} 
        placeholder="Search by name.." value={props.search} />
    )
}

export default Search