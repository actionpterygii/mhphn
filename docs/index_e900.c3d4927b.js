(function(_){for(var r in _){_[r].__farm_resource_pot__='index_e900.js';window['0a334099f6c93d1a4080ecab0d2f25c4'].__farm_module_system__.register(r,_[r])}})({"3e2dc2ca":function e(e,r,c,d){e._m(r);var o=c("41124836");c("a0fc9dfd");var a=c("7ed15cd5"),t=c("b6a963cd"),n=document.querySelector("#root");a.createRoot(n).render(o.jsx(t.Main,{}));},"b6a963cd":function e(e,a,n,i){e._m(a),e.o(a,"Main",()=>v);var l=n("493f9ad4");n("2d08c2e5"),n("a3876e70");var s=n("41124836"),t=e.w(n("a0fc9dfd"));function r(){return s.jsx("div",{id:"title",children:"MHPHN"});}function c(e){var a=e.refine.every(e=>"null"===e);return s.jsx("div",{id:"display",children:a?h.map(e=>s.jsxs("div",{className:"category",children:[s.jsx("div",{className:"category_name",children:e}),s.jsx(d,{category:e},e)]},e)):"あああ"});}function d(e){var a=e.category;return s.jsx("div",{className:"monsters",children:_.filter(e=>e.category===a).map(e=>s.jsx(o,{monster:e},e.name))});}function o(e){var a=e.monster;return s.jsxs("div",{className:"monster",children:[s.jsxs("div",{className:"monster_head",children:[s.jsx("div",{className:"monster_name",children:a.name}),s.jsxs("div",{className:"monster_alias",children:["(",a.alias,")"]})]}),s.jsx("div",{className:"monster_body",children:Object.keys(a.valids).map(e=>s.jsxs("div",{className:"valid",children:[s.jsx("div",{className:"valid_head",children:e}),s.jsx("div",{className:"valid_body",children:a.valids[e]})]},e))}),s.jsx("div",{className:"monster_remark",children:a.remark})]},a.name);}function m(e){var a=e.onSelectChange,n=e.refine,i=e.setRefine,r=l._(t.useState(!0),2),c=r[0],d=r[1];return s.jsxs("div",{id:"control",children:[s.jsxs("div",{id:"control_panel",children:[s.jsx("div",{className:"control_select_wrap control_category",children:s.jsxs("select",{name:"category",value:n[0],onChange:e=>a(0,e.target.value),children:[s.jsx("option",{value:"null",children:"種族を選択"}),h.map((e,a)=>s.jsx("option",{value:e,children:e},a))]})}),s.jsx("div",{className:"control_select_wrap control_habitat",children:s.jsxs("select",{name:"habitat",value:n[1],onChange:e=>a(1,e.target.value),children:[s.jsx("option",{value:"null",children:"生息地を選択"}),u.map((e,a)=>s.jsx("option",{value:e,children:e},a))]})}),s.jsx("div",{className:"control_select_wrap control_enemy_element",children:s.jsxs("select",{name:"enemy_element",value:n[2],onChange:e=>a(2,e.target.value),children:[s.jsx("option",{value:"null",children:"攻撃属性を選択"}),j.map((e,a)=>s.jsx("option",{value:e,children:e},a))]})}),s.jsx("div",{className:"control_select_wrap control_valid_element",children:s.jsxs("select",{name:"valid_element",value:n[3],onChange:e=>a(3,e.target.value),children:[s.jsx("option",{value:"null",children:"弱点属性を選択"}),x.map((e,a)=>s.jsx("option",{value:e,children:e},a))]})}),s.jsx("div",{className:"control_select_wrap control_valid_element",children:s.jsx("button",{type:"button",onClick:function(){i([,,,,].fill("null"));},children:"クリア"})})]}),s.jsxs("div",{id:"menu_button",onClick:()=>d(!1),children:[s.jsxs("div",{id:"menu_icon",children:[s.jsx("div",{className:"menu_icon_bar"}),s.jsx("div",{className:"menu_icon_bar"}),s.jsx("div",{className:"menu_icon_bar"})]}),s.jsx("div",{id:"menu_text",children:"MENU"})]}),s.jsx("div",{className:"spotlight_fill".concat(c?" spotlight_fill__off":""),onClick:()=>d(!0),children:s.jsxs("div",{id:"menu",onClick:e=>e.stopPropagation(),children:[s.jsxs("div",{id:"menu_links",children:[s.jsx("a",{href:"",className:"menu_link",children:"English"}),s.jsx("a",{href:"https://www.actionpterygii.com/",className:"menu_link actionpterygii",children:"actionpterygii"})]}),s.jsx("div",{id:"menu_close",onClick:()=>d(!0)})]})})]});}function v(){e.f(t).useEffect(()=>{var e=()=>document.documentElement.style.setProperty("--vh",window.innerHeight+"px");window.addEventListener("load",e),window.addEventListener("resize",e);},[]);var a=l._(t.useState([,,,,].fill("null")),2),n=a[0],i=a[1];return s.jsxs("main",{id:"main",children:[s.jsx(r,{}),s.jsx(c,{refine:n}),s.jsx(m,{onSelectChange:function(e,a){var l=[...n];l[e]=a,i(l);},refine:n,setRefine:i})]});}var h=["飛竜種","鳥竜種","獣竜種","海竜種","牙獣種","両生種","鋏角種"],u=["隔ての砂原","緋の森","油涌き谷"],x=["火","水","雷","氷","龍"],j=["火","水","雷","氷","龍","毒","麻痺","睡眠","爆破","悪臭"],_=[{name:"リオレウス",alias:"火竜",category:"飛竜種",habitat:["緋の森"],element:["火","毒"],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:"あああああああああああああああ"},{name:"リオレイア",alias:"雌火竜",category:"飛竜種",habitat:["緋の森"],element:["火","毒"],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"レ・ダウ",alias:"煌雷竜",category:"飛竜種",habitat:["隔ての砂原"],element:["雷"],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"イャンクック",alias:"怪鳥",category:"鳥竜種",habitat:["緋の森"],element:["火"],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ケマトリス",alias:"炎尾竜",category:"獣竜種",habitat:["隔ての砂原"],element:["火"],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ププロポル",alias:"沼噴竜",category:"獣竜種",habitat:["油涌き谷"],element:[""],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"バーラハーラ",alias:"沙海竜",category:"海竜種",habitat:["隔ての砂原"],element:[""],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ウズ・トゥナ",alias:"波衣竜",category:"海竜種",habitat:["緋の森"],element:["水"],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ババコンガ",alias:"桃毛獣",category:"牙獣種",habitat:["緋の森"],element:[""],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ドシャグマ",alias:"闢獣",category:"牙獣種",habitat:["隔ての砂原","緋の森"],element:[],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"アジャラカン",alias:"赫猿獣",category:"牙獣種",habitat:["油涌き谷"],element:[""],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"チャタカブラ",alias:"纏蛙",category:"両生種",habitat:["隔ての砂原"],element:[""],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ラバラ・バリナ",alias:"刺花蜘蛛",category:"鋏角種",habitat:["緋の森"],element:[""],valids:{火:"◎",水:"◯",雷:"○",氷:"△",龍:"✕",毒:"★",麻痺:"☆",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""}];},});
//# sourceMappingURL=index_e900.c3d4927b.js.map