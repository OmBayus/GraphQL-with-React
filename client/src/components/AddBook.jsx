import React, { useState } from "react"
import { useQuery,useMutation } from '@apollo/client';
import{getAuthorsQuery,getBooksQuery} from "../queries/queries"
import{addBookMutation} from "../queries/mutation"




function AddBook() {

      const [NewBook,setNewBook] = useState({
            name:"",
            genre:"",
            authorId:""
      })

      function handleChange(e){
            const {name,value} = e.target
            setNewBook(prevValue=>{
                  return {
                        ...prevValue,
                        [name]: value
                  }
            })


      }

      const { loading, data } = useQuery(getAuthorsQuery);
      const [addNewBook] = useMutation(addBookMutation);

      function displayAuthors(){
            
            if(loading){
                  return(
                        <option disabled>Loading authors...</option>
                  )
            }
            else{
                  return data.authors.map(author=>{
                        return (
                              <option key={author.id} value={author.id}>{author.name}</option>
                        )
                  })
            }
      }

      function submitForm(e){

            e.preventDefault()
            

            addNewBook({
                  variables:{
                        name:NewBook.name,
                        genre:NewBook.genre,
                        authorId:NewBook.authorId
                  },
                  refetchQueries: [{query: getBooksQuery }]
            })


      }

      
      


      return (
      <form id="add-book" onSubmit={submitForm}>

            <div className="field">
                  <label>Book name:</label>
                  <input onChange={handleChange} type="text" name="name"/>
            </div>

            <div className="field">
                  <label>Genre:</label>
                  <input onChange={handleChange} type="text" name="genre"/>
            </div>

            <div className="field">
                  <label>Author:</label>
                  <select onChange={handleChange} name="authorId">
                        <option>Select author</option>
                        {displayAuthors()}
                  </select>
            </div>

            <button type="submit">+</button>
            
      </form>
      );
}

export default AddBook;
