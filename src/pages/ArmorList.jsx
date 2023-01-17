import { useEffect, useState } from "react";
import armorData from "../data/armorlist.json";

export default function ArmorList() {
  const [armors, setArmors] = useState([]);
  const [selectSeries, setSeries] = useState("default");

  useEffect(() => {
    setArmors(armorData);
  }, []);
  if (armors.length === 0) {
    return <div>now loading....</div>;
  }
  const series = Array.from(
    new Map(armors.map((item) => [item.シリーズ, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">防具リスト</h1>
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
            <th
              style={{
                width: 0,
              }}
            >
              防具名
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              シリーズ
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              種類
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              部位
            </th>
          </tr>
        </thead>
        <tbody>
          {armors.map((armor) => {
            if (armor.シリーズ == selectSeries || selectSeries == "default") {
              return (
                <tr key={armor.防具名}>
                  <td>{armor.防具名}</td>
                  <td>{armor.シリーズ}</td>
                  <td>{armor.種類}</td>
                  <td>{armor.部位}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
