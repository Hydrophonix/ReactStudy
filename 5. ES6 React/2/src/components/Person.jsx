import React from 'react';
import '../assets/styles/Person.css';
import PropTypes from 'prop-types';

const Person = (props) => {
    const {
        firstName,
        lastName,
        city,
        specialisation,
    } = props;

    return (
        <div className="person">
            <h1>{firstName} {lastName}</h1>
            <h2>From {city}</h2>
            <p>Specialisation: {specialisation}</p>
        </div>
    );
};

Person.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    specialisation: PropTypes.string
};

export default Person;
