(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[97682],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84826:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),c={title:"vela cluster detach"},i={unversionedId:"cli/vela_cluster_detach",id:"cli/vela_cluster_detach",isDocsHomePage:!1,title:"vela cluster detach",description:"detach managed cluster.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela_cluster_detach.md",sourceDirName:"cli",slug:"/cli/vela_cluster_detach",permalink:"/zh/docs/next/cli/vela_cluster_detach",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_cluster_detach.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1644459439,formattedLastUpdatedAt:"2022/2/10",frontMatter:{title:"vela cluster detach"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],u={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"detach managed cluster."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"detach managed cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela cluster detach [CLUSTER_NAME] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help                     help for detach\n  -p, --kubeconfig-path string   Specify the kubeconfig path of managed cluster. If you use ocm to manage your cluster, you must set the kubeconfig-path.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -y, --yes   Assume yes for all user prompts\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_cluster"},"vela cluster"),"\t - Manage Kubernetes Clusters")),(0,o.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-9-feb-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 9-Feb-2022, refer to ",(0,o.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);