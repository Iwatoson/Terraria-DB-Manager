export default function Home() {
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
          <h1 className="title">Terratiaとは</h1>
          <h1 className="subtitle">・2Dサンドボックスゲームである</h1>
          <h1 className="subtitle">・広い世界を探索しながら素材を集めて</h1>
          <h1 className="subtitle">・集めた素材を使って武器や防具を作る</h1>
          <h1 className="subtitle">
            ・それらを装備して強力なボスと戦っていくゲーム
          </h1>
        </div>
      </div>
      <div className="hero is-small is-primary">
        <div className="hero-body">
          <h1 className="title">サイト説明</h1>
          <h1 className="subtitle">・データの取得元はterraria公式wikiである</h1>
        </div>
      </div>
    </>
  );
}
