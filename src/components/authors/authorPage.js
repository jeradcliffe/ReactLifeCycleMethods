import React, {Component} from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from "./authorList";

class AuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }

    componentWillMount() {
        this.setState({authors: AuthorApi.getAllAuthors()});
    }

    render() {
        return (
            <div>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

export default AuthorsPage;
