import { useEffect, useState } from "react";

import bossStatus from "../data/bossstatus.json";
import meleeWeponData from "../data/meleeweponlist.json";
import rangeWeponData from "../data/rangeweponlist.json";
import magicWeponData from "../data/magicweponlist.json";
import summonWeponData from "../data/summonweponlist.json";
import melee from "../data/meleemodifier.json";
import range from "../data/rangemodifier.json";
import magic from "../data/magicmodifier.json";
import summon from "../data/summonmodifier.json";
import common from "../data/commonmodifier.json";
import universal from "../data/universalmodifier.json";

export default function DamageCalculator() {
  const [bossData, setBossData] = useState([]);
  const [weponData, setWeponData] = useState([]);
  const [modifier, setModifier] = useState([]);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [boss, setBoss] = useState({});
  const [wepon, setWepon] = useState({});
  const [selectBoss, setSelectBoss] = useState("King Slime");
  const [slectWepon, setSelectWepon] = useState("Copper Shortsword");

  useEffect(() => {
    setBossData(bossStatus);
    setWeponData([
      ...meleeWeponData,
      ...rangeWeponData,
      ...magicWeponData,
      ...summonWeponData,
    ]);
    setModifier([
      ...melee,
      ...range,
      ...magic,
      ...summon,
      ...common,
      ...universal,
    ]);
    setBoss(
      Array.from(
        new Map(bossStatus.map((item) => [item.ボス名, item])).values()
      )
    );
    setWepon([
      ...meleeWeponData,
      ...rangeWeponData,
      ...magicWeponData,
      ...summonWeponData,
    ]);
  }, []);
  if (
    bossData.length === 0 ||
    weponData.length === 0 ||
    modifier.length === 0
  ) {
    return <div>now loading...</div>;
  }

  const inputBossChange = (e) => {
    setText1(e.target.value);
    inputBoss(e.target.value);
  };
  const inputWeponChange = (e) => {
    setText2(e.target.value);
    inputWepon(e.target.value);
  };

  const inputBoss = (text1) => {
    if (text1 === "") {
      setBoss(
        Array.from(
          new Map(bossStatus.map((item) => [item.ボス名, item])).values()
        )
      );
      console.log(
        Array.from(
          new Map(bossStatus.map((item) => [item.ボス名, item])).values()
        )
      );
      return;
    }
    console.log(
      Array.from(
        new Map(bossStatus.map((item) => [item.ボス名, item])).values()
      )
    );
    const serchBoss = bossData.filter((boss) => {
      return boss["ボス名"].toUpperCase().indexOf(text1.toUpperCase()) !== -1;
    });
    setBoss(
      Array.from(new Map(serchBoss.map((item) => [item.ボス名, item])).values())
    );
  };
  const inputWepon = (text2) => {
    if (text2 === "") {
      setWepon([
        ...meleeWeponData,
        ...rangeWeponData,
        ...magicWeponData,
        ...summonWeponData,
      ]);
      return;
    }
    const serchWepon = weponData.filter((wepon) => {
      return wepon["武器名"].toUpperCase().indexOf(text2.toUpperCase()) !== -1;
    });
    setWepon(serchWepon);
  };

  let maxhp = 0;
  let atack = 0;
  let diffence = 0;

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
          <h1 className="title">ダメージ計算器</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-half">
          <div className="panel">
            <p className="panel-heading">Select Boss</p>
            <p className="panel-block">
              <input type="text" onChange={inputBossChange} />
            </p>
            <div className="select">
              <select
                defaultValue={"King Slime"}
                onChange={(event) => {
                  event.preventDefault();
                  setSelectBoss(event.target.value);
                }}
              >
                {Object.values(boss).map((item) => {
                  return (
                    <option value={item["ボス名"]} key={item["ボス名"]}>
                      {item["ボス名"]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="panel">
            <p className="panel-heading">Select Wepon</p>
            <p className="panel-block">
              <input type="text" onChange={inputWeponChange} />
            </p>
            <div className="select">
              <select
                defaultValue={"Copper Shortsword"}
                onChange={(event) => {
                  event.preventDefault();
                  setSelectWepon(event.target.value);
                }}
              >
                {Object.values(wepon).map((item) => {
                  return (
                    <option value={item["武器名"]} key={item["武器名"]}>
                      {item["武器名"]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="panel">
        <p className="panel-heading">ダメージ計算式</p>
        <p className="panel-heading">
          ボスの最大体力 - {"("} 武器の攻撃力 * 3{"("}難易度補正{")"} - 防御力
          {")"}= 攻撃後のボスの体力
        </p>
      </div>
      <div>
        {bossData.map((item) => {
          if (item["ボス名"] === selectBoss) {
            maxhp += Number(item["HP"]);
            diffence = Number(item["最大防御力"]);
          }
        })}
        {weponData.map((item) => {
          if (item["武器名"] === slectWepon) {
            atack += Number(item["攻撃力"]);
          }
        })}
        <div className="panel">
          <p className="panel-heading">
            {maxhp} - {"("} {atack} * 3 - {diffence} {")"} =
            {maxhp - (atack * 3 - diffence <= 0 ? 1 : atack * 3 - diffence)}
          </p>
        </div>
      </div>
    </>
  );
}
