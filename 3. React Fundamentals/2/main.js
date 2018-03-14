const GROUP = [
    {
        id: 1,
        firstName: 'Duke',
        lastName: 'Nukem',
        city: 'Kyiv',
        specialisation: 'Brutal man'
    },
    {
        id: 2,
        firstName: 'Big',
        lastName: 'Boss',
        city: 'Miami',
        specialisation: 'Boss'
    },
    {
        id: 3,
        firstName: 'Petro',
        lastName: 'Petrovych',
        city: 'Kirovograd',
        specialisation: 'Petrovych'
    },
];

const Person = React.createClass({
    render() {
        const {
            firstName,
            lastName,
            city,
            specialisation
        } = this.props;

        return (
            <div className="person">
              <h1>{firstName} {lastName}</h1>
              <h2>From {city}</h2>
              <p>Specialisation: {specialisation}</p>
            </div>
        );
    }
});

const Group = React.createClass({
    getInitialState() {
      return {
        searchText: ''
      }
    },

    handleSearch(e) {
      this.setState({
        searchText: e.target.value
      })
    },

    render() {
        return (
            <div>
              <input placeholder="Enter name to search" onChange={this.handleSearch} value={this.state.searchText}/>
              {
                GROUP.filter(item =>
                  item.firstName.toLowerCase().includes(this.state.searchText.toLowerCase())
                  || item.lastName.toLowerCase().includes(this.state.searchText.toLowerCase()))
                  .map(person =>
                    <Person
                      key={person.id}
                      firstName={person.firstName}
                      lastName={person.lastName}
                      city={person.city}
                      specialisation={person.specialisation}
                    />
                  )
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Group />,
    document.getElementById('root')
);
