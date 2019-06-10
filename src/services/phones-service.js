export default class PhonesService {
  _apiBase = 'https://mate-academy.github.io/phone-catalogue-static/api';

  async _getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPhones() {
    const res = await this._getResource(`/phones.json`);
    return res;
  }

  async getPhoneById(id) {
    const res = await this._getResource(`/phones/${id}.json`);
    return res;
  }
}
