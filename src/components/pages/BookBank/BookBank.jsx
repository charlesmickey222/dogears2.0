import BookSearch from "../../BookSearch/BookSearch";
import { bookSearch } from "../../../services/api-calls";
import { useState } from "react";

const BookBank = () => {
  const [books, setBooks] = useState([])
  const [searchData, setSearchData] = useState([])
  const handleBookSearch =   async formData => {
    const searchResults = await bookSearch(formData)
    console.log(searchResults)
    setSearchData(searchResults)
    let bookList = searchResults.docs
    setBooks(bookList)
  }
  return ( 
    <>
    <h1>This is the Book Bank</h1>
    <BookSearch handleBookSearch={handleBookSearch}/>
    <section>
      {searchData.numFound ? 
      books.map(book =>
        <div key={book.key}>
          <h4>{book.title}</h4>
        </div>)
      : <h2>search for a Book</h2>}
    </section>
    </> );
}

export default BookBank;