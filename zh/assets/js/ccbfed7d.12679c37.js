(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[19427],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),m=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(n),c=a,s=k["".concat(i,".").concat(c)]||k[c]||d[c]||l;return n?r.createElement(s,o(o({ref:e},u),{},{components:n})):r.createElement(s,o({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},38533:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"\u5de5\u4f5c\u673a\u5236"},p={unversionedId:"platform-engineers/workflow/working-mechanism",id:"platform-engineers/workflow/working-mechanism",isDocsHomePage:!1,title:"\u5de5\u4f5c\u673a\u5236",description:"\u8fd9\u4e2a\u6587\u6863\u4f1a\u7b80\u5355\u4ecb\u7ecd KubeVela \u5de5\u4f5c\u6d41\u7684\u4e00\u4e9b\u5185\u90e8\u7684\u6838\u5fc3\u8fd0\u884c\u673a\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/workflow/working-mechanism.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/working-mechanism",permalink:"/zh/docs/next/platform-engineers/workflow/working-mechanism",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/working-mechanism.md",version:"current",lastUpdatedBy:"Somefive",lastUpdatedAt:1647926121,formattedLastUpdatedAt:"2022/3/22",frontMatter:{title:"\u5de5\u4f5c\u673a\u5236"},sidebar:"docs",previous:{title:"\u9644\u5f55\uff1aCUE \u64cd\u4f5c\u7b26",permalink:"/zh/docs/next/platform-engineers/workflow/cue-actions"},next:{title:"\u542f\u52a8\u53c2\u6570\u8bf4\u660e",permalink:"/zh/docs/next/platform-engineers/system-operation/bootstrap-parameters"}},i=[{value:"\u8fd0\u884c\u6a21\u5f0f",id:"\u8fd0\u884c\u6a21\u5f0f",children:[]},{value:"\u6682\u505c\u4e0e\u91cd\u8bd5",id:"\u6682\u505c\u4e0e\u91cd\u8bd5",children:[{value:"\u91cd\u8bd5\u65f6\u95f4",id:"\u91cd\u8bd5\u65f6\u95f4",children:[]},{value:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570",id:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570",children:[]}]},{value:"\u72b6\u6001\u7ef4\u6301",id:"\u72b6\u6001\u7ef4\u6301",children:[]}],m={toc:i};function u(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fd9\u4e2a\u6587\u6863\u4f1a\u7b80\u5355\u4ecb\u7ecd KubeVela \u5de5\u4f5c\u6d41\u7684\u4e00\u4e9b\u5185\u90e8\u7684\u6838\u5fc3\u8fd0\u884c\u673a\u5236\u3002"),(0,l.kt)("h2",{id:"\u8fd0\u884c\u6a21\u5f0f"},"\u8fd0\u884c\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u5206\u4e3a\u4e24\u79cd\u6a21\u5f0f\uff1aDAG \u6a21\u5f0f\u548c StepByStep \u6a21\u5f0f\u3002\u5728 DAG \u6a21\u5f0f\u4e0b\uff0c\u5de5\u4f5c\u6d41\u4e2d\u7684\u5404\u4e2a\u6b65\u9aa4\u4f1a\u5e76\u53d1\u8fd0\u884c\uff0c\u5e76\u6839\u636e\u5404\u6b65\u9aa4\u7684 Input/Output \u5f62\u6210\u4f9d\u8d56\u5173\u7cfb\u3002\u524d\u7f6e\u6761\u4ef6\u672a\u6ee1\u8db3\u7684\u6b65\u9aa4\u4f1a\u5148\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\u3002\u5728 StepByStep \u6a21\u5f0f\u4e0b\uff0c\u5de5\u4f5c\u6d41\u4e2d\u7684\u5404\u4e2a\u6b65\u9aa4\u5219\u662f\u4f1a\u6309\u7167\u987a\u5e8f\u4e00\u6b65\u6b65\u6267\u884c\u3002\u5728 KubeVela v1.2+ \u7684\u7248\u672c\u4e2d\uff0c\u5728\u914d\u7f6e\u5de5\u4f5c\u6d41\u7684\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u91c7\u7528 StepByStep \u6a21\u5f0f\uff0c\u6682\u672a\u652f\u6301\u663e\u5f0f\u6307\u5b9a\u5de5\u4f5c\u6d41\u4ee5 DAG \u6a21\u5f0f\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u6682\u505c\u4e0e\u91cd\u8bd5"},"\u6682\u505c\u4e0e\u91cd\u8bd5"),(0,l.kt)("p",null,"\u5de5\u4f5c\u6d41\u4f1a\u56e0\u4e3a\u4e0d\u540c\u7684\u539f\u56e0\u91cd\u8bd5\u6216\u8005\u6682\u505c\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f53\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5931\u8d25\u6216\u8005\u7b49\u5f85\u7279\u5b9a\u6761\u4ef6\u65f6\uff0c\u5de5\u4f5c\u6d41\u4f1a\u5728\u4e00\u6bb5\u65f6\u95f4\u540e\u8fdb\u884c\u91cd\u8bd5\u3002\u91cd\u8bd5\u7684\u65f6\u95f4\u4f1a\u6839\u636e\u91cd\u8bd5\u7684\u6b21\u6570\u589e\u52a0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5931\u8d25\u6b21\u6570\u8fc7\u591a\uff0c\u5de5\u4f5c\u6d41\u4f1a\u8fdb\u5165\u6682\u505c\u72b6\u6001\u5e76\u505c\u6b62\u91cd\u8bd5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5728\u7b49\u5f85\u4eba\u5de5\u5ba1\u6838\uff0c\u5de5\u4f5c\u6d41\u4f1a\u7acb\u523b\u8fdb\u5165\u6682\u505c\u72b6\u6001\u3002")),(0,l.kt)("h3",{id:"\u91cd\u8bd5\u65f6\u95f4"},"\u91cd\u8bd5\u65f6\u95f4"),(0,l.kt)("p",null,"\u5de5\u4f5c\u6d41\u7684\u91cd\u8bd5\u65f6\u95f4\u53ef\u4ee5\u4f9d\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"int(0.05 * 2^(n-1))")," \u8fdb\u884c\u8ba1\u7b97\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u91cd\u8bd5\u7684\u6b21\u6570\u3002\u6700\u5c0f\u7684\u91cd\u8bd5\u65f6\u95f4\u662f 1 \u79d2\u3002\u524d 10 \u6b21\u91cd\u8bd5\u65f6\u95f4\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u91cd\u8bd5\u6b21\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"2^(n-1)"),(0,l.kt)("th",{parentName:"tr",align:null},"0.05*2^(n-1)"),(0,l.kt)("th",{parentName:"tr",align:null},"\u91cd\u8bd5\u65f6\u95f4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"0.4"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"64"),(0,l.kt)("td",{parentName:"tr",align:null},"3.2"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"128"),(0,l.kt)("td",{parentName:"tr",align:null},"6.4"),(0,l.kt)("td",{parentName:"tr",align:null},"6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"256"),(0,l.kt)("td",{parentName:"tr",align:null},"12.8"),(0,l.kt)("td",{parentName:"tr",align:null},"12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"512"),(0,l.kt)("td",{parentName:"tr",align:null},"25.6"),(0,l.kt)("td",{parentName:"tr",align:null},"25")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("p",null,"\u5982\u679c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u6700\u5927\u7684\u91cd\u8bd5\u65f6\u95f4\u4e3a 60 \u79d2\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,l.kt)("a",{parentName:"p",href:"../system-operation/bootstrap-parameters"},"\u542f\u52a8\u53c2\u6570")," ",(0,l.kt)("inlineCode",{parentName:"p"},"--max-workflow-wait-backoff-time")," \u6765\u8bbe\u7f6e\u8fd9\u4e00\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5904\u4e8e\u5931\u8d25\u72b6\u6001\uff0c\u6700\u5927\u7684\u91cd\u8bd5\u65f6\u95f4\u4e3a 300 \u79d2\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,l.kt)("a",{parentName:"p",href:"../system-operation/bootstrap-parameters"},"\u542f\u52a8\u53c2\u6570")," ",(0,l.kt)("inlineCode",{parentName:"p"},"--max-workflow-failed-backoff-time")," \u6765\u8bbe\u7f6e\u8fd9\u4e00\u65f6\u95f4\u3002"),(0,l.kt)("h3",{id:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570"},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5931\u8d25\u7684\u573a\u666f\uff0c\u5de5\u4f5c\u6d41\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5728\u91cd\u8bd5\u6700\u591a 10 \u6b21\u540e\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,l.kt)("a",{parentName:"p",href:"../system-operation/bootstrap-parameters"},"\u542f\u52a8\u53c2\u6570")," ",(0,l.kt)("inlineCode",{parentName:"p"},"--max-workflow-step-error-retry-times")," \u6765\u8bbe\u7f6e\u8fd9\u4e00\u65f6\u95f4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u5982\u679c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u662f\u56e0\u4e3a\u8d44\u6e90\u4e0d\u5065\u5eb7\uff08\u5982 Pod \u5c1a\u672a\u542f\u52a8\uff09\uff0c\u5de5\u4f5c\u6d41\u6b65\u9aa4\u4f1a\u88ab\u6807\u8bb0\u4e3a\u7b49\u5f85\u800c\u4e0d\u662f\u5931\u8d25\u3002")),(0,l.kt)("h2",{id:"\u72b6\u6001\u7ef4\u6301"},"\u72b6\u6001\u7ef4\u6301"),(0,l.kt)("p",null,"\u5f53\u5de5\u4f5c\u6d41\u5904\u4e8e\u5065\u5eb7\u8fd0\u884c\u72b6\u6001 (running) \u6216\u662f\u7531\u4e8e\u7b49\u5f85\u8d44\u6e90\u5065\u5eb7\u72b6\u6001\u800c\u6682\u505c\u65f6 (suspending)\uff0cKubeVela \u7684\u5e94\u7528\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e0b\u4f1a\u5b9a\u671f\u68c0\u67e5\u4e4b\u524d\u4e0b\u53d1\u7684\u8d44\u6e90\u662f\u5426\u5b58\u5728\u914d\u7f6e\u6f02\u79fb\uff0c\u5e76\u5c06\u8fd9\u4e9b\u8d44\u6e90\u6062\u590d\u6210\u539f\u5148\u4e0b\u53d1\u65f6\u7684\u914d\u7f6e\u3002\u9ed8\u8ba4\u5b9a\u671f\u68c0\u67e5\u7684\u65f6\u95f4\u662f 5 \u5206\u949f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728 KubeVela \u63a7\u5236\u5668",(0,l.kt)("a",{parentName:"p",href:"../system-operation/bootstrap-parameters"},"\u542f\u52a8\u53c2\u6570"),"\u5728\u4e2d\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"--application-re-sync-period")," \u6765\u8c03\u8282\u3002\u5982\u679c\u60f3\u8981\u7981\u7528\u72b6\u6001\u7ef4\u6301\u7684\u80fd\u529b\uff0c\u4e5f\u53ef\u4ee5\u5728\u5e94\u7528\u4e2d\u914d\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/app-with-policy/apply-once-policy/apply-once.md"},"apply-once")," \u7b56\u7565\u3002"))}u.isMDXComponent=!0}}]);