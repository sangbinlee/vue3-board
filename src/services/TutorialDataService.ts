import http from "@/http-common";



const domain = '/tutorials'

/**
 * crud
 * 1. create
 * 2. retrieve( all, :id)
 * 3. search + paging
 * 4. update( :id )
 * 5. delete( all, :id)
 */
class TutorialDataService {

  create(data: any): Promise<any> {
    return http.post(`${domain}`, data);
  }

  getAll(): Promise<any> {
    return http.get(`${domain}`);
  }

  get(id: any): Promise<any> {
    return http.get(`${domain}/${id}`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`${domain}?title=${title}`);
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
}

export default new TutorialDataService();