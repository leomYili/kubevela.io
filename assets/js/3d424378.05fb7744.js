(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[55330],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54076:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"AutoScaler"},l={unversionedId:"end-user/traits/autoscaler",id:"end-user/traits/autoscaler",isDocsHomePage:!1,title:"AutoScaler",description:"How to use",source:"@site/docs/end-user/traits/autoscaler.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/autoscaler",permalink:"/docs/next/end-user/traits/autoscaler",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/autoscaler.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641994039,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"AutoScaler"},sidebar:"docs",previous:{title:"Attaching Sidecar",permalink:"/docs/next/end-user/traits/sidecar"},next:{title:"Kustomize Patch",permalink:"/docs/next/end-user/traits/kustomize-patch"}},u=[{value:"How to use",id:"how-to-use",children:[]},{value:"Specification",id:"specification",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # Automatically scale the component by CPU usage after deployed\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,i.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,i.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"min"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the minimal number of replicas to which the autoscaler can scale down"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the maximum number of of replicas to which the autoscaler can scale up"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cpuUtil"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the average cpu utilization, for example, 50 means the CPU usage is 50%"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"50")))))}p.isMDXComponent=!0}}]);