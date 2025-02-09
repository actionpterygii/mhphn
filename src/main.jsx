import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
import "./main.css";
import wilds_jp from "./data/jp/wilds.json";
import wilds_en from "./data/en/wilds.json";

// Title
function Title() {
  return (
    <h1 id="title">モンスターハンターワイルズ 弱点一覧</h1>
  );
}

// Display
function Display({refine, data}) {

  // 全部の値が'null'の場合true
  const isDefault = (function(arr) {
    return arr.every(e => e === 'null');
  })(refine);

  let refinedMonsters = [];
  if (!isDefault) {
    for (const monster of data.monsters) {

      // このモンスターが必要か
      let isRequired = true;

      // 種族
      const category = refine[0];
      if (category !== "null") {
        if (category === monster["category"]) {
          isRequired = true;
        } else {
          isRequired = false;
        }
      }

      // 生息地
      const habitat = refine[1];
      if (habitat !== "null" && isRequired) {
        if (monster["habitat"].includes(habitat)) {
          isRequired = true;
        } else {
          isRequired = false;
        }
      }

      // 攻撃属性
      const enemy_element = refine[2];
      if (enemy_element !== "null" && isRequired) {
        if (monster["enemy_element"].includes(enemy_element)) {
          isRequired = true;
        } else {
          isRequired = false;
        }
      }

      // 弱点属性
      const valid_element = refine[3];
      if (valid_element !== "null" && isRequired) {
        if (monster["valid_element"][valid_element.slice(0,2)] === "◎") {
          isRequired = true;
        } else {
          isRequired = false;
        }
      }

      if (isRequired) {
        refinedMonsters.push(monster);
      }

    }
  }

  return (
    <div id="display">
      {isDefault ?
        data.categories.map((category) => (
          <div key={category} className="category">
            <h2 className="category_name">{category}</h2>
            <CategoryMonsterList key={category} category={category} monsters={data.monsters} />
          </div>
        ))
        :
        refinedMonsters == [] ?
          "該当なし"
        :
          refinedMonsters.map((monster) => (
            <Monster key={monster.name} monster={monster} />
          ))
      }
    </div>
  );
}

function CategoryMonsterList({category, monsters}) {
  return (
    <div className="monsters">
      {monsters.filter(monster => monster.category === category).map((monster) => 
        <Monster key={monster.name} monster={monster} />
      )}
    </div>
  );
}

function Monster({monster}) {
  return (
    <div key={monster.name} className="monster">
      <div className="monster_head">
        <h3 className="monster_name">{monster.name}</h3>
        <div className="monster_alias"> ({monster.alias})</div>
      </div>
      <div className="monster_body">
        {Object.keys(monster.valid_element).map((head) => (
          <div key={head} className="valid">
            <div className="valid_head">{head}</div>
            <div className="valid_body">{monster.valid_element[head]}</div>
          </div>
        ))}
      </div>
      <div className="monster_remark">{monster.remark}</div>
    </div>
  );
}

