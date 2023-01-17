import { useEffect, useState } from "react";
import armorStatus from "../data/armorstatus.json";

export default function ArmorStatusList() {
  const [armorStatuses, setArmorStatuses] = useState([]);
  const [selectParts, setParts] = useState("default");

  useEffect(() => {
    setArmorStatuses(armorStatus);
  }, []);
  if (armorStatuses.length === 0) {
    return <div>now loading....</div>;
  }
  const part = Array.from(
    new Map(armorStatuses.map((item) => [item.部位, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">防具ステータスリスト</h1>
        </div>
      </div>
      <div className="select is-fullwidth">
        <select
          name="parts"
          defaultValue="default"
          onChange={(event) => {
            event.preventDefault();
            setParts(event.target.value);
          }}
        >
          <option value="default">------</option>
          {part.map((parts) => {
            return (
              <option value={parts.部位} key={parts.部位}>
                {parts.部位}
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
              部位
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              防御力
            </th>
            <th
              style={{
                width: 0,
              }}
            >
              効果
            </th>
          </tr>
        </thead>
        <tbody>
          {armorStatuses.map((armor) => {
            if (armor.部位 == selectParts || selectParts == "default") {
              return (
                <tr key={armor.名前}>
                  <td>{armor.名前}</td>
                  <td>{armor.部位}</td>
                  <td>{armor.防御力}</td>
                  <td>{armor.効果}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}
