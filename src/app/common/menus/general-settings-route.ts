import { IMenu } from "../interfaces/definitions";

export const GeneralSettingRoute: IMenu[] = [
  {
    title: 'Real Property',
    route: '',
    icon: 'apartment',
    children: [
      {
        title: 'Classification',
        route: '/management/general-settings/classifications',
        icon: ''
      },
      {
        title: 'Sub Classification',
        route: '/management/general-settings/sub-classifications',
        icon: ''
      },
      {
        title: 'Yearly Revision',
        route: '/management/general-settings/yearly-revisions',
        icon: '',
        children: []
      }
    ]
  },
  {
    title: 'Accounts & Payments',
    route: '',
    icon: 'point_of_sale',
    children: [
      {
        title: 'Fees & Charges',
        route: '/management/general-settings/fees-charges',
        icon: '',
        children: []
      },
      {
        title: 'Chart of Account',
        route: '/management/general-settings/chart-of-accounts',
        icon: '',
        children: []
      }
    ]
  },
  {
    title: 'Office Profile',
    route: '',
    icon: 'meeting_room',
    children: [
      {
        title: 'Department',
        route: '/management/general-settings/departments',
        icon: '',
        children: []
      },
    ]
  },
  {
    title: 'Employee Records',
    route: '',
    icon: 'badge',
    children: [
      {
        title: 'Employee Profile',
        route: '/management/general-settings/employees',
        icon: '',
        children: []
      },
    ]
  },
  {
    title: 'Position Description',
    route: '',
    icon: 'chair',
    children: [
      {
        title: 'Signatories',
        route: '/management/general-settings/signatories',
        icon: '',
        children: []
      }
    ]
  },
  {
    title: 'User Management',
    route: '',
    icon: 'account_circle',
    children: [
      {
        title: 'Users',
        route: '/management/general-settings/users',
        icon: ''
      },
      {
        title: 'Forms',
        route: '',
        icon: ''
      },
      {
        title: 'Roles',
        route: '',
        icon: ''
      }
    ]
  }
]
