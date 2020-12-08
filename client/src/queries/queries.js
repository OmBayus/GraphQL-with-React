import {gql} from "@apollo/client"


const getBooksQuery = gql`
{
      books{
            name
            id
      }
}
`


const getAuthorsQuery = gql`
      {
            authors{
                  name
                  id
            }
      }
`


const getBookQuery = gql`
      query($id:ID){
            book(id:$id){
                  id
                  name
                  genre
                  author{
                        id
                        name
                        age
                        books{
                              name
                              id
                        }
                  }
            }
      }
`

export {getAuthorsQuery,getBooksQuery,getBookQuery}