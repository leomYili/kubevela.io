(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[62479],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,l(l({ref:t},s),{},{components:n})):o.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44380:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),l={title:"vela completion bash"},i={unversionedId:"cli/vela_completion_bash",id:"cli/vela_completion_bash",isDocsHomePage:!1,title:"vela completion bash",description:"generate autocompletions script for bash",source:"@site/docs/cli/vela_completion_bash.md",sourceDirName:"cli",slug:"/cli/vela_completion_bash",permalink:"/docs/next/cli/vela_completion_bash",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_completion_bash.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641994039,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"vela completion bash"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"generate autocompletions script for bash"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Generate the autocompletion script for Vela for the bash shell."),(0,a.kt)("p",null,"To load completions in your current shell session:\n$ source <(vela completion bash)"),(0,a.kt)("p",null,"To load completions for every new session, execute once:\nLinux:\n$ vela completion bash > /etc/bash_completion.d/vela\nMacOS:\n$ vela completion bash > /usr/local/etc/bash_completion.d/vela"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela completion bash\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for bash\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"vela_completion"},"vela completion"),"\t - Output shell completion code for the specified shell (bash or zsh)")),(0,a.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,a.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 12-Jan-2022, refer to ",(0,a.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);