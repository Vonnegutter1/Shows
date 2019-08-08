// import React from 'react';

// // This is one of our simplest components
// // It doesn't have local state, so it can be a function component.
// // It doesn't dispatch any redux actions or display any part of redux state
// // or even care what the redux state is, so it doesn't need 'connect()'

// class addNew extends Component {

//     state = {
//       newShow: {

//       }
//     }

//   handleChangeFor = (propertyName, event) => {
//     this.setState({
//       newhandleSubmit = (event) => {
//         event.preventDefault();
//         console.log(`Adding book`, this.state.newBook);
//         axios.post(`/books`, this.state.newBook)
//           .then(response => {
//             // call the mthod passed inon props to get books again
//             this.props.afterUpdate();
//             this.setState({
//               newBook: {
//                 title: '',
//                 author: '',
//               }
//             })
//           })
//           .catch(error => {
//             console.log(error);
//             alert(`Sorry, counldn't add book at this time. Try again later`);
//           })
//       }

// handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(`Adding book`, this.state.newBook);
//         axios.post(`/books`, this.state.newBook)
//           .then(response => {
//             // call the mthod passed inon props to get books again
//             this.props.afterUpdate();
//             this.setState({
//               newBook: {
//                 title: '',
//                 author: '',
//               }
//             })
//           })
//           .catch(error => {
//             console.log(error);
//             alert(`Sorry, counldn't add book at this time. Try again later`);
//           })
//       }

// : {
//         ...this.state.newBook,
//         [propertyName]: event.target.value
//       }
//     })
//   }
//   <div>
//     <p>
//       <h3>Add New Show</h3>
//      <form onSubmit={this.handleSubmit}>

//         <input required placeholder="Band"
//           // value={this.state.newBook.title}
//           // onChange={(event) => this.handleChangeFor('band', event)}
//         />

//         <input required placeholder="Author"
//           value={this.state.newBook.author}
//           onChange={(event) => this.handleChangeFor('author', event)}
//         />
//         <br />
//         <button type="submit">
//           Add New
//         </button>
//       </form>
//     </p>
//   </div>
// };

// export default InfoPage;
