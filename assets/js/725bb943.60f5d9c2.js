(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[27405],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84051:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"vela def apply"},i={unversionedId:"cli/vela_def_apply",id:"cli/vela_def_apply",isDocsHomePage:!1,title:"vela def apply",description:"Apply X-Definition.",source:"@site/docs/cli/vela_def_apply.md",sourceDirName:"cli",slug:"/cli/vela_def_apply",permalink:"/docs/next/cli/vela_def_apply",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_def_apply.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641994039,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"vela def apply"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Apply X-Definition."),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Apply X-Definition from local storage to kubernetes cluster. It will apply file to vela-system namespace by default."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela def apply DEFINITION.cue [flags]\n")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Command below will apply the local my-webservice.cue file to kubernetes vela-system namespace\n> vela def apply my-webservice.cue\n# Command below will apply the ./defs/my-trait.cue file to kubernetes default namespace\n> vela def apply ./defs/my-trait.cue --namespace default# Command below will convert the ./defs/my-trait.cue file to kubernetes CRD object and print it without applying it to kubernetes\n> vela def apply ./defs/my-trait.cue --dry-run\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --dry-run            only build definition from CUE into CRB object without applying it to kubernetes clusters\n  -h, --help               help for apply\n  -n, --namespace string   Specify which namespace to apply. (default "vela-system")\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage Definitions")),(0,l.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,l.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,l.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 12-Jan-2022, refer to ",(0,l.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}u.isMDXComponent=!0}}]);