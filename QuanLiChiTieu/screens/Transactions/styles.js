import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: "20px",
        backgroundColor: "#121212",
        color: "white",
        fontFamily: "Arial, sans-serif"
      },
      accountSummary: {
        backgroundColor: "#2a2a2a",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center"
      },
      accountTitle: {
        fontSize: "18px",
        fontWeight: "bold"
      },
      accountBalance: {
        fontSize: "16px",
        margin: "10px 0"
      },
      incomeExpense: {
        fontSize: "14px",
        margin: "5px 0"
      },
      income: {
        color: "#ff007f"
      },
      expense: {
        color: "#00ff7f"
      },
      incomeBar: {
        height: "5px",
        background: "linear-gradient(to right, #ff007f 80%, gray 20%)",
        margin: "5px 0"
      },
      expenseBar: {
        height: "5px",
        background: "linear-gradient(to right, #00ff7f 20%, gray 80%)",
        margin: "5px 0"
      },
      transactionList: {
        marginTop: "20px"
      },
      transactionItem: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
        padding: "10px",
        margin: "5px 0",
        borderRadius: "8px"
      },
      transactionIcon: {
        fontSize: "24px",
        marginRight: "10px"
      },
      transactionInfo: {
        flex: 1
      },
      transactionName: {
        fontSize: "16px",
        fontWeight: "bold"
      },
      transactionCategory: {
        fontSize: "12px",
        color: "#bbb"
      },
      transactionAmount: {
        textAlign: "right"
      },
      transactionWallet: {
        fontSize: "12px",
        color: "#bbb"
      }
    });
export default styles;
