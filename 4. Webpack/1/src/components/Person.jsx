import React from 'react';
import '../assets/styles/Person.css';
import createReactClass from 'create-react-class';

const Person = createReactClass({
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
        )
    }
});

export default Person;
