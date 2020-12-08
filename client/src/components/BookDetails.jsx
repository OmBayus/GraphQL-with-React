import React from "react"
import {getBookQuery} from "../queries/queries"
import { useQuery } from '@apollo/client';

function BookDetails( { bookId } ) {

      const { data,loading } = useQuery(getBookQuery, {
            variables: { id:bookId },
          });
      
      function displayBookDetails(){
            if(!loading){
                  if(data.book){
                        const book = data.book
                        return(
                              <div>
                                    <h2>{book.name}</h2>
                                    <p>{book.genre}</p>
                                    <p>{book.author.name}</p>
                                    <p>All book by this author:</p>
                                    <ul className="other-books">
                                          {book.author.books.map(item=>{
                                                return <li key={item.id}>{item.name}</li>
                                          })}
                                    </ul>
                              </div>
                        )
                  }
                  else{
                        return(
                              <div>No book selected...</div>
                        )
                  }
            }
      }


      return (
      <div id="book-details">
            {displayBookDetails()}
      </div>
      );
}

export default BookDetails;
