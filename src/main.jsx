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
  return (
    <div id="control">control</div>
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

const monsters = [
  {
    "category": "飛竜種",
    "name": "リオレウス",
    "alias": "火竜",
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
    }
  },
  {
    "category": "飛竜種",
    "name": "リオレイア",
    "alias": "雌火竜",
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
    }
  },
  {
    "category": "牙獣種",
    "name": "ドシャグマ",
    "alias": "闢獣",
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
    }
  }
];
