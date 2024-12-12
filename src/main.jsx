import React, { useState } from "react";
import "./main.css";

// Title
function Title() {
  return (
    <div id="title">MHPHN</div>
  );
}

// Display
function Display() {

  return (
    <div id="display">
      {categories.map((category, key) => (
        <div className="category">
          <Category _key={key} category={category} />
          <MonsterList category={category} />
        </div>
      ))}
    </div>
  );
}

function Category({category, _key}) {
  return (
    <div key={_key} className="category_name">{category}</div>
  );
}



function MonsterList({category}) {
  return (
    <div className="monsters">
      {monsters.filter(monster => monster.category === category).map((monster, key) => (
        <Monster monster={monster} />
      ))}
    </div>
  );
}

function Monster({monster}) {
  return (
    <div className="monster">
      <div className="monster_head">
        <div className="monster_name">{monster.name}</div>
        <div className="monster_alias">({monster.alias})</div>
      </div>
      <div className="monster_body">
        <Valids valids={monster.valids} />
      </div>
      <div className="monster_remark">{monster.remark}</div>
    </div>
  );
}

function Valids({valids}) {
  return (
    <>
      {Object.keys(valids).map((head) => (
        <div className="valid" key={head}>
          <div className="valid_head">{head}</div>
          <div className="valid_body">{valids[head]}</div>
        </div>
      ))}
    </>
  );
}

// Control
function Control() {
  // 右下メニューの開閉
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div id="control">
      <div id="control_panel">


      </div>
      <div id="menu_button" onClick={() => setIsMenuVisible(true)}>
        <div id="menu_icon">
          <div className="menu_icon_bar"></div>
          <div className="menu_icon_bar"></div>
          <div className="menu_icon_bar"></div>
        </div>
        <div id="menu_text">MENU</div>
      </div>
      {isMenuVisible &&
        <div className="spotlight_fill" onClick={() => setIsMenuVisible(false)}>
          <div id="menu" onClick={(e) => e.stopPropagation()}>
            <div id="menu_links">
              <a href="" className="menu_link">English</a>
              <a href="https://www.actionpterygii.com/" className="menu_link actionpterygii">actionpterygii</a>
            </div>
            <div id="menu_close" onClick={() => setIsMenuVisible(false)}></div>
          </div>
        </div>
      }
    </div>
  );
}

// Main
export function Main() {
  return (
    <main id="main">
      <Title />
      <Display />
      <Control />
    </main>
  );
}

const categories = [
  "飛竜種",
  "牙獣種"
];

const habitats = [
  "山",
  "川"
];

const elements = [
  "火",
  "毒"
];

const monsters = [
  {
    "name": "リオレウス",
    "alias": "火竜",
    "category": "飛竜種",
    "habitat": ["山", "川"],
    "element": ["火"],
    "valids": {
      "火": "◎",
      "水": "◎",
      "雷": "◎",
      "氷": "◎",
      "龍": "◎",
      "毒": "◎",
      "麻痺": "◎",
      "睡眠": "◎",
      "爆破": "◎",
      "減気": "◎",
      "気絶": "◎",
      "落罠": "◎",
      "シ罠": "◎",
      "閃光": "◎",
      "音": "◎",
      "糞": "◎",
      "肉": "◎"
    },
    "remark": "あああああああああああああああ"
  },
  {
    "name": "リオレイア",
    "alias": "雌火竜",
    "category": "飛竜種",
    "habitat": ["山"],
    "element": ["火", "毒"],
    "valids": {
      "火": "✕",
      "水": "◎",
      "雷": "◎",
      "氷": "◎",
      "龍": "◎",
      "毒": "◎",
      "麻痺": "◎",
      "睡眠": "◎",
      "爆破": "◎",
      "減気": "◎",
      "気絶": "◎",
      "落罠": "◎",
      "シ罠": "◎",
      "閃光": "◎",
      "音": "◎",
      "糞": "◎",
      "肉": "◎"
    },
    "remark": ""
  },
  {
    "name": "ドシャグマ",
    "alias": "闢獣",
    "category": "牙獣種",
    "habitat": ["川"],
    "element": [],
    "valids": {
      "火": "△",
      "水": "◎",
      "雷": "◎",
      "氷": "◎",
      "龍": "◎",
      "毒": "◎",
      "麻痺": "◎",
      "睡眠": "◎",
      "爆破": "◎",
      "減気": "◎",
      "気絶": "◎",
      "落罠": "◎",
      "シ罠": "◎",
      "閃光": "◎",
      "音": "◎",
      "糞": "◎",
      "肉": "◎"
    },
    "remark": ""
  }
];
