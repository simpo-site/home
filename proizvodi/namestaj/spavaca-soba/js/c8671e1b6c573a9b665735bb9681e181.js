/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{store:function(){return b}});var n={};e.r(n),e.d(n,{createErrorNotice:function(){return E},createInfoNotice:function(){return d},createNotice:function(){return f},createSuccessNotice:function(){return l},createWarningNotice:function(){return p},removeAllNotices:function(){return O},removeNotice:function(){return y},removeNotices:function(){return N}});var r={};e.r(r),e.d(r,{getNotices:function(){return _}});var i=window.wp.data;var o=e=>t=>(n={},r)=>{const i=r[e];if(void 0===i)return n;const o=t(n[i],r);return o===n[i]?n:{...n,[i]:o}};var c=o("context")(((e=[],t)=>{switch(t.type){case"CREATE_NOTICE":return[...e.filter((({id:e})=>e!==t.notice.id)),t.notice];case"REMOVE_NOTICE":return e.filter((({id:e})=>e!==t.id));case"REMOVE_NOTICES":return e.filter((({id:e})=>!t.ids.includes(e)));case"REMOVE_ALL_NOTICES":return e.filter((({type:e})=>e!==t.noticeType))}return e}));const u="global",s="info";let a=0;function f(e=s,t,n={}){const{speak:r=!0,isDismissible:i=!0,context:o=u,id:c=`${o}${++a}`,actions:f=[],type:l="default",__unstableHTML:d,icon:E=null,explicitDismiss:p=!1,onDismiss:y}=n;return{type:"CREATE_NOTICE",context:o,notice:{id:c,status:e,content:t=String(t),spokenMessage:r?t:null,__unstableHTML:d,isDismissible:i,actions:f,type:l,icon:E,explicitDismiss:p,onDismiss:y}}}function l(e,t){return f("success",e,t)}function d(e,t){return f("info",e,t)}function E(e,t){return f("error",e,t)}function p(e,t){return f("warning",e,t)}function y(e,t=u){return{type:"REMOVE_NOTICE",id:e,context:t}}function O(e="default",t=u){return{type:"REMOVE_ALL_NOTICES",noticeType:e,context:t}}function N(e,t=u){return{type:"REMOVE_NOTICES",ids:e,context:t}}const T=[];function _(e,t=u){return e[t]||T}const b=(0,i.createReduxStore)("core/notices",{reducer:c,actions:n,selectors:r});(0,i.register)(b),(window.wp=window.wp||{}).notices=t}()
;