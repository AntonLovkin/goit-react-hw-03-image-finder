import { Component } from "react";

class Searchbar extends Component {
    state = { query: ' '}
    
    handleChange = event => {
        this.setState({query: event.currentTarget.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.query);

        this.setState({ query: ''})
        // console.log(this.state);
    }

    render() {
        return (
          <header className="Searchbar">
            <form onSubmit={this.handleSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                   <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                {/* <button type="submit" className="SearchForm-button">Search</button> */}
            </form>
          </header>
        )
    }
                

}

export default Searchbar;