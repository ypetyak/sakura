import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return(
            <div className="search-div">
                <form onSubmit={this.onFormSubmit} className="form-div">
                <label> Social Media Analysis: </label>
                <input
                    type="text"
                    onChange={this.onInputChange}
                    value={this.state.term}
                    placeholder="Enter Company or Industry"
                />
                <button>
                    Search
                </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;
