import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class DepartmentApi {

  apiPath = environment.api_url;

  constructor(private http: HttpClient) {}

  getAll(params: any | null | undefined) {
    return this.http.get(`${this.apiPath}v1/department`, { params: params });
  }

  getOne(id: any) {
    return this.http.get(`${this.apiPath}v1/department/${id}`);
  }

  create(payload: any) {
    return this.http.post(`${this.apiPath}v1/department`, payload);
  }

  update(payload: any) {
    const { id, ...rest } = payload;
    return this.http.patch(`${this.apiPath}v1/department/${id}`, rest);
  }

  delete(id: any) {
    return this.http.delete(`${this.apiPath}v1/department/${id}`);
  }

}
