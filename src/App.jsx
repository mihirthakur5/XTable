import { useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [tableData, setTableData] = useState(data);
  const [order, setOrder] = useState(null);

  const handleSort = (orderby) => {
    const sortedData = [...tableData].sort((a, b) => {
      if (orderby === "date") {
        if (a.date === b.date) {
          return b.views - a.views;
        }
        return new Date(b.date) - new Date(a.date);
      } else if (orderby === "views") {
        if (a.views === b.views) {
          return new Date(b.date) - new Date(a.date);
        }
        return b.views - a.views;
      }
    });
    setTableData(sortedData);
    setOrder(orderby);
  };

  return (
    <>
      <h1 className="heading">Date and Views Table</h1>
      <div className="btns">
        <button onClick={() => handleSort("date")}>Sort by Date</button>
        <button onClick={() => handleSort("views")}>Sort by Views</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.date}</td>
                <td>{row.views}</td>
                <td>{row.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
