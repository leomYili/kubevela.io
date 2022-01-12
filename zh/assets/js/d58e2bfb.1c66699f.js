(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[70450],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,f=u["".concat(c,".").concat(y)]||u[y]||s[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11381:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"vela addon registry add"},d={unversionedId:"cli/vela_addon_registry_add",id:"cli/vela_addon_registry_add",isDocsHomePage:!1,title:"vela addon registry add",description:"Add an addon registry.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela_addon_registry_add.md",sourceDirName:"cli",slug:"/cli/vela_addon_registry_add",permalink:"/zh/docs/next/cli/vela_addon_registry_add",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_addon_registry_add.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641994039,formattedLastUpdatedAt:"2022/1/12",frontMatter:{title:"vela addon registry add"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],l={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add an addon registry."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Add an addon registry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela addon registry add [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"vela addon registry add <my-registry-name> --type OSS --endpoint=<URL> --bucket=<bukect-name> or vela addon registry add my-repo --type git --endpoint=<URL> --path=<OSS-ptah> --gitToken=<git token>"\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --bucket string     specify the OSS bucket name\n      --endpoint string   specify the addon registry endpoint\n      --gitToken string   specify the github repo token\n  -h, --help              help for add\n      --path string       specify the addon registry OSS path\n      --type string       specify the addon registry type\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_addon_registry"},"vela addon registry"),"\t - Manage addon registry.")),(0,o.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 12-Jan-2022, refer to ",(0,o.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}p.isMDXComponent=!0}}]);