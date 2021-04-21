(this["webpackJsonpreact-lotto"]=this["webpackJsonpreact-lotto"]||[]).push([[0],{22:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r,i,a,c,o,s,l,b,u,d,h,j,p,O,m,f,g,x,v,y,w,k,C,T,N,F,M,R,I,P,A,L,S=t(1),z=t.n(S),H=t(14),U=t.n(H),_=(t(22),t(4)),W=t(5),B=t(7),D=t(6),q=t(2),E=t(3),J=t(0),Y=E.a.button(r||(r=Object(q.a)(["\n  height: 36px;\n  padding: 0 16px;\n  border-radius: 4px;\n  outline: 0;\n  border-style: none;\n  cursor: pointer;\n  background-color: #c71f1f;\n  border-color: #c71f1f;\n  color: #fce9e9;\n\n  min-width: ",";\n"])),(function(n){return n.size})),G=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){return Object(_.a)(this,t),e.apply(this,arguments)}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsx)(Y,{type:this.props.buttonType||"submit",size:this.props.size,onClick:this.props.clickHandler,children:this.props.children})}}]),t}(S.Component),K=1e3,Q=6,V=1,X=45,Z=1e3,$=5e4,nn=1,en=2,tn=3,rn=4,an=5,cn=0,on=2e9,sn=3e7,ln=15e5,bn=5e4,un=5e3,dn=0,hn=.5,jn=3,pn=4,On=5,mn=5.5,fn=6,gn={MATCH_COUNT:"6\uac1c",PROFIT:"2,000,000,000"},xn={MATCH_COUNT:"5\uac1c + \ubcf4\ub108\uc2a4\ubcfc",PROFIT:"30,000,000"},vn={MATCH_COUNT:"5\uac1c",PROFIT:"1,500,000"},yn={MATCH_COUNT:"4\uac1c",PROFIT:"50,000"},wn={MATCH_COUNT:"3\uac1c",PROFIT:"5,000"},kn="6\uac1c\uc758 \ubc88\ud638\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694",Cn="\ubcf4\ub108\uc2a4 \ubc88\ud638\ub294 \uc911\ubcf5\ub41c \ubc88\ud638\uc785\ub2c8\ub2e4.",Tn="\uc774\ubbf8 6\uac1c\uc758 \uc22b\uc790\ub97c \uc120\ud0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.",Nn="\ub2e4\uc2dc \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",Fn="1,000\uc6d0 \ub2e8\uc704\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694",Mn=E.a.form(i||(i=Object(q.a)(["\n  margin: 0.5rem;\n\n  & label {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n  }\n"]))),Rn=E.a.div(a||(a=Object(q.a)(["\n  display: flex;\n"]))),In=E.a.input(c||(c=Object(q.a)(["\n  width: 100%;\n  margin-right: 0.2rem;\n  padding-left: 0.5rem;\n"]))),Pn="70%",An="64px",Ln=t(9),Sn=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(n){var r;return Object(_.a)(this,t),(r=e.call(this,n)).handlePurchaseLotto=function(n){n.preventDefault();var e=function(n){var e=Math.floor(n/K);return Array.from({length:e},(function(){for(var n,e,t=new Set;t.size<Q;)t.add((n=V,e=X,Math.floor(Math.random()*e)+n));return Object(Ln.a)(t).sort((function(n,e){return n-e}))}))}(n.target.elements.price.value);r.props.setLottos(e)},r.formRef=z.a.createRef(),r.inputRef=z.a.createRef(),r}return Object(W.a)(t,[{key:"componentDidMount",value:function(){this.resetLottoPurchaseForm()}},{key:"resetLottoPurchaseForm",value:function(){this.formRef.current.reset(),this.inputRef.current.focus()}},{key:"render",value:function(){return Object(J.jsxs)(Mn,{ref:this.formRef,onSubmit:this.handlePurchaseLotto,children:[Object(J.jsx)("label",{htmlFor:"input-price",children:"\uad6c\uc785\ud560 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(J.jsxs)(Rn,{children:[Object(J.jsx)(In,{ref:this.inputRef,type:"number",id:"input-price",name:"price",placeholder:Fn,required:!0,min:Z,max:$,step:K}),Object(J.jsx)(G,{size:An,children:"\ud655\uc778"})]})]})}}]),t}(S.Component),zn=E.a.li(o||(o=Object(q.a)(["\n  display: flex;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n"]))),Hn=E.a.span(s||(s=Object(q.a)(["\n  font-size: 1.25rem;\n  margin-left: 12px;\n"]))),Un=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){return Object(_.a)(this,t),e.apply(this,arguments)}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsxs)(zn,{children:[Object(J.jsx)("span",{children:"\ud83c\udf9f\ufe0f "}),this.props.lotto&&Object(J.jsx)(Hn,{children:this.props.lotto.join(" ")})]})}}]),t}(S.Component),_n=E.a.ul(l||(l=Object(q.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),Wn=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){return Object(_.a)(this,t),e.apply(this,arguments)}return Object(W.a)(t,[{key:"getLottoIcons",value:function(){return Array.from({length:this.props.lottoCount},(function(n,e){return Object(J.jsx)(Un,{},e)}))}},{key:"render",value:function(){return Object(J.jsx)(_n,{children:this.getLottoIcons()})}}]),t}(S.Component),Bn=E.a.ul(b||(b=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.2rem;\n  padding: 0.6rem;\n  max-height: 200px;\n  overflow-y: auto;\n  border: 0.5px solid #e9e2e2;\n  border-radius: 5px;\n"]))),Dn=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){return Object(_.a)(this,t),e.apply(this,arguments)}return Object(W.a)(t,[{key:"render",value:function(){var n=this.props.lottos;return Object(J.jsx)(Bn,{children:n.map((function(n,e){return Object(J.jsx)(Un,{lotto:n},e)}))})}}]),t}(S.Component),qn=E.a.div(u||(u=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  padding-right: 0.1rem;\n"]))),En=E.a.input(d||(d=Object(q.a)(["\n  position: absolute;\n  opacity: 0;\n\n  &:checked + label #show-number-span {\n    background-color: #c71f1f;\n  }\n\n  &:checked + label #show-number-span:after {\n    left: calc(100% - 22px);\n    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.5);\n  }\n"]))),Jn=E.a.label(h||(h=Object(q.a)(["\n  display: flex;\n  align-items: center;\n"]))),Yn=E.a.span(j||(j=Object(q.a)(["\n  position: relative;\n  line-height: 2rem;\n  margin-left: 3px;\n  display: block;\n  width: 50px;\n  height: 26px;\n  border-radius: 60px;\n  background-color: #d3c5c5;\n  transition: background 0.4s;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 4px;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 18px;\n    height: 18px;\n    border-radius: 100%;\n    background-color: #ffffff;\n    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);\n    transition: all 0.4s;\n  }\n"]))),Gn=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(_.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).handleToggedButton=function(e){n.props.setIsToggled(e.target.checked)},n}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsxs)(qn,{children:[Object(J.jsx)(En,{id:"show-details",onChange:this.handleToggedButton,type:"checkbox"}),Object(J.jsxs)(Jn,{htmlFor:"show-details",children:[Object(J.jsx)("span",{children:"\ubc88\ud638\ubcf4\uae30"}),Object(J.jsx)(Yn,{id:"show-number-span"})]})]})}}]),t}(S.Component),Kn=E.a.section(p||(p=Object(q.a)(["\n  margin: 2rem 0.5rem 0.5rem;\n"]))),Qn=E.a.div(O||(O=Object(q.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),Vn=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(n){var r;return Object(_.a)(this,t),(r=e.call(this,n)).setIsToggled=function(n){r.setState({isToggled:n})},r.state={isToggled:!1},r}return Object(W.a)(t,[{key:"render",value:function(){var n=this.state.isToggled;return Object(J.jsxs)(Kn,{"aria-label":"purchase-lotto",children:[Object(J.jsxs)(Qn,{children:[Object(J.jsxs)("label",{children:["\ucd1d ",Object(J.jsx)("span",{children:this.props.lottos.length}),"\uac1c\ub97c \uad6c\ub9e4\ud558\uc600\uc2b5\ub2c8\ub2e4."]}),Object(J.jsx)(Gn,{setIsToggled:this.setIsToggled})]}),n?Object(J.jsx)(Dn,{lottos:this.props.lottos}):Object(J.jsx)(Wn,{lottoCount:this.props.lottos.length})]})}}]),t}(S.Component),Xn=E.a.ul(m||(m=Object(q.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 95%;\n  text-align: center;\n  justify-content: center;\n"]))),Zn=E.a.label(f||(f=Object(q.a)(["\n  display: inline-block;\n  position: relative;\n  width: 1.5rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  margin: 4px;\n  padding: 4px;\n  font-size: 1rem;\n  text-align: center;\n  border: 2px solid #d3c5c5;\n  border-radius: 50%;\n  background-color: #d3c5c5;\n\n  &:hover {\n    box-sizing: content-box;\n    border: 2px solid #c71f1f;\n  }\n"]))),$n=E.a.input(g||(g=Object(q.a)(["\n  position: absolute;\n  opacity: 0;\n\n  &:checked + "," {\n    border: 2px solid #c71f1f;\n    background-color: #c71f1f;\n    color: #fce9e9;\n    font-weight: bold;\n  }\n"])),Zn),ne=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(_.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).handlePickNumber=function(e){var t=Number(e.target.name),r=n.props.numbers.find((function(n){return n===t})),i=n.props.numbers,a=r?i.filter((function(n){return n!==t})):[].concat(Object(Ln.a)(i),[t]);a.length!==Q+1?n.props.setNumbers(a):alert(Tn)},n}return Object(W.a)(t,[{key:"render",value:function(){var n=this,e=this.props.numbers;return Object(J.jsx)(Xn,{children:Array.from({length:X},(function(t,r){return Object(J.jsxs)("li",{children:[Object(J.jsx)($n,{type:"checkbox",id:"winningNumber".concat(r+1),name:r+1,onChange:n.handlePickNumber,checked:e.includes(r+1)}),Object(J.jsx)(Zn,{htmlFor:"winningNumber".concat(r+1),children:r+1})]},r+1)}))})}}]),t}(S.Component),ee=E.a.div(x||(x=Object(q.a)(["\n  margin-bottom: 1rem;\n\n  & p {\n    margin-top: 1rem;\n    margin-bottom: 0.2rem;\n    text-align: center;\n    font-weight: bold;\n  }\n"]))),te=E.a.div(v||(v=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),re=E.a.input(y||(y=Object(q.a)(["\n  margin-right: 0.25rem;\n  margin-left: 0.25rem;\n  text-align: center;\n  width: 40px;\n  height: 36px;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #c71f1f;\n\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"]))),ie=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){return Object(_.a)(this,t),e.apply(this,arguments)}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsxs)(ee,{children:[Object(J.jsx)("p",{children:"\ubcf4\ub108\uc2a4 \ubc88\ud638"}),Object(J.jsx)(te,{children:Object(J.jsx)(re,{type:"number",name:"bonus-number","aria-label":"winning number bonus",required:!0,min:V,max:X})})]})}}]),t}(S.Component),ae=E.a.form(w||(w=Object(q.a)(["\n  margin: 2rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem 0;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n  border: 0.5px solid rgba(233, 226, 226, 0.3);\n\n  & h2 {\n    margin-top: 0.5rem;\n    margin-bottom: 0;\n    font-size: 1.5rem;\n  }\n"]))),ce=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(n){var r;return Object(_.a)(this,t),(r=e.call(this,n)).handleCheckWinningResult=function(n){n.preventDefault();var e=Number(n.target.elements["bonus-number"].value);r.state.numbers.length===Q?r.state.numbers.includes(e)?alert(Cn):(r.props.setWinningNumbers(r.state.numbers,e),r.props.setIsModalOpened(!0)):alert(kn)},r.setNumbers=function(n){r.setState({numbers:n})},r.pickNumber=function(n){var e=[].concat(Object(Ln.a)(r.state.numbers),[n]);r.setNumbers({numbers:e})},r.state={numbers:[]},r}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsxs)(ae,{onSubmit:this.handleCheckWinningResult,children:[Object(J.jsx)("h2",{children:"\ub2f9\ucca8\ubc88\ud638 \uc785\ub825\ud558\uae30"}),Object(J.jsx)("p",{children:"\ub2f9\ucca8 \ubc88\ud638 6\uac1c\ub97c \uc120\ud0dd\ud558\uace0, \ubcf4\ub108\uc2a4 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(J.jsx)(ne,{setNumbers:this.setNumbers,numbers:this.state.numbers}),Object(J.jsx)(ie,{}),Object(J.jsx)(G,{size:Pn,children:"\uacb0\uacfc \ud655\uc778\ud558\uae30"})]})}}]),t}(S.Component),oe=t(8),se=function(n){var e=n.filter((function(n){return 0!==n})).reduce((function(n,e){return n+=be(le(e))}),0),t=n.length*K;return(e-t)/t*100},le=function(n){var e;return(e={},Object(oe.a)(e,fn,nn),Object(oe.a)(e,mn,en),Object(oe.a)(e,On,tn),Object(oe.a)(e,pn,rn),Object(oe.a)(e,jn,an),e)[n]||cn},be=function(n){var e;return(e={},Object(oe.a)(e,nn,on),Object(oe.a)(e,en,sn),Object(oe.a)(e,tn,ln),Object(oe.a)(e,rn,bn),Object(oe.a)(e,an,un),e)[n]||dn},ue=E.a.h2(k||(k=Object(q.a)(["\n  text-align: center;\n"]))),de=E.a.div(C||(C=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),he=E.a.table(T||(T=Object(q.a)(["\n  border-collapse: collapse;\n  border: 3px solid #eb7a7a;\n\n  & tr {\n    text-align: center;\n\n    & th,\n    td {\n      padding: 0.75rem;\n      border-bottom: 1.5px solid #f5bdbd;\n    }\n  }\n"]))),je=E.a.p(N||(N=Object(q.a)(["\n  text-align: center;\n\n  & span {\n    margin: 0 0.3rem;\n    font-weight: bold;\n    color: #c71f1f;\n  }\n"]))),pe=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(n){var r,i,a;return Object(_.a)(this,t),(r=e.call(this,n)).counts=(i=r.props.lottos,a=r.props.winningNumbers,i.map((function(n){var e=n.includes(a.bonusNumber),t=n.filter((function(n){return a.numbers.includes(n)})).length;return t===On&&e&&(t+=hn),t}))),r}return Object(W.a)(t,[{key:"getRewardResults",value:function(){var n=function(n){var e,t=(e={},Object(oe.a)(e,nn,{matchingCount:gn.MATCH_COUNT,reward:gn.PROFIT,wins:0}),Object(oe.a)(e,en,{matchingCount:xn.MATCH_COUNT,reward:xn.PROFIT,wins:0}),Object(oe.a)(e,tn,{matchingCount:vn.MATCH_COUNT,reward:vn.PROFIT,wins:0}),Object(oe.a)(e,rn,{matchingCount:yn.MATCH_COUNT,reward:xn.PROFIT,wins:0}),Object(oe.a)(e,an,{matchingCount:wn.MATCH_COUNT,reward:wn.PROFIT,wins:0}),e);return n.forEach((function(n){t[n]&&t[n].wins++})),t}(this.counts.map(le));return Object.values(n).map((function(n){var e=n.matchingCount,t=n.reward,r=n.wins;return Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:e}),Object(J.jsx)("td",{children:t}),Object(J.jsxs)("td",{children:[Object(J.jsx)("span",{children:r}),"\uac1c"]})]},e)}))}},{key:"render",value:function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(ue,{id:"title-dialog",children:"\ud83c\udfc6 \ub2f9\ucca8 \ud1b5\uacc4 \ud83c\udfc6"}),Object(J.jsx)(de,{children:Object(J.jsxs)(he,{children:[Object(J.jsx)("thead",{children:Object(J.jsxs)("tr",{children:[Object(J.jsx)("th",{children:"\uc77c\uce58 \uac2f\uc218"}),Object(J.jsx)("th",{children:"\ub2f9\ucca8\uae08"}),Object(J.jsx)("th",{children:"\ub2f9\ucca8 \uac2f\uc218"})]})}),Object(J.jsx)("tbody",{children:this.getRewardResults()})]})}),Object(J.jsxs)(je,{children:["\ub2f9\uc2e0\uc758 \ucd1d \uc218\uc775\ub960\uc740",Object(J.jsx)("span",{children:se(this.counts).toFixed(2)}),"%\uc785\ub2c8\ub2e4."]})]})}}]),t}(S.Component),Oe=E.a.div(F||(F=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.4rem;\n"]))),me=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(_.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).handleRestart=function(){window.confirm(Nn)&&(n.props.initState(),n.props.purchaseForm.resetLottoPurchaseForm())},n}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsx)(Oe,{children:Object(J.jsx)(G,{buttonType:"reset",clickHandler:this.handleRestart,children:"\ub2e4\uc2dc \uc2dc\uc791\ud558\uae30"})})}}]),t}(S.Component),fe=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){return Object(_.a)(this,t),e.apply(this,arguments)}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(pe,{lottos:this.props.lottos,winningNumbers:this.props.winningNumbers}),Object(J.jsx)(me,{initState:this.props.initState,purchaseForm:this.props.purchaseForm})]})}}]),t}(S.Component),ge=E.a.section(M||(M=Object(q.a)(["\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  transition: opacity 0.25s ease;\n  z-index: 2;\n"]))),xe=E.a.div(R||(R=Object(q.a)(["\n  transition: top 0.25s ease;\n  max-width: 350px;\n  margin: auto;\n  padding: 2.5rem;\n  overflow: auto;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n\n  @media screen and (max-width: 768px) {\n    .modal-inner {\n      width: 90%;\n      height: 90%;\n      box-sizing: border-box;\n    }\n  }\n"]))),ve=E.a.button(I||(I=Object(q.a)(["\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  cursor: pointer;\n\n  & svg {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n\n    & path {\n      stroke: gray;\n      fill: transparent;\n      stroke-linecap: round;\n      stroke-width: 5;\n    }\n  }\n"]))),ye=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(_.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).handleCloseModal=function(e){var t=e.currentTarget,r=e.target,i=t===r,a=r.classList.contains("close-modal");(i||a)&&n.props.setIsModalOpened(!1)},n}return Object(W.a)(t,[{key:"render",value:function(){return Object(J.jsx)(ge,{role:"dialog","aria-modal":"true","aria-labelledby":"title-dialog",onClick:this.handleCloseModal,children:Object(J.jsxs)(xe,{children:[Object(J.jsx)(ve,{className:"close-modal",type:"button","aria-label":"close-button",onClick:this.handleCloseModal,children:Object(J.jsx)("svg",{className:"close-modal",viewBox:"0 0 40 40",children:Object(J.jsx)("path",{className:"close-modal",d:"M 10, 10 L 30,30 M 30,10 L 10,30"})})}),this.props.children]})})}}]),t}(S.Component),we=E.a.main(P||(P=Object(q.a)(["\n  max-width: 450px;\n  margin: 0 auto;\n\n  & h1 {\n    text-align: center;\n  }\n"]))),ke=E.a.div(A||(A=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n"]))),Ce=E.a.div(L||(L=Object(q.a)(["\n  width: 100%;\n"]))),Te=function(n){Object(B.a)(t,n);var e=Object(D.a)(t);function t(n){var r;return Object(_.a)(this,t),(r=e.call(this,n)).initState=function(){r.setLottos([]),r.setWinningNumbers([],0),r.setIsModalOpened(!1)},r.setLottos=function(n){r.setState({lottos:n})},r.setWinningNumbers=function(n,e){r.setState({winningNumbers:{numbers:n,bonusNumber:e}})},r.setIsModalOpened=function(n){r.setState({isModalOpened:n})},r.state={lottos:[],winningNumbers:{numbers:[],bonusNumber:0},isModalOpened:!1},r.purchaseFormRef=z.a.createRef(),r}return Object(W.a)(t,[{key:"render",value:function(){var n=this.state,e=n.lottos,t=n.isModalOpened,r=e.length>0;return Object(J.jsxs)(we,{children:[Object(J.jsx)("h1",{children:"\ud83c\udfb1 \ud589\uc6b4\uc758 \ub85c\ub610"}),Object(J.jsx)(ke,{children:Object(J.jsxs)(Ce,{children:[Object(J.jsx)(Sn,{setLottos:this.setLottos,ref:this.purchaseFormRef}),r&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Vn,{lottos:e}),Object(J.jsx)(ce,{setWinningNumbers:this.setWinningNumbers,setIsModalOpened:this.setIsModalOpened})]})]})}),t&&Object(J.jsx)(ye,{setIsModalOpened:this.setIsModalOpened,children:Object(J.jsx)(fe,{lottos:this.state.lottos,winningNumbers:this.state.winningNumbers,initState:this.initState,purchaseForm:this.purchaseFormRef.current})})]})}}]),t}(S.Component),Ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};U.a.render(Object(J.jsx)(z.a.StrictMode,{children:Object(J.jsx)(Te,{})}),document.getElementById("root")),Ne()}},[[26,1,2]]]);
//# sourceMappingURL=main.32cb779f.chunk.js.map