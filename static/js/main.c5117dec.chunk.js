(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(19),s=n.n(a),i=n(5),u=n(0);var d=function(){var e=Object(i.f)();return Object(u.jsx)("header",{className:"jumbotron",style:{backgroundColor:"#BCA1D4"},children:Object(u.jsxs)("div",{className:"container text-white",children:[Object(u.jsx)("h1",{className:"display-4",style:{textAlign:"center"},children:"Flashcard-o-matic"}),Object(u.jsx)("p",{className:"lead",style:{textAlign:"center"},children:"Discover The Flashcard Difference."}),Object(u.jsxs)("div",{className:"d-flex justify-content-around row",children:[Object(u.jsx)("button",{className:"btn btn-dark",onClick:function(){return e.goBack(1)},children:"\xab Back"}),Object(u.jsx)("button",{className:"btn btn-dark",onClick:function(){return e.goForward(1)},children:"Forward \xbb"})]})]})})};var o=function(){return Object(u.jsx)("div",{className:"NotFound",children:Object(u.jsx)("h1",{children:"Not Found"})})},l=n(3),b=n(6),j=n(2),h=n.n(j),p=n(21),f=["cards"],O=Object({NODE_ENV:"production",PUBLIC_URL:"/flashcards",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",m=new Headers;function x(e){e.cards;return Object(p.a)(e,f)}function v(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(h.a.mark((function e(t,n,c){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(c));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(O,"/decks?_embed=cards"),e.next=3,v(n,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(h.a.mark((function e(t,n){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks"),r={method:"POST",headers:m,body:JSON.stringify(x(t)),signal:n},e.next=4,v(c,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(h.a.mark((function e(t,n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(c,{signal:n},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(h.a.mark((function e(t,n){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:m,body:JSON.stringify(x(t)),signal:n},e.next=4,v(c,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return A.apply(this,arguments)}function A(){return(A=Object(l.a)(h.a.mark((function e(t,n){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks/").concat(t),r={method:"DELETE",signal:n},e.next=4,v(c,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(h.a.mark((function e(t,n,c){var r,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards"),n.deckId=Number(t),a={method:"POST",headers:m,body:JSON.stringify(n),signal:c},e.next=5,v(r,a,n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(h.a.mark((function e(t,n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/cards/").concat(t),e.next=3,v(c,{signal:n},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(h.a.mark((function e(t,n){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/cards/").concat(t.id),r={method:"PUT",headers:m,body:JSON.stringify(t)},e.next=4,v(c,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return J.apply(this,arguments)}function J(){return(J=Object(l.a)(h.a.mark((function e(t,n){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/cards/").concat(t),r={method:"DELETE",signal:n},e.next=4,v(c,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.append("Content-Type","application/json");var R=n(4),U=function(e){var t=e.deck,n=e.handleDelete;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row card-header",children:[Object(u.jsx)("div",{className:"col-10",children:Object(u.jsx)("h4",{children:t.name})}),Object(u.jsx)("div",{className:"col-2",children:Object(u.jsxs)("p",{style:{fontSize:14,textAlign:"right"},children:[t.cards.length," cards"]})})]})}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{className:"card-text",children:t.description}),Object(u.jsxs)("div",{className:"row justify-content-between",children:[Object(u.jsxs)("div",{className:"col-4",children:[Object(u.jsx)(R.b,{to:"decks/".concat(t.id),className:"btn btn-secondary mr-2",children:"View"}),Object(u.jsx)(R.b,{to:"decks/".concat(t.id,"/study"),className:"btn btn-primary",children:"Study"})]}),Object(u.jsx)("div",{className:"col-2 text-right",children:Object(u.jsx)("button",{className:"btn btn-danger",value:t.id,onClick:n,children:"\ud83d\uddd1"})})]})]})})]})};function q(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(b.a)(a,2),i=s[0],d=s[1];Object(c.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(l.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.signal);case 2:return n=t.sent,r(n),d(!0),t.abrupt("return",(function(){return e.abort()}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var o=function(){var e=Object(l.a)(h.a.mark((function e(t){var n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target,!window.confirm("Delete deck ".concat(n.value,"?"))){e.next=9;break}return e.next=5,I(n.value);case 5:return e.next=7,y();case 7:c=e.sent,r(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=n.map((function(e){return Object(u.jsx)(U,{deck:e,handleDelete:o},e.id)}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(R.b,{to:"/decks/new",className:"btn btn-secondary",children:"Create Deck"}),Object(u.jsx)("hr",{}),i&&0===n.length?Object(u.jsx)("p",{children:"Please add a deck."}):Object.keys(j).length?Object(u.jsx)("section",{children:j}):Object(u.jsx)("p",{children:"Loading..."})]})}var z=n(8);function K(e){var t=e.cards,n=e.deckId,r={flipped:!1,currentCard:0},a=Object(c.useState)(r),s=Object(b.a)(a,2),d=s[0],o=s[1],l=Object(i.f)();return t.length>2?Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h3",{className:"card-title",children:["Card ",d.currentCard+1," of ",t.length]}),Object(u.jsx)("p",{className:"card-text",children:d.flipped?t[d.currentCard].back:t[d.currentCard].front}),Object(u.jsx)("button",{className:"btn btn-secondary mr-2",onClick:function(){return o(Object(z.a)(Object(z.a)({},d),{},{flipped:!d.flipped}))},children:"Flip"}),d.flipped&&Object(u.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){d.currentCard<t.length-1?o(Object(z.a)(Object(z.a)({},d),{},{currentCard:d.currentCard+1,flipped:!1})):window.confirm('Restart the deck? Click "cancel" to return home.')?o(r):l.push("/")},children:"Next"})]})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Not enough cards"}),Object(u.jsxs)("p",{children:["You need at least 3 cards to study. There are ",t.length," cards in this deck."]}),Object(u.jsx)(R.b,{to:"/decks/".concat(n,"/cards/new"),children:Object(u.jsx)("button",{className:"btn btn-primary",children:"\u2795 Add Cards"})})]})}function W(e){var t=e.crumbs;return Object(u.jsx)("ol",{className:"breadcrumb",children:t.map((function(e){return function(e){var t=e.name,n=["breadcrumb-item"];return e.url&&(n.push("breadcrumb-active"),t=Object(u.jsx)(R.b,{to:e.url,children:e.name})),Object(u.jsx)("li",{className:n.join(" "),children:t},'"'.concat(e.name,'"'))}(e)}))})}function V(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(i.g)().deckId;return Object(c.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(l.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(a,e.signal);case 2:return n=t.sent,r(n),t.abrupt("return",(function(){return e.abort()}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object.keys(n).length?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsx)(W,{crumbs:[{name:"Home",url:"/"},{name:n.name,url:"/decks/".concat(a)},{name:"Study"}]})}),Object(u.jsxs)("h1",{children:["Study: ",n.name]}),Object(u.jsx)(K,{cards:n.cards,deckId:a})]}):Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("p",{children:"Loading..."})})}var M=n(12);function Y(e){var t=e.formData,n=e.handleChange,c=e.handleSubmit;return Object(u.jsxs)("form",{onSubmit:c,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{required:!0,name:"name",type:"text",className:"form-control",value:t.name,placeholder:"Deck Name",onChange:n})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",{required:!0,name:"description",style:{resize:"none"},rows:"5",className:"form-control",value:t.description,placeholder:"Brief description of the deck",onChange:n})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(R.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-secondary mr-2",children:"Cancel"})}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}function G(){var e=Object(c.useState)({name:"",description:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(i.f)();function s(){return(s=Object(l.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,N(n);case 3:c=e.sent,a.push("/decks/".concat(c.id));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsx)(W,{crumbs:[{name:"Home",url:"/"},{name:"Create Deck"}]})}),Object(u.jsx)("h1",{children:"Create Deck"}),Object(u.jsx)(Y,{formData:n,handleChange:function(e){r(Object(z.a)(Object(z.a)({},n),{},Object(M.a)({},e.target.name,[e.target.value])))},handleSubmit:function(e){return s.apply(this,arguments)}})]})}function Q(e){var t=e.id,n=e.front,c=e.back,r=Object(i.h)().url,a=Object(i.f)();function s(){return(s=Object(l.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this card? It will be removed.")){e.next=5;break}return e.next=4,L(t);case 4:a.go({url:r});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"card",style:{width:"60%"},children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between row",children:[Object(u.jsx)("p",{className:"col-6 card-text",children:n}),Object(u.jsx)("p",{className:"col-6 card-text",children:c})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(u.jsx)(R.b,{to:"".concat(r,"/cards/").concat(t,"/edit"),children:Object(u.jsx)("button",{className:"btn btn-secondary mr-2",children:"Edit"})}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return s.apply(this,arguments)},children:"Delete"})]})]})})})}function X(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(i.f)(),s=Object(i.g)().deckId;function d(){return(d=Object(l.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this deck? It will be removed.")){e.next=5;break}return e.next=4,I(n.id);case 4:a.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(l.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(s,e.signal);case 2:return n=t.sent,r(n),t.abrupt("return",(function(){return e.abort()}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s]),n.id?Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsx)(W,{crumbs:[{name:"Home",url:"/"},{name:n.name}]})}),Object(u.jsx)("h3",{children:n.name}),Object(u.jsx)("p",{children:n.description}),Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(R.b,{to:"/decks/".concat(n.id,"/edit"),children:Object(u.jsx)("button",{className:"btn btn-secondary mr-2",children:"Edit"})}),Object(u.jsx)(R.b,{to:"/decks/".concat(n.id,"/study"),children:Object(u.jsxs)("button",{className:"btn btn-primary mr-2",children:[Object(u.jsx)("i",{className:"bi bi-journal-bookmark-fill"})," Study"]})}),Object(u.jsx)(R.b,{to:"/decks/".concat(n.id,"/cards/new"),children:Object(u.jsx)("button",{className:"btn btn-primary",children:"\u2795 Add Cards"})})]}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return d.apply(this,arguments)},children:"Delete"})]}),Object(u.jsx)("h2",{className:"my-2",children:"Cards"}),Object(u.jsx)("div",{className:"mb-3",children:n.cards.map((function(e){return Object(u.jsx)(Q,{id:e.id,front:e.front,back:e.back},e.id)}))})]}):Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("p",{children:"Loading..."})})}function Z(){var e=Object(c.useState)({name:"",description:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(b.a)(a,2),d=s[0],o=s[1],j=Object(i.f)(),p=Object(i.g)().deckId;Object(c.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(l.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(p,e.signal);case 2:return n=t.sent,o(n),r({id:n.id,name:n.name,description:n.description}),t.abrupt("return",(function(){return e.abort()}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[p]);function f(){return(f=Object(l.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D(n);case 3:c=e.sent,j.push("/decks/".concat(c.id));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsx)(W,{crumbs:[{name:"Home",url:"/"},{name:d.name,url:"/decks/".concat(p)},{name:"Edit Deck"}]})}),Object(u.jsx)("h1",{children:"Edit Deck"}),Object(u.jsx)(Y,{formData:n,handleChange:function(e){r(Object(z.a)(Object(z.a)({},n),{},Object(M.a)({},e.target.name,[e.target.value])))},handleSubmit:function(e){return f.apply(this,arguments)}})]})}function $(e){var t=e.formData,n=e.deckId,c=e.handleChange,r=e.handleSubmit;return Object(u.jsxs)("form",{onSubmit:r,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"front",children:"Front"}),Object(u.jsx)("textarea",{required:!0,name:"front",style:{resize:"none"},rows:"3",className:"form-control",value:t.front,placeholder:"Front of the card",onChange:c})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"back",children:"Back"}),Object(u.jsx)("textarea",{required:!0,name:"back",style:{resize:"none"},rows:"3",className:"form-control",value:t.back,placeholder:"Back of the card",onChange:c})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(R.b,{to:"/decks/".concat(n),className:"btn btn-secondary mr-2",children:"Cancel"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:"Submit"})]})]})}function ee(){var e={front:"",back:""},t=Object(c.useState)(e),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),d=Object(b.a)(s,2),o=d[0],j=d[1],p=Object(i.f)(),f=Object(i.g)().deckId;function O(){return(O=Object(l.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,F(f,r);case 3:a(e),p.push("/decks/".concat(f));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(l.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(f,e.signal);case 2:return n=t.sent,j(n),t.abrupt("return",(function(){return e.abort()}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[f]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsx)(W,{crumbs:[{name:"Home",url:"/"},{name:o.name,url:"/decks/".concat(f)},{name:"Add Card"}]})}),Object(u.jsxs)("h1",{children:[o.name,": Add Card"]}),Object(u.jsx)($,{formData:r,deckId:f,handleChange:function(e){a(Object(z.a)(Object(z.a)({},r),{},Object(M.a)({},e.target.name,[e.target.value])))},handleSubmit:function(e){return O.apply(this,arguments)}})]})}function te(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(i.f)(),s=Object(i.g)(),d=s.deckId,o=s.cardId,j={id:0,front:"",back:"",deckId:d},p=Object(c.useState)(j),f=Object(b.a)(p,2),O=f[0],m=f[1];function x(){return(x=Object(l.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P(O);case 3:a.push("/decks/".concat(d));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(l.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(d,e.signal);case 2:return n=t.sent,t.next=5,_(o);case 5:return c=t.sent,r(n),m({id:c.id,front:c.front,back:c.back,deckId:n.id}),t.abrupt("return",(function(){return e.abort()}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d,o]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsx)(W,{crumbs:[{name:"Home",url:"/"},{name:n.name,url:"/decks/".concat(d)},{name:"Edit Card: ".concat(o)}]})}),Object(u.jsxs)("h1",{children:[n.name,": Edit Card ",o]}),Object(u.jsx)($,{formData:O,deckId:d,handleChange:function(e){m(Object(z.a)(Object(z.a)({},O),{},Object(M.a)({},e.target.name,[e.target.value])))},handleSubmit:function(e){return x.apply(this,arguments)}})]})}function ne(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(q,{})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(u.jsx)(V,{})}),Object(u.jsx)(i.a,{path:"/decks/new",children:Object(u.jsx)(G,{})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(u.jsx)(Z,{})}),Object(u.jsx)(i.a,{exact:!0,path:"/decks/:deckId",children:Object(u.jsx)(X,{})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(u.jsx)(ee,{})}),Object(u.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(u.jsx)(te,{})}),Object(u.jsx)(i.a,{children:Object(u.jsx)(o,{})})]})})]})}var ce=function(){return Object(u.jsx)("div",{className:"app-routes",children:Object(u.jsx)(i.c,{children:Object(u.jsx)(i.a,{path:"/",children:Object(u.jsx)(ne,{})})})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(R.a,{children:Object(u.jsx)(ce,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.c5117dec.chunk.js.map