(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[43831],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(b,o(o({ref:n},l),{},{components:t})):r.createElement(b,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64865:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o={title:"\u6570\u636e\u7ed1\u5b9a"},c={unversionedId:"end-user/traits/service-binding",id:"version-v1.2/end-user/traits/service-binding",isDocsHomePage:!1,title:"\u6570\u636e\u7ed1\u5b9a",description:"\u672c\u8282\u5c06\u4ecb\u7ecd service-binding \u8fd0\u7ef4\u7279\u5f81\u7684\u7528\u6cd5\uff0c\u5b83\u80fd\u5c06\u6570\u636e\u4ece Kubernetes Secret \u7ed1\u5b9a\u5230\u5e94\u7528\u7a0b\u5e8f\u6240\u5728\u5bb9\u5668\u7684 ENV \u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/end-user/traits/service-binding.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/service-binding",permalink:"/zh/docs/end-user/traits/service-binding",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/service-binding.md",version:"v1.2",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642586648,formattedLastUpdatedAt:"2022/1/19",frontMatter:{title:"\u6570\u636e\u7ed1\u5b9a"},sidebar:"version-v1.2/docs",previous:{title:"\u6807\u7b7e\u7ba1\u7406",permalink:"/zh/docs/end-user/traits/annotations-and-labels"},next:{title:"\u5bb9\u5668\u6ce8\u5165",permalink:"/zh/docs/end-user/traits/sidecar"}},s=[{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]}],p={toc:s};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd ",(0,a.kt)("inlineCode",{parentName:"p"},"service-binding")," \u8fd0\u7ef4\u7279\u5f81\u7684\u7528\u6cd5\uff0c\u5b83\u80fd\u5c06\u6570\u636e\u4ece Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," \u7ed1\u5b9a\u5230\u5e94\u7528\u7a0b\u5e8f\u6240\u5728\u5bb9\u5668\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ENV")," \u4e0a\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u8fd9\u4e2a\u8fd0\u7ef4\u7279\u5f81\u9ed8\u8ba4\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"VelaUX")," \u5904\u9690\u85cf\uff0c\u4f60\u53ef\u4ee5\u5728 CLI \u4fa7\u4f7f\u7528\u3002")),(0,a.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ vela show service-binding\n# Properties\n+-------------+------------------------------------------------+------------------+----------+---------+\n|    NAME     |                  DESCRIPTION                   |       TYPE       | REQUIRED | DEFAULT |\n+-------------+------------------------------------------------+------------------+----------+---------+\n| envMappings | The mapping of environment variables to secret | map[string]{...} | true     |         |\n+-------------+------------------------------------------------+------------------+----------+---------+\n\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a Secret")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create secret generic db-conn-example --from-literal=password=123  --from-literal=endpoint=https://xxx.com --from-literal=username=myname\nsecret/db-conn-example created\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5c06 Secret \u7ed1\u5b9a\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684\u73af\u5883\u53d8\u91cf\u4e2d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: binding-test-comp\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn-example\n                key: password            # 1) \u5982\u679c ENV \u548c Secret \u4e0d\u4e00\u81f4\uff0c\u5219 Secret \u5fc5\u987b\u88ab\u8bbe\u7f6e\n              endpoint:\n                secret: db-conn-example          # 2) \u5982\u679c ENV \u548c Secret \u4e00\u81f4\uff0c\u5219 Secret \u53ef\u4ee5\u7f3a\u7701\u4e0d\u5199\n              username:\n                secret: db-conn-example\n")),(0,a.kt)("p",null,"\u90e8\u7f72\u8fd9\u4e2a YAML\uff0c\u6570\u636e\u7ed1\u5b9a\u7684\u8fd0\u7ef4\u7279\u5f81\u4f1a\u8bfb\u53d6\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"db-conn-example")," \u7684 Kubernetes Secret \u5bf9\u8c61\uff0c\n\u5e76\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"binding-test-comp")," \u7684\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u73af\u5883\u53d8\u91cf ENV \u4e2d\u3002"))}l.isMDXComponent=!0}}]);