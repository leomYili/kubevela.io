(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3959],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34275:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s={title:"Storage"},i={unversionedId:"end-user/traits/storage",id:"end-user/traits/storage",isDocsHomePage:!1,title:"Storage",description:"The storage trait allows you to manage storages for the component.",source:"@site/docs/end-user/traits/storage.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/storage",permalink:"/docs/next/end-user/traits/storage",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/storage.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642586648,formattedLastUpdatedAt:"1/19/2022",frontMatter:{title:"Storage"},sidebar:"docs",previous:{title:"Gateway for Public Access",permalink:"/docs/next/end-user/traits/ingress"},next:{title:"Rollout",permalink:"/docs/next/end-user/traits/rollout"}},u=[{value:"How to use",id:"how-to-use",children:[]},{value:"Specification",id:"specification",children:[]}],l={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"storage")," trait allows you to manage storages for the component."),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"storage")," can help us create and bind storages like ",(0,a.kt)("inlineCode",{parentName:"p"},"pvc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"emptyDir"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"secret"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"configMap")," for our component. For ",(0,a.kt)("inlineCode",{parentName:"p"},"secret")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"configMap")," type storage, we can also bind it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"env"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you don't want to create the storages automatically, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"mountOnly")," to true.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: storage-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        ports:\n          - port: 8000\n      traits:\n        - type: storage\n          properties:\n            # PVC type storage\n            pvc:\n              - name: test1\n                mountPath: /test/mount/pvc\n            # EmptyDir type storage\n            emptyDir:\n              - name: test1\n                mountPath: /test/mount/emptydir\n            # ConfigMap type storage\n            configMap:\n              - name: test1\n                mountPath: /test/mount/cm\n                # Mount ConfigMap to Env\n                mountToEnv:\n                  envName: TEST_ENV\n                  configMapKey: key1\n                data:\n                  key1: value1\n                  key2: value2\n            # Secret type storage\n            secret:\n              - name: test1\n                mountPath: /test/mount/secret\n                # Mount Secret to Env\n                mountToEnv:\n                  envName: TEST_SECRET\n                  secretKey: key1\n                data:\n                  key1: dmFsdWUx\n                  key2: dmFsdWUy\n\n")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ vela show storage\n# Properties\n\n## pvc\n+------------------+-------------+---------------------------------+----------+------------+\n|       NAME       | DESCRIPTION |              TYPE               | REQUIRED |  DEFAULT   |\n+------------------+-------------+---------------------------------+----------+------------+\n| name             |             | string                          | true     |            |\n| volumeMode       |             | string                          | true     | Filesystem |\n| mountPath        |             | string                          | true     |            |\n| mountOnly        |             | bool                            | true     | false      |\n| accessModes      |             | [...]                           | true     |            |\n| volumeName       |             | string                          | false    |            |\n| storageClassName |             | string                          | false    |            |\n| resources        |             | [resources](#resources)         | false    |            |\n| dataSourceRef    |             | [dataSourceRef](#dataSourceRef) | false    |            |\n| dataSource       |             | [dataSource](#dataSource)       | false    |            |\n| selector         |             | [selector](#selector)           | false    |            |\n+------------------+-------------+---------------------------------+----------+------------+\n\n...\n\n## emptyDir\n+-----------+-------------+--------+----------+---------+\n|   NAME    | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-------------+--------+----------+---------+\n| name      |             | string | true     |         |\n| medium    |             | string | true     | empty   |\n| mountPath |             | string | true     |         |\n+-----------+-------------+--------+----------+---------+\n\n## secret\n+-------------+-------------+--------------------------------------------------------+----------+---------+\n|    NAME     | DESCRIPTION |                          TYPE                          | REQUIRED | DEFAULT |\n+-------------+-------------+--------------------------------------------------------+----------+---------+\n| name        |             | string                                                 | true     |         |\n| defaultMode |             | int                                                    | true     |     420 |\n| items       |             | [[]items](#items)                                      | false    |         |\n| mountPath   |             | string                                                 | true     |         |\n| mountToEnv  |             | [mountToEnv](#mountToEnv)                              | false    |         |\n| mountOnly   |             | bool                                                   | true     | false   |\n| data        |             | map[string](null|bool|string|bytes|{...}|[...]|number) | false    |         |\n| stringData  |             | map[string](null|bool|string|bytes|{...}|[...]|number) | false    |         |\n| readOnly    |             | bool                                                   | true     | false   |\n+-------------+-------------+--------------------------------------------------------+----------+---------+\n\n...\n\n## configMap\n+-------------+-------------+--------------------------------------------------------+----------+---------+\n|    NAME     | DESCRIPTION |                          TYPE                          | REQUIRED | DEFAULT |\n+-------------+-------------+--------------------------------------------------------+----------+---------+\n| name        |             | string                                                 | true     |         |\n| defaultMode |             | int                                                    | true     |     420 |\n| items       |             | [[]items](#items)                                      | false    |         |\n| mountPath   |             | string                                                 | true     |         |\n| mountToEnv  |             | [mountToEnv](#mountToEnv)                              | false    |         |\n| mountOnly   |             | bool                                                   | true     | false   |\n| data        |             | map[string](null|bool|string|bytes|{...}|[...]|number) | false    |         |\n| readOnly    |             | bool                                                   | true     | false   |\n+-------------+-------------+--------------------------------------------------------+----------+---------+\n\n...\n\n")))}c.isMDXComponent=!0}}]);