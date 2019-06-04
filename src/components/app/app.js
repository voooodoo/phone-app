import React, { Component } from 'react';
import './app.css';
import PhoneService from '../../services/phones-service';
import Header from '../header';
import Navbar from '../navbar';
import PhonesList from '../phones-list';

const phoneService = new PhoneService();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: [],
    };
  }

  componentDidMount() {
    phoneService.getAllPhones().then(phones => {
      this.setState({
        phones,
      });
    });
  }

  render() {
    const { phones } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <Navbar />
            <PhonesList phones={phones} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
