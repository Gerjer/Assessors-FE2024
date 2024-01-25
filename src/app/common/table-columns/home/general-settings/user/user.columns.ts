import { ITableColumns } from "src/app/common/interfaces/definitions";
import { IUser } from "src/app/common/interfaces/home/general-settings/user/user.interface";

export const UserColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IUser) => element.code,
    type: 'string'
  },
  {
    columnDef: 'email',
    header: 'Email',
    cell: (element: IUser) => element.email,
    type: 'string'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IUser) => `${element.firstname ?? ''} ${element.lastname ?? ''}`,
    type: 'string'
  },
  {
    columnDef: 'gender',
    header: 'Gender',
    cell: (element: IUser) => element.gender,
    type: 'string'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  }
]