// Control
function Control({onSelectChange, refine, setRefine, data, select}) {
  // 右下メニューの開閉
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  // セレクトを初期値に
  function clearAllSelect() {
    setRefine(Array(4).fill('null'));
  }

  return (
    <div id="control">
      <div id="control_panel">
        <div className="control_select_wrap control_category">
          <select name="category" value={refine[0]} onChange={e => onSelectChange(0, e.target.value)}>
            <option value="null">{select[0]}</option>
            {data.categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_habitat">
          <select name="habitat" value={refine[1]} onChange={e => onSelectChange(1, e.target.value)}>
            <option value="null">{select[1]}</option>
            {data.habitats.map((habitat, index) => <option key={index} value={habitat}>{habitat}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_enemy_element">
          <select name="enemy_element" value={refine[2]} onChange={e => onSelectChange(2, e.target.value)}>
            <option value="null">{select[2]}</option>
            {data.enemy_elements.map((enemy_element, index) => <option key={index} value={enemy_element}>{enemy_element}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_valid_element">
          <select name="valid_element" value={refine[3]} onChange={e => onSelectChange(3, e.target.value)}>
            <option value="null">{select[3]}</option>
            {data.valid_elements.map((valid_element, index) => <option key={index} value={valid_element}>{valid_element}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_valid_element">
          <button type="button" onClick={clearAllSelect}>{select[4]}</button>
        </div>
      </div>
      <div id="menu_button" onClick={() => setIsMenuHidden(false)}>
        <div id="menu_icon">
          <div className="menu_icon_bar"></div>
          <div className="menu_icon_bar"></div>
          <div className="menu_icon_bar"></div>
        </div>
        <div id="menu_text">MENU</div>
      </div>
      <div className={`spotlight_fill${isMenuHidden ? ' spotlight_fill__off' : ''}`} onClick={() => setIsMenuHidden(true)}>
        <div id="menu" onClick={(e) => e.stopPropagation()}>
          <div id="menu_links">
            {data.links.map((link, index) => (
              <Link key={index} to={link.url} className="menu_link" onClick={() => setIsMenuHidden(true)}>
                {link.name}
              </Link>
            ))}
            <a href="https://www.actionpterygii.com/" className="menu_link actionpterygii">actionpterygii</a>
          </div>
          <div id="menu_close" onClick={() => setIsMenuHidden(true)}></div>
        </div>
      </div>
    </div>
  );
}

// Main
function Main({data}) {

  const location = useLocation();

  const [select, setSelect] = useState([
    '種族を選択',
    '生息地を選択',
    '攻撃属性を選択',
    '弱点属性を選択',
    'クリア'
  ]);

  useEffect(() => {
    if (location.pathname.endsWith('/en')) {
      document.documentElement.lang = 'en';
      document.title = 'MONSTER HUNTER WILDS Weakness List | MHPHN';
      document.querySelector('meta[name="description"]').setAttribute('content', 'You can quickly find the weak points of monsters in Monster Hunter Wilds by narrowing down your search based on race, habitat, and other criteria.');
      document.getElementById('title').textContent = 'MONSTER HUNTER WILDS Weakness List';
      setSelect([
        'Select Class',
        'Select Habitat',
        'Select Attack Element',
        'Select Weak Element',
        'Clear'
      ]);
      document.body.classList.add('en');
    } else {
      document.documentElement.lang = 'ja';
      document.title = 'モンスターハンターワイルズ 弱点一覧 | MHPHN';
      document.querySelector('meta[name="description"]').setAttribute('content', 'モンスターハンターワイルズのモンスターの弱点などを種族,生息地などの条件を元に絞り込んで素早く参照することができます。');
      document.getElementById('title').textContent = 'モンスターハンターワイルズ 弱点一覧';
      setSelect([
        '種族を選択',
        '生息地を選択',
        '攻撃属性を選択',
        '弱点属性を選択',
        'クリア'
      ]);
      document.body.classList.remove('en');
    }
  }, [location.pathname]);

  // 読み込み時に実行
  useEffect(() => {
    // バーの有無で変わったりするスマホでも対応できるような縦いっぱい
    const setVh = () => document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
    window.addEventListener('load', setVh);
    window.addEventListener('resize', setVh);
  }, []);

  // 絞り込み状況
  // 各セレクトボックス
  // 種族、出現フィールド、攻撃属性、最弱点
  const [refine, setRefine] = useState(Array(4).fill('null'));

  // セレクトボックスの値が変化したとき
  function handleSelectChange(type, value) {
    // refineの値を変更
    const newRefine = [...refine];
    newRefine[type] = value;
    setRefine(newRefine);
  }

  return (
    <main id="main">
      <Title />
      <Display refine={refine} data={data} />
      <Control onSelectChange={handleSelectChange} refine={refine} setRefine={setRefine} data={data} select={select} />
    </main>
  );
}

export function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/en" element={<Main data={wilds_en} />} />
        <Route path="/" element={<Main data={wilds_jp} />} />
      </Routes>
    </Router>
  );
}
