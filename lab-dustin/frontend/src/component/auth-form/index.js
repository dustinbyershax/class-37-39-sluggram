import React from 'react';
import * as util from '../../lib/util.js';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('*******', props);
    this.state = {
      username: '',
      usernameError: null,
      passswordError: null,
      emailError: null,
      email: '',
      password: '',
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    let {name, value} = e.target;

    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'username cant be empty' : null,
      emailError: name === 'email' && !value ? 'email cant be empty' : null,
      passwordError: name === 'password' && !value ? 'password cant be empty' : null,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('this.props', this.props);
    this.props.onComplete(this.state)
      .then(() => {
        this.setState({username: '', email: '', password: ''});
      })
      .catch(error => {
        console.error(error);
        this.setState({error});
      });
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='auth-form'>

        {util.renderIf(this.props.auth === 'signup',
          <input
            type='text'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        )}

        {util.renderIf(this.state.usernameError,
          <span className ='tooltip'>
            {this.state.usernameError}
          </span>
        )}

        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        {util.renderIf(this.state.passswordError,
          <span className ='tooltip'>
            {this.state.passwordError}
          </span>
        )
        }
        <input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type='submit'>
          {this.props.auth}
        </button>

      </form>
    );
  }
}

export default AuthForm;
