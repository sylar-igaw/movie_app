(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{28:function(e,t,a){},34:function(e,t,a){e.exports=a(65)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),s=a.n(o),i=a(7),c=a(6),m=a(16),l=a.n(m),u=a(10),v=a(11),p=a(13),g=a(12),d=a(14),y=a(31),E=a.n(y);a(28);var h=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,c=e.rating,m=e.genres;return r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:o,poster:s,genres:m}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a," [ ",c,"/10 ]"),r.a.createElement("ul",{className:"movie__genres"},m.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.length>180?o.slice(0,180)+"...":o))))},f=(a(63),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={isLoading:!0,movie:[]},a.getMovies=function(){var e,t,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==localStorage.getItem("movies")){r.next=10;break}return r.next=3,l.a.awrap(E.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 3:e=r.sent,t=e.data.data.movies,console.log(t),a.setState({movies:t,isLoading:!1}),localStorage.setItem("movies",JSON.stringify(t)),r.next=12;break;case 10:n=JSON.parse(localStorage.getItem("movies")),a.setState({movies:n,isLoading:!1});case 12:case"end":return r.stop()}}))},console.log("constructor"),a}return Object(d.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,rating:e.rating,genres:e.genres})}))))}},{key:"componentDidMount",value:function(){this.getMovies()}}]),t}(r.a.Component));var b=function(){return r.a.createElement("div",{className:"abount__container"},r.a.createElement("span",null,"About this page"))},_=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(t.state),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state,a=t.id,n=t.year,o=t.title,s=t.summary,i=t.poster,c=t.rating,m=t.genres;return r.a.createElement(h,{id:a,year:n,title:o,summary:s,poster:i,rating:c,genres:m})}return null}}]),t}(r.a.Component);a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"{/about}"},"About"))};var O=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null),r.a.createElement(c.a,{path:"/",exact:!0,component:f}),r.a.createElement(c.a,{path:"/about",component:b}),r.a.createElement(c.a,{path:"/movie/:id",component:_}))};s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b6eec151.chunk.js.map