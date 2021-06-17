import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import API from './services/API'

class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: ''
  };

  componentDidMount() {
    // console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures(); 
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, pictures: [] });   
  }

  fetchPictures = () => {
    
    const { currentPage, searchQuery } = this.state;
    
    const options = {
      currentPage,
      searchQuery
    }
    API.fetchPictures(options)
      .then(pictures => {  
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          currentPage: prevState.currentPage + 1,
        }));
      });
  }

  render() {
    const { pictures } = this.state;
    return (
      <div>
        <h1>Pictures</h1>

        <Searchbar onSubmit={this.onChangeQuery}/>

        <ul>
          {pictures.map(({ id, userImageURL, tags }) => (
            <li key={id}> 
              <img src={userImageURL} alt={tags}/>
            </li>
          ))}
        </ul>
        
        {pictures.length > 0 && (
          <button type="button" onClick={this.fetchPictures}>Load more...</button>)}
      </div>
    )
  }
}

  //     <Searchbar>
  //       <ImageGallery>
  //         <ImageGalleryItem>
  //         <Loader>
  //             <Button>
  //               <Modal></Modal>

export default App;
