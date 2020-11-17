import React from "react"

function searchTable(){
    let filter = document.getElementById('filter').value.toUpperCase();

    let tableRecord = document.getElementById('tableRecord');

    let tr = tableRecord.getElementsByTagName('tr');

    for(var i = 0; i < tr.length; i ++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
                }                
                else{
                    tr[i].style.display ="none";
            }
        }
    }
}
//don't know if I should be rendering the search here

//function won't work inside of this page

//still don't know how to do this

function Search() {
    return (
        <input type="text" id="sBar" onkeyup={searchTable()} placeholder="Search by name.." />
    )
}

export default Search