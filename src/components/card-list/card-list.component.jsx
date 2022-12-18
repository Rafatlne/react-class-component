import { Component } from 'react';

import Card from '../card/card.component'
import SearchBox from '../search-box/search-box.component';
import './card-list.style.css'

class CardList extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    onSearchChangeHandler = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField}
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => 
            this.setState(
                () => {
                    return {monsters: users}
                },
                () => {
                    console.log(this.users)
                }
            )
        )
    }

    render() {
        const {monsters, searchField} = this.state;
        const { onSearchChangeHandler } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField)
        })
        return (
            <div>
                <h1 className="app-title">Monsters Rolodex</h1>
                <SearchBox onSearchChangeHandler={onSearchChangeHandler}/>
                <div className="card-list">
                    {filteredMonsters.map((monster) => {
                        return (
                            <Card monster={monster} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CardList;