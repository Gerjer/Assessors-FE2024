import { IMenu } from '../interfaces/definitions';

export const CertificateMenu: IMenu[] = [
  {
    title: 'Property Rights & Tenure',
    route: '',
    icon: 'real_estate_agent',
    children: [
      {
        title: 'No Landholding Property',
        route: '/management/certificates/no-landholding-properties',
        icon: '',
        children: [],
      },
      {
        title: 'Ownership',
        route: '/management/certificates/ownerships',
        icon: '',
        children: [],
      },
      {
        title: 'Total Landholding',
        route: '/management/certificates/total-landholdings',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: 'Property Condition',
    route: '',
    icon: 'construction',
    children: [
      {
        title: 'No Improvement',
        route: '/management/certificates/no-improvements',
        icon: '',
        children: [],
      },
      {
        title: 'With Improvement',
        route: '/management/certificates/with-improvements',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: 'Authenticated Document',
    route: '',
    icon: 'inventory',
    children: [
      {
        title: 'Certified True Copy',
        route: '',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: 'Cartography',
    route: '',
    icon: 'public',
    children: [
      {
        title: 'Sketch Mapping',
        route: '/management/certificates/sketch-mappings',
        icon: '',
        children: [],
      },
      {
        title: 'Vicinity Map',
        route: '/management/certificates/vicinity-maps',
        icon: '',
        children: [],
      },
    ],
  },
  {
    title: 'Payments',
    route: '',
    icon: 'public',
    children: [
      {
        title: 'Ordery of Payments',
        route: '/management/certificates/order-payments',
        icon: '',
        children: [],
      },
      // {
      //   title: 'Vicinity Map',
      //   route: '/management/certificates/vicinity-maps',
      //   icon: '',
      //   children: []
      // }
    ],
  },
];
