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
      <div
        className="hero is-small is-info"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div className="hero-body">
          <h1 className="title">防具ステータスリスト</h1>
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
            top: 124,
          }}
        >
          <tr>
            {Object.keys(armorStatuses[0]).map((head) => {
              return (
                <th key={head} style={{ width: 0 }}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {armorStatuses.map((armor) => {
            if (armor.部位 == selectParts || selectParts == "default") {
              return (
                <tr key={armor.防具名}>
                  {Object.keys(armorStatuses[0]).map((head) => {
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
