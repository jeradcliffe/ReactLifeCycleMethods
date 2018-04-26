import React from 'react';
import PropTypes from 'prop-types';

const AuthorList = (props) => {
    const createAuthorRow = (author) => {
        return (
            <tr key={author.id}>
                <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                <td>{author.firstName} {author.lastName}</td>
            </tr>
        );
    };

    return (
        <div>
            <h1>Authors</h1>

            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>

                <tbody>
                {props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>
        </div>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired
};

export default AuthorList;
