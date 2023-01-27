import { useEffect, useState } from "react";
import melee from "../data/meleemodifier.json";
import range from "../data/rangemodifier.json";
import magic from "../data/magicmodifier.json";
import summon from "../data/summonmodifier.json";
import common from "../data/commonmodifier.json";
import universal from "../data/universalmodifier.json";

export default function ModifierList() {
  const [melees, setMelees] = useState([]);
  const [ranges, setRanges] = useState([]);
  const [magics, setMagics] = useState([]);
  const [summons, setSummons] = useState([]);
  const [commons, setCommons] = useState([]);
  const [universals, setUniversals] = useState([]);
  const [selectTypes, setTypes] = useState("default");

  useEffect(() => {
    setMelees(melee);
    setRanges(range);
    setMagics(magic);
    setSummons(summon);
    setCommons(common);
    setUniversals(universal);
  }, []);
  if (
    melees.length === 0 ||
    ranges.length === 0 ||
    magics.length === 0 ||
    summons.length === 0 ||
    commons.length === 0 ||
    universals.length === 0
  ) {
    return <div>now loading....</div>;
  }
  const type = [
    universals[0].種類,
    commons[0].種類,
    melees[0].種類,
    ranges[0].種類,
    magics[0].種類,
    summons[0].種類,
  ];
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
          <h1 className="title">Modifierリスト</h1>
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
          name="types"
          defaultValue="default"
          onChange={(event) => {
            event.preventDefault();
            setTypes(event.target.value);
          }}
        >
          <option value="default">------</option>
          {type.map((types) => {
            return (
              <option value={types} key={types}>
                {types}
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
            zIndex: 3,
          }}
        >
          <tr>
            {Object.keys(universals[0]).map((head) => {
              if (
                universals[0].種類 === selectTypes ||
                selectTypes === "default"
              ) {
                return (
                  <th key={head} style={{ width: 0 }}>
                    {head}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {universals.map((universal) => {
            if (universal.種類 === selectTypes || selectTypes === "default") {
              return (
                <tr key={universal.名前 + universal.種類}>
                  {Object.keys(universals[0]).map((head) => {
                    return <td key={head}>{universal[`${head}`]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
        <thead
          style={{
            background: "white",
            position: "sticky",
            top: 124,
            zIndex: 4,
          }}
        >
          <tr>
            {Object.keys(commons[0]).map((head) => {
              if (
                commons[0].種類 === selectTypes ||
                selectTypes === "default"
              ) {
                return (
                  <th key={head} style={{ width: 0 }}>
                    {head}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {commons.map((common) => {
            if (common.種類 === selectTypes || selectTypes === "default") {
              return (
                <tr key={common.名前 + common.種類}>
                  {Object.keys(commons[0]).map((head) => {
                    return <td key={head}>{common[`${head}`]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>

        <thead
          style={{
            background: "white",
            position: "sticky",
            top: 124,
            zIndex: 5,
          }}
        >
          <tr>
            {Object.keys(melees[0]).map((head) => {
              if (melees[0].種類 === selectTypes || selectTypes === "default") {
                return (
                  <th key={head} style={{ width: 0 }}>
                    {head}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {melees.map((melee) => {
            if (melee.種類 === selectTypes || selectTypes === "default") {
              return (
                <tr key={melee.名前 + melee.種類}>
                  {Object.keys(melees[0]).map((head) => {
                    return <td key={head}>{melee[`${head}`]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
        <thead
          style={{
            background: "white",
            position: "sticky",
            top: 124,
            zIndex: 6,
          }}
        >
          <tr>
            {Object.keys(ranges[0]).map((head) => {
              if (ranges[0].種類 === selectTypes || selectTypes === "default") {
                return (
                  <th key={head} style={{ width: 0 }}>
                    {head}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {ranges.map((range) => {
            if (range.種類 === selectTypes || selectTypes === "default") {
              return (
                <tr key={range.名前 + range.種類}>
                  {Object.keys(ranges[0]).map((head) => {
                    return <td key={head}>{range[`${head}`]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
        <thead
          style={{
            background: "white",
            position: "sticky",
            top: 124,
            zIndex: 7,
          }}
        >
          <tr>
            {Object.keys(magics[0]).map((head) => {
              if (magics[0].種類 === selectTypes || selectTypes === "default") {
                return (
                  <th key={head} style={{ width: 0 }}>
                    {head}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {magics.map((magic) => {
            if (magic.種類 === selectTypes || selectTypes === "default") {
              return (
                <tr key={magic.名前 + magic.種類}>
                  {Object.keys(magics[0]).map((head) => {
                    return <td key={head}>{magic[`${head}`]}</td>;
                  })}
                </tr>
              );
            }
          })}
        </tbody>
        <thead
          style={{
            background: "white",
            position: "sticky",
            top: 124,
            zIndex: 8,
          }}
        >
          <tr>
            {Object.keys(summons[0]).map((head) => {
              if (
                summons[0].種類 === selectTypes ||
                selectTypes === "default"
              ) {
                return (
                  <th key={head} style={{ width: 0 }}>
                    {head}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {summons.map((summon) => {
            if (summon.種類 === selectTypes || selectTypes === "default") {
              return (
                <tr key={summon.名前 + summon.種類}>
                  {Object.keys(summons[0]).map((head) => {
                    return <td key={head}>{summon[`${head}`]}</td>;
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
