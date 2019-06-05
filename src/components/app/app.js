import React, { Component } from 'react';

import PhonesService from '../../services/phones-service';
import Header from '../header';
import PhonesList from '../phones-list';
import PhoneDeatails from '../phone-details';
import { debounce } from '../../utils';

import './app.css';

export default class App extends Component {
  state = {
    phonesService: new PhonesService(),
    phones: [],
    activePhone: null,
    isLoading: true,
    filter: null,
    sort: 'alphabetical',
  };

  componentDidMount() {
    this.state.phonesService.getAllPhones().then(phones => {
      this.setState({
        phones: this.setSort(phones),
        isLoading: false,
      });
    });
  }

  updatePhoneDetails = id => {
    this.state.phonesService.getPhoneById(id).then(phone => {
      this.setState({
        activePhone: phone,
      });
    });
  };

  updateFilter = debounce(key => {
    this.state.phonesService.getAllPhones().then(phones => {
      const newPhones = phones.slice().filter(({ name }) => name.toLowerCase().includes(key.toLowerCase()));
      this.setState({
        phones: this.setSort(newPhones),
      });
    });
  }, 500);

  sortByAge = phones => {
    return phones.slice().sort((a, b) => a.age - b.age);
  };

  sortByAlphabetical = phones => {
    const newPhones = phones.slice().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return newPhones;
  };

  setSort = (phones, key = this.state.sort) => {
    switch (key) {
      case 'age':
        return this.sortByAge(phones);
      case 'alphabetical':
        return this.sortByAlphabetical(phones);
      default:
        return phones;
    }
  };

  updateSort = key => {
    this.setState(state => ({
      phones: this.setSort(state.phones, key),
    }));
  };

  render() {
    const { phones, activePhone } = this.state;
    return (
      <React.Fragment>
        <Header updateFilter={this.updateFilter} updateSort={this.updateSort} />
        <div className="container">
          <div className="row">
            <PhonesList phones={phones} updatePhoneDetails={this.updatePhoneDetails} />
            <PhoneDeatails phone={activePhone} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
