import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import history from '../../history';
import contactText from './contactText';
import './Contact.css'

const alertMessage = {
  english: 'Message delivered!! I will contact you soon.',
  spanish: 'Mensaje enviado!! Te contestaré pronto.',
  portuguese: 'Mensagem enviada!! Em breve entrarei em contato.'
}

class Contact extends React.Component {
  static contextType = LanguageContext;

  async handleSubmit(event, language) {
    event.preventDefault();
    const message = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }
    try {
      await fetch('https://ol-personal-website-server.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      })
    } catch (error) {
      console.log(error);
    }
    alert(alertMessage[language]);
    history.push('/');

  }

  render() {
    const language = this.context.language;

    return (
      <form className="contact" onSubmit={(event) => this.handleSubmit(event, language)}>
        <h1 className="title">{contactText[language].title}</h1>
        <div className="field">
          <label>{contactText[language].name}</label>
          <input type="text" name="name" maxLength="80" autoComplete="off" required></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" maxLength="254" autoComplete="off" required></input>
        </div>
        <div className="field message">
          <label>{contactText[language].message}</label>
          <textarea className="message" type="text" name="message" required></textarea>
        </div>
        <button className="button">{contactText[language].submit}</button>
      </form>
    )
  }
}

export default Contact;
