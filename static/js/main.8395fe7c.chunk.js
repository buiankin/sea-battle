(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{30:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),s=a.n(i),o=(a(30),a(2)),c=a(3),l=a(4),h=a(6),u=a(5),d=a(14),p=a(21),v="\xb7",y="/",b="O",f="*",j=a(1),O=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"_titleText",value:function(){var e=this.props,t=e.enemyTurn,a=e.respectfulAppeal;return!0===t?!1===a?"\u0425\u043e\u0434 \u0442\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":"\u0425\u043e\u0434 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":!1===a?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!":"\u0412\u0430\u0448 \u0445\u043e\u0434!"}},{key:"_messageText",value:function(){var e=this.props,t=e.enemyTurn,a=e.respectfulAppeal;return!0===t?!1===a?"\u0425\u043e\u0434 \u0442\u0432\u043e\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":"\u0425\u043e\u0434 \u0412\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430!":!1===a?"\u0422\u0432\u043e\u0439 \u0445\u043e\u0434!":"\u0412\u0430\u0448 \u0445\u043e\u0434!"}},{key:"render",value:function(){return Object(j.jsx)("header",{id:"game_header",children:Object(j.jsx)("h1",{children:this._titleText()})})}}]),a}(n.a.Component),_=a(7),x=a.n(_),m=["\u0410","\u0411","\u0412","\u0413","\u0414","\u0415","\u0416","\u0417","\u0418","\u041a"],g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"_renderRows",value:function(e,t){for(var a=e.grid,r=[this._buildRowHeader()],n=0;n<10;n++){for(var i=[Object(j.jsx)("div",{className:"header cell",children:n+1},"header-".concat(n))],s=0;s<10;s++)i.push(this._renderCell(n,s,a[n][s],t));r.push(Object(j.jsx)("div",{className:"row",children:i},n))}return r}},{key:"_renderCell",value:function(e,t,a,r){var n=this,i="".concat(e).concat(t),s=(this._cellId(i),this._cellClasses(a,r));return Object(j.jsx)("div",{id:this._cellId(i),className:s,onClick:this._handleCellClick(e,t,a),onDoubleClick:function(e){return e.preventDefault()},onMouseOver:function(e,t){return n._handleCellMouseOver(e,t)},onMouseOut:function(e,t){return n._handleCellMouseOut(e,t)},children:this._cellValue(a)},i)}},{key:"_buildRowHeader",value:function(){for(var e=[Object(j.jsx)("div",{className:"header cell"},"empty")],t=0;t<10;++t)e.push(Object(j.jsx)("div",{className:"header cell",children:m[t]},t));return Object(j.jsx)("div",{className:"row",children:e},"col-headers")}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.showHidden,r=this._boardClasses();return Object(j.jsx)("div",{className:r,children:this._renderRows(t,a)})}}]),a}(n.a.Component),k=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"_handleCellClick",value:function(e,t,a){return function(e){return!1}}},{key:"_handleCellMouseOver",value:function(e,t){return this._toggleCellClasses(e,t)}},{key:"_handleCellMouseOut",value:function(e,t){return this._toggleCellClasses(e,t)}},{key:"_toggleCellClasses",value:function(e,t){}},{key:"_cellValue",value:function(e){return!1}},{key:"_boardClasses",value:function(){var e=this.props.selectedShip;return x()({grid:!0,pointer:e&&null!=e.id})}},{key:"_cellClasses",value:function(e,t){return x()({cell:!0,ship:e===y,"ship-hit":e===f,"water-hit":e===b})}},{key:"_cellId",value:function(e){return e}},{key:"_validCoords",value:function(e,t,a,r){var n,i=this.props.data;n="horizontal"===a?t+r<=10:e+r<=10;for(var s=!1,o=0;o<r;o++){var c="horizontal"===a?"".concat(e).concat(t+o):"".concat(e+o).concat(t);if(i.grid[c]!=v){s=!0;break}}return n&&!s}}]),a}(g),S=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"_handleCellClick",value:function(e,t,a){var r=this;return function(a){r.props.onClickBoard(t,e)}}},{key:"_handleCellMouseOver",value:function(e,t){return!1}},{key:"_cellValue",value:function(e){return""}},{key:"_boardClasses",value:function(){var e=this.props,t=e.playerId,a=e.currentTurn;return x()({grid:!0,pointer:t===a})}},{key:"_cellClasses",value:function(e,t){return x()({cell:!0,ship:t&&e===y,hit:e===f,"water-hit":e===b})}},{key:"_cellId",value:function(e){return!1}},{key:"_handleCellMouseOut",value:function(e){return!1}}]),a}(g),C=function(e,t){switch(t.direction){case"right":for(var a=t.startSquare.x-1;a<t.startSquare.x-1+t.size;a++)e[t.startSquare.y-1][a].containsShip=!0,e[t.startSquare.y-1][a].shipId=t.id;break;case"down":for(var r=t.startSquare.y-1;r<t.startSquare.y-1+t.size;r++)e[r][t.startSquare.x-1].containsShip=!0,e[r][t.startSquare.x-1].shipId=t.id}};function w(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function I(e,t){return m[e]+(t+1)}function M(e){for(var t=null,a=-1,r=e.replace("-"," ").toUpperCase(),n=["\u041e\u0414\u0418\u041d","\u0414\u0412\u0410","\u0422\u0420\u0418","\u0427\u0415\u0422\u042b\u0420\u0415","\u041f\u042f\u0422\u042c","\u0428\u0415\u0421\u0422\u042c","\u0421\u0415\u041c\u042c","\u0412\u041e\u0421\u0415\u041c\u042c","\u0414\u0415\u0412\u042f\u0422\u042c","\u0414\u0415\u0421\u042f\u0422\u042c"],i=0;i<n.length;i++)r=r.replace(n[i],(i+1).toString());switch(3===(r=r.replace(" ","")).length&&"10"===r.substring(1)?a=9:2===r.length&&"0123456789".includes(r.substring(2))&&(a=parseInt(r.substring(1))-1),r.substring(0,1)){case"\u0410":t={x:0,y:a};break;case"\u0411":t={x:1,y:a};break;case"\u0412":t={x:2,y:a};break;case"\u0413":t={x:3,y:a};break;case"\u0414":t={x:4,y:a};break;case"\u0415":t={x:5,y:a};break;case"\u0416":t={x:6,y:a};break;case"\u0417":t={x:7,y:a};break;case"\u0418":t={x:8,y:a};break;case"\u041a":t={x:9,y:a}}return t}var F=function(e,t){var a=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}];switch(t.direction){case"right":for(var r=t.startSquare.x-1;r<t.startSquare.x-1+t.size;r++)for(var n=0;n<a.length;n++){var i=a[n].y+t.startSquare.y-1,s=a[n].x+r;if(s<0||i<0||s>=10|i>=10);else if(e[i][s].containsShip)return!1}break;case"down":for(var o=t.startSquare.y-1;o<t.startSquare.y-1+t.size;o++)for(var c=0;c<a.length;c++){var l=a[c].y+o,h=a[c].x+t.startSquare.x-1;if(h<0||l<0||h>=10|l>=10);else if(e[l][h].containsShip)return!1}}return!0},T=function(){function e(t,a,r){Object(c.a)(this,e),this.size=t,this.startSquare=a,this.direction=r,this.id=e.incrementId(),this.hitpoints=this.size}return Object(l.a)(e,null,[{key:"incrementId",value:function(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}]),e}();var D,q,A=function(){for(var e=[],t=0;t<10;t++)e.push([]);for(var a=0;a<10;a++)for(var r=0;r<10;r++)e[a].push({x:r,y:a,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});for(var n=[],i=1;i<=4;i++)for(var s=1;s<=i;s++){for(var o=5-i,c=void 0,l=void 0,h=void 0;;){if(l=w(1,10-o+1),h=w(1,10),c=Math.random()>=.5?new T(o,{y:h,x:l},"right"):new T(o,{y:l,x:h},"down"),F(e,c))break}C(e,c),n.push(c)}return n},B=a(8),N=a(22),E=a(9),R=a(12),z=B.b.div(D||(D=Object(d.a)(["\n    padding: 30px;\n    ","\n"])),E.body1),H=Object(B.a)(N.sberBox),V=Object(B.a)(q||(q=Object(d.a)(["\n    /* stylelint-disable-next-line selector-nested-pattern */\n    html {\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n\n        /** \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043e\u043c \u0432\u0441\u044e \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0443 */\n        min-height: 100vh;\n    }\n"])),E.text,E.background,E.gradient),W=Object(B.a)(R.darkEva),J=Object(B.a)(R.darkSber),U=Object(B.a)(R.darkJoy);var G=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(c.a)(this,a),(i=t.call(this,e)).assistant=null,i.assistantStateRef=n.a.createRef(),i.state=i.getBoardInitialState(),i.state=Object(o.a)(Object(o.a)({},i.state),{},{character:"sber",respectfulAppeal:!0,enemyTurn:!1,gameOver:!1,youWin:!1,showHidden:!1}),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=this;try{this.assistant=(t=function(){return a.assistantStateRef.current},console.log("process.env.NODE_ENV="),console.log("production"),Object(p.a)({getState:t}))}catch(r){this.assistant=null}null===(e=this.assistant)||void 0===e||e.on("data",(function(e){e.type;var t=e.character,r=(e.navigation,e.action);t&&a.setState(Object(o.a)(Object(o.a)({},a.state),{},{character:t.id,respectfulAppeal:"joy"!==t.id})),r&&a.myDispatch(r)}))}},{key:"componentDidUpdate",value:function(e){}},{key:"getBoardInitialState",value:function(){for(var e=Array(0),t=A(),a=Array(0),r=A(),n=0;n<10;n++){for(var i=[],s=[],o=0;o<10;o++)i.push({x:o,y:n,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null}),s.push({x:o,y:n,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});e.push(i),a.push(s)}t.forEach((function(t){C(e,t)})),r.forEach((function(e){C(a,e)}));for(var c=[],l=[],h=0,u=0;u<10;u++){for(var d=[],p=[],j=0;j<10;j++){var O=e[u][j],_=O.shot?b:v;O.containsShip&&(_=O.shot?f:y),d.push(_),_=(O=a[u][j]).shot?b:v,O.containsShip&&(_=O.shot?f:y,h++),p.push(_)}c.push(d),l.push(p)}return{notes:[],my_board:{grid:c},myField:e,opponent_board:{grid:l,remaining_hit_points:h},enemyField:a}}},{key:"myDispatch",value:function(e){var t=this;if("show_ships"===e.type&&this.setState(Object(o.a)(Object(o.a)({},this.state),{},{showHidden:!0})),"lets_fire"===e.type)if(this.state.enemyTurn){var a;null===(a=this.assistant)||void 0===a||a.sendData({action:{action_id:"myMove"}})}else{var r=M(e.coord_str);if(r){var n=r.x,i=r.y,s=this.state.enemyField[i][n];if(s.containsShip)if(s.shot){var c;null===(c=this.assistant)||void 0===c||c.sendData({action:{action_id:"fireAgain",parameters:{coord:e.coord_str}}})}else{var l,h;!0;var u=this.state.enemyField.slice();u[i][n].shot=!0;for(var d=s.shipId,p=0,y=0;y<10;y++)for(var j=0;j<10;j++)u[y][j].containsShip&&u[y][j].shipId===d&&(u[y][j].shot||p++);var O=this.state.opponent_board.grid.slice();O[i][n]=f,p>0?null===(l=this.assistant)||void 0===l||l.sendData({action:{action_id:"fireHit",parameters:{coord:e.coord_str}}}):null===(h=this.assistant)||void 0===h||h.sendData({action:{action_id:"fireDone",parameters:{coord:e.coord_str}}}),this.state.opponent_board.remaining_hit_points<=1?this.setState(Object(o.a)(Object(o.a)({},this.state),{},{opponent_board:{grid:O,remaining_hit_points:this.state.opponent_board.remaining_hit_points-1},enemyField:u,gameOver:!0,youWin:!0})):this.setState(Object(o.a)(Object(o.a)({},this.state),{},{opponent_board:{grid:O,remaining_hit_points:this.state.opponent_board.remaining_hit_points-1},enemyField:u}))}else{var _,x=this.state.opponent_board.grid.slice();if(x[i][n]===v){!0;var m=this.state.enemyField.slice();m[i][n].shot=!0,x[i][n]=b,this.setState(Object(o.a)(Object(o.a)({},this.state),{},{opponent_board:Object(o.a)(Object(o.a)({},this.state.opponent_board),{},{grid:x}),enemyField:m,enemyTurn:!0}))}null===(_=this.assistant)||void 0===_||_.sendData({action:{action_id:"fireMiss",parameters:{coord:e.coord_str}}})}}setTimeout((function(){return t.processEnemyMove()}),1200)}}},{key:"fireMyBoard",value:function(e){var t=M(e);if(null==t)return!1;var a=t.x,r=t.y,n=this.state.myField[r][a];if(n.containsShip){if(!n.shot){!0;var i=this.state.myField.slice();i[r][a].shot=!0;for(var s=n.shipId,c=0;c<10;c++)for(var l=0;l<10;l++)i[c][l].containsShip&&i[c][l].shipId===s&&(i[c][l].shot||0);var h=this.state.my_board.grid.slice();return h[r][a]=f,this.setState({myField:i,my_board:Object(o.a)(Object(o.a)({},this.state.my_board),{},{grid:h})}),!0}}else{var u=this.state.my_board.grid.slice();if(u[r][a]===v){!0;var d=this.state.myField.slice();d[r][a].shot=!0,u[r][a]=b,this.setState({myField:d,my_board:Object(o.a)(Object(o.a)({},this.state.my_board),{},{grid:u})})}}return!1}},{key:"processEnemyMove",value:function(){var e=this;if(this.state.enemyTurn){for(var t=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}],a=[{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}],r=this.state.myField,n=Array.from(Array(10),(function(e){return Array(10).fill(0)})),i=new Set,s=0;s<10;s++)for(var c=0;c<10;c++)for(var l=0;l<a.length;l++){r[s][c].containsShip&&!r[s][c].shot&&i.add(r[s][c].shipId);var h=c+a[l].x,u=s+a[l].y;if(h>=0&&h<10&&u>=0&&u<10&&r[u][h].containsShip&&r[u][h].shot){n[s][c]=1;break}}for(var d=[],p=[],v=0;v<10;v++)for(var y=0;y<10;y++){var b=!0;if(!r[v][y].shot){for(var f=0;f<t.length;f++){var j=y+t[f].x,O=v+t[f].y;if(j>=0&&j<10&&O>=0&&O<10&&r[O][j].containsShip&&r[O][j].shot&&!i.has(r[O][j].shipId)){b=!1;break}}b&&(p.push({y:v,x:y}),1===n[v][y]&&d.push({y:v,x:y}))}}if(p.length>0){var _=d.length>0?d[w(0,d.length-1)]:p[w(0,p.length-1)],x=I(_.x,_.y);if(this.fireMyBoard(x)){for(var m=0,g=0;g<10;g++)for(var k=0;k<10;k++)!r[g][k].shot&&r[g][k].containsShip&&m++;return void(m>0?setTimeout((function(){return e.processEnemyMove()}),1200):this.setState(Object(o.a)(Object(o.a)({},this.state),{},{gameOver:!0,youWin:!1})))}}this.setState(Object(o.a)(Object(o.a)({},this.state),{},{enemyTurn:!1}))}}},{key:"_renderResult",value:function(){var e=this.state.youWin?"\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":"\u0412\u044b \u043f\u043e\u0442\u0435\u0440\u043f\u0435\u043b\u0438 \u043a\u0440\u0443\u0448\u0435\u043d\u0438\u0435, \u0441\u0443\u0445\u043e\u043f\u0443\u0442\u043d\u044b\u0439!";return Object(j.jsx)("div",{id:"game_result",children:Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"}),Object(j.jsx)("p",{children:e})]})})}},{key:"_renderOpponentBoard",value:function(){var e=this,t=this.state.opponent_board.remaining_hit_points;return Object(j.jsxs)("div",{id:"opponents_board_container",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h2",{children:"\u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u044b"})}),Object(j.jsx)(S,{data:this.state.opponent_board,showHidden:this.state.showHidden,onClickBoard:function(t,a){return e.myDispatch({type:"lets_fire",coord_str:I(t,a)})}}),Object(j.jsxs)("p",{children:["\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043e \u043f\u043e\u0431\u0435\u0434\u044b: ",t]})]})}},{key:"_renderGameContent",value:function(){return this.state.gameOver?this._renderResult():Object(j.jsxs)("section",{id:"main_section",children:[Object(j.jsx)(O,{enemyTurn:this.state.enemyTurn,respectfulAppeal:this.state.respectfulAppeal}),Object(j.jsxs)("section",{id:"boards_container",children:[Object(j.jsxs)("div",{id:"my_board_container",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h2",{children:"\u0421\u0432\u043e\u0438 \u043a\u043e\u0440\u0430\u0431\u043b\u0438"})}),Object(j.jsx)(k,{data:this.state.my_board})]}),this._renderOpponentBoard()]})]})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(z,{children:[Object(j.jsx)(H,{}),Object(j.jsx)(V,{}),function(){switch(e.state.character){case"sber":return Object(j.jsx)(J,{});case"eva":return Object(j.jsx)(W,{});case"joy":return Object(j.jsx)(U,{});default:return}}(),Object(j.jsx)("main",{id:"game_show",className:"view-container",children:this._renderGameContent()})]})}}]),a}(n.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.8395fe7c.chunk.js.map