import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BossList from "./pages/BossList";
import BossStatusList from "./pages/BossStatusList";
import BossAttackList from "./pages/BossAtackList";
import ArmorList from "./pages/ArmorList";
import ArmorStatusList from "./pages/ArmorStatusList";
import ArmorSetList from "./pages/ArmorSetList";
import MeleeWeponList from "./pages/MeleeWeponList";
import RangeWeponList from "./pages/RangeWeponList";
import MagicWeponList from "./pages/MagicWeponList";
import SummonWeponList from "./pages/SummonWeponList";
import ModifierList from "./pages/ModifierList";
import DamageCalculator from "./pages/DamageCalculator";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="hero is-small is-info">
          <div className="hero-body">
            <Link to="/" className="title">
              Terraria Manager
            </Link>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-2">
                <aside
                  className="menu"
                  style={{
                    position: "sticky",
                    top: 48,
                  }}
                >
                  <p>ボス</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/boss">ボスリスト</Link>
                    </li>
                    <li>
                      <Link to="/boss_status">ボスステータスリスト</Link>
                    </li>
                    <li>
                      <Link to="/boss_attack">ボス攻撃リスト</Link>
                    </li>
                  </ul>
                  <p>防具</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/armor">防具リスト</Link>
                    </li>
                    <li>
                      <Link to="/armor_status">防具ステータスリスト</Link>
                    </li>
                    <li>
                      <Link to="/armor_set">防具セット効果リスト</Link>
                    </li>
                  </ul>
                  <p>武器</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/wepon_melee">近接武器リスト</Link>
                    </li>
                    <li>
                      <Link to="/wepon_range">遠距離武器リスト</Link>
                    </li>
                    <li>
                      <Link to="/wepon_magic">魔法武器リスト</Link>
                    </li>
                    <li>
                      <Link to="/wepon_summon">召喚武器リスト</Link>
                    </li>
                  </ul>
                  <p>Modifier</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/modifier">Modifierリスト</Link>
                    </li>
                  </ul>
                  <p>計算機</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/calculator">ダメージ計算器</Link>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="column is-10">
                <Routes>
                  <Route path="/boss" element={<BossList />} />
                  <Route path="/boss_status" element={<BossStatusList />} />
                  <Route path="/boss_attack" element={<BossAttackList />} />
                  <Route path="/armor" element={<ArmorList />} />
                  <Route path="/armor_status" element={<ArmorStatusList />} />
                  <Route path="/armor_set" element={<ArmorSetList />} />
                  <Route path="/wepon_melee" element={<MeleeWeponList />} />
                  <Route path="/wepon_range" element={<RangeWeponList />} />
                  <Route path="/wepon_magic" element={<MagicWeponList />} />
                  <Route path="/wepon_summon" element={<SummonWeponList />} />
                  <Route path="/modifier" element={<ModifierList />} />
                  <Route path="/calculator" element={<DamageCalculator />} />
                </Routes>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
}
