(this.webpackJsonpapartment_cards=this.webpackJsonpapartment_cards||[]).push([[0],{2:function(A,t,e){A.exports={wrap:"App_wrap__1qZn7",card:"App_card__jQycq",title:"App_title__1YcTA",btnIcon:"App_btnIcon__361Vv",active:"App_active__V7onm"}},24:function(A,t,e){},25:function(A,t,e){"use strict";e.r(t);var n=e(0),c=e(4),a=e.n(c),r=e(12),s=e(5),C=e(9),i=e.n(C),o=e(3),Q=e(10),u=e(11),d=e(2),j=e.n(d),g="SET_DATA_TO_STATE_ACTION_TYPE",l="CHAHGE_ITEM_ACTION_TYPE",p=e(1);var b={setDataToStateAction:function(A){return{type:g,payload:A}},changeItemAction:function(A){return{type:l,payload:A}}},O=Object(s.b)((function(A){return{data:A}}),b)((function(A){var t=A.data,e=A.setDataToStateAction,c=A.changeItemAction,a=Object(n.useState)(!1),r=Object(u.a)(a,2),s=r[0],C=r[1];Object(n.useEffect)((function(){var A=function(){var A=Object(Q.a)(i.a.mark((function A(){var t,n;return i.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://raw.githubusercontent.com/AleksanrdKaradzikov/json-answer/main/entities.json");case 2:return t=A.sent,A.next=5,t.json();case 5:n=A.sent,setTimeout((function(){e(n.response.map((function(A){return Object(o.a)(Object(o.a)({},A),{},{isLike:!1})}))),C(!1)}),2e3);case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();try{C(!0),A()}catch(t){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0434\u0430\u043d\u043d\u044b\u0445: ",t),C(!1)}}),[]);var d=function(A){return function(){c(A)}};return Object(p.jsx)("div",{className:["container",j.a.wrap].join(" "),children:s?Object(p.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."}):Object(p.jsx)("div",{className:"row",children:t.map((function(A){var t=A.id,e=A.isLike,n=A.attributes,c=n.title,a=n.area,r=n.rooms,s=n.unit,C=n.address,i=C.city,o=C.house,Q=C.room,u=C.street,g=A.relationships.attributes,l=g.first_name,b=g.last_name,O=g.middle_name,D=e?[j.a.btnIcon,j.a.active]:[j.a.btnIcon];return Object(p.jsx)("div",{className:"col-lg-4 col-md-12",children:Object(p.jsxs)("div",{className:j.a.card,children:[Object(p.jsx)("button",{className:D.join(" "),type:"button",onClick:d(t),children:Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAJTAAACUwFl8qctAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAgRQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAADAAACAAACAAACAAACAAACAAACAAACAAACAAACAAACAAACAAACAAACAAACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAgACAQABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQABAQADAQADAQADAQADAQADAQADAQADAQADAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACAQACxER/AwAAAKt0Uk5TAAECAwQFBgcKCwwOEhMVFhgZGhweICEkJSkqLjAxMjM1Njc4Ojs8Pj9AQkNERUZHSElLTE1OT1FSU1VWV1hZWltcXV9gYWJjZGVmZ2hrbW9wcXJ1d3p8fn+ChIaHiIqLjY+QkpOVlpiZmpydn6ChoqOkpaanqKqrr7C0tba4ur2+v8HCw8TFx8vMz9HS09TY29ze3+Dh4ubr7e7v8PHy8/T19vf4+fr7/P3+8GDReQAAAttJREFUGBndwflDk3UAx/H3M9aQBomJgqaFdkAg0cVIy9SAJGNibKBorMAOOiaViWWpIJmKlgbDg2RcO5/PPxnqogEbbN9+8/WCx01pfXNnX3dbw1ZW2NrQ1t3X2VxfSlbl/iu2UsZ6qy0WWdW9Y0qxr/jLyaTsVFKauxg80X60/1xI0rVdpOy6Jil0rv9o+4ngxTkpeaqM5Vw984oEPetIqQyEpAsVLKi4IIUClaSs8wQjmu9xscT6y0oGy0jn7AhrsgZqJhXucJKuLJjU5fWk2Tahse0st2FQsdbWmAY3sNz2cU1sY9GmuxouIYOPtaCHDJ76TXc3kVJ0XT87ycgn+cjI9YuuF/HIWd14kix8PrJw/6mzPFSne5sxsPme6lhgjeoIRo5o1AL2a9yFEde49gPDasFQi4ahOBF1Y8gdTRTTpPMYO68mBuTFmFcDDKkWY7Ua4qa2YGyLbjIlN8bcmmJGRRgr0gy3VI6xCt1iRFUYq9IIP+hDjDXrDK36CWOD8rJR4ScwVDhtb4Qb2oMhj64CH+gPCyOOUX0EOP/SOxh5X6FCFrynO6UYKL6jd3nA+lWXnOStcES/WzxUMqGT5Ms6rdtPk7Izoh7yFFD4GRY1xhUgL8cVrSfNWzF9Qh66FfOwRGNMn5KzY4o3sownpl5y1KX4blZoiKqPnHQqsYcM3ojqJDnwK7GXjF6P6DPW5FNiH1m8FtHnFqvrUPIAWb06ry8sVtOuZBOreGVeX1pkd1h2C6uqm1O/RTZe2QdZQ+2cvrLIrM22D7Gmmll9bZHJIdtuIwcvz+obBysdtOUlJ9Uz+tbBci22DpOjqmkFHSzVlFQ7OXtpWgMO0h1IqoM8vBjWdw7+sy8hH3l5IazvC/jX3oT85On5KZ0u4JG3E+okbzvv68cCHtgdVxcGdtzXGSfQGNcxjFT+rUEnnpi6MfTcpIYCUR3H2LO3pdku/oeCN/0lPO7+Afvs92GY4XqlAAAAAElFTkSuQmCC",alt:"like icon"})}),Object(p.jsx)("h5",{className:j.a.title,children:c}),Object(p.jsxs)("p",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043d\u0430\u0442: ",r]}),Object(p.jsxs)("p",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c: ",a," ",s]}),Object(p.jsxs)("p",{children:["\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446: ",l," ",b," ",O]}),Object(p.jsxs)("p",{children:["\u0410\u0434\u0440\u0435\u0441: \u0433\u043e\u0440\u043e\u0434 ",i,", \u0443\u043b\u0438\u0446\u0430 ",u,", \u0434\u043e\u043c ",o,", \u043a\u0432. ",Q," "]})]})},t)}))})})})),D=(e(23),e(24),Object(r.a)((function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;case l:var e=t.payload;return A.map((function(A){return A.id===e?Object(o.a)(Object(o.a)({},A),{},{isLike:!A.isLike}):A}));default:return A}})));a.a.render(Object(p.jsx)(s.a,{store:D,children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.40e038d5.chunk.js.map