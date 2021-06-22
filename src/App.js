import { Component } from "react";
import "./App.css";
import SearchLoader from './components/Loader';
import Searchbar from "./components/Searchbar";
import API from './services/API';
import Modal from './components/Modal';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';


class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    largeImageURL: '',
    isLoading: false,
  };

  componentDidMount() {
    // console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures(); 
    }
  }

  toggleModal = () => {
    this.setState(({showModal} ) => ({
      showModal: !showModal,
    }))
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, pictures: [] });   
  }

  scrollWindow() {
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
    });
  }
  
  fetchPictures = () => {
    
    const { currentPage, searchQuery, largeImageURL } = this.state;

    this.setState({ isLoading: true });
    
    const options = {
      currentPage,
      searchQuery,
      largeImageURL
    }
    API.fetchPictures(options)
      .then(pictures => {  
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          currentPage: prevState.currentPage + 1,
        }));
        this.scrollWindow()
      })
    .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleItemClick = (url, alt) => {   
    this.setState({
      largeImageURL: url
    })
    this.toggleModal()
  }

  render() {
    const { pictures, showModal, largeImageURL, isLoading } = this.state;
    return (
      <div className="App">
       
        <Searchbar
          onSubmit={this.onChangeQuery}
        />

        {isLoading && <SearchLoader />}
        
        <ImageGallery
          pictures={pictures}
          handleItemClick={this.handleItemClick}
        />

        
                 
        {pictures.length > 0 && (
          <Button onClick={this.fetchPictures}
          />)}
        
        {showModal && (
          <Modal onClose ={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>)}
                
      </div> 
    )
  }
}
       

export default App;
