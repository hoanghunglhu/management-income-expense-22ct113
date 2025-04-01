import db from './database';

// Get all income entries
export const getAllIncome = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM income ORDER BY date DESC',
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          console.error('Error fetching income:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};

// Get income by ID
export const getIncomeById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM income WHERE id = ?',
        [id],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows._array[0]);
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          console.error('Error fetching income by ID:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};

// Add new income
export const addIncome = (income) => {
  const { title, amount, category, date, note } = income;
  
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO income (title, amount, category, date, note) VALUES (?, ?, ?, ?, ?)',
        [title, amount, category, date, note || ''],
        (_, { insertId, rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve({ id: insertId, ...income });
          } else {
            reject(new Error('Failed to add income'));
          }
        },
        (_, error) => {
          console.error('Error adding income:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};

// Update income by ID
export const updateIncomeById = (id, updatedIncome) => {
  const { title, amount, category, date, note } = updatedIncome;
  
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE income SET title = ?, amount = ?, category = ?, date = ?, note = ? WHERE id = ?',
        [title, amount, category, date, note || '', id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve({ id, ...updatedIncome });
          } else {
            reject(new Error('Income not found or no changes made'));
          }
        },
        (_, error) => {
          console.error('Error updating income:', error);
          reject(error);
          return false;
        }
      );
    });
  });
};

// Delete income by ID
export const deleteIncomeById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM income WHERE id = ?',
        [id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            resolve({ success: true, id });
          } else {
            reject(new Error('Income not found'));
          }
        },
        (_, error) => {
          console.error('Error deleting income:', error);
          reject(error);
          return false;
        }
      );
    });
  });
}; 