(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{285:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{stories:[]}},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{starts_with:"de/articles/",version:"draft"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",{staticClass:"py-10 text-center font-bold text-4xl"},[t._v("Articles Overview")]),t._v("\n  "+t._s(t.articles)+"\n  "),n("ul",{staticClass:"flex py-6 mb-6"},t._l(t.stories,(function(article){return n("li",{key:article._uid,staticClass:"flex-auto px-6",staticStyle:{"min-width":"33%"}},[article.content?n("article-teaser",{attrs:{"article-link":article.full_slug,"article-content":article.content}}):t._e()],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);