import { ITableColumns } from "src/app/common/interfaces/definitions";
import { IUserForm } from "src/app/common/interfaces/home/general-settings/user-form/user-form.interface";

export const UserFormColumns: ITableColumns[] = [
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IUserForm) => element.form,
    type: 'default'
  },
  {
    columnDef: 'actions',
    header: 'Action',
    cell: () => '',
    type: 'actions'
  },
]
