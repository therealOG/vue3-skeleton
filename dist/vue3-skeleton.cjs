"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),h=Symbol(),S={key:0},p=e.defineComponent({__name:"Skeleton",props:{rows:{default:1},circle:{type:Boolean},containerClass:{},childClass:{},width:{},height:{},borderRadius:{},backgroundColor:{},animationDuration:{},enableAnimation:{type:Boolean,default:void 0},inline:{type:Boolean,default:void 0}},setup(l){const o=l,t=e.inject(h,{}),s=e.computed(()=>{const{rows:n}=o;return Math.floor(n)}),c=e.useSlots(),f=e.computed(()=>{if(c.default)return c.default()[0].children||!1}),b=()=>{const n={},i=o.width??t.width??null,a=o.height??t.height??null,g=o.borderRadius??t.borderRadius??null,u=o.backgroundColor??t.backgroundColor??null,d=o.animationDuration??t.animationDuration??null,m=o.enableAnimation??t.enableAnimation??null,y=o.circle;return r(i,"width",n),r(a,"height",n),r(g,"borderRadius",n),y&&(n.borderRadius="50%"),u&&(n.backgroundColor=u),d&&(n.animationDuration=`${d}s`),m&&(n.animationPlayState=m?"running":"paused"),n};function r(n,i,a){typeof n=="string"?a[i]=n:typeof n=="number"&&(a[i]=`${n}px`)}return(n,i)=>f.value?e.renderSlot(n.$slots,"default",{key:1}):(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(["skeleton-container",n.containerClass])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.value,()=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("span",{style:e.normalizeStyle(b()),class:e.normalizeClass(["skeleton-loading",n.childClass]),innerHTML:"‌"},null,6),n.inline?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("br",S))],64))),256))],2))}}),B={class:"skeleton-theme"},k=e.defineComponent({__name:"SkeletonTheme",props:{width:{},height:{},borderRadius:{},backgroundColor:{},animationDuration:{},enableAnimation:{type:Boolean,default:void 0},inline:{type:Boolean,default:void 0}},setup(l){const o=l;return e.provide(h,o),(t,s)=>(e.openBlock(),e.createElementBlock("div",B,[e.renderSlot(t.$slots,"default")]))}}),C={install:l=>{l.component("Skeleton",p),l.component("SkeletonTheme",k)}};exports.Skeleton=p;exports.SkeletonTheme=k;exports.default=C;
