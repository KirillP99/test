import { Fetch } from './fetcher';

class Api {
  async getImages() {
    const response = await Fetch.get('images', {});
    return response;
  }

  async deleteImage(id) {
    const response = await Fetch.delete(`images/${id}`, {});
    return response;
  }

  async createImage(body) {
    const response = await Fetch.post('images', {
      body: JSON.stringify(body),
    });
    return response;
  }

  async updateImage(id, body) {
    const response = await Fetch.put(`images/${id}`, {
      body: JSON.stringify(body),
    });
    return response;
  }
}

export const api = new Api();
