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
    new Map(bossStatuses.map((item) => [item.名前, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">ボスステータスリスト</h1>
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
              <option value={names.名前} key={names.名前}>
                {names.名前}
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
              名前
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              部位
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              HP
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              最大防御力
            </th>
          </tr>
        </thead>
        <tbody>
          {bossStatuses.map((bossStatus) => {
            if (bossStatus.名前 == selectNames || selectNames == "default") {
              return (
                <tr key={bossStatus.名前 + bossStatus.部位}>
                  <td>{bossStatus.名前}</td>
                  <td>{bossStatus.部位}</td>
                  <td>{bossStatus.HP}</td>
                  <td>{bossStatus.最大防御力}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
