import * as SQLite from 'expo-sqlite';

// Open the database
const db = SQLite.openDatabase('quanlichitieu.db');

// Initialize the database
export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      // Create income table
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS income (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          amount REAL NOT NULL,
          category TEXT NOT NULL,
          date TEXT NOT NULL,
          note TEXT
        )`,
        [],
        (_, result) => {
          console.log('Income table created successfully');
          resolve(result);
        },
        (_, error) => {
          console.error('Error creating income table:', error);
          reject(error);
          return false;
        }
      );

      // Create expense table
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS expense (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          amount REAL NOT NULL,
          category TEXT NOT NULL,
          date TEXT NOT NULL,
          note TEXT
        )`,
        [],
        (_, result) => {
          console.log('Expense table created successfully');
        },
        (_, error) => {
          console.error('Error creating expense table:', error);
          return false;
        }
      );
    });
  });
};

export default db; 