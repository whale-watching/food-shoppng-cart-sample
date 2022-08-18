import Papa from 'papaparse';

import { Product } from '../types';

export default {
  getProducts: async () => {
    const GOOGLE_SHEET_CSV_URL =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTaN9_CVhJZkMjQqIyc-r201MFonXpLio9njJ5i3i-qD_OGLTOS-UvnLjkckuU6SONa6Ipai0pE5WzT/pub?output=csv';
    try {
      const res = await fetch(GOOGLE_SHEET_CSV_URL, {
        headers: { 'content-type': 'text/csv;charset=UTF-8' },
      });
      const csvString = await res.text();
      return await new Promise((resolve, reject) => {
        Papa.parse(csvString, {
          header: true,
          complete: (results) => {
            const products = results.data as Product[];
            return resolve(
              products.map((product) => ({
                ...product,
                price: Number(product.price),
              }))
            );
          },
          error: (error) => reject(error.message),
        });
      });
    } catch (error) {
      return error.message;
    }
  },
};
