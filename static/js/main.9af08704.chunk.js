(this["webpackJsonpextense-tracker"]=this["webpackJsonpextense-tracker"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/avatar.f6b9b89b.png"},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(18),s=n(2),a=n.n(s),o=n(29),r=n.n(o),i=(n(37),n(7)),l=(n(38),n(1));var j=function(){return Object(l.jsx)("div",{style:{backgroundColor:"black",height:50,padding:10},children:Object(l.jsx)("p",{className:"Header",style:{color:"red",fontSize:24},children:"Expense Tracker"})})};var d=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{style:{color:"black",marginBottom:0},children:"Your Balnace"}),Object(l.jsx)("h4",{style:{marginTop:0},children:e.balance})]})};var u,b,h,p=function(e){return Object(l.jsxs)("div",{className:"details-show",children:[Object(l.jsxs)("div",{className:"income",children:["Income \u2191",Object(l.jsxs)("p",{children:["Rs.",e.income," "]})]}),Object(l.jsxs)("div",{className:"expense",children:[" Expense \u2193",Object(l.jsxs)("p",{children:["Rs.",e.expense," "]})]})]})},m=n(11),x=(n(19),n(20),n(32)),O=1,f=function(e){console.log(e);return Object(l.jsxs)("table",{border:"1",style:{margin:"auto",marginBottom:20},children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"DeleteItem"})]}),e.history.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{fontWeight:"bold",padding:10},children:e.Text}),Object(l.jsx)("td",{style:{fontWeight:"bold",padding:10},children:e.Amount}),Object(l.jsx)("td",{children:Object(l.jsxs)("button",{id:e.id,onClick:function(e){return t=e.target.id,void m.a.firestore().collection("Expenses").doc(t).delete().then((function(){console.log("succesfully delted")})).catch((function(e){console.log("error in deltion"+e)}));var t},children:[x.a," delete"]})})]},O++)}))]})},g=function(e){var t=a.a.useState(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=a.a.useState(""),r=Object(i.a)(o,2),j=r[0],d=r[1];return Object(l.jsxs)("div",{style:{marginBottom:5},children:[Object(l.jsx)("h4",{style:{marginBottom:0},children:"Add Transaction"}),Object(l.jsx)("img",{src:"https://miro.medium.com/max/3288/1*QWL8FlOH8HACzfcMW6K8QA.png",width:"210"}),Object(l.jsx)("div",{className:"form",children:Object(l.jsxs)("form",{style:{marginBottom:20},onSubmit:function(t){if(t.preventDefault(),""!=c||""!=j){if("-"==j.charAt(0)){var n=parseInt(j.substring(1));console.log(n),m.a.firestore().collection("Expenses").add({Amount:n,Text:c,income:0,Expense:j,name:e.name}).then((function(e){console.log(e+"succesfully addes")})).catch((function(e){console.log("error:"+e)})),console.log("help me")}else m.a.firestore().collection("Expenses").add({Amount:j,Text:c,income:j,Expense:0,name:e.name}).then((function(e){console.log(e+"succesfully addes")})).catch((function(e){console.log("error:"+e)})),console.log("help me");console.log(c+" "+j),s(""),d("")}else alert("please fill all the entry")},children:[Object(l.jsx)("h2",{style:{marginBottom:0,marginLeft:0},children:" Text"}),Object(l.jsx)("input",{className:"expenseName",type:"text",value:c,onChange:function(e){return s(e.target.value)},placeholder:"Enter Text"}),Object(l.jsx)("h2",{style:{marginBottom:0,marginLeft:0},children:"Amount"}),Object(l.jsx)("p",{style:{marginTop:0},children:"(Expense=-Negative,Income=+Positive)"}),Object(l.jsx)("input",{className:"expenseName",type:"number",value:j,onChange:function(e){return d(e.target.value)},placeholder:"Enter Amount"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"btn-addtransaction",children:"Add Transaction"})]})})]})},v=n(5),y=0,N=0,w=[],S=0,A=function(){var e=a.a.useState([]),t=Object(i.a)(e,2),n=(t[0],t[1]),c=a.a.useState(""),s=Object(i.a)(c,2),o=(s[0],s[1],Object(v.g)().name);return a.a.useEffect((function(){console.log("hii ine the useEffect"),m.a.firestore().collection("Expenses").where("name","==",o).onSnapshot((function(e){console.log(e+"hii"),w=[],y=0,N=0,e.docs.map((function(e){var t=e.data();t.id=e.id,w.push(t),y+=parseInt(e.data().Expense),N+=parseInt(e.data().income)})),S=parseInt(N)+parseInt(y),n(w),1}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(d,{balance:S}),Object(l.jsx)(p,{income:N,expense:y}),Object(l.jsx)("h3",{style:{marginBottom:0},children:"Your History"}),Object(l.jsx)("img",{src:"https://miro.medium.com/max/3288/1*QWL8FlOH8HACzfcMW6K8QA.png",width:"210"}),Object(l.jsx)(f,{history:w}),Object(l.jsx)(g,{name:o})]})},C=(n(45),n(21)),E=n(16),I=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],s=t[1],o=a.a.useState(""),r=Object(i.a)(o,2),j=r[0],d=r[1],u=a.a.useState(""),b=Object(i.a)(u,2),h=b[0],p=b[1],x=a.a.useState(!1),O=Object(i.a)(x,2),f=O[0],g=O[1],v=a.a.useState(!1),y=Object(i.a)(v,2),N=y[0],w=y[1],S=a.a.useState(!1),A=Object(i.a)(S,2),I=A[0],k=A[1],B=a.a.useState(!1),T=Object(i.a)(B,2),U=T[0],z=T[1];n(21);return Object(l.jsxs)("div",{className:"signup-component",children:[U&&Object(l.jsx)("div",{children:Object(l.jsx)("h3",{style:{color:"green",fontFamily:"fangsong",textAlign:"center"},children:"Your Account is succesfully created.!"})}),Object(l.jsxs)("div",{className:"signup_wrapper",children:[f&&Object(l.jsx)("h3",{style:{color:"red"},children:"Username already Exist"}),N&&Object(l.jsx)("h3",{style:{color:"red"},children:"Password not match"}),I&&Object(l.jsx)("h3",{style:{color:"red"},children:"Password should contains more than 6 Character"}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("img",{src:C.default}),Object(l.jsx)("h2",{children:"SignUp"}),Object(l.jsxs)("div",{className:"input_group",children:[Object(l.jsx)("input",{type:"text",autoComplete:"off",value:c,onChange:function(e){s(e.target.value)},id:"username",required:!0}),Object(l.jsx)("label",{for:"username",children:"User Name"})]}),Object(l.jsxs)("div",{className:"input_group",children:[Object(l.jsx)("input",{type:"password",autoComplete:"off",value:j,onChange:function(e){d(e.target.value)},id:"userpassword",required:!0}),Object(l.jsx)("label",{for:"userpassword",children:"Password"})]}),Object(l.jsxs)("div",{className:"input_group",children:[Object(l.jsx)("input",{type:"text",autoComplete:"off",value:h,onChange:function(e){p(e.target.value)},id:"userpassword",required:!0}),Object(l.jsx)("label",{for:"userpassword",children:"Confirmpassword"})]}),Object(l.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault();var t=!1;m.a.firestore().collection("users").get().then((function(e){if(e.docs.map((function(e){e.data().Username==c&&(console.log(c),t=!0,f=!0)})),1==t)return g(!0),void console.log("galat hua");g(!1),console.log(c+" "+j+" "+h),""!=c&&""!=j&&""!=h&&(w(j!=h),j.length<6?k(!0):(k(!1),m.a.firestore().collection("users").add({Username:c,Password:j}).then((function(){console.log("succesfully added"),z(!0)})).catch((function(e){console.log("error")}))))}))},children:"Submit"}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Already have account?",Object(l.jsx)(E.b,{to:"/",style:{position:"relative",marginRight:"auto",color:"yellow",textDecoration:"none",fontSize:"15px"},children:"Login"})]})})]})]})]})},k=(n.p,n(46),function(){var e=a.a.useState(""),t=Object(i.a)(e,2),c=t[0],s=t[1],o=a.a.useState(""),r=Object(i.a)(o,2),j=r[0],d=r[1],u=a.a.useState(!1),b=Object(i.a)(u,2),h=b[0],p=b[1],x=a.a.useState(!1),O=Object(i.a)(x,2),f=O[0],g=O[1],y="expenseapp/"+c;n(21);return Object(l.jsxs)("div",{className:"login-component",children:[f&&Object(l.jsx)("div",{children:Object(l.jsx)("h3",{style:{color:"red",textAlign:"center"},children:"!User Not Exist."})}),h&&Object(l.jsxs)(v.d,{children:[" ",Object(l.jsx)(v.a,{to:y})]}),Object(l.jsx)("div",{className:"login-wrapper",children:Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("img",{src:C.default}),Object(l.jsx)("h2",{children:"Login"}),Object(l.jsxs)("div",{className:"input-group",style:{color:"black"},children:[Object(l.jsx)("input",{type:"text",name:"username",value:c,onChange:function(e){s(e.target.value)},autoComplete:"off",id:"username",required:!0}),Object(l.jsx)("label",{for:"username",children:"User Name"})]}),Object(l.jsxs)("div",{className:"input-group",style:{color:"black"},children:[Object(l.jsx)("input",{type:"password",name:"userpassword",value:j,onChange:function(e){d(e.target.value)},autoComplete:"off",id:"userpassword",required:!0}),Object(l.jsx)("label",{for:"username",children:"User Password"})]}),Object(l.jsx)("button",{className:"submit-btn",id:"btn",onClick:function(e){e.preventDefault(),console.log("hiii"),m.a.firestore().collection("users").get().then((function(e){var t=!1;e.docs.map((function(e){var n=e.data().Username,s=e.data().Password;c==n&&s==j&&(p(!0),t=!0)})),0==t&&g(!0)}))},children:"Login"}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Don't have account?",Object(l.jsx)(E.b,{to:"/signup",className:"forgot-pw",style:{position:"relative",marginRight:"auto",color:"yellow",textDecoration:"none",fontSize:"15px"},children:"SignUp"})]})})]})})]})});n(47);m.a.initializeApp({apiKey:"AIzaSyAY7wejzkQFByzDumPIGl7LjdYSIWIYMJc",authDomain:"expense-78336.firebaseapp.com",projectId:"expense-78336",storageBucket:"expense-78336.appspot.com",messagingSenderId:"215432279540",appId:"1:215432279540:web:a46260126925961e29b5a1"}),r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(E.a,{children:Object(l.jsxs)(v.d,{children:[Object(l.jsx)(v.b,(u={exact:!0,path:"/signup"},Object(c.a)(u,"exact",!0),Object(c.a)(u,"component",I),u)),Object(l.jsx)(v.b,(b={exact:!0,path:"/expenseapp/:name"},Object(c.a)(b,"exact",!0),Object(c.a)(b,"component",A),b)),Object(l.jsx)(v.b,(h={exact:!0,path:"/"},Object(c.a)(h,"exact",!0),Object(c.a)(h,"component",k),h)),Object(l.jsx)(v.b,{component:k})]})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.9af08704.chunk.js.map