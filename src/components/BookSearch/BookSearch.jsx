import { useState } from "react";

const BookSearch = (props) => {
  const [formData, setFormData] = useState({query:''})

  const handleChange = (evt) =>{
    evt.preventDefault()
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) =>{
    evt.preventDefault()
    props.handleBookSearch(formData)
  }

  return ( <>
  <form onSubmit={handleSubmit}>
    <input name='query' type="text" autoComplete="off" value={formData.query}  onChange={handleChange} />
    <button type="submit">Search</button>
  </form>
  </> );
}

export default BookSearch;