import "./widgetLg.css"

export default function WidgetLg() {
  const Button =({type}) => {
    return <button className={"widgetLgButtton" +type}>{type}</button>
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer </th>
          <th className="widgetLgTh">Date </th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUSer">
            <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
             alt=""
              className="widgetLgImg"
             />
            <span className="widgetLgName">Susan Carol</span>

          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmout">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        

      </table>
    </div>
  )
}