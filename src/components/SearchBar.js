import React from 'react';

class SearchBar extends React.Component {

    state = {
        terms: ''
    }

    //Това не работи, защото this не реферира към класа
    // onFormSubmit(e){
    //     e.preventDefault();
    //     console.log(this.state.terms)
    // }
    // за това трябва да преобразим функцията в arrow function,
    // която bind-ва this към всичко във функцията


    onFormSubmit = (e) => {
        e.preventDefault();

        //изпълняваме ф-я от parent-a
        this.props.onSubmit(this.state.terms)
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input
                            value={this.state.terms}
                            onChange={e => this.setState({terms: e.target.value})}
                            type="text" name="search text" placeholder="Search ..."/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
