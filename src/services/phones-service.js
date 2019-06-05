export default class PhonesService {
  _apiBase = 'https://mate-academy.github.io/phone-catalogue-static/api';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  };

  getAllPhones = async () => {
    const res = await this.getResource(`/phones.json`);
    return res;
  };

  getPhoneById = async id => {
    const res = await this.getResource(`/phones/${id}.json`);
    return res;
  };
}
