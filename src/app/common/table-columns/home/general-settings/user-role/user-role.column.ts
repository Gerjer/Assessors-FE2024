import { IUserRole } from "src/app/common/interfaces";
import { ITableColumns } from "src/app/common/interfaces/definitions";

export const UserRoleColumns: ITableColumns[] = [
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IUserRole) => element.name,
    type: 'string'
  },
  {
    columnDef: 'description',
    header: 'Description',
    cell: (element: IUserRole) => element.description,
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
