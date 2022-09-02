import { requireFromString } from 'module-from-string'
const JScontents = `"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports[Symbol.toStringTag]="Module";var e=require("vue"),_=(t,o)=>{const n=t.__vccOpts||t;for(const[s,u]of o)n[s]=u;return n};const d={},i=e.createElementVNode("header",null," HEADER ",-1),m=e.createElementVNode("footer",null," FOOTER ",-1);function f(t,o){return e.openBlock(),e.createElementBlock("div",null,[i,e.createElementVNode("main",null,[e.renderSlot(t.$slots,"default")]),m])}var r=_(d,[["render",f]]),l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ContentPage:r});const c=e.defineComponent({props:{msg:null},setup(t){return(o,n)=>(e.openBlock(),e.createElementBlock("div",null," Hello "+e.toDisplayString(t.msg)+"! ",1))}});var a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",HelloWorld:c});function p(t){for(const o in l)t.component(o,l[o]);for(const o in a)t.component(o,a[o])}var v={install:p};exports.ContentPage=r;exports.HelloWorld=c;exports.default=v;`

export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp();
    
    const { default: Theme } = requireFromString(JScontents)
    console.log(Theme.install)

    if (typeof Theme !== 'undefined') {
        console.log("---hahaha---")
        Theme.install(nuxtApp.vueApp);
    }
})