import { useState } from 'react';
function BookList() {
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

const handleInputChange = (evt) =>{
    const{name, value} = evt.target
    setNewBook((prev)  => ({...prev,[name]: value}));
};
const [newBook, setNewBook] =useState([
  {title: '', author:''}
]);



const handleSubmit = (evt) => {
    evt.preventDefault();
   setBooks(prevBooks =>[...prevBooks, newBook]);
   setNewBook ({title: '', author:''});

};
return(
  <main>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
   <form onSubmit= {handleSubmit}>
  
  
      <div>
         <label>Title:</label>*
         <input
          type="text"
          name='title'
          value={newBook.title}
          onChange={handleInputChange}
          placeholder='Enter book title'
          required
          />
          </div>

          <div>
          <label>Author:</label>
         <input
          type="text"
          name='author'
          value={newBook.author}
          onChange={handleInputChange}
          placeholder='Enter author name'
          required
          />
          </div>
        
          <button type="submit">Add Book</button>

      </form>
      </div>


<h2>Book list</h2>
<div className="bookCardsDiv">{}</div>
    {books.map((book, index) => (
    
            <div key={index} className='bookCard'>
     <h4>{book.title}</h4>
     <p>by {book.author}</p>
     </div>
))};
</div>
</main>
    
);
};
export default BookList;