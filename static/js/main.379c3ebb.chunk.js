(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{31:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(10),o=r.n(i),c=(r(31),r(26)),s=r(14),d=r(21),u=r(3),l=r(4),h=r(6),p=r(5),b=r(2),f=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"componentDidUpdate",value:function(){}},{key:"_titleText",value:function(){var e=this.props,t=e.enemyTurn,r=e.respectfulAppeal;return!0===t?!1===r?"\u0425\u043e\u0434 \u0442\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":"\u0425\u043e\u0434 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":!1===r?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!":"\u0412\u0430\u0448 \u0445\u043e\u0434!"}},{key:"_messageText",value:function(){var e=this.props,t=e.enemyTurn,r=e.respectfulAppeal;return!0===t?!1===r?"\u0425\u043e\u0434 \u0442\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":"\u0425\u043e\u0434 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":!1===r?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!":"\u0412\u0430\u0448 \u0445\u043e\u0434!"}},{key:"render",value:function(){return Object(b.jsx)("header",{id:"game_header",children:Object(b.jsx)("h1",{children:this._titleText()})})}}]),r}(a.a.Component),y=r(7),j=r.n(y),v="\xb7",_="/",O="O",m="*",g=["\u0410","\u0411","\u0412","\u0413","\u0414","\u0415","\u0416","\u0417","\u0418","\u041a"],x=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){return Object(u.a)(this,r),t.call(this,e)}return Object(l.a)(r,[{key:"_renderRows",value:function(e,t){for(var r=e.grid,n=[this._buildRowHeader()],a=0;a<10;a++){for(var i=[Object(b.jsx)("div",{className:"header cell",children:a+1},"header-".concat(a))],o=0;o<10;o++)i.push(this._renderCell(a,o,r[a][o],t));n.push(Object(b.jsx)("div",{className:"row",children:i},a))}return n}},{key:"_renderCell",value:function(e,t,r,n){var a=this,i="".concat(e).concat(t),o=(this._cellId(i),this._cellClasses(r,n));return Object(b.jsx)("div",{id:this._cellId(i),className:o,onClick:this._handleCellClick(e,t,r),onDoubleClick:function(e){return e.preventDefault()},onMouseOver:function(e,t){return a._handleCellMouseOver(e,t)},onMouseOut:function(e,t){return a._handleCellMouseOut(e,t)},children:this._cellValue(r)},i)}},{key:"_buildRowHeader",value:function(){for(var e=[Object(b.jsx)("div",{className:"header cell"},"empty")],t=0;t<10;++t)e.push(Object(b.jsx)("div",{className:"header cell",children:g[t]},t));return Object(b.jsx)("div",{className:"row",children:e},"col-headers")}},{key:"render",value:function(){var e=this.props,t=e.data,r=e.showHidden,n=this._boardClasses();return Object(b.jsx)("div",{className:n,children:this._renderRows(t,r)})}}]),r}(a.a.Component),S=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"_handleCellClick",value:function(e,t,r){return function(e){return!1}}},{key:"_handleCellMouseOver",value:function(e,t){return this._toggleCellClasses(e,t)}},{key:"_handleCellMouseOut",value:function(e,t){return this._toggleCellClasses(e,t)}},{key:"_toggleCellClasses",value:function(e,t){}},{key:"_cellValue",value:function(e){return!1}},{key:"_boardClasses",value:function(){var e=this.props.selectedShip;return j()({grid:!0,pointer:e&&null!=e.id})}},{key:"_cellClasses",value:function(e,t){return j()({cell:!0,ship:e===_,"ship-hit":e===m,"water-hit":e===O})}},{key:"_cellId",value:function(e){return e}},{key:"_validCoords",value:function(e,t,r,n){var a,i=this.props.data;a="horizontal"===r?t+n<=10:e+n<=10;for(var o=!1,c=0;c<n;c++){var s="horizontal"===r?"".concat(e).concat(t+c):"".concat(e+c).concat(t);if(i.grid[s]!=v){o=!0;break}}return a&&!o}}]),r}(x),k=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(e){return Object(u.a)(this,r),t.call(this,e)}return Object(l.a)(r,[{key:"_handleCellClick",value:function(e,t,r){var n=this;return function(r){n.props.onClickBoard(t,e)}}},{key:"_handleCellMouseOver",value:function(e,t){return!1}},{key:"_cellValue",value:function(e){return""}},{key:"_boardClasses",value:function(){var e=this.props,t=e.playerId,r=e.currentTurn;return j()({grid:!0,pointer:t===r})}},{key:"_cellClasses",value:function(e,t){return j()({cell:!0,ship:t&&e===_,hit:e===m,"water-hit":e===O})}},{key:"_cellId",value:function(e){return!1}},{key:"_handleCellMouseOut",value:function(e){return!1}}]),r}(x);function T(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function C(e,t){return g[e]+(t+1)}var w=r(1),F=function(e,t){switch(t.direction){case"right":for(var r=t.startSquare.x-1;r<t.startSquare.x-1+t.size;r++)e[t.startSquare.y-1][r].containsShip=!0,e[t.startSquare.y-1][r].shipId=t.id;break;case"down":for(var n=t.startSquare.y-1;n<t.startSquare.y-1+t.size;n++)e[n][t.startSquare.x-1].containsShip=!0,e[n][t.startSquare.x-1].shipId=t.id}},A=function(e,t){var r=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}];switch(t.direction){case"right":for(var n=t.startSquare.x-1;n<t.startSquare.x-1+t.size;n++)for(var a=0;a<r.length;a++){var i=r[a].y+t.startSquare.y-1,o=r[a].x+n;if(o<0||i<0||o>=10|i>=10);else if(e[i][o].containsShip)return!1}break;case"down":for(var c=t.startSquare.y-1;c<t.startSquare.y-1+t.size;c++)for(var s=0;s<r.length;s++){var d=r[s].y+c,u=r[s].x+t.startSquare.x-1;if(u<0||d<0||u>=10|d>=10);else if(e[d][u].containsShip)return!1}}return!0},I=function(){function e(t,r,n){Object(u.a)(this,e),this.size=t,this.startSquare=r,this.direction=n,this.id=e.incrementId(),this.hitpoints=this.size}return Object(l.a)(e,null,[{key:"incrementId",value:function(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}]),e}();var M=function(){for(var e=[],t=0;t<10;t++)e.push([]);for(var r=0;r<10;r++)for(var n=0;n<10;n++)e[r].push({x:n,y:r,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});for(var a=[],i=1;i<=4;i++)for(var o=1;o<=i;o++){for(var c=5-i,s=void 0,d=void 0,u=void 0;;){if(d=T(1,10-c+1),u=T(1,10),s=Math.random()>=.5?new I(c,{y:u,x:d},"right"):new I(c,{y:d,x:u},"down"),A(e,s))break}F(e,s),a.push(s)}return a};function q(){var e=function(){for(var e=Array(0),t=M(),r=Array(0),n=M(),a=0;a<10;a++){for(var i=[],o=[],c=0;c<10;c++)i.push({x:c,y:a,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null}),o.push({x:c,y:a,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});e.push(i),r.push(o)}t.forEach((function(t){F(e,t)})),n.forEach((function(e){F(r,e)}));for(var s=[],d=[],u=0,l=0;l<10;l++){for(var h=[],p=[],b=0;b<10;b++){var f=e[l][b],y=f.shot?O:v;f.containsShip&&(y=f.shot?m:_),h.push(y),y=(f=r[l][b]).shot?O:v,f.containsShip&&(y=f.shot?m:_,u++),p.push(y)}s.push(h),d.push(p)}return{my_board:{grid:s},myField:e,opponent_board:{grid:d,remaining_hit_points:u},enemyField:r}}();return{actionsToSend:[],debugLastUserTalkCoord:"",my_board:e.my_board,myField:e.myField,opponent_board:e.opponent_board,enemyField:e.enemyField,character:"sber",respectfulAppeal:!0,enemyTurnForce:0,enemyTurn:!1,gameOver:!1,youWin:!1,showHidden:!1}}var E,N,H=[v,v,v,v,v,v,v,v,v,v],L=[H,H,H,H,H,H,H,H,H,H],z={actionsToSend:[],debugLastUserTalkCoord:"",my_board:{grid:L},myField:[],opponent_board:{grid:L,remaining_hit_points:0},enemyField:[],character:"sber",respectfulAppeal:!0,enemyTurnForce:0,enemyTurn:!1,gameOver:!1,youWin:!1,showHidden:!1},D=function(e,t){switch(t.type){case"init":return q();case"character":return Object(w.a)(Object(w.a)({},e),{},{character:t.character_id,respectfulAppeal:"joy"!==t.character_id});case"show_ships":return Object(w.a)(Object(w.a)({},e),{},{showHidden:!0});case"game_over_lost":return Object(w.a)(Object(w.a)({},e),{},{gameOver:!0,youWin:!1});case"game_replay":return Object(w.a)(Object(w.a)({},q()),{},{character:e.character,respectfulAppeal:e.respectfulAppeal});case"clear_action":return Object(w.a)(Object(w.a)({},e),{},{actionsToSend:[]});case"enemy_fire":var r=e.actionsToSend.slice(),n=(t.coord_str,{x:3,y:2});if(n){var a=n.x,i=n.y,o=e.myField[i][a];if(o.containsShip){if(!o.shot){!0;var c=e.myField.slice();c[i]=c[i].slice(),c[i][a]=Object(w.a)(Object(w.a)({},c[i][a]),{},{shot:!0});for(var s=o.shipId,d=0,u=0;u<10;u++)for(var l=0;l<10;l++)c[u][l].containsShip&&c[u][l].shipId===s&&(c[u][l].shot||d++);var h=e.my_board.grid.slice();h[i]=e.my_board.grid[i].slice(),h[i][a]=m,d>0?r.push({id:"0",Action:{action:{action_id:"enemy_fire_hit",parameters:{coord:t.coord_str}}}}):r.push({id:"0",Action:{action:{action_id:"enemy_fire_down",parameters:{coord:t.coord_str}}}});for(var p=0,b=0;b<10;b++)for(var f=0;f<10;f++)!c[b][f].shot&&c[b][f].containsShip&&p++;return p>0?Object(w.a)(Object(w.a)({},e),{},{my_board:{grid:h},myField:c,actionsToSend:r,enemyTurnForce:e.enemyTurnForce+1}):(r.push({id:"0",Action:{action:{action_id:"gameOverLost",parameters:{}}}}),Object(w.a)(Object(w.a)({},e),{},{my_board:{grid:h},myField:c,gameOver:!0,youWin:!1,actionsToSend:r}))}}else{r.push({id:"0",Action:{action:{action_id:"enemy_fire_miss",parameters:{coord:t.coord_str}}}});var y=e.my_board.grid.slice();if(y[i]=e.my_board.grid[i].slice(),y[i][a]===v){!0;var j=e.myField.slice();return j[i]=j[i].slice(),j[i][a]=Object(w.a)(Object(w.a)({},j[i][a]),{},{shot:!0}),y[i][a]=O,Object(w.a)(Object(w.a)({},e),{},{my_board:Object(w.a)(Object(w.a)({},e.my_board),{},{grid:y}),myField:j,enemyTurn:!1,actionsToSend:r})}}}return Object(w.a)(Object(w.a)({},e),{},{actionsToSend:r});case"lets_fire":var _=e.actionsToSend.slice();if(e.enemyTurn)return _.push({id:"0",Action:{action:{action_id:"myMove"}}}),Object(w.a)(Object(w.a)({},e),{},{actionsToSend:_,enemyTurnForce:e.enemyTurnForce+1});var g=(t.coord_str,{x:3,y:2});if(g){var x=g.x,S=g.y,k=e.enemyField[S][x];if(k.containsShip){if(!k.shot){!0;var T=e.enemyField.slice();T[S]=T[S].slice(),T[S][x]=Object(w.a)(Object(w.a)({},T[S][x]),{},{shot:!0});for(var C=k.shipId,F=0,A=0;A<10;A++)for(var I=0;I<10;I++)T[A][I].containsShip&&T[A][I].shipId===C&&(T[A][I].shot||F++);var M=e.opponent_board.grid.slice();return M[S]=e.opponent_board.grid[S].slice(),M[S][x]=m,F>0?_.push({id:"0",Action:{action:{action_id:"fireHit",parameters:{coord:t.coord_str}}}}):_.push({id:"0",Action:{action:{action_id:"fireDone",parameters:{coord:t.coord_str}}}}),e.opponent_board.remaining_hit_points<=1?(_.push({id:"0",Action:{action:{action_id:"gameOverWin",parameters:{}}}}),Object(w.a)(Object(w.a)({},e),{},{opponent_board:{grid:M,remaining_hit_points:e.opponent_board.remaining_hit_points-1},enemyField:T,gameOver:!0,youWin:!0,actionsToSend:_})):Object(w.a)(Object(w.a)({},e),{},{opponent_board:{grid:M,remaining_hit_points:e.opponent_board.remaining_hit_points-1},enemyField:T,actionsToSend:_,debugLastUserTalkCoord:t.coord_str})}_.push({id:"0",Action:{action:{action_id:"fireAgain",parameters:{coord:t.coord_str}}}})}else{var E=e.opponent_board.grid.slice();if(E[S]=e.opponent_board.grid[S].slice(),E[S][x]===v){!0;var N=e.enemyField.slice();return N[S]=N[S].slice(),N[S][x]=Object(w.a)(Object(w.a)({},N[S][x]),{},{shot:!0}),E[S][x]=O,_.push({id:"0",Action:{action:{action_id:"fireMiss",parameters:{coord:t.coord_str}}}}),Object(w.a)(Object(w.a)({},e),{},{actionsToSend:_,debugLastUserTalkCoord:t.coord_str,opponent_board:Object(w.a)(Object(w.a)({},e.opponent_board),{},{grid:E}),enemyField:N,enemyTurn:!0})}}}return Object(w.a)(Object(w.a)({},e),{},{actionsToSend:_,debugLastUserTalkCoord:t.coord_str});default:throw new Error}},R=r(8),U=r(22),V=r(9),W=r(12),B=R.b.div(E||(E=Object(s.a)(["\n    padding: 30px;\n    ","\n"])),V.body1),J=Object(R.a)(U.sberBox),P=Object(R.a)(N||(N=Object(s.a)(["\n    /* stylelint-disable-next-line selector-nested-pattern */\n    html {\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n\n        /** \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043e\u043c \u0432\u0441\u044e \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0443 */\n        min-height: 100vh;\n    }\n"])),V.text,V.background,V.gradient),G=Object(R.a)(W.darkEva),K=Object(R.a)(W.darkSber),Q=Object(R.a)(W.darkJoy),X=Object(n.memo)((function(){var e=Object(n.useReducer)(D,z),t=Object(c.a)(e,2),r=t[0],a=t[1],i=Object(n.useRef)(),o=Object(n.useRef)();function s(){var e=r.opponent_board.remaining_hit_points;return Object(b.jsxs)("div",{id:"opponents_board_container",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h2",{children:"\u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u044b"})}),Object(b.jsx)(k,{data:r.opponent_board,showHidden:r.showHidden,onClickBoard:function(e,t){return a({type:"lets_fire",coord_str:C(e,t)})}}),Object(b.jsxs)("p",{children:["\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043e \u043f\u043e\u0431\u0435\u0434\u044b: ",e,"/",r.debugLastUserTalkCoord]})]})}return Object(n.useEffect)((function(){var e;a({type:"init"}),o.current=(e=function(){return i.current},console.log("process.env.NODE_ENV="),console.log("production"),Object(d.a)({getState:e})),o.current.on("data",(function(e){e.type;var t=e.character,r=(e.navigation,e.action);t&&a({type:"character",character_id:t.id}),r&&a(r)}))}),[]),Object(n.useEffect)((function(){i.current={gameOver:r.gameOver}}),[r.gameOver]),Object(n.useEffect)((function(){r.actionsToSend.length>0&&(r.actionsToSend.forEach((function(e){var t;null===(t=o.current)||void 0===t||t.sendData(e.Action)})),a({type:"clear_action",id:"0"}))}),[r.actionsToSend]),Object(n.useEffect)((function(){r.enemyTurn&&setTimeout((function(){return function(){if(!r.enemyTurn)return;for(var e=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}],t=[{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}],n=r.myField,i=Array.from(Array(10),(function(e){return Array(10).fill(0)})),o=new Set,c=0;c<10;c++)for(var s=0;s<10;s++)for(var d=0;d<t.length;d++){n[c][s].containsShip&&!n[c][s].shot&&o.add(n[c][s].shipId);var u=s+t[d].x,l=c+t[d].y;if(u>=0&&u<10&&l>=0&&l<10&&n[l][u].containsShip&&n[l][u].shot){i[c][s]=1;break}}for(var h=[],p=[],b=0;b<10;b++)for(var f=0;f<10;f++){var y=!0;if(!n[b][f].shot){for(var j=0;j<e.length;j++){var v=f+e[j].x,_=b+e[j].y;if(v>=0&&v<10&&_>=0&&_<10&&n[_][v].containsShip&&n[_][v].shot&&!o.has(n[_][v].shipId)){y=!1;break}}y&&(p.push({y:b,x:f}),1===i[b][f]&&h.push({y:b,x:f}))}}if(p.length>0){var O=h.length>0?h[T(0,h.length-1)]:p[T(0,p.length-1)],m=C(O.x,O.y);a({type:"enemy_fire",coord_str:m})}}()}),1200)}),[r.enemyTurn,r.enemyTurnForce]),Object(b.jsxs)(B,{children:[Object(b.jsx)(J,{}),Object(b.jsx)(P,{}),function(){switch(r.character){case"sber":return Object(b.jsx)(K,{});case"eva":return Object(b.jsx)(G,{});case"joy":return Object(b.jsx)(Q,{});default:return}}(),Object(b.jsx)("main",{id:"game_show",className:"view-container",children:r.gameOver?function(){var e=r.youWin?"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":"\u0412\u044b \u043f\u043e\u0442\u0435\u0440\u043f\u0435\u043b\u0438 \u043a\u0440\u0443\u0448\u0435\u043d\u0438\u0435, \u0441\u0443\u0445\u043e\u043f\u0443\u0442\u043d\u044b\u0439!";return Object(b.jsx)("div",{id:"game_result",children:Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"}),Object(b.jsx)("p",{children:e})]})})}():Object(b.jsxs)("section",{id:"main_section",children:[Object(b.jsx)(f,{enemyTurn:r.enemyTurn,respectfulAppeal:r.respectfulAppeal}),Object(b.jsxs)("section",{id:"boards_container",children:[Object(b.jsxs)("div",{id:"my_board_container",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h2",{children:"\u0421\u0432\u043e\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u0438"})}),Object(b.jsx)(S,{data:r.my_board})]}),s()]})]})})]})})),Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,69)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),Y()}},[[68,1,2]]]);
//# sourceMappingURL=main.379c3ebb.chunk.js.map