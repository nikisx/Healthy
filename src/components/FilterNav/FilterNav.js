import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './FilterNav.css'

class FilterNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( 
            <ul className="filter-nav">
               <NavLink className = "filter-item" activeClassName="filter-active" to="/categories/all" exact>All</NavLink>
                <NavLink className = "filter-item" activeClassName="filter-active" to="/categories/vegan">Vegan</NavLink>
                <NavLink className = "filter-item" activeClassName="filter-active" to="/categories/vegetarian">Vegetarian</NavLink>
               <NavLink className = "filter-item" activeClassName="filter-active" to="/categories/meat">Meat</NavLink>
            </ul>
        );
    }
}

export default FilterNav;