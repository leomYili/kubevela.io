(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2044],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59725:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Make Addon and Build Registry"},d={unversionedId:"platform-engineers/addon/intro",id:"platform-engineers/addon/intro",isDocsHomePage:!1,title:"Make Addon and Build Registry",description:"Addon can be used to manage and extend KubeVela platform capabilities.",source:"@site/docs/platform-engineers/addon/intro.md",sourceDirName:"platform-engineers/addon",slug:"/platform-engineers/addon/intro",permalink:"/docs/next/platform-engineers/addon/intro",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/addon/intro.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641994039,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"Make Addon and Build Registry"},sidebar:"docs",previous:{title:"CUE Advanced",permalink:"/docs/next/platform-engineers/cue/advanced"},next:{title:"CUE Components",permalink:"/docs/next/platform-engineers/components/custom-component"}},l=[{value:"Addon Registry",id:"addon-registry",children:[]},{value:"Addon Format",id:"addon-format",children:[]}],s={toc:l};function c(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Addon can be used to manage and extend KubeVela platform capabilities.\nUsers and install/uninstall addons on KubeVela via UI/CLI interfaces.\nAddons can be stored and discovered via addon registries."),(0,o.kt)("p",null,"By default, KubeVela community maintains an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons"},"official addon registry")," with some official addons.\nUsers can add their own addons and registries."),(0,o.kt)("h2",{id:"addon-registry"},"Addon Registry"),(0,o.kt)("p",null,"Addon registry is a place to upload and store addons, or discover and download addons.\nAn addon registry is either a Git repo or an Object Storage bucket by now.\nYou can see what a registry looks like by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons"},"the official registry"),"."),(0,o.kt)("p",null,"You can manage addon registries via UI/CLI. Here is how to add a registry on UI:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(87278).Z})),(0,o.kt)("h2",{id:"addon-format"},"Addon Format"),(0,o.kt)("p",null,"Each addon contains X-Definitions, application controller and component resource templates, and its self description.\nYou can see what an addon looks like by checking out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/experimental/addons/example"},"this example addon"),"."),(0,o.kt)("p",null,"An addon must obey the following directory structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"template.yaml"),": contains the basic app, you can add some component and workflow to meet your requirements. Other files\nin ",(0,o.kt)("inlineCode",{parentName:"li"},"resources/")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"definitions/")," will be rendered as Components and appended in ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata.yaml"),": contains addon metadata information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"definitions/"),": contains the X-Definition yaml/cue files. These file will be rendered as KubeVela Component in ",(0,o.kt)("inlineCode",{parentName:"li"},"template.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resources/"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parameter.cue")," to expose parameters. It will be converted to JSON schema and rendered in UI forms."),(0,o.kt)("li",{parentName:"ul"},"All other files will be rendered as KubeVela Components. It can be one of the two types:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"YAML file that contains only one resource. This will be rendered as a ",(0,o.kt)("inlineCode",{parentName:"li"},"raw")," component"),(0,o.kt)("li",{parentName:"ul"},"CUE template file that can read user input as ",(0,o.kt)("inlineCode",{parentName:"li"},"parameter.XXX")," as defined ",(0,o.kt)("inlineCode",{parentName:"li"},"parameter.cue"),".\nBasically the CUE template file will be combined with ",(0,o.kt)("inlineCode",{parentName:"li"},"parameter.cue")," to render a resource.\n",(0,o.kt)("strong",{parentName:"li"},"You can specify the type and trait in this format"))))))),(0,o.kt)("p",null,"Once an addon is uploaded to the registry, you can manage addons via UI/CLI. Here is how it looks lik on UI:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(98422).Z})))}c.isMDXComponent=!0},87278:function(e,t,n){"use strict";t.Z=n.p+"assets/images/addon-registry-b590437638d612067b1d27994df29ade.jpg"},98422:function(e,t,n){"use strict";t.Z=n.p+"assets/images/addon-9084e6c5d523fd7e7ab1e2d7ee57c70a.jpg"}}]);