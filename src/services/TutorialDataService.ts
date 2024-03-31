import http from "@/http-common";



const domain = '/tutorials'

class TutorialDataService {
  getAll(): Promise<any> {
    return http.get(`${domain}`);
  }

  get(id: any): Promise<any> {
    return http.get(`${domain}/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post(`${domain}`, data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`${domain}/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`${domain}/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`${domain}`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`${domain}?title=${title}`);
  }
}

export default new TutorialDataService();