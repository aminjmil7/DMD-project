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
    price: 'DZD 8.99',
    status: 'ready',
    timestamp: "minutes: 6"
  },
  {
    name: 'MAXILODRE',
    price: 'DZD 1299.99',
    status: 'ready',
    timestamp: "minutes: 14"
  },
  {
    name: 'EXTENCILLINE',
    price: 'DZD 799.99',
    status: 'ready',
    timestamp: "minutes: 17"
  },
  {
    name: 'MEDROL',
    price: 'DZD 16.99',
    status: 'pending',
    timestamp: "minutes: 25"
  },
  {
    name: 'B-CORTOSONE',
    price: 'DZD 599.99',
    status: 'warn',
    timestamp: "minutes: 42"
  },
  {
    name: 'Apple iPhone X',
    price: 'DZD 1099.99',
    status: 'ready',
    timestamp: "minutes: 87"
  },
  {
    name: 'Apple iPhone 7 128GB',
    price: 'DZD 699.99',
    status: 'ready',
    timestamp: "minutes: 102"
  },
  {
    name: 'Apple Mac Pro',
    price: 'DZD 999.99',
    status: 'ready',
    timestamp: "minutes: 122"
  },
  {
    name: 'Samsung DEX',
    price: 'DZD 54.99',
    status: 'pending',
    timestamp: "minutes: 300"
  },
  {
    name: 'Apple iPhone X 256GB',
    price: 'DZD 1199.99',
    status: 'ready',
    timestamp: "minutes: 340"
  },
  {
    name: 'Apple MacBook 2019',
    price: 'DZD 2499.99',
    status: 'ready',
    timestamp: "minutes: 400"
  }
];
