import { IDepartment } from "src/app/common/interfaces";
import { ITableColumns } from "src/app/common/interfaces/definitions";

export const DepartmentColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IDepartment) => element.code,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IDepartment) => element.name,
    type: 'string'
  }, {
    columnDef: 'lead',
    header: 'Department Lead',
    cell: (element: IDepartment) => element.department_lead ? `${element.department_lead.firstname} ${element.department_lead.lastname}` : '',
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
