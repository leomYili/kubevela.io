(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[64825],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36298:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",description:"\u672c\u6587\u4ecb\u7ecd KubeVela \u7684\u5de5\u4f5c\u6d41\u5de5\u7a0b\u6a21\u5f0f\uff0c\u5e38\u7528\u64cd\u4f5c\u548c\u9002\u7528\u7684\u573a\u666f\u3002"},l={unversionedId:"tutorials/workflows",id:"version-v1.2/tutorials/workflows",isDocsHomePage:!1,title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",description:"\u672c\u6587\u4ecb\u7ecd KubeVela \u7684\u5de5\u4f5c\u6d41\u5de5\u7a0b\u6a21\u5f0f\uff0c\u5e38\u7528\u64cd\u4f5c\u548c\u9002\u7528\u7684\u573a\u666f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/tutorials/workflows.md",sourceDirName:"tutorials",slug:"/tutorials/workflows",permalink:"/zh/docs/tutorials/workflows",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/workflows.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642480750,formattedLastUpdatedAt:"2022/1/18",frontMatter:{title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",description:"\u672c\u6587\u4ecb\u7ecd KubeVela \u7684\u5de5\u4f5c\u6d41\u5de5\u7a0b\u6a21\u5f0f\uff0c\u5e38\u7528\u64cd\u4f5c\u548c\u9002\u7528\u7684\u573a\u666f\u3002"},sidebar:"version-v1.2/docs",previous:{title:"GitOps \u4ea4\u4ed8",permalink:"/zh/docs/case-studies/gitops"},next:{title:"\u521b\u5efa\u5e94\u7528",permalink:"/zh/docs/how-to/dashboard/application/create-application"}},p=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb",id:"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb",children:[]},{value:"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4",id:"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4",children:[]},{value:"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5",id:"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5",children:[]}],c={toc:p};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u8be6\u7ec6\u4ecb\u7ecd\u5e94\u7528\u5de5\u4f5c\u6d41\u7684\u529f\u80fd\u548c\u4f7f\u7528\u573a\u666f\uff0c\u5e26\u4f60\u66f4\u5168\u9762\u7684\u4e86\u89e3\u5de5\u4f5c\u6d41\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"./k8s-object"},"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90")," \u4e00\u6587\u4e2d\uff0c\u6211\u4eec\u521d\u8bc6\u4e86\u5de5\u4f5c\u6d41\u7684\u4e00\u4e2a\u91cd\u8981\u4f7f\u7528\u573a\u666f\uff0c\u5373\u4eba\u5de5\u4ecb\u5165\u591a\u96c6\u7fa4\u53d1\u5e03\u7684\u8fc7\u7a0b\uff0c\u5b9e\u73b0\u53ef\u63a7\u591a\u96c6\u7fa4\u53d1\u5e03\u3002\u5728\u672c\u6587\u4e2d\u6211\u4eec\u7ee7\u7eed\u4ecb\u7ecd\u4ee5\u4e0b\u8bdd\u9898\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8fdb\u4e00\u6b65\u4e86\u89e3 Workflow \u3001Revision \u548c Env \u7684\u5173\u7cfb\uff0c\u4ee5\u53ca\u76ee\u524d\u5185\u7f6e\u7684 Workflow \u6b65\u9aa4\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de5\u4f5c\u6d41\u4e2d\u5b9e\u73b0\u901a\u77e5\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u6570\u636e\u521d\u59cb\u5316\u3002")),(0,i.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5185\u5bb9\u76f8\u5bf9\u6df1\u5165\uff0c\u5728\u6b64\u4e4b\u524d\uff0c\u5efa\u8bae\u5148\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"../quick-start"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"),", ",(0,i.kt)("a",{parentName:"p",href:"./webservice"},"\u4ea4\u4ed8\u5bb9\u5668\u955c\u50cf")," \u7b49\u6587\u7ae0\u4e86\u89e3\u5176\u4ed6\u57fa\u7840\u77e5\u8bc6\u548c\u6d41\u7a0b\u3002"),(0,i.kt)("h2",{id:"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb"},"\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u7248\u672c\u7684\u5173\u7cfb"),(0,i.kt)("p",null,"\u5e94\u7528\u8fdb\u884c\u90e8\u7f72\u7684\u52a8\u4f5c\u5219\u4e3a\u6267\u884c\u67d0\u4e00\u4e2a\u5de5\u4f5c\u6d41\u53d1\u5e03\u4e00\u4e2a\u7248\u672c\uff0c\u7248\u672c\u72b6\u6001\u8ddf\u968f\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u8bf4\u5de5\u4f5c\u6d41\u6267\u884c\u5b8c\u6210\uff0c\u5219\u4ee3\u8868\u8be5\u7248\u672c\u5904\u4e8e\u5b8c\u6210\u53d1\u5e03\u7684\u72b6\u6001\u3002\u5de5\u4f5c\u6d41\u4e0e\u5e94\u7528\u53d1\u5e03\u7684\u73af\u5883\u7ed1\u5b9a\uff0c\u5373\u5e94\u7528\u7684\u6bcf\u4e00\u4e2a\u73af\u5883\u90fd\u6709\u72ec\u7acb\u7684\u5de5\u4f5c\u6d41\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application Revision List",src:n(28894).Z})),(0,i.kt)("p",null,"\u5bf9\u63a5 CI \u7cfb\u7edf\u540e\uff0c\u7248\u672c\u53ef\u4ee5\u4e0e Code Commit \u5173\u8054\uff0c\u5b9e\u73b0\u7248\u672c\u53ef\u8ffd\u6eaf\u3002\u5728\u7248\u672c\u64cd\u4f5c\u4e2d\u540e\u7eed\u4f1a\u5b9e\u73b0\u7248\u672c\u56de\u9000\u529f\u80fd\uff0c\u4f60\u53ef\u5728\u4efb\u4f55\u65f6\u5019\u9009\u62e9\u5c06\u67d0\u4e2a\u73af\u5883\u56de\u9000\u5230\u6307\u5b9a\u7248\u672c\u3002"),(0,i.kt)("h2",{id:"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4"},"\u5185\u7f6e\u652f\u6301\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("a",{parentName:"p",href:"./k8s-object"},"\u4ea4\u4ed8 Kubernetes \u539f\u751f\u8d44\u6e90")," \u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4eba\u5de5\u5ba1\u6838\u6b65\u9aa4 ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend"),"\u3002\u6211\u4eec\u518d\u6765\u4e86\u89e3\u4e00\u4e0b\u5176\u4ed6\u5185\u7f6e\u7684\u6b65\u9aa4\u5206\u522b\u662f\u4ec0\u4e48\u4f5c\u7528\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deploy2env"),": \u5e94\u7528\u4ea4\u4ed8\u5230\u6307\u5b9a Target\u3002\u8be5\u6b65\u9aa4 Vela \u4f1a\u6839\u636e\u73af\u5883\u4e2d\u914d\u7f6e\u7684 Target \u81ea\u52a8\u751f\u6210\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deploy-cloud-resource"),": \u4e91\u8d44\u6e90\u5e94\u7528\u4ea4\u4ed8\u5230\u6307\u5b9a Target\u3002\u8be5\u6b65\u9aa4 Vela \u4f1a\u4e3a\u4e91\u8d44\u6e90\u5e94\u7528\uff0c\u6839\u636e\u73af\u5883\u4e2d\u914d\u7f6e\u7684 Target \u81ea\u52a8\u751f\u6210\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8be5\u7c7b\u578b\u6b65\u9aa4\u4e0e deploy2env \u7684\u533a\u522b\u5728\u4e8e\u63a7\u5236\u4e91\u8d44\u6e90\u521b\u5efa\u7684 CR \u8d44\u6e90\u662f\u90e8\u7f72\u5230\u7ba1\u63a7\u96c6\u7fa4\u7684\uff0c\u670d\u52a1\u521b\u5efa\u5b8c\u6210\u751f\u6210\u8bbf\u95ee\u5bc6\u94a5(Secret)\u540e\uff0c\u5c06 Secret \u5206\u53d1\u5230 Target \u6307\u5b9a\u96c6\u7fa4\u548c Namespace\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"share-cloud-resource"),": \u5206\u53d1\u4e91\u670d\u52a1\u751f\u6210\u7684 Secret \u5230\u6307\u5b9a Target\uff0c\u4f7f\u7528\u8be5\u6b65\u9aa4\u5b9e\u73b0\u4e91\u670d\u52a1\u591a\u96c6\u7fa4\u5171\u4eab\uff0c\u5373\u5728\u591a\u96c6\u7fa4\u5e94\u7528\u4e2d\u53ea\u521b\u5efa\u4e00\u4e2a\u4e91\u670d\u52a1\uff0c\u5c06\u5176\u8bbf\u95ee\u5bc6\u94a5\u5206\u53d1\u5230\u591a\u4e2a\u96c6\u7fa4\uff0c\u5b9e\u73b0\u670d\u52a1\u5171\u4eab\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"notification"),": \u901a\u77e5\uff0c\u652f\u6301\u9489\u9489\u3001\u90ae\u4ef6\u3001Slack \u4e09\u79cd\u901a\u77e5\u6a21\u5f0f\uff0c\u4f60\u53ef\u5c06\u5176\u7f6e\u4e8e\u5de5\u4f5c\u6d41\u7684\u4efb\u4f55\u9636\u6bb5\u5b9e\u73b0\u6d88\u606f\u901a\u77e5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"webhook"),": Web \u94a9\u5b50\uff0c\u4f60\u53ef\u5c06\u5176\u7f6e\u4e8e\u5de5\u4f5c\u6d41\u4efb\u4f55\u9636\u6bb5\uff0c\u5b9e\u73b0\u5bf9\u5916\u90e8\u7cfb\u7edf\u7684\u8c03\u7528\u3002")),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5"},"\u5b9e\u73b0\u6d88\u606f\u901a\u77e5"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"notification")," \u6b65\u9aa4\u53ef\u5b9e\u73b0\u9489\u9489\u3001\u90ae\u4ef6\u548c Slack \u4e09\u79cd\u901a\u77e5\u6a21\u5f0f\u3002\u8fdb\u5165\u5e94\u7528\u5de5\u4f5c\u6d41\u7ba1\u7406\u9875\u9762\uff0c\u9009\u62e9\u4e00\u4e2a\u73af\u5883\u7684\u5de5\u4f5c\u6d41\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit")," \u6309\u94ae\u8fdb\u5165\u7f16\u8f91\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"workflow-edit",src:n(23765).Z})),(0,i.kt)("p",null,"\u9009\u62e9\u5de6\u4fa7\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"notification")," \u7c7b\u578b\u7684\u6b65\u9aa4\u62d6\u5165\u53f3\u4fa7\u753b\u5e03\uff0c\u9875\u9762\u5c06\u81ea\u52a8\u5f39\u51fa\u5de5\u4f5c\u6d41\u6b65\u9aa4\u7f16\u8f91\u7a97\u53e3\uff0c\u5728\u8bbe\u7f6e\u7a97\u53e3\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u4e09\u79cd\u901a\u77e5\uff0c\u5728\u540c\u4e00\u6b65\u9aa4\u4e2d\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u591a\u79cd\u901a\u77e5\uff0c\u5b83\u540c\u65f6\u751f\u6548\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"workflow-notification",src:n(78753).Z})),(0,i.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"Dingding")," \u901a\u77e5\uff0c\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Dingding")," \u7a97\u53e3\u53f3\u4fa7\u7684\u542f\u7528\u6309\u94ae\uff0c\u9875\u9762\u5c06\u51fa\u73b0\u4e24\u4e2a\u8f93\u5165\u6846\uff0c\u4e00\u4e2a\u662f\u9489\u9489\u7fa4\u901a\u77e5\u673a\u5668\u4eba\u7684 Webhook \u5730\u5740\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/group/custom-robot-access"},"Dingding \u7fa4\u673a\u5668\u4eba\u53c2\u8003\u6587\u6863")," \u83b7\u53d6\u3002\u53e6\u5916\u4e00\u4e2a\u662f\u901a\u77e5\u5185\u5bb9\u8f93\u5165\u6846\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4efb\u4f55\u9700\u8981\u53d1\u9001\u7684\u901a\u77e5\u5185\u5bb9\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Slack")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"Dingding")," \u914d\u7f6e\u65b9\u5f0f\u7c7b\u4f3c\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Slack \u4e2d\u83b7\u53d6 Webhook \u5730\u5740"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Email")," \u76f8\u5bf9\u914d\u7f6e\u6570\u636e\u66f4\u591a\uff0c\u9700\u8981\u914d\u7f6e\u90ae\u4ef6\u670d\u52a1\u5668\u3001\u90ae\u4ef6\u5185\u5bb9\u548c\u53d1\u9001\u76ee\u6807\u90ae\u4ef6\u5730\u5740\u7b49\u3002"),(0,i.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," \u4fdd\u5b58\u6b65\u9aa4\u914d\u7f6e\uff0c\u8fd9\u65f6\u9700\u8981\u89c4\u5212\u901a\u77e5\u6b65\u9aa4\u7684\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u5b83\u5c06\u6dfb\u52a0\u5230\u6700\u540e\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u5c06\u5176\u653e\u7f6e\u5230\u4e2d\u95f4\u6b65\u9aa4\uff0c\u9700\u8981\u65ad\u5f00\u539f\u6709\u6b65\u9aa4\u76f4\u63a5\u7684\u8fde\u7ebf\uff0c\u7136\u540e\u5c06\u901a\u77e5\u6b65\u9aa4\u8fdb\u884c\u8fde\u7ebf\u653e\u7f6e\u5728\u4e2d\u95f4\u3002"),(0,i.kt)("p",null,"\u5de5\u4f5c\u6d41\u914d\u7f6e\u5b8c\u6210\u540e\u6ce8\u610f\u70b9\u51fb\u5de5\u4f5c\u6d41\u7a97\u53e3\u53f3\u4e0a\u65b9\u7684 Save \u6309\u94ae\u4fdd\u5b58\u6240\u6709\u53d8\u66f4\u3002\u4fdd\u5b58\u5b8c\u6210\u540e\u53ef\u4ee5\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u65b9\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," \u6216\u53f3\u8fb9\u7684\u9009\u62e9\u6309\u94ae\u9009\u62e9\u6267\u884c\u8be5\u5de5\u4f5c\u6d41\uff0c\u9a8c\u8bc1\u662f\u5426\u53ef\u4ee5\u6536\u5230\u6d88\u606f\u901a\u77e5\u3002"))}u.isMDXComponent=!0},28894:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-revision-ab2c61f58ebfdf0b6bd32c29b3fa2dfb.jpg"},23765:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-edit-d7e36aca89b22c7d1735d7035b39eaa4.jpg"},78753:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-notification-0da0131553d67e4075ee5e51b436c225.jpg"}}]);