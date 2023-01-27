import { useEffect, useState } from "react";
import bossStatus from "../data/bossstatus.json";

export default function BossStatusList() {
  const [bossStatuses, setBossStatuses] = useState([]);
  const [selectNames, setName] = useState("default");

  useEffect(() => {
    setBossStatuses(bossStatus);
  }, []);
  if (bossStatuses.length === 0) {
    return <div>now loading....</div>;
  }
  const name = Array.from(
    new Map(bossStatuses.map((item) => [item.ボス名, item])).values()
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
          <h1 className="title">ボスステータスリスト</h1>
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
            top: 124,
          }}
        >
          <tr>
            {Object.keys(bossStatuses[0]).map((head) => {
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
          {bossStatuses.map((bossStatus) => {
            if (bossStatus.ボス名 == selectNames || selectNames == "default") {
              return (
                <tr key={bossStatus.ボス名 + bossStatus.部位}>
                  {Object.keys(bossStatuses[0]).map((head) => {
                    return <td key={head}>{bossStatus[`${head}`]}</td>;
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
