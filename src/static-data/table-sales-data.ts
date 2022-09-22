import { DateTime } from 'luxon';

export interface Order {
  name: string;
  price: string;
  status: 'ready' | 'pending' | 'warn';
  timestamp: string;
}

export const tableSalesData: Order[] = [
  {
    name: 'ABUFENE',
    price: 'DZD 55k',
    status: 'pending',
    timestamp: "minutes: 2"
  },
  {
    name: 'ALGIMOL ENFANTS',
    price: '$8.99',
    status: 'ready',
    timestamp: "minutes: 6"
  },
  {
    name: 'MAXILODRE',
    price: '$1299.99',
    status: 'ready',
    timestamp: "minutes: 14"
  },
  {
    name: 'EXTENCILLINE',
    price: '$799.99',
    status: 'ready',
    timestamp: "minutes: 17"
  },
  {
    name: 'MEDROL',
    price: '$16.99',
    status: 'pending',
    timestamp: "minutes: 25"
  },
  {
    name: 'B-CORTOSONE',
    price: '$599.99',
    status: 'warn',
    timestamp: "minutes: 42"
  },
  {
    name: 'Apple iPhone X',
    price: '$1099.99',
    status: 'ready',
    timestamp: "minutes: 87"
  },
  {
    name: 'Apple iPhone 7 128GB',
    price: '$699.99',
    status: 'ready',
    timestamp: "minutes: 102"
  },
  {
    name: 'Apple Mac Pro',
    price: '$999.99',
    status: 'ready',
    timestamp: "minutes: 122"
  },
  {
    name: 'Samsung DEX',
    price: '$54.99',
    status: 'pending',
    timestamp: "minutes: 300"
  },
  {
    name: 'Apple iPhone X 256GB',
    price: '$1199.99',
    status: 'ready',
    timestamp: "minutes: 340"
  },
  {
    name: 'Apple MacBook 2019',
    price: '$2499.99',
    status: 'ready',
    timestamp: "minutes: 400"
  }
];
