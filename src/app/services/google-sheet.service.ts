import { Injectable } from '@angular/core';

import * as GoogleSpreadsheet from 'google-spreadsheet';

import { Project } from '../class/project';

// https://github.com/theoephraim/node-google-spreadsheet

@Injectable()
export class GoogleSheetService {

  // spreadsheet key is the long id in the sheets URL
  public doc = new GoogleSpreadsheet('1rcZ0y_vnQsBvSqOq3fDAgpQQHimxL9wH14IEL9tkU9M');
  public connected = false;
  public sheet;

  constructor() {
    // this.setAuth();
  }

  public setAuth(): Promise<any> {
    const creds = {
      client_email: 'sonder-datas@sonder-179209.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDy+EZIPfnJCc7+\nSZC29Gl8l6TLVbVIE16Sp8hvAHgzSKway5h7Qc0puw9ca27Ab9LCMDUt4XI8wp/9\nckjlzzF61e7qfc+uAKkh3KXpwO9GljMgDq0d4X+Mfz+Zia3meBV0OwWRzZwZp/9X\n2b4CjZW75jyPyWfzcRkHGAen9ubyNd6NGGiAh64lkcaaVacl0hSXFKgpJx3Lzf55\nT7zzbNqnpNY1UQYZFyxOe+dQ+eKtLWt7KixxFd3wROagQLgIXro1FVXdxDTfe63b\nn/Bzub5DdPeG5VPn5biUJizstkN7qnLrUyqTvtdHDT6QOswgKNGYBSM01D56Q6yj\n+v9ygD2VAgMBAAECggEAUub+yCCJbZywqZg9Tge4RIBThOOyLq0ZPE4OeD1/RfRa\ncOweE5RgpggDFkQ77mJZVdPwGT8O5Qd9YpOPpwYaunBrjEwwRA1KqFiqrcccfYe7\nWwlW7VanWC+E6mUNVpGLtHR9EoJG7IQjfny3thRMTmghKuiMVQa2hPKgjiGTLHol\nyQ5i8WOqvrV412IU78P4ApWNJY7Z3Psw24CqtiSGRx5vutuq3zhQ/GnyMH+Okx7y\nEshV7IeTZRRrr5RNXp4eP+BRN51PHKp2KZJf9hpGzZdv89vWNtb37wcIR+UbwmqZ\n5ulnhNetJkZ3wjwphzV76lm/k8E0tiGN6KjrjlCt0wKBgQD72+Rbi5BH6kJPp8Ph\n6iz+bQJd7yRpTOrkyfo/BQ6/i/ekdC+/HlU7C3ZMlZcMwivv/TwDaglFkAaBscF6\nS3D4NRMjpAFiGcE6ALiKjrmm6NhN5VHi/7+GNmYJr1cJiIeXqV6OXRO51269qF8f\ndVG2VhHI1ViRcWEeAWKGqkm6UwKBgQD29veL8A3I7De7WjvzYfOokdT56QC2xpkr\nXVANMlmumw8J3YdOoNRWYDXBK4wmyVA4oaw7sJGy+tq79hH33VJa5yRogKds0f6J\niaZHrtAlpJOLKINcc9goGODWByGmc0LFQnqG4fRyY2cMPufgE8HxZiRxpbElNXYf\n570/MGC7dwKBgQCrUD0aT+pKIHwOdoz1BDaqsTdk8Z+QyLMWAJTpfOU1QV2nTSiV\nFWrgCMHlAfOGyCTezx+dKuk3menzGhgCuYIUMvXbzljqg549d/QOu1powAUxpwR2\nJYP/JM1vVQcdAvNII/qfV4xtYq5+7yIU4dY88nqSYxwlgjuPD14XP4l65QKBgAn6\ngJYO5P+xS68uPi3fT1EIU2qll3nLHHU8F/fwiN8dNMZZRRZQOUQkLwfXEpqel7cy\nERt4TurEaAIgNymkr6csn7P5PsqO0ZINFcLftVlQBQYiZOxfYeR83NjJAPsQvSnr\nPbgleRMGISvFfuj242c1kVNmNnoiZttzKZpcAgyRAoGBAKpZT03UE6nVz9l1wX7w\nOvOAD3jxXXDXh4Rsje92l5lE39DzOp71xECNt2qU5CQph13Hw0o0N9Vk5Oago9Lf\njTISr486y23aXIo8a69/lQzMBz5wXlgT0VTseo+4twl67JJ5xW0WVd6w4BLJGPRu\nKIwRv6dwrHA70JLq4VyTTgOL\n-----END PRIVATE KEY-----\n'
    };

    return new Promise((resolve, reject) => {
      this.doc.useServiceAccountAuth(creds, () => {
        this.connected = true;
        resolve();
      });
    });
  }

  public getSheets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.doc.getInfo((err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info.worksheets);
        }
      });
    });
  }

  public readCells(sheet, rows: number): Promise<any> {
    return new Promise((resolve, reject) => {
      sheet.getCells({
        'min-row': 1,
        'max-row': rows,
        'return-empty': true
      }, (err, cells) => {
        if (err) {
          reject(err);
        } else {
          resolve(cells);
        }
      });
    });
  }

  /* Get an array of row objects from the sheet.
   * offset - start reading from row #
   * limit - max # of rows to read at once
   * orderby - column key to order by
   * reverse - reverse results
   * query - send a structured query for rows (more info)
   */
  public readRows(sheet, options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if ( options !== undefined ) {
        const offset = options.offset;
        const limit = options.limit;
        const orderBy = options.orderBy;
        const reverse = options.reverse;
        const query = options.query;
      } else {
        options = {};
      }
      sheet.getRows(options, ( err, rows ) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  public getHeaders(sheet: any): Promise<any> {
    return new Promise((resolve, reject) => {
      sheet.getCells({
        'max-row': 1,
        'return-empty': false
      }, (err, cells) => {
        if (err) {
          reject(err);
        } else {
          let headers = [];
          for (let cell of cells) {
            headers.push(cell.value);
          }
          resolve(headers);
        }
      });
    });
  }

  public addRow(sheet, row: any) {
    return new Promise((resolve, reject) => {
      sheet.addRow(row, ( err, res ) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  public saveCells(sheet, cells: any) {
    sheet.bulkUpdateCells(cells);
  }
}
