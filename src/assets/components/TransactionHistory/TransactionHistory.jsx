import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tableRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
