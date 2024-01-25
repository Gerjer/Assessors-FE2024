import { IEmployee } from "../employee/employee.interface";

export interface IDepartment {
  id: any;
  sequence: any;
  code: string;
  name: string;
  department_lead: IEmployee | null | undefined
}
