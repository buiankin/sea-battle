(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{31:function(e,r,t){},68:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),i=t(10),o=t.n(i),c=(t(31),t(26)),s=t(14),d=t(21),u=t(3),l=t(4),h=t(6),p=t(5),b=t(2),f=function(e){Object(h.a)(t,e);var r=Object(p.a)(t);function t(){return Object(u.a)(this,t),r.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"_titleText",value:function(){var e=this.props,r=e.enemyTurn,t=e.respectfulAppeal;return!0===r?!1===t?"\u0425\u043e\u0434 \u0442\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":"\u0425\u043e\u0434 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":!1===t?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!":"\u0412\u0430\u0448 \u0445\u043e\u0434!"}},{key:"_messageText",value:function(){var e=this.props,r=e.enemyTurn,t=e.respectfulAppeal;return!0===r?!1===t?"\u0425\u043e\u0434 \u0442\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":"\u0425\u043e\u0434 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":!1===t?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!":"\u0412\u0430\u0448 \u0445\u043e\u0434!"}},{key:"render",value:function(){return Object(b.jsx)("header",{id:"game_header",children:Object(b.jsx)("h1",{children:this._titleText()})})}}]),t}(a.a.Component),y=t(7),j=t.n(y),v="\xb7",_="/",O="O",m="*",g=["\u0410","\u0411","\u0412","\u0413","\u0414","\u0415","\u0416","\u0417","\u0418","\u041a"],x=["\u0410\u043b\u044c\u0444\u0430","\u0411\u0440\u0430\u0432\u043e","\u0412\u0438\u043a\u0442\u043e\u0440","\u0413\u043e\u043b\u044c\u0444","\u0414\u0435\u043b\u044c\u0442\u0430","\u042d\u0445\u043e","\u0416\u043e\u0440\u0430","\u0417\u0443\u043b\u0443","\u0418\u0433\u043e\u0440\u044c","\u041a\u0438\u0440\u0438\u043b\u043b"],k=function(e){Object(h.a)(t,e);var r=Object(p.a)(t);function t(e){return Object(u.a)(this,t),r.call(this,e)}return Object(l.a)(t,[{key:"_renderRows",value:function(e,r){for(var t=e.grid,n=[this._buildRowHeader()],a=0;a<10;a++){for(var i=[Object(b.jsx)("div",{className:"header cell",children:a+1},"header-".concat(a))],o=0;o<10;o++)i.push(this._renderCell(a,o,t[a][o],r));n.push(Object(b.jsx)("div",{className:"row",children:i},a))}return n}},{key:"_renderCell",value:function(e,r,t,n){var a=this,i="".concat(e).concat(r),o=(this._cellId(i),this._cellClasses(t,n));return Object(b.jsx)("div",{id:this._cellId(i),className:o,onClick:this._handleCellClick(e,r,t),onDoubleClick:function(e){return e.preventDefault()},onMouseOver:function(e,r){return a._handleCellMouseOver(e,r)},onMouseOut:function(e,r){return a._handleCellMouseOut(e,r)},children:this._cellValue(t)},i)}},{key:"_buildRowHeader",value:function(){for(var e=[Object(b.jsx)("div",{className:"header cell"},"empty")],r=0;r<10;++r)e.push(Object(b.jsx)("div",{className:"header cell",children:g[r]},r));return Object(b.jsx)("div",{className:"row",children:e},"col-headers")}},{key:"render",value:function(){var e=this.props,r=e.data,t=e.showHidden,n=this._boardClasses();return Object(b.jsx)("div",{className:n,children:this._renderRows(r,t)})}}]),t}(a.a.Component),S=function(e){Object(h.a)(t,e);var r=Object(p.a)(t);function t(){return Object(u.a)(this,t),r.apply(this,arguments)}return Object(l.a)(t,[{key:"_handleCellClick",value:function(e,r,t){return function(e){return!1}}},{key:"_handleCellMouseOver",value:function(e,r){return this._toggleCellClasses(e,r)}},{key:"_handleCellMouseOut",value:function(e,r){return this._toggleCellClasses(e,r)}},{key:"_toggleCellClasses",value:function(e,r){}},{key:"_cellValue",value:function(e){return!1}},{key:"_boardClasses",value:function(){var e=this.props.selectedShip;return j()({grid:!0,pointer:e&&null!=e.id})}},{key:"_cellClasses",value:function(e,r){return j()({cell:!0,ship:e===_,"ship-hit":e===m,"water-hit":e===O})}},{key:"_cellId",value:function(e){return e}},{key:"_validCoords",value:function(e,r,t,n){var a,i=this.props.data;a="horizontal"===t?r+n<=10:e+n<=10;for(var o=!1,c=0;c<n;c++){var s="horizontal"===t?"".concat(e).concat(r+c):"".concat(e+c).concat(r);if(i.grid[s]!=v){o=!0;break}}return a&&!o}}]),t}(k),T=function(e){Object(h.a)(t,e);var r=Object(p.a)(t);function t(e){return Object(u.a)(this,t),r.call(this,e)}return Object(l.a)(t,[{key:"_handleCellClick",value:function(e,r,t){var n=this;return function(t){n.props.onClickBoard(r,e)}}},{key:"_handleCellMouseOver",value:function(e,r){return!1}},{key:"_cellValue",value:function(e){return""}},{key:"_boardClasses",value:function(){var e=this.props,r=e.playerId,t=e.currentTurn;return j()({grid:!0,pointer:r===t})}},{key:"_cellClasses",value:function(e,r){return j()({cell:!0,ship:r&&e===_,hit:e===m,"water-hit":e===O})}},{key:"_cellId",value:function(e){return!1}},{key:"_handleCellMouseOut",value:function(e){return!1}}]),t}(k);function C(e,r){return e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e+1))+e}function w(e,r){return g[e]+(r+1)}function F(e){for(var r=null,t=-1,n=e.replace("-"," ").toUpperCase(),a=["\u041e\u0414\u0418\u041d","\u0414\u0412\u0410","\u0422\u0420\u0418","\u0427\u0415\u0422\u042b\u0420\u0415","\u041f\u042f\u0422\u042c","\u0428\u0415\u0421\u0422\u042c","\u0421\u0415\u041c\u042c","\u0412\u041e\u0421\u0415\u041c\u042c","\u0414\u0415\u0412\u042f\u0422\u042c","\u0414\u0415\u0421\u042f\u0422\u042c"],i=0;i<a.length;i++)n=n.replace(a[i],(i+1).toString());n=n.replace(/ /g,"");for(var o=1;o<n.length-1;o++)"0123456789".includes(n[o])||(n=n.substring(0,o)+" "+n.substring(o+1));if(3===(n=n.replace(/ /g,"")).length&&"10"===n.substring(1)?t=9:2===n.length&&"0123456789".includes(n.substring(2))&&(t=parseInt(n.substring(1))-1),t>=0)switch(n.substring(0,1)){case"\u0410":r={x:0,y:t};break;case"\u0411":r={x:1,y:t};break;case"\u0412":r={x:2,y:t};break;case"\u0413":r={x:3,y:t};break;case"\u0414":r={x:4,y:t};break;case"\u0415":case"\u042d":r={x:5,y:t};break;case"\u0416":r={x:6,y:t};break;case"\u0417":r={x:7,y:t};break;case"\u0418":r={x:8,y:t};break;case"\u041a":r={x:9,y:t}}return r}var A=t(1),I=function(e,r){switch(r.direction){case"right":for(var t=r.startSquare.x-1;t<r.startSquare.x-1+r.size;t++)e[r.startSquare.y-1][t].containsShip=!0,e[r.startSquare.y-1][t].shipId=r.id;break;case"down":for(var n=r.startSquare.y-1;n<r.startSquare.y-1+r.size;n++)e[n][r.startSquare.x-1].containsShip=!0,e[n][r.startSquare.x-1].shipId=r.id}},M=function(e,r){var t=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}];switch(r.direction){case"right":for(var n=r.startSquare.x-1;n<r.startSquare.x-1+r.size;n++)for(var a=0;a<t.length;a++){var i=t[a].y+r.startSquare.y-1,o=t[a].x+n;if(o<0||i<0||o>=10|i>=10);else if(e[i][o].containsShip)return!1}break;case"down":for(var c=r.startSquare.y-1;c<r.startSquare.y-1+r.size;c++)for(var s=0;s<t.length;s++){var d=t[s].y+c,u=t[s].x+r.startSquare.x-1;if(u<0||d<0||u>=10|d>=10);else if(e[d][u].containsShip)return!1}}return!0},q=function(){function e(r,t,n){Object(u.a)(this,e),this.size=r,this.startSquare=t,this.direction=n,this.id=e.incrementId(),this.hitpoints=this.size}return Object(l.a)(e,null,[{key:"incrementId",value:function(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}]),e}();var E=function(){for(var e=[],r=0;r<10;r++)e.push([]);for(var t=0;t<10;t++)for(var n=0;n<10;n++)e[t].push({x:n,y:t,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});for(var a=[],i=1;i<=4;i++)for(var o=1;o<=i;o++){for(var c=5-i,s=void 0,d=void 0,u=void 0;;){if(d=C(1,10-c+1),u=C(1,10),s=Math.random()>=.5?new q(c,{y:u,x:d},"right"):new q(c,{y:d,x:u},"down"),M(e,s))break}I(e,s),a.push(s)}return a};function N(){var e=function(){for(var e=Array(0),r=E(),t=Array(0),n=E(),a=0;a<10;a++){for(var i=[],o=[],c=0;c<10;c++)i.push({x:c,y:a,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null}),o.push({x:c,y:a,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});e.push(i),t.push(o)}r.forEach((function(r){I(e,r)})),n.forEach((function(e){I(t,e)}));for(var s=[],d=[],u=0,l=0;l<10;l++){for(var h=[],p=[],b=0;b<10;b++){var f=e[l][b],y=f.shot?O:v;f.containsShip&&(y=f.shot?m:_),h.push(y),y=(f=t[l][b]).shot?O:v,f.containsShip&&(y=f.shot?m:_,u++),p.push(y)}s.push(h),d.push(p)}return{my_board:{grid:s},myField:e,opponent_board:{grid:d,remaining_hit_points:u},enemyField:t}}();return{actionsToSend:[],debugLastUserTalkCoord:"",my_board:e.my_board,myField:e.myField,opponent_board:e.opponent_board,enemyField:e.enemyField,character:"sber",respectfulAppeal:!0,enemyTurnForce:0,enemyTurn:!1,gameOver:!1,youWin:!1,showHidden:!1}}var H,z,L=[v,v,v,v,v,v,v,v,v,v],D=[L,L,L,L,L,L,L,L,L,L],R={actionsToSend:[],debugLastUserTalkCoord:"",my_board:{grid:D},myField:[],opponent_board:{grid:D,remaining_hit_points:0},enemyField:[],character:"sber",respectfulAppeal:!0,enemyTurnForce:0,enemyTurn:!1,gameOver:!1,youWin:!1,showHidden:!1},U=function(e,r){switch(r.type){case"init":return N();case"character":return Object(A.a)(Object(A.a)({},e),{},{character:r.character_id,respectfulAppeal:"joy"!==r.character_id});case"show_ships":return Object(A.a)(Object(A.a)({},e),{},{showHidden:!0});case"game_over_lost":return Object(A.a)(Object(A.a)({},e),{},{gameOver:!0,youWin:!1});case"game_replay":return Object(A.a)(Object(A.a)({},N()),{},{character:e.character,respectfulAppeal:e.respectfulAppeal});case"clear_action":return Object(A.a)(Object(A.a)({},e),{},{actionsToSend:[]});case"enemy_fire":var t=e.actionsToSend.slice(),n=F(r.coord_str);if(n){var a=n.x,i=n.y,o=e.myField[i][a];if(o.containsShip){if(!o.shot){!0;var c=e.myField.slice();c[i]=c[i].slice(),c[i][a]=Object(A.a)(Object(A.a)({},c[i][a]),{},{shot:!0});for(var s=o.shipId,d=0,u=0;u<10;u++)for(var l=0;l<10;l++)c[u][l].containsShip&&c[u][l].shipId===s&&(c[u][l].shot||d++);var h=e.my_board.grid.slice();h[i]=e.my_board.grid[i].slice(),h[i][a]=m,d>0?t.push({id:"0",Action:{action:{action_id:"enemy_fire_hit",parameters:{coord:r.coord_str}}}}):t.push({id:"0",Action:{action:{action_id:"enemy_fire_down",parameters:{coord:r.coord_str}}}});for(var p=0,b=0;b<10;b++)for(var f=0;f<10;f++)!c[b][f].shot&&c[b][f].containsShip&&p++;return p>0?Object(A.a)(Object(A.a)({},e),{},{my_board:{grid:h},myField:c,actionsToSend:t,enemyTurnForce:e.enemyTurnForce+1}):(t.push({id:"0",Action:{action:{action_id:"gameOverLost",parameters:{}}}}),Object(A.a)(Object(A.a)({},e),{},{my_board:{grid:h},myField:c,gameOver:!0,youWin:!1,actionsToSend:t}))}}else{t.push({id:"0",Action:{action:{action_id:"enemy_fire_miss",parameters:{coord:r.coord_str}}}});var y=e.my_board.grid.slice();if(y[i]=e.my_board.grid[i].slice(),y[i][a]===v){!0;var j=e.myField.slice();return j[i]=j[i].slice(),j[i][a]=Object(A.a)(Object(A.a)({},j[i][a]),{},{shot:!0}),y[i][a]=O,Object(A.a)(Object(A.a)({},e),{},{my_board:Object(A.a)(Object(A.a)({},e.my_board),{},{grid:y}),myField:j,enemyTurn:!1,actionsToSend:t})}}}return Object(A.a)(Object(A.a)({},e),{},{actionsToSend:t});case"lets_fire":var _=e.actionsToSend.slice();if(e.enemyTurn)return _.push({id:"0",Action:{action:{action_id:"myMove"}}}),Object(A.a)(Object(A.a)({},e),{},{actionsToSend:_,enemyTurnForce:e.enemyTurnForce+1});var g=F(r.coord_str);if(g){var x=g.x,k=g.y,S=e.enemyField[k][x];if(S.containsShip){if(!S.shot){!0;var T=e.enemyField.slice();T[k]=T[k].slice(),T[k][x]=Object(A.a)(Object(A.a)({},T[k][x]),{},{shot:!0});for(var C=S.shipId,w=0,I=0;I<10;I++)for(var M=0;M<10;M++)T[I][M].containsShip&&T[I][M].shipId===C&&(T[I][M].shot||w++);var q=e.opponent_board.grid.slice();return q[k]=e.opponent_board.grid[k].slice(),q[k][x]=m,w>0?_.push({id:"0",Action:{action:{action_id:"fireHit",parameters:{coord:r.coord_str}}}}):_.push({id:"0",Action:{action:{action_id:"fireDone",parameters:{coord:r.coord_str}}}}),e.opponent_board.remaining_hit_points<=1?(_.push({id:"0",Action:{action:{action_id:"gameOverWin",parameters:{}}}}),Object(A.a)(Object(A.a)({},e),{},{opponent_board:{grid:q,remaining_hit_points:e.opponent_board.remaining_hit_points-1},enemyField:T,gameOver:!0,youWin:!0,actionsToSend:_})):Object(A.a)(Object(A.a)({},e),{},{opponent_board:{grid:q,remaining_hit_points:e.opponent_board.remaining_hit_points-1},enemyField:T,actionsToSend:_,debugLastUserTalkCoord:r.coord_str})}_.push({id:"0",Action:{action:{action_id:"fireAgain",parameters:{coord:r.coord_str}}}})}else{var E=e.opponent_board.grid.slice();if(E[k]=e.opponent_board.grid[k].slice(),E[k][x]===v){!0;var H=e.enemyField.slice();return H[k]=H[k].slice(),H[k][x]=Object(A.a)(Object(A.a)({},H[k][x]),{},{shot:!0}),E[k][x]=O,_.push({id:"0",Action:{action:{action_id:"fireMiss",parameters:{coord:r.coord_str}}}}),Object(A.a)(Object(A.a)({},e),{},{actionsToSend:_,debugLastUserTalkCoord:r.coord_str,opponent_board:Object(A.a)(Object(A.a)({},e.opponent_board),{},{grid:E}),enemyField:H,enemyTurn:!0})}}}return Object(A.a)(Object(A.a)({},e),{},{actionsToSend:_,debugLastUserTalkCoord:r.coord_str});default:throw new Error}},V=t(8),W=t(22),B=t(9),J=t(12),P=V.b.div(H||(H=Object(s.a)(["\n    padding: 30px;\n    ","\n"])),B.body1),G=Object(V.a)(W.sberBox),K=Object(V.a)(z||(z=Object(s.a)(["\n    /* stylelint-disable-next-line selector-nested-pattern */\n    html {\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n\n        /** \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043e\u043c \u0432\u0441\u044e \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0443 */\n        min-height: 100vh;\n    }\n"])),B.text,B.background,B.gradient),Q=Object(V.a)(J.darkEva),X=Object(V.a)(J.darkSber),Y=Object(V.a)(J.darkJoy),Z=Object(n.memo)((function(){var e=Object(n.useReducer)(U,R),r=Object(c.a)(e,2),t=r[0],a=r[1],i=Object(n.useRef)(),o=Object(n.useRef)();function s(){var e=t.opponent_board.remaining_hit_points;return Object(b.jsxs)("div",{id:"opponents_board_container",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h2",{children:"\u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u044b"})}),Object(b.jsx)(T,{data:t.opponent_board,showHidden:t.showHidden,onClickBoard:function(e,r){return a({type:"lets_fire",coord_str:w(e,r)})}}),Object(b.jsxs)("p",{children:["\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043e \u043f\u043e\u0431\u0435\u0434\u044b: ",e]})]})}return Object(n.useEffect)((function(){var e;a({type:"init"}),o.current=(e=function(){return i.current},console.log("process.env.NODE_ENV="),console.log("production"),Object(d.a)({getState:e})),o.current.on("data",(function(e){e.type;var r=e.character,t=(e.navigation,e.action);e.insets;r&&a({type:"character",character_id:r.id}),t&&a(t)}))}),[]),Object(n.useEffect)((function(){i.current={gameOver:t.gameOver}}),[t.gameOver]),Object(n.useEffect)((function(){t.actionsToSend.length>0&&(t.actionsToSend.forEach((function(e){var r;null===(r=o.current)||void 0===r||r.sendData(e.Action)})),a({type:"clear_action",id:"0"}))}),[t.actionsToSend]),Object(n.useEffect)((function(){t.enemyTurn&&setTimeout((function(){return function(){if(!t.enemyTurn)return;for(var e=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}],r=[{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}],n=t.myField,i=Array.from(Array(10),(function(e){return Array(10).fill(0)})),o=new Set,c=0;c<10;c++)for(var s=0;s<10;s++)for(var d=0;d<r.length;d++){n[c][s].containsShip&&!n[c][s].shot&&o.add(n[c][s].shipId);var u=s+r[d].x,l=c+r[d].y;if(u>=0&&u<10&&l>=0&&l<10&&n[l][u].containsShip&&n[l][u].shot){i[c][s]=1;break}}for(var h=[],p=[],b=0;b<10;b++)for(var f=0;f<10;f++){var y=!0;if(!n[b][f].shot){for(var j=0;j<e.length;j++){var v=f+e[j].x,_=b+e[j].y;if(v>=0&&v<10&&_>=0&&_<10&&n[_][v].containsShip&&n[_][v].shot&&!o.has(n[_][v].shipId)){y=!1;break}}y&&(p.push({y:b,x:f}),1===i[b][f]&&h.push({y:b,x:f}))}}if(p.length>0){var O=h.length>0?h[C(0,h.length-1)]:p[C(0,p.length-1)],m=function(e,r){return x[e]+" "+(r+1)}(O.x,O.y);a({type:"enemy_fire",coord_str:m})}}()}),3100)}),[t.enemyTurn,t.enemyTurnForce]),Object(b.jsxs)(P,{children:[Object(b.jsx)(G,{}),Object(b.jsx)(K,{}),function(){switch(t.character){case"sber":return Object(b.jsx)(X,{});case"eva":return Object(b.jsx)(Q,{});case"joy":return Object(b.jsx)(Y,{});default:return}}(),Object(b.jsx)("main",{id:"game_show",className:"view-container",children:t.gameOver?function(){var e=t.youWin?"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":"\u0412\u044b \u043f\u043e\u0442\u0435\u0440\u043f\u0435\u043b\u0438 \u043a\u0440\u0443\u0448\u0435\u043d\u0438\u0435, \u0441\u0443\u0445\u043e\u043f\u0443\u0442\u043d\u044b\u0439!";return Object(b.jsx)("div",{id:"game_result",children:Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"}),Object(b.jsx)("p",{children:e})]})})}():Object(b.jsxs)("section",{id:"main_section",children:[Object(b.jsx)(f,{enemyTurn:t.enemyTurn,respectfulAppeal:t.respectfulAppeal}),Object(b.jsxs)("section",{id:"boards_container",children:[Object(b.jsxs)("div",{id:"my_board_container",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h2",{children:"\u0421\u0432\u043e\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u0438"})}),Object(b.jsx)(S,{data:t.my_board})]}),s()]})]})})]})})),$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(r){var t=r.getCLS,n=r.getFID,a=r.getFCP,i=r.getLCP,o=r.getTTFB;t(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(Z,{})}),document.getElementById("root")),$()}},[[68,1,2]]]);
//# sourceMappingURL=main.668bfec5.chunk.js.map