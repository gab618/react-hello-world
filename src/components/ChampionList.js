import React, { Component } from 'react';

import ChampionItem from './ChampionItem'

class ChampionList extends Component {
    state = {
        newChampion: '',
        champions: [
            'Ezreal',
        ]
    };

    componentDidMount() {
        const champions = localStorage.getItem('champions');

        if (champions) {
            this.setState({champions: JSON.parse(champions)});
        }
    }

    componentDidUpdate(_,prevState){
        if(prevState.champions !== this.state.champions){
            localStorage.setItem('champions', JSON.stringify(this.state.champions))
        }
    }

    handleInputChange = e => {
        this.setState({ newChampion: e.target.value });        
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            champions: [...this.state.champions, this.state.newChampion],
            newChampion: '',
        })
    }

    handleDelete = (champion) => {
        this.setState({ champions: this.state.champions.filter(t => t !== champion) })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.champions.map(champion => (
                        <ChampionItem
                          key={champion}
                          champion={champion}
                          onDelete={() => this.handleDelete(champion)}
                        />
                    )) }
                </ul>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  value={this.state.newChampion}
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default ChampionList;