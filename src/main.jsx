import React, {useState} from "react";
import "./main.css";

// Title
function Title() {
  return (
    <div id="title">MHPHN</div>
  );
}

// Display
function Display({refine}) {

  // 全部の値が'null'の場合true
  const isDefault = (function(arr) {
    return arr.every(e => e === 'null');
  })(refine);

  return (
    <div id="display">
      {isDefault ?
        categories.map((category) => (
          <div key={category} className="category">
            <div className="category_name">{category}</div>
            <CategoryMonsterList key={category} category={category} />
          </div>
        ))
        :
        'あああ'
      }
    </div>
  );
}

function CategoryMonsterList({category}) {
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
        <div className="monster_name">{monster.name}</div>
        <div className="monster_alias">({monster.alias})</div>
      </div>
      <div className="monster_body">
        {Object.keys(monster.valids).map((head) => (
          <div key={head} className="valid">
            <div className="valid_head">{head}</div>
            <div className="valid_body">{monster.valids[head]}</div>
          </div>
        ))}
      </div>
      <div className="monster_remark">{monster.remark}</div>
    </div>
  );
}

// Control
function Control({onSelectChange, refine, setRefine}) {
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
            <option value="null">種族を選択</option>
            {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_habitat">
          <select name="habitat" value={refine[1]} onChange={e => onSelectChange(1, e.target.value)}>
            <option value="null">生息地を選択</option>
            {habitats.map((habitat, index) => <option key={index} value={habitat}>{habitat}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_enemy_element">
          <select name="enemy_element" value={refine[2]} onChange={e => onSelectChange(2, e.target.value)}>
            <option value="null">攻撃属性を選択</option>
            {enemy_elements.map((enemy_element, index) => <option key={index} value={enemy_element}>{enemy_element}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_valid_element">
          <select name="valid_element" value={refine[3]} onChange={e => onSelectChange(3, e.target.value)}>
            <option value="null">弱点属性を選択</option>
            {valid_elements.map((valid_element, index) => <option key={index} value={valid_element}>{valid_element}</option>)}
          </select>
        </div>
        <div className="control_select_wrap control_valid_element">
          <button type="button" onClick={clearAllSelect}>クリア</button>
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
            <a href="" className="menu_link">English</a>
            <a href="https://www.actionpterygii.com/" className="menu_link actionpterygii">actionpterygii</a>
          </div>
          <div id="menu_close" onClick={() => setIsMenuHidden(true)}></div>
        </div>
      </div>
    </div>
  );
}

// Main
export function Main() {

  // 読み込み時に実行
  React.useEffect(() => {
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
      <Display refine={refine} />
      <Control onSelectChange={handleSelectChange} refine={refine} setRefine={setRefine} />
    </main>
  );
}

const categories = [
  "飛竜種",
  "鳥竜種",
  "獣竜種",
  "海竜種",
  "牙獣種",
  "両生種",
  "鋏角種"
];

const habitats = [
  "隔ての砂原",
  "緋の森",
  "油涌き谷"
];

const valid_elements = [
  "火",
  "水",
  "雷",
  "氷",
  "龍"
];

const enemy_elements = [
  "火",
  "水",
  "雷",
  "氷",
  "龍",
  "毒",
  "麻痺",
  "睡眠",
  "爆破",
  "悪臭"
];

const monsters = [
  {
    "name": "リオレウス",
    "alias": "火竜",
    "category": "飛竜種",
    "habitat": ["緋の森"],
    "element": ["火", "毒"],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "habitat": ["緋の森"],
    "element": ["火", "毒"],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "レ・ダウ",
    "alias": "煌雷竜",
    "category": "飛竜種",
    "habitat": ["隔ての砂原"],
    "element": ["雷"],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "イャンクック",
    "alias": "怪鳥",
    "category": "鳥竜種",
    "habitat": ["緋の森"],
    "element": ["火"],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "ケマトリス",
    "alias": "炎尾竜",
    "category": "獣竜種",
    "habitat": ["隔ての砂原"],
    "element": ["火"],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "ププロポル",
    "alias": "沼噴竜",
    "category": "獣竜種",
    "habitat": ["油涌き谷"],
    "element": [""],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "バーラハーラ",
    "alias": "沙海竜",
    "category": "海竜種",
    "habitat": ["隔ての砂原"],
    "element": [""],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "ウズ・トゥナ",
    "alias": "波衣竜",
    "category": "海竜種",
    "habitat": ["緋の森"],
    "element": ["水"],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "ババコンガ",
    "alias": "桃毛獣",
    "category": "牙獣種",
    "habitat": ["緋の森"],
    "element": [""],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "habitat": ["隔ての砂原", "緋の森"],
    "element": [],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "アジャラカン",
    "alias": "赫猿獣",
    "category": "牙獣種",
    "habitat": ["油涌き谷"],
    "element": [""],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "チャタカブラ",
    "alias": "纏蛙",
    "category": "両生種",
    "habitat": ["隔ての砂原"],
    "element": [""],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
    "name": "ラバラ・バリナ",
    "alias": "刺花蜘蛛",
    "category": "鋏角種",
    "habitat": ["緋の森"],
    "element": [""],
    "valids": {
      "火": "◎",
      "水": "◯",
      "雷": "○",
      "氷": "△",
      "龍": "✕",
      "毒": "★",
      "麻痺": "☆",
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
];
