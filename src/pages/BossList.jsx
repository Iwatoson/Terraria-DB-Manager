import { useEffect, useState } from "react";
import bossData from "../data/bosslist.json";

export default function BossList() {
  const [bosses, setBosses] = useState([]);
  const [selectNames, setName] = useState("default");

  useEffect(() => {
    setBosses(bossData);
  }, []);
  if (bosses.length === 0) {
    return <div>now loading....</div>;
  }
  const name = Array.from(
    new Map(bosses.map((item) => [item.ボス名, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">ボスリスト</h1>
        </div>
      </div>
      <div className="select is-fullwidth">
        <select
          name="boss"
          defaultValue="default"
          onChange={(event) => {
            event.preventDefault();
            setName(event.target.value);
          }}
        >
          <option value="default">------</option>
          {name.map((names) => {
            return (
              <option value={names.ボス名} key={names.ボス名}>
                {names.ボス名}
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
            {Object.keys(bosses[0]).map((head) => {
              return (
                <th
                  key={head}
                  style={{
                    width: 0,
                  }}
                >
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {bosses.map((boss) => {
            if (boss.ボス名 == selectNames || selectNames == "default") {
              return (
                <tr key={boss.ボス名 + boss.部位}>
                  {Object.keys(bosses[0]).map((head) => {
                    return <td key={head}>{boss[`${head}`]}</td>;
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
