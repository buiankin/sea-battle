(this["webpackJsonpsea-battle"]=this["webpackJsonpsea-battle"]||[]).push([[0],{30:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),s=a.n(i),o=(a(30),a(2)),c=a(3),l=a(4),h=a(6),u=a(5),d=a(14),b=a(21),v="\xb7",p="/",f="O",y="*",j=a(1),x=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"_titleText",value:function(){return"Your turn!"}},{key:"_messageText",value:function(){return"Let the battle begin"}},{key:"render",value:function(){return Object(j.jsxs)("header",{id:"game_header",children:[Object(j.jsx)("h1",{children:this._titleText()}),Object(j.jsx)("p",{children:this._messageText()})]})}}]),a}(n.a.Component),O=a(7),_=a.n(O),m=["\u0410","\u0411","\u0412","\u0413","\u0414","\u0415","\u0416","\u0417","\u0418","\u041a"],g=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"_renderRows",value:function(e){for(var t=e.grid,a=[this._buildRowHeader()],r=0;r<10;r++){for(var n=[Object(j.jsx)("div",{className:"header cell",children:r+1},"header-".concat(r))],i=0;i<10;i++)n.push(this._renderCell(r,i,t[r][i]));a.push(Object(j.jsx)("div",{className:"row",children:n},r))}return a}},{key:"_renderCell",value:function(e,t,a){var r="".concat(e).concat(t),n=(this._cellId(r),this._cellClasses(a));return Object(j.jsx)("div",{id:this._cellId(r),className:n,onClick:this._handleCellClick(e,t,a),onDoubleClick:function(e){return e.preventDefault()},onMouseOver:this._handleCellMouseOver(e,t),onMouseOut:this._handleCellMouseOut(e,t),children:this._cellValue(a)},r)}},{key:"_buildRowHeader",value:function(){for(var e=[Object(j.jsx)("div",{className:"header cell"},"empty")],t=0;t<10;++t)e.push(Object(j.jsx)("div",{className:"header cell",children:m[t]},t));return Object(j.jsx)("div",{className:"row",children:e},"col-headers")}},{key:"render",value:function(){var e=this.props.data,t=this._boardClasses();return Object(j.jsx)("div",{className:t,children:this._renderRows(e)})}}]),a}(n.a.Component),k=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"_handleCellClick",value:function(e,t,a){return function(e){return!1}}},{key:"_handleCellMouseOver",value:function(e,t){return this._toggleCellClasses(e,t)}},{key:"_handleCellMouseOut",value:function(e,t){return this._toggleCellClasses(e,t)}},{key:"_toggleCellClasses",value:function(e,t){}},{key:"_cellValue",value:function(e){return!1}},{key:"_boardClasses",value:function(){var e=this.props.selectedShip;return _()({grid:!0,pointer:e&&null!=e.id})}},{key:"_cellClasses",value:function(e){return _()({cell:!0,ship:e===p,"ship-hit":e===y,"water-hit":e===f})}},{key:"_cellId",value:function(e){return e}},{key:"_validCoords",value:function(e,t,a,r){var n,i=this.props.data;n="horizontal"===a?t+r<=10:e+r<=10;for(var s=!1,o=0;o<r;o++){var c="horizontal"===a?"".concat(e).concat(t+o):"".concat(e+o).concat(t);if(i.grid[c]!=v){s=!0;break}}return n&&!s}}]),a}(g),S=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"_handleCellClick",value:function(e,t,a){var r=this;return function(a){r.props.onClickBoard(t,e)}}},{key:"_handleCellMouseOver",value:function(e,t){return!1}},{key:"_cellValue",value:function(e){return""}},{key:"_boardClasses",value:function(){var e=this.props,t=e.playerId,a=e.currentTurn;return _()({grid:!0,pointer:t===a})}},{key:"_cellClasses",value:function(e){return _()({cell:!0,ship:e===p,hit:e===y,"water-hit":e===f})}},{key:"_cellId",value:function(e){return!1}},{key:"_handleCellMouseOut",value:function(e){return!1}}]),a}(g),C=function(e,t){switch(t.direction){case"right":for(var a=t.startSquare.x-1;a<t.startSquare.x-1+t.size;a++)e[t.startSquare.y-1][a].containsShip=!0,e[t.startSquare.y-1][a].shipId=t.id;break;case"down":for(var r=t.startSquare.y-1;r<t.startSquare.y-1+t.size;r++)e[r][t.startSquare.x-1].containsShip=!0,e[r][t.startSquare.x-1].shipId=t.id}};function w(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function I(e,t){return m[e]+(t+1)}function M(e){var t=null,a=-1,r=e.replace("-"," ").replace(" ","").toUpperCase();switch(3===r.length&&"10"===r.substring(1)?a=9:2===r.length&&"0123456789".includes(r.substring(2))&&(a=parseInt(r.substring(1))-1),r.substring(0,1)){case"\u0410":t={x:0,y:a};break;case"\u0411":t={x:1,y:a};break;case"\u0412":t={x:2,y:a};break;case"\u0413":t={x:3,y:a};break;case"\u0414":t={x:4,y:a};break;case"\u0415":t={x:5,y:a};break;case"\u0416":t={x:6,y:a};break;case"\u0417":t={x:7,y:a};break;case"\u0418":t={x:8,y:a};break;case"\u041a":t={x:9,y:a}}return t}var F=function(e,t){var a=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}];switch(t.direction){case"right":for(var r=t.startSquare.x-1;r<t.startSquare.x-1+t.size;r++)for(var n=0;n<a.length;n++){var i=a[n].y+t.startSquare.y-1,s=a[n].x+r;if(s<0||i<0||s>=10|i>=10);else if(e[i][s].containsShip)return!1}break;case"down":for(var o=t.startSquare.y-1;o<t.startSquare.y-1+t.size;o++)for(var c=0;c<a.length;c++){var l=a[c].y+o,h=a[c].x+t.startSquare.x-1;if(h<0||l<0||h>=10|l>=10);else if(e[l][h].containsShip)return!1}}return!0},q=function(){function e(t,a,r){Object(c.a)(this,e),this.size=t,this.startSquare=a,this.direction=r,this.id=e.incrementId(),this.hitpoints=this.size}return Object(l.a)(e,null,[{key:"incrementId",value:function(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}]),e}();var D,B,N=function(){for(var e=[],t=0;t<10;t++)e.push([]);for(var a=0;a<10;a++)for(var r=0;r<10;r++)e[a].push({x:r,y:a,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});for(var n=[],i=1;i<=4;i++)for(var s=1;s<=i;s++){for(var o=5-i,c=void 0,l=void 0,h=void 0;;){if(l=w(1,10-o+1),h=w(1,10),c=Math.random()>=.5?new q(o,{y:h,x:l},"right"):new q(o,{y:l,x:h},"down"),F(e,c))break}C(e,c),n.push(c)}return n},R=a(8),z=a(22),E=a(9),T=a(12),V=R.b.div(D||(D=Object(d.a)(["\n    padding: 30px;\n    ","\n"])),E.body1),A=Object(R.a)(z.sberBox),G=Object(R.a)(B||(B=Object(d.a)(["\n    /* stylelint-disable-next-line selector-nested-pattern */\n    html {\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n\n        /** \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043e\u043c \u0432\u0441\u044e \u043f\u043e\u0434\u043b\u043e\u0436\u043a\u0443 */\n        min-height: 100vh;\n    }\n"])),E.text,E.background,E.gradient),H=Object(R.a)(T.darkEva),J=Object(R.a)(T.darkSber),L=Object(R.a)(T.darkJoy);var P=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e,r){var i;return Object(c.a)(this,a),(i=t.call(this,e)).assistant=null,i.assistantStateRef=n.a.createRef(),i.state=i.getBoardInitialState(),i.state=Object(o.a)(Object(o.a)({},i.state),{},{character:"sber"}),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=this;try{this.assistant=(t=function(){return a.assistantStateRef.current},console.log("process.env.NODE_ENV="),console.log("production"),Object(b.a)({getState:t}))}catch(r){this.assistant=null}null===(e=this.assistant)||void 0===e||e.on("data",(function(e){e.type;var t=e.character,r=(e.navigation,e.action);t&&a.setState(Object(o.a)(Object(o.a)({},a.state),{},{character:t.id})),r&&a.myDispatch(r)}))}},{key:"componentDidUpdate",value:function(e){}},{key:"getBoardInitialState",value:function(){for(var e=Array(0),t=N(),a=Array(0),r=N(),n=0;n<10;n++){for(var i=[],s=[],o=0;o<10;o++)i.push({x:o,y:n,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null}),s.push({x:o,y:n,containsShip:!1,shot:!1,isShipVisible:!1,shipId:null});e.push(i),a.push(s)}t.forEach((function(t){C(e,t)})),r.forEach((function(e){C(a,e)}));for(var c=[],l=[],h=0,u=0;u<10;u++){for(var d=[],b=[],j=0;j<10;j++){var x=e[u][j],O=x.shot?f:v;x.containsShip&&(O=x.shot?y:p),d.push(O),O=(x=a[u][j]).shot?f:v,x.containsShip&&(O=x.shot?y:p,h++),b.push(O)}c.push(d),l.push(b)}return{notes:[],my_board:{grid:c},myField:e,opponent_board:{grid:l,remaining_hit_points:h},enemyField:a}}},{key:"myDispatch",value:function(e){var t=this;if("lets_fire"===e.type){var a=M(e.coord_str);if(a){var r=a.x,n=a.y,i=this.state.enemyField[n][r];if(i.containsShip)if(i.shot){var s;null===(s=this.assistant)||void 0===s||s.sendData({action:{action_id:"fireAgain",parameters:{coord:e.coord_str}}})}else{var c,l;!0;var h=this.state.enemyField.slice();h[n][r].shot=!0;for(var u=i.shipId,d=0,b=0;b<10;b++)for(var p=0;p<10;p++)h[b][p].containsShip&&h[b][p].shipId===u&&(h[b][p].shot||d++);var j=this.state.opponent_board.grid.slice();j[n][r]=y,this.setState(Object(o.a)(Object(o.a)({},this.state),{},{opponent_board:{grid:j,remaining_hit_points:this.state.opponent_board.remaining_hit_points-1},enemyField:h})),d>0?null===(c=this.assistant)||void 0===c||c.sendData({action:{action_id:"fireHit",parameters:{coord:e.coord_str}}}):null===(l=this.assistant)||void 0===l||l.sendData({action:{action_id:"fireDone",parameters:{coord:e.coord_str}}})}else{var x,O=this.state.opponent_board.grid.slice();if(O[n][r]===v){!0;var _=this.state.enemyField.slice();_[n][r].shot=!0,O[n][r]=f,this.setState(Object(o.a)(Object(o.a)({},this.state),{},{opponent_board:Object(o.a)(Object(o.a)({},this.state.opponent_board),{},{grid:O}),enemyField:_}))}null===(x=this.assistant)||void 0===x||x.sendData({action:{action_id:"fireMiss",parameters:{coord:e.coord_str}}})}}setTimeout((function(){return t.processEnemyMove()}),3e3)}}},{key:"fireMyBoard",value:function(e){var t=M(e);if(null!=t){var a=t.x,r=t.y,n=this.state.myField[r][a];if(n.containsShip){if(!n.shot){!0;var i=this.state.myField.slice();i[r][a].shot=!0;for(var s=n.shipId,c=0;c<10;c++)for(var l=0;l<10;l++)i[c][l].containsShip&&i[c][l].shipId===s&&(i[c][l].shot||0);var h=this.state.my_board.grid.slice();h[r][a]=y,this.setState({myField:i,my_board:Object(o.a)(Object(o.a)({},this.state.my_board),{},{grid:h})})}}else{var u=this.state.my_board.grid.slice();if(u[r][a]===v){!0;var d=this.state.myField.slice();d[r][a].shot=!0,u[r][a]=f,this.setState({myField:d,my_board:Object(o.a)(Object(o.a)({},this.state.my_board),{},{grid:u})})}}}}},{key:"processEnemyMove",value:function(){for(var e=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}],t=[{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}],a=this.state.myField,r=Array.from(Array(10),(function(e){return Array(10).fill(0)})),n=new Set,i=0;i<10;i++)for(var s=0;s<10;s++)for(var o=0;o<t.length;o++){a[i][s].containsShip&&!a[i][s].shot&&n.add(a[i][s].shipId);var c=s+t[o].x,l=i+t[o].y;if(c>=0&&c<10&&l>=0&&l<10&&a[l][c].containsShip&&a[l][c].shot){r[i][s]=1;break}}for(var h=[],u=[],d=0;d<10;d++)for(var b=0;b<10;b++){var v=!0;if(!a[d][b].shot){for(var p=0;p<e.length;p++){var f=b+e[p].x,y=d+e[p].y;if(f>=0&&f<10&&y>=0&&y<10&&a[y][f].containsShip&&a[y][f].shot&&!n.has(a[y][f].shipId)){v=!1;break}}v&&(u.push({y:d,x:b}),1===r[d][b]&&h.push({y:d,x:b}))}}if(u.length>0){var j=h.length>0?h[w(0,h.length-1)]:u[w(0,u.length-1)],x=I(j.x,j.y);this.fireMyBoard(x)}}},{key:"_renderResult",value:function(){return Object(j.jsx)("div",{id:"game_result",children:Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Game over"}),Object(j.jsx)("p",{children:"You got wrecked, landlubber!"}),Object(j.jsxs)("a",{href:"https://twitter.com/intent/tweet?url=https://phoenix-battleship.herokuapp.com&button_hashtag=myelixirstatus&text=".concat("I got wrecked at Phoenix Battleship"),className:"twitter-hashtag-button",children:[Object(j.jsx)("i",{className:"fa fa-twitter"})," Share result"]})]})})}},{key:"_renderOpponentBoard",value:function(){var e=this,t=this.state.opponent_board.remaining_hit_points;return Object(j.jsxs)("div",{id:"opponents_board_container",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h2",{children:"Shooting grid"})}),Object(j.jsx)(S,{data:this.state.opponent_board,onClickBoard:function(t,a){return e.myDispatch({type:"lets_fire",coord_str:I(t,a)})}}),Object(j.jsxs)("p",{children:["\u041f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043e \u043f\u043e\u0431\u0435\u0434\u044b: ",t]})]})}},{key:"_renderGameContent",value:function(){return this.state.gameOver?this._renderResult():Object(j.jsxs)("section",{id:"main_section",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("section",{id:"boards_container",children:[Object(j.jsxs)("div",{id:"my_board_container",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h2",{children:"Your ships"})}),Object(j.jsx)(k,{data:this.state.my_board})]}),this._renderOpponentBoard()]})]})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(V,{children:[Object(j.jsx)(A,{}),Object(j.jsx)(G,{}),function(){switch(e.state.character){case"sber":return Object(j.jsx)(J,{});case"eva":return Object(j.jsx)(H,{});case"joy":return Object(j.jsx)(L,{});default:return}}(),Object(j.jsx)("main",{id:"game_show",className:"view-container",children:this._renderGameContent()})]})}}]),a}(n.a.Component),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.c5c69d5f.chunk.js.map