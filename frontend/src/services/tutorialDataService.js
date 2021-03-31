import http from './apiService';

class TutorialDataService {
  constructor() {
    this.call = http;
  }

  getAll() {
    return this.call.get('/tutorials');
  }

  get(id) {
    return this.call.get(`/tutorials/${id}`);
  }

  create(data) {
    return this.call.post('/tutorials', data);
  }

  update(id, data) {
    return this.call.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return this.call.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return this.call.delete('/tutorials');
  }

  findByTitle(title) {
    return this.call.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
