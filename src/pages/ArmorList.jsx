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
      <div
        className="hero is-small is-info"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div className="hero-body">
          <h1 className="title">防具リスト</h1>
        </div>
      </div>
      <div
        className="select is-fullwidth"
        style={{
          position: "sticky",
          top: 84,
          zIndex: 9,
        }}
      >
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
            top: 124,
          }}
        >
          <tr>
            {Object.keys(armors[0]).map((head) => {
              return (
                <th key={head} style={{ width: 0 }}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {armors.map((armor) => {
            if (armor.シリーズ == selectSeries || selectSeries == "default") {
              return (
                <tr key={armor.防具名}>
                  {Object.keys(armors[0]).map((head) => {
                    return <td key={head}>{armor[`${head}`]}</td>;
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
