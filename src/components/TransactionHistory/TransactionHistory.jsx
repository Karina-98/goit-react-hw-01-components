import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
console.log(items)
    return <section><table className={css.transaction_history}>
            <thead className={css.items}>
            <tr>
              <th className={css.body_items}>Type</th>
              <th className={css.body_items}>Amount</th>
              <th className={css.body_items}>Currency</th>
            </tr>
          </thead>
          {items.map(({id, type, amount, currency}) =>(
          <tbody key={id} className={css.body_items}>
            <tr className={css.body_items}>
              <td className={css.body_items}>{type}</td>
              <td className={css.body_items}>{amount}</td>
              <td className={css.body_items}>{currency}</td>
            </tr>
          </tbody>
           
        ))}
    
  </table> 
  </section>
}