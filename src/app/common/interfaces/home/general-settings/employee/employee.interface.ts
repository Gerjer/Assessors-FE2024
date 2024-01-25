import { Gender } from "src/app/common/types";

export interface IEmployee {
  id: any;
  sequence: any;
  code: string;
  firstname: string;
  middlename: string;
  lastname: string;
  name_extension: string;
  date_of_birth: Date;
  age: number;
  gender: Gender;
}
