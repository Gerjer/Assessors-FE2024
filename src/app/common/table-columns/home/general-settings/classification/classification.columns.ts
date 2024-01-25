import { IClassification } from "../../../../interfaces";
import { ITableColumns } from "../../../../interfaces/definitions";

export const ClassificationColumns: ITableColumns[] = [
  {
    columnDef: 'code',
    header: 'Code',
    cell: (element: IClassification) => element.code,
    type: 'Default'
  },
  {
    columnDef: 'name',
    header: 'Name',
    cell: (element: IClassification) => element.name,
    type: 'Default'
  },
  {
    columnDef: 'description',
    header: 'Description',
    cell: (element: IClassification) => element.description,
    type: 'Default'
  },
  {
    columnDef: 'actions',
    header: 'Actions',
    cell: () => '',
    type: 'Actions'
  }
]
