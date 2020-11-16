import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="option-item">
                        <form className="search-box">
                          <input type="text" className="form-control" placeholder="Search" />
                          <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                      </div>
            </div>
        );
    }
}

export default Search;