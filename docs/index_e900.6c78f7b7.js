(function(_){for(var r in _){_[r].__farm_resource_pot__='index_e900.js';window['0a334099f6c93d1a4080ecab0d2f25c4'].__farm_module_system__.register(r,_[r])}})({"3e2dc2ca":function e(e,r,c,d){e._m(r);var o=c("41124836");c("a0fc9dfd");var a=c("7ed15cd5"),t=c("b6a963cd"),n=document.querySelector("#root");a.createRoot(n).render(o.jsx(t.Main,{}));},"b6a963cd":function e(e,i,s,a){e._m(i),e.o(i,"Main",()=>j);var n=s("493f9ad4"),r=s("41124836"),d=e.w(s("a0fc9dfd"));function c(){return r.jsx("div",{id:"title",children:"MHPHN"});}function t(){return r.jsx("div",{id:"display",children:h.map((e,i)=>r.jsxs("div",{className:"category",children:[r.jsx(l,{_key:i,category:e}),r.jsx(m,{category:e})]}))});}function l(e){var i=e.category,s=e._key;return r.jsx("div",{className:"category_name",children:i},s);}function m(e){var i=e.category;return r.jsx("div",{className:"monsters",children:u.filter(e=>e.category===i).map((e,i)=>r.jsx(o,{monster:e}))});}function o(e){var i=e.monster;return r.jsxs("div",{className:"monster",children:[r.jsxs("div",{className:"monster_head",children:[r.jsx("div",{className:"monster_name",children:i.name}),r.jsxs("div",{className:"monster_alias",children:["(",i.alias,")"]})]}),r.jsx("div",{className:"monster_body",children:r.jsx(v,{valids:i.valids})}),r.jsx("div",{className:"monster_remark",children:i.remark})]});}function v(e){var i=e.valids;return r.jsx(r.Fragment,{children:Object.keys(i).map(e=>r.jsxs("div",{className:"valid",children:[r.jsx("div",{className:"valid_head",children:e}),r.jsx("div",{className:"valid_body",children:i[e]})]},e))});}function x(){var e=n._(d.useState(!1),2),i=e[0],s=e[1];return r.jsxs("div",{id:"control",children:[r.jsx("div",{id:"control_panel"}),r.jsxs("div",{id:"menu_button",onClick:()=>s(!0),children:[r.jsxs("div",{id:"menu_icon",children:[r.jsx("div",{className:"menu_icon_bar"}),r.jsx("div",{className:"menu_icon_bar"}),r.jsx("div",{className:"menu_icon_bar"})]}),r.jsx("div",{id:"menu_text",children:"MENU"})]}),i&&r.jsx("div",{className:"spotlight_fill",onClick:()=>s(!1),children:r.jsxs("div",{id:"menu",onClick:e=>e.stopPropagation(),children:[r.jsxs("div",{id:"menu_links",children:[r.jsx("a",{href:"",className:"menu_link",children:"English"}),r.jsx("a",{href:"https://www.actionpterygii.com/",className:"menu_link actionpterygii",children:"actionpterygii"})]}),r.jsx("div",{id:"menu_close",onClick:()=>s(!1)})]})})]});}function j(){return e.f(d).useEffect(()=>{var e=()=>document.documentElement.style.setProperty("--vh",window.innerHeight+"px");window.addEventListener("load",e),window.addEventListener("resize",e);},[]),r.jsxs("main",{id:"main",children:[r.jsx(c,{}),r.jsx(t,{}),r.jsx(x,{})]});}var h=["飛竜種","牙獣種"],u=[{name:"リオレウス",alias:"火竜",category:"飛竜種",habitat:["山","川"],element:["火"],valids:{火:"◎",水:"◎",雷:"◎",氷:"◎",龍:"◎",毒:"◎",麻痺:"◎",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:"あああああああああああああああ"},{name:"リオレイア",alias:"雌火竜",category:"飛竜種",habitat:["山"],element:["火","毒"],valids:{火:"✕",水:"◎",雷:"◎",氷:"◎",龍:"◎",毒:"◎",麻痺:"◎",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""},{name:"ドシャグマ",alias:"闢獣",category:"牙獣種",habitat:["川"],element:[],valids:{火:"△",水:"◎",雷:"◎",氷:"◎",龍:"◎",毒:"◎",麻痺:"◎",睡眠:"◎",爆破:"◎",減気:"◎",気絶:"◎",落罠:"◎",シ罠:"◎",閃光:"◎",音:"◎",糞:"◎",肉:"◎"},remark:""}];},});
//# sourceMappingURL=index_e900.6c78f7b7.js.map