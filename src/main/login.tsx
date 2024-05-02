import React, { FormEvent } from 'react';
import { login } from '../utils/utils';

class LoginPage extends React.Component {

    onSubmit = (e:FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const id = formData.get('id');
        login(id as string);
        window.location.href = '/';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="id" required/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;