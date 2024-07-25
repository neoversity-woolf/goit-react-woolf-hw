import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const tableHeaderItems = ['Type', 'Amount', 'Currency'];
  const createTableHeaderMarkup = (item, idx) => {
    return <th key={idx}>{item}</th>;
  };
  const createTableContentMarkup = ({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
  };

  return (
    <table className={css.table}>
      <thead>
        <tr>{tableHeaderItems.map(createTableHeaderMarkup)}</tr>
      </thead>

      <tbody>{items.map(createTableContentMarkup)}</tbody>
    </table>
  );
};

export default TransactionHistory;
