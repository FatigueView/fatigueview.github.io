(self.webpackChunkfatigue_view=self.webpackChunkfatigue_view||[]).push([[4],{"./src/components/VideoCarousel/VideoCarousel.tsx":(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),s=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=a("./node_modules/@babel/runtime/regenerator/index.js"),r=a.n(i),o=a("./node_modules/tslib/tslib.es6.js"),l=a("./node_modules/react/index.js"),d=a("./src/services/fatigueTree.ts"),c=a("./node_modules/styled-components/dist/styled-components.browser.esm.js");var A,u,m;e=a.hmd(e),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&m(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=null,f=function(e){var t=(0,l.useRef)(null),a=e.data,i=(0,l.useState)(1300),m=(0,s.Z)(i,2),g=m[0],f=m[1],p=(0,l.useState)(0),h=(0,s.Z)(p,2),E=h[0],w=h[1],b=(0,l.useState)(0),y=(0,s.Z)(b,2),M=y[0],N=y[1];(0,l.useEffect)((function(){!function(e){(0,o.mG)(void 0,void 0,void 0,r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.p.playAuth({videoId:e});case 2:n=t.sent,v&&(v.dispose(),v=null,document.getElementById("vplayer").innerHTML=""),v=new window.Aliplayer({id:"vplayer",autoplay:!1,width:"100%",height:"562px",vid:e,playauth:n,cover:a[E].cover,language:"en-us"});case 5:case"end":return t.stop()}}),t)})))}(a[E].vid)}),[E]);var C=function(e,t){if(!e)return[];var a=5*(t+1)>=e.length?e.length:5*(t+1);return e.slice(5*t,a)}(a,M).map((function(e,t){var a=5*M+t===E?"selected":"";return l.createElement("div",{className:"carousel-item ".concat(a),key:t},l.createElement("img",{src:e.cover,onClick:function(){w(5*M+t)}}))}));(0,l.useEffect)((function(){t.current&&f(t.current.scrollWidth+60)}),[t]);var L=c.ZP.div(A||(A=(0,n.Z)(["\n    position: relative;\n    left: 900px;\n    width: 100%;\n    line-height: 55px;\n    white-space: nowrap;\n    animation: changebox ","s linear infinite;\n    animation-play-state: running;\n    animation-fill-mode: forwards;\n    &:hover {\n      animation-play-state: paused;\n      cursor: default;\n    }\n    @keyframes changebox {\n      0% {\n        transform: translateX(0);\n      }\n      100% {\n        transform: translateX(-","px);\n      }\n    }\n  "])),20*g/1e3,g),x=(0,c.ZP)(L)(u||(u=(0,n.Z)(["\n    width: 100%;\n  "])));return l.createElement("div",{className:"video-carousel"},l.createElement("div",{className:"desc-container"},l.createElement("div",{className:"desc"},l.createElement(x,{ref:t},a[E].desc))),l.createElement("div",{className:"player-block"},l.createElement("div",{id:"vplayer"})),l.createElement("div",{className:"thumbnails"},l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABqCAMAAACLf4GOAAAAeFBMVEXv7/UALL0CLr0FML4JM78NN8ASO8EYQMIfRsQnTMYwU8g6W8pEY8xYdNFZddFjfdNjfdRthtZ3jdh4jtiCltuMn92Xp+ChsOKisOKsuOS2wee/yOnIz+vQ1u3X2+7d4PDh5PHi5PHk5vHm6PLq6/Ls7fPu7vTv7/SXsGvDAAAAAXRSTlPDQotLbAAAAIdJREFUSMft00cSgzAQRFE+NtjGAeecA7r/Db1veqEDjJavShOlokj94ywwMDAL3wYv1frZwxksFM9QXhWnMNeYJxjcBLsGWs1+hOFd8DeBlRa/h+oh+B3DRtvcQf0S/Ixgm3LQXveJbEm++HQwbaaugWXKGZ0fsl+HXZxfsX0M8WUCAzPQ6R8Jeza+8yGeiQAAAABJRU5ErkJggg==",className:"btn",onClick:function(){0!==M&&N((function(e){return e-1}))}}),l.createElement("div",{className:"videos"},C),l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABqCAMAAACLf4GOAAAAflBMVEXv7/UALL0CLr0FML4IM78JM78NN8ASO8EYQMIfRsQnTMYwU8g6W8pEY8xYdNFZddFjfdNjfdRthtZ3jdh4jtiCltuMn92Xp+ChsOKisOKsuOS2wee/yOnAyenIz+vQ1u3X2+7d4PDh5PHi5PHk5vHm6PLq6/Ls7fPu7vTv7/R8pivxAAAAAXRSTlPDQotLbAAAAItJREFUSMft00cOAyEQRFG+c845jrPn/he011RJHnndLJ8EdFdDKnWlVDoNDAz8hXfF67x1EBzDUPBUg72cOYKB4LkOO7l9Av13jkUDtlL8DHqvHC8tWEubC+g+c7y1YSWBLKHzqIJ2u7vIluSKL5qwyducmkBsdC5kOw47uO+Ij9UeQ3yZwMD/MX0ApXZGvAcDEJwAAAAASUVORK5CYII=",className:"btn right-btn",onClick:function(){M>=Math.ceil(a.length/5)-1||N((function(e){return e+1}))}})))};g(f,"useRef{descRef}\nuseState{[scrollWidth, setScrollWidth](1300)}\nuseState{[currentIndex, setCurrentIndex](0)}\nuseState{[page, setPage](0)}\nuseEffect{}\nuseEffect{}");var p=f;const h=p;var E,w;(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(5,"PAGE_SIZE","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/components/VideoCarousel/VideoCarousel.tsx"),E.register(v,"player","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/components/VideoCarousel/VideoCarousel.tsx"),E.register(f,"VideoCarousel","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/components/VideoCarousel/VideoCarousel.tsx"),E.register(p,"default","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/components/VideoCarousel/VideoCarousel.tsx")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)},"./src/modules/FatigueTree/index.tsx":(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});a("./node_modules/antd/es/modal/style/index.js");var n=a("./node_modules/antd/es/modal/index.js"),s=(a("./node_modules/antd/es/tooltip/style/index.js"),a("./node_modules/antd/es/tooltip/index.js")),i=a("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=a("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),o=(a("./node_modules/antd/es/tree/style/index.js"),a("./node_modules/antd/es/tree/index.js")),l=a("./node_modules/react/index.js"),d=a("./node_modules/react-redux/es/index.js"),c=a("./src/components/VideoCarousel/VideoCarousel.tsx");var A,u=a("./src/assets/images/tree_logo_3.png");e=a.hmd(e),(A="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&A(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=o.Z.TreeNode,v=function(e){return{loading:e.loading.effects.fatigueTree.asyncFatigueTree,list:e.fatigueTree.list,playAuthId:e.fatigueTree.playAuthId,videoCovers:e.fatigueTree.videoCovers}},f=function(e){return{getList:e.fatigueTree.asyncFatigueTree,getPlayAuth:e.fatigueTree.asyncPlayAuth,getVideoCovers:e.fatigueTree.asyncVideoCovers}},p=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return Object.keys(t).map((function(s,i){var r=a?a+"-"+String(i):a+String(i);if(n[i]={name:s,children:[],nodes:t[s].data?1:0,videos:0,keys:r},t[s].data)n[i].data=t[s].data,n[i].videos=n[i].data?n[i].data.length:0;else{n[i].children=e(t[s],r);var o=0,l=0;n[i].children.forEach((function(e){o+=e.nodes,l+=e.videos})),n[i].nodes+=o,n[i].videos+=l}})),n},h=function(e){return e.map((function(e){var t=[];return e.data&&e.data.forEach((function(e){t.push(e.name)})),e.children&&e.children.length&&function e(a){a.forEach((function(a){a.data&&a.data.forEach((function(e){t.push(e.name)})),a.children&&a.children.length&&e(a.children)}))}(e.children),e.videos=(0,r.Z)(new Set(t)).length,e})),e},E=function(e){var t=p(e.list),a=h(t),d=(0,l.useState)(!1),A=(0,i.Z)(d,2),m=A[0],v=A[1],f=(0,l.useState)([]),E=(0,i.Z)(f,2),w=E[0],b=E[1],y=(0,l.useState)([]),M=(0,i.Z)(y,2),N=M[0],C=M[1],L=(0,l.useState)(0),x=(0,i.Z)(L,2),S=x[0],k=x[1],Q=(0,l.useState)(0),T=(0,i.Z)(Q,2),G=T[0],F=T[1],I=(0,l.useState)([]),Z=(0,i.Z)(I,2),B=Z[0],D=Z[1];(0,l.useEffect)((function(){e.getList(),D(["0"])}),[]),(0,l.useEffect)((function(){var t=[],a=0;!function e(n){Object.keys(n).forEach((function(s){n[s].data?(a+=1,t=t.concat(n[s].data.map((function(e){return e.name})))):e(n[s])}))}(e.list),k((0,r.Z)(new Set(t)).length),F(a)}),[e.list]);var V=function(t){if(t.data){var a=[];t.data.forEach((function(e){a.push(e.id)})),a.length&&e.getVideoCovers({videoIds:a}),C(t.data)}};(0,l.useEffect)((function(){if(Object.keys(e.videoCovers).length){var t=N.map((function(t){return{desc:t.description,vid:t.id,cover:R(t.id,e.videoCovers)}}));b(t)}}),[e.videoCovers,N]),(0,l.useEffect)((function(){w.length&&v(!0)}),[w]);var R=function(e,t){var a="";return Object.keys(t).forEach((function(n){e===n&&(a=t[n])})),a};return l.createElement("div",{className:"fatigue-tree"},l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"title"},"FatigueTree"),l.createElement("div",{className:"description"},"FatigueTree is an online system with a taxonomic visualization (tree diagram) of various drowsiness visual signs (with videos). FatigueTree is open-structure and co-built by researchers, users and industrial developers.")),l.createElement("div",{className:"menu"},l.createElement("div",{className:"menu-title"},"Contents"),l.createElement("a",{href:"#part-one"},"FatigueTree from You"),l.createElement("a",{href:"#part-two"},"FatigueTree for All"),l.createElement("a",{href:"#part-three"},"Privacy policy")),l.createElement("div",{className:"tree"},l.createElement("div",{className:"list"},l.createElement(o.Z,{checkable:!1,showLine:!0,selectable:!1,expandedKeys:B,onExpand:function(e){D(e)}},function e(t){return t.data?void 0:t.map((function(t){return l.createElement(g,{switcherIcon:t.data?l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiklEQVQ4T73TMQ4BURAG4G/DMTQuIZEouAlxhz2GxgH0LkGxyZ5ArXEFHVYkuw0iIxNePe/LzJ+ZQvIV7f8exugHvQtqXDtggh1OQWCAGaoOmGKDYRA4YoH9T4ERzji86SrUwRxrLLF9QsLAI5cGK5S4tdD/gNQI6RA/rUQog6+A9Cqnjyl4Aq9ld+S9OhFqYL1qAAAAAElFTkSuQmCC"}):"",selectable:!1,title:l.createElement(s.Z,{placement:"rightTop",title:"".concat(t.videos," ").concat(t.videos>1?"videos":"video"," and ").concat(t.nodes," ").concat(t.nodes>1?"leaves":"leaf")},l.createElement("span",{onClick:function(){return V(t)}},t.name)),key:t.keys,dataRef:t.children},e(t.children))}))}(a))),l.createElement("div",{className:"detail"},l.createElement("div",{className:"detail-nums"},l.createElement("div",{className:"detail-nums-block"},l.createElement("div",{className:"name"},"Visual Signs"),l.createElement("div",{className:"num"},G),l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACGCAMAAAAb3sO/AAAAb1BMVEUAAAAA//8AgIAAgP8AVaoAVf8AQL8AQP8AM8wAK6oAVdUASbYASdsAQL8AQN8AOcYAM7MAM8wALrkARtEAQL8AQNUAO8QAN7YAN8gAM7sAM8wAML8AQM8APMMAObgAOcYANrwANskAM78AM8wAMcKAyuiyAAAAJXRSTlMAAQICAwMEBAUGBgcHCAgJCgoLCwwMDQ4ODw8QEBESEhMTFBQVm+lztAAABLZJREFUeNrtnN16ojAQhhNBFlGKKLIougjm/q9xD3za8jMkM0kkOSCnUPoqmZlvvknLGGMsKpqX8HIxxnghvF2M8ZvwGc/j704IFgmv8Qq/8Rq/8V5+44kVb8Vb8Va8FW/FM8A7xP4sAC9iHq0Vb8Vb8Va8FW/F+zjeJknzoiryNAm8wwuzund/fQx9woumllYd+4IXlqAwq7Ze4KWzyjFzj8fPEmVbcsd4/CpV3nXgFE9BJ0TNXeKdlZ1L6RAvRXRWmTO8ENX5Ra7wShTe1REe1sGP3eBdkXh3J3gh2neIXOBl0/uasiiBsUPuAm+iUh7vTRbXkwsO8PhEoXwXCD6J6HB5vN3onudv+eLjF3xYHm9cMZLetfiTlQOHl4+iYnBxtP3Oy+MVstI/kgp/l8erhrecZEnntjzeZXjLZXDxNApq53vvIcuJhfvIjST1Ll8eLxmXBj4buCJdHi8Y33See++WNQGy5j4mVe3dlgWTmta4kAQ5YAwc06yaHkWwEBnJ4xrS8PDHXczl8k4I0QQ0tfxA0jXGve626/XMWLwdEm9vSrdp+oUTrcZxJ8GMxSivB/kTjRcts/PK4YvA9zInBJ1x2B57D3tFJI+lUtIZe0DD6tQGJIdKFb3NxpAueo13MqVRDeXH1Z6mBm7wRAzrZe7o7ZPuI/B2iN6y5BisuXdbCVM8xnbwBmwS41p2EhbwGDtMdohoU3Pb9iDs4DGelG3v/q7cW/CUY2ELjzHG42NR1U1dFXlsxe8OW5t4ttdcSvUDb3Yk4QdeIXzGS4XPeLHwGe8t3n3F2zTCYzz5n4s4xwOHTT+Ovw7e9na3NvvJYNH9vR818ILW3mwqmRPdsS7eu/60VsYDERS03fY3F9LxqqmFZk+8CyHErudYk/F+ROPVmI/fIbqvfh02OChSfCRoi8EuIuLFFm3QHBxX84EGpOGFnT3HYg9aNHz4ZdDOsfyDYkxv/YHoxvngQHIJbvZsgaDFGUgEvMKeqQKL9wMzwPuyd7CGg27SiRng7SwerAHPE1UGzvy8aNSwB1J10BLxglnR+CILMFC8PwODuQavJb4Z0ZkKO8KHxOFJTyjdSeELi/e9yVToKHdFKfNvWLwfTYZWicpTJsxIC1p6QuBF6r/hRR8OyYiOuRoPFo168wxYvEtiS4nHUdM0nLiXiHddvEqgFkbcw8lzxwzwTgK5KiUfnDzlVVGBBzq+D/AbVZ7+KTXGXHI8sP60AdzEpBri/cYN8GDHN5qL5pgs3pXDaRkeHLT72Vwoi0Fw3top412CBzu+ucJ+MBPvBDx5/ckoWwl+D4hOdB4vVdQfMBAv6HEZLN7ReLGq/hDS2Akt3rF4oHjvIrVyS4zEOxIP9asRH0GSPJk+HvLFoboGULxjLWL4B7H1RxU+DDg4TDqNA+Lhk4ZS/MLiHS2vITxCypWmbg3xjsAjiUZJ4dMR72q8mFbuZ2XDrPPREBpjIPKI9UeSN5CZh4RHlpqHuawbYPO2IZ7ChZ+pWTriXQdPWX9gca8j3jXw1E0ixx7dVIp3DTxEi41q1XXMaPUjUQZFhPpnZR15Eqd8JLL+7D9zdFPZXWMfdFTTaYyRLHgTGIsS1adP139ewDMHDqHEgwAAAABJRU5ErkJggg==",className:"bottom-icon"})),l.createElement("div",{className:"detail-nums-block"},l.createElement("div",{className:"name"},"Videos"),l.createElement("div",{className:"num"},S),l.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACGCAMAAAAICYNLAAAAZlBMVEUAAAAA//8AgIAAgP8AVaoAVf8AQL8AM8wAVdUASbYAQL8AQN8AOcYAM7MAM8wATcwALrkARtEAQL8AQNUAO8QAN7YAN8gAM7sAM8wAML8AQM8APMMAObgAOcYANrwANskAM78AMcIKiG1cAAAAInRSTlMAAQICAwMEBQYHCAgJCgoKCwsMDA0ODg8PEBAREhITExQVl4d9AwAAAbNJREFUeNrt2m1OwlAQRuGOhYJVVLACgoW++9+kojFC6Rd/Oidx7gJunoSEkzvTJPk6lm+OAp3dCZXMD2Kdb9aDBGTNRWTZAcnKhWRtmKwjk6VgBStYwQpWsACssnA+z42sIvE/wQpWsIIVrGAFK1jBClawghWsYAUrWMEKVrCCFaxgBStY/4hly335ZDjW+nTNewpjpT/3HDIWK/u9KWey9GpIlvYTJEvVDMmSHpksrQ3JUjlFslTdI1nSiyFZ2qZI1o0pGo11W4pGZGllSJZ2KZKl4wzJGpyisVkDUzQ6Sx9TJEvVHMkakiIXlrZ3SFZvipxYfSlyY3WnyI/VmSJHVleKPFkdKfJltabImaX9FMlqSZE7qzlFAFZTiggslRmSdZ0iCKueIgqrNgHGsC5TxGFdpIjE0pshWX8TYBZLVYZkqWSyNGGyDMlaIX/EwoisnPi/dfbUBrHOZ+Qc1tKAqa7tXyCs+raKwbp6xSJYC+LLp2lv7M9q3LK7swojPvZz4sSmdbLrympfyXqylgYcUnau+91Y3R9HeLF69ndOrAVx59P/mZIHa8BHXQ6son8t/Am5ifCBKRUSOQAAAABJRU5ErkJggg==",className:"bottom-icon"}))),l.createElement("div",{className:"detail-desc"},l.createElement("div",{className:"desc-name"},"We hope to"),l.createElement("div",{className:"desc"},"1. Improve visual-based drowsiness detection approaches towards reality and robustness."),l.createElement("div",{className:"desc"},"2. Collect various real drowsiness visual signs in a natural way while managing them structurally."),l.createElement("div",{className:"desc"},"3. Promote standardization of visual-based drowsiness detection filed."),l.createElement("img",{src:u.Z,className:"bottom-icon"})))),l.createElement("div",{className:"menu-content"},l.createElement("div",{id:"part-one"},l.createElement("div",{className:"part-title"},"FatigueTree from You"),l.createElement("div",{className:"part-desc"},"FatigueTree is regularly enriched in terms of branches and videos from you. If the drowsiness type is not found in the tree, you are highly encouraged to submit new relevant branches and videos. Just uploading videos under an existing branch is also welcome. To ensure the validity of FatigueTree, all submissions are double confirmed via the system manager before merging. Please send your submission to our official contact email ",l.createElement("a",{className:"no-link"},"(fatigueview@horizon.ai)"),"  with the format below:"),l.createElement("div",{className:"item"},l.createElement("div",null,"1. ",l.createElement("span",null,"Subject:")," FatigueTree Submission"),l.createElement("div",null,"2. ",l.createElement("span",null,"Content:"),l.createElement("p",{className:"tip"},"a. Existing branch name/number or father branch name/number."),l.createElement("p",{className:"tip"},"b. A short description of your submission."),l.createElement("p",{className:"tip"},"c. Video attachment (Limited to 30 MB. Otherwise, link to GoogleDrive, Baidu Disc, etc.)."),l.createElement("p",{className:"tip"},"d. Contact information (will be appended to the contributor list).")))),l.createElement("div",{id:"part-two"},l.createElement("div",{className:"part-title"},"FatigueTree for All"),l.createElement("div",{className:"part-desc"},"Timely detection of drowsiness is a key function in driver monitoring system (DMS) to avoid drowsy driving and potential accidents. We hope FatigueTree can energize both industry and academia in an accurate and robust drowsiness detection. Thus, the tree-structure (exclude videos) is open source under the",l.createElement("a",{href:" https://opensource.org/licenses/MIT"},"  MIT license"),".",l.createElement("br",null),"Noted that,",l.createElement("b",null," FatigueTree does not own the copyright of the videos"),". For researchers and educators who wish to use the videos for",l.createElement("b",null,"  non-commercial research and/or educational purposes"),", we can provide access through our site under certain conditions and terms. Please send your application to our official contact email (fatigueview@horizon.ai) with the format below:"),l.createElement("div",{className:"item"},l.createElement("div",null,"1. ",l.createElement("span",null,"Subject:")," FatigueTree Video Application"),l.createElement("div",null,"2. ",l.createElement("span",null,"Content:"),l.createElement("p",{className:"tip"},"a. A brief introduction of yourself. "),l.createElement("p",{className:"tip"},"b. A brief introduction of your research group (better with group website link)."),l.createElement("p",{className:"tip"},"c. Purpose of using these videos.")))),l.createElement("div",{id:"part-three"},l.createElement("div",{className:"part-title"},"Privacy policy"),l.createElement("div",{className:"part-desc"},"We care about your data and privacy, that is why videos in your submission will be treated in a way that complies with the Chinese laws and regulations on privacy and protection of personal information. Once your submission is accepted by FatigueTree, our system manager will contact you regarding the publicity of the videos."))),l.createElement(n.Z,{width:1e3,visible:m,onCancel:function(){v(!1)},footer:null,forceRender:!0,maskClosable:!1,destroyOnClose:!0,className:"modal-style"},l.createElement(c.Z,{data:w})))};m(E,"useState{[visible, setVisible](false)}\nuseState{[videoImgArr, setVideoImgArr]([])}\nuseState{[videoData, setVideoData]([])}\nuseState{[total, setTotal](0)}\nuseState{[signs, setSigns](0)}\nuseState{[expandedKeys, setExpandedKeys]([])}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}");var w=(0,d.$j)(v,f)(E);const b=w;var y,M;(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(g,"TreeNode","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx"),y.register(v,"mapState","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx"),y.register(f,"mapDispatch","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx"),y.register(p,"formatList","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx"),y.register(h,"counterNames","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx"),y.register(E,"FatigueTree","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx"),y.register(w,"default","/Users/haining.ji/Desktop/new-p/fatigue/fatigue-view/src/modules/FatigueTree/index.tsx")),(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&M(e)},"./src/assets/images/tree_logo_3.png":(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACWCAMAAAAGwfGXAAAAb1BMVEUAAAAA//8AgIAAgP8AVaoAVf8AQL8AQP8AM8wAK6oAVdUASbYASdsAQL8AQN8AOcYAM7MAM8wALrkARtEAQL8AQNUAO8QAN7YAN8gAM7sAM8wAML8AQM8APMMAObgAOcYANrwANskAM78AM8wAMcKAyuiyAAAAJXRSTlMAAQICAwMEBAUGBgcHCAgJCgoLCwwMDQ4ODw8QEBESEhMTFBQVm+lztAAAAp1JREFUeNrt2t1yozAMhuHPAbJO02yan2bbEJaG6P6vcU/aTtud2AYk2QfSFTwDGF57AADAP/cDlTEAUJ+pnAHgByoKVBflIeBMZYE8FQY6lQbqSwPdSgORgQxkIAMZyED8oHavN2lXaAe9SbuQ50VhIHpbFgYi2pQGopMrDERdUxiIhnVhIKK9KwxEbVUYiK4+Ayi8V9vqg07+GhK9OHUQqjYk6pfqILhDSHR7VAcB6+C50dGpg9B0wdd2rQ6CCx7VDCt1EPA7Q7YFQfj1FhK9LtRBqM7a2RYBwe2Vsy0GAh4G1WyLg1Crrv8EUGz9r9VBwEYv29JAWPZa2ZYIgntRyrZUEPCkk23pIOhk2wiQTraNAcEd5bNtFEgj20aCItl2qdVBcH9ks200CNiKZtsEELxktk0BiWbbJJBktk0DCWbbVJBYtk0GxbLtQR0klG1zQCLZNgskkW3zQMCOO9vmgtizbTaIO9vmg5izjQHEm20sIDR/2bKNB8SYbUwgvmxjA3FlGx8okm2p658RxJNtnCCWbOMFMWQbM2h+tnGDYtl2CN42dxAAzci2qiUJEBYTs81fSQY0Mdu2d3/XmQ+akG3vNSwFGp1tHw+eGGhktj3eSBoErG+p2fYFLwlCE1z/l8/1X11IBxTZtn1k22ogLVBStu3if+kxgqLZtnglXVAs23rSBsWyTR8Uy7YMoEi2ZQBFsi0DKJZtGUCRbMsAws83TnZQLNsygLC6Fgb69l0vAhTJNqK9NuhLG97ZR6qDAuu/q5EDdDfbnh3ygO5k20Zqb5902/772rYNcoLgtt+epG4jePqRXEmnd1N39KLHMWOuU+N97aTPh2aOgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGUhw/gGQCpMRWVgAAAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=4.4f33f327.js.map