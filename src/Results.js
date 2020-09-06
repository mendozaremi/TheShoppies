import React from 'react';
import MovieItem from './MovieItem';

const Results = ({ movies }) => {
  console.log(`this is movies ${movies.title}`);

  return (
    <div className="movie_container">
      <section className="movieCards">
        {movies.map((movie) => (
          <MovieItem key={movie.Year} movie={movie}></MovieItem>
        ))}
      </section>
    </div>
  );
};

export default Results;

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
// import ScotchInfoBar from './ScotchInfoBar';
// import './styles.css';

// function App() {
//   const [books, setBooks] = useState(null);

//   const fetchData = async () => {
//     const response = await axios.get(
//       'https://www.anapioficeandfire.com/api/books?pageSize=30'
//     );

//     setBooks(response.data);
//   };

//   return (
//     <div className="App">
//       <h1>Game of Thrones Books</h1>
//       <h2>Fetch a list from an API and display it</h2>

//       {/* Fetch data from API */}
//       <div>
//         <button className="fetch-button" onClick={fetchData}>
//           Fetch Data
//         </button>
//         <br />
//       </div>

//       {/* Display data from API */}
//       <div className="books">
//         {books &&
//           books.map((book, index) => {
//             const cleanedDate = new Date(book.released).toDateString();
//             const authors = book.authors.join(', ');

//             return (
//               <div className="book" key={index}>
//                 <h3>Book {index + 1}</h3>
//                 <h2>{book.name}</h2>

//                 <div className="details">
//                   <p>👨: {authors}</p>
//                   <p>📖: {book.numberOfPages} pages</p>
//                   <p>🏘️: {book.country}</p>
//                   <p>⏰: {cleanedDate}</p>
//                 </div>
//               </div>
//             );
//           })}
//       </div>

//       <ScotchInfoBar seriesNumber="7" />
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
