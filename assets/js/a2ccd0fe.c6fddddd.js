(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[51088],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17749:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Setting replicas"},c={unversionedId:"end-user/traits/scaler",id:"version-v1.2/end-user/traits/scaler",isDocsHomePage:!1,title:"Setting replicas",description:"The scaler trait allows you to change the replicas for the component.",source:"@site/versioned_docs/version-v1.2/end-user/traits/scaler.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/scaler",permalink:"/docs/end-user/traits/scaler",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/scaler.md",version:"v1.2",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642586648,formattedLastUpdatedAt:"1/19/2022",frontMatter:{title:"Setting replicas"},sidebar:"version-v1.2/docs",previous:{title:"Needs More\uff1f",permalink:"/docs/end-user/components/more"},next:{title:"Gateway for Public Access",permalink:"/docs/end-user/traits/ingress"}},s=[{value:"Specification",id:"specification",children:[]},{value:"How to use",id:"how-to-use",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"scaler")," trait allows you to change the replicas for the component."),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ vela show scaler\n# Properties\n+----------+--------------------------------+------+----------+---------+\n|   NAME   |          DESCRIPTION           | TYPE | REQUIRED | DEFAULT |\n+----------+--------------------------------+------+----------+---------+\n| replicas | Specify the number of workload | int  | true     |       1 |\n+----------+--------------------------------+------+----------+---------+\n")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: scaler         # Set the replica to the specified value\n          properties:\n            replicas: 5\n")))}p.isMDXComponent=!0}}]);