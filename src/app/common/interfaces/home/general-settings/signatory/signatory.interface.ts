import { IEmployee } from "../employee/employee.interface";

export interface ISignatory {
  id: any;
  sequence: any;
  code: string;
  name: string;
  signatory: string;
  employee: IEmployee | null | undefined
}
