import {Component} from 'react';
import "./search-box.style.css";

class SearchBox extends Component {
    render() {
        return (
                <input
                className="search-box" 
                type="search" 
                placeholder="Search monsters" 
                onChange={this.props.onSearchChangeHandler}
                />
        )
    }
}

export default SearchBox;