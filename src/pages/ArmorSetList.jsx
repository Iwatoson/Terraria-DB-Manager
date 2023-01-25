import { useEffect, useState } from "react";
import armorSet from "../data/armorset.json";

export default function ArmorSetList() {
  const [armorSets, setArmorSets] = useState([]);
  const [selectTypes, setTypes] = useState("default");

  useEffect(() => {
    setArmorSets(armorSet);
  }, []);
  if (armorSets.length === 0) {
    return <div>now loading....</div>;
  }
  const type = Array.from(
    new Map(armorSet.map((item) => [item.種類, item])).values()
  );
  return (
    <>
      <div className="hero is-small is-info">
        <div className="hero-body">
          <h1 className="title">防具セット効果リスト</h1>
        </div>
      </div>
      <div className="select is-fullwidth">
        <select
          name="type"
          defaultValue="default"
          onChange={(event) => {
            event.preventDefault();
            setTypes(event.target.value);
          }}
        >
          <option value="default">------</option>
          {type.map((types) => {
            return (
              <option value={types.種類} key={types.種類}>
                {types.種類}
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
            {Object.keys(armorSets[0]).map((head) => {
              return (
                <th key={head} style={{ width: 0 }}>
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {armorSets.map((armor) => {
            if (armor.種類 == selectTypes || selectTypes == "default") {
              return (
                <tr key={armor.シリーズ + armor.種類}>
                  {Object.keys(armorSets[0]).map((head) => {
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
