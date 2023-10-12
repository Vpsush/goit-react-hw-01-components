import css from './TransactionHistory.module.css';
import transaction from '../../components/data.json/transactions.json';

export const TitleTransaction = () => {
  return (
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

export const TransactionHistory = () => {
  return transaction.map(transaction => {
    return (
      <table className={css.transactionHistory}>
        {/* <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead> */}
        <tbody className={css.fullInfo}>
          <tr className={css.info} key={transaction.id}>
            <td className={css.unit}>{transaction.type}</td>
            <td className={css.unit}>{transaction.amount}</td>
            <td className={css.unit}>{transaction.currency}</td>
          </tr>
        </tbody>
      </table>
    );
  });
};
