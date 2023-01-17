import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BossList from "./pages/BossList";
import BossStatusList from "./pages/BossStatusList";
import BossAttackList from "./pages/BossAtackList";
import ArmorList from "./pages/ArmorList";
import ArmorStatusList from "./pages/ArmorStatusList";
import ArmorSetList from "./pages/ArmorSetList";

export default function App() {
  return (
    <>
      <BrowserRouter>
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
                </Routes>
              </div>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
}
