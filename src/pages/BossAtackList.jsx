import { useEffect, useState } from "react";
import bossAttack from "../data/bossattack.json";

export default function BossAttackList() {
  const [bossAttacks, setBossAttacks] = useState([]);
  const [selectNames, setName] = useState("default");

  useEffect(() => {
    setBossAttacks(bossAttack);
  });
  if (bossAttacks.length === 0) {
    return <div>now loading....</div>;
  }
  const name = Array.from(
    new Map(bossAttacks.map((item) => [item.ボス名, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">ボス攻撃リスト</h1>
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
            {Object.keys(bossAttacks[0]).map((head) => {
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
          {bossAttacks.map((bossAttack) => {
            if (bossAttack.ボス名 == selectNames || selectNames == "default") {
              return (
                <tr
                  key={bossAttack.ボス名 + bossAttack.部位 + bossAttack.攻撃名}
                >
                  {Object.keys(bossAttacks[0]).map((head) => {
                    return <td key={head}>{bossAttack[`${head}`]}</td>;
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
