import { useEffect, useState } from "react";
import weponData from "../data/rangeweponlist.json";

export default function RangeWeponList() {
  const [wepons, setWepons] = useState([]);
  const [selectSeries, setSeries] = useState("default");

  useEffect(() => {
    setWepons(weponData);
  }, []);
  if (wepons.length === 0) {
    return <div>now loading....</div>;
  }
  const series = Array.from(
    new Map(wepons.map((item) => [item.シリーズ, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">遠距離武器リスト</h1>
        </div>
      </div>
      <div className="select is-fullwidth">
        <select
          name="series"
          defaultValue="default"
          onChange={(event) => {
            event.preventDefault();
            setSeries(event.target.value);
          }}
        >
          <option value="default">------</option>
          {series.map((serieses) => {
            return (
              <option value={serieses.シリーズ} key={serieses.シリーズ}>
                {serieses.シリーズ}
              </option>
            );
          })}
        </select>
      </div>
      <table className="table is-fullwidth is-striped">
        <thead
          style={{
            background: "white",
            position: "sticky",
            top: 0,
          }}
        >
          <tr>
            {Object.keys(wepons[0]).map((head) => {
              return (
                <th key={head} style={{ width: 0 }}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {wepons.map((wepon) => {
            if (wepon.シリーズ == selectSeries || selectSeries == "default") {
              return (
                <tr key={wepon.武器名}>
                  {Object.keys(wepons[0]).map((head) => {
                    return <td key={head}>{wepon[`${head}`]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
