import css from './TransactionHistory.module.css';
import transaction from '../../components/data.json/transactions.json';

export const TransactionHistory = () => {
  // return transaction.map(transaction => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.titleTrans}>Type</th>
          <th className={css.titleTrans}>Amount</th>
          <th className={css.titleTrans}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.fullInfo}>
        {transaction.map(transaction => (
          <tr className={css.info} key={transaction.id}>
            <td className={css.unit}>{transaction.type}</td>
            <td className={css.unit}>{transaction.amount}</td>
            <td className={css.unit}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
