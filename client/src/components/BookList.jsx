import React, { useState } from "react"
import { useQuery } from '@apollo/client';
import{getBooksQuery} from "../queries/queries"


//Components
import BookDetails from "./BookDetails";


function BookList() {

      const [selected,setSelect] = useState({selected:null})

      const { loading, data } = useQuery(getBooksQuery);

      function displayBooks(){
            
            if(loading){
                  return(
                        <div>Loading Books...</div>
                  )
            }
            else{
                  return data.books.map(book=>{
                        return (
                              <li key={book.id} onClick={(e)=>{setSelect({selected:book.id})}}>{book.name}</li>
                        )
                  })
            }
      }


      
      return (
      <div>
            <ul id="book-list">
                  {displayBooks()}
            </ul>
            <BookDetails bookId={selected.selected}/>
      </div>
      );
}

export default BookList;
