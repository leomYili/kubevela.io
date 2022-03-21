(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1824],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=l,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},21991:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),o={},i={unversionedId:"platform-engineers/system-operation/offline-installation",id:"version-v1.2/platform-engineers/system-operation/offline-installation",isDocsHomePage:!1,title:"KubeVela Offline Installation Guide",description:"KubeVela offline installation includes the installation of KubeVela core and KubeVela Addon.",source:"@site/versioned_docs/version-v1.2/platform-engineers/system-operation/offline-installation.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/offline-installation",permalink:"/docs/platform-engineers/system-operation/offline-installation",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/system-operation/offline-installation.md",version:"v1.2",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1647847533,formattedLastUpdatedAt:"3/21/2022",frontMatter:{}},c=[{value:"KubeVela Core offline installation",id:"kubevela-core-offline-installation",children:[{value:"KubeVela chart",id:"kubevela-chart",children:[]}]},{value:"KubeVela Addon Offline installation",id:"kubevela-addon-offline-installation",children:[]}],s={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"KubeVela offline installation includes the installation of KubeVela core and KubeVela Addon."),(0,r.kt)("h2",{id:"kubevela-core-offline-installation"},"KubeVela Core offline installation"),(0,r.kt)("h3",{id:"kubevela-chart"},"KubeVela chart"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download Helm Chart package of vela-core")),(0,r.kt)("p",null,"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"vela-core")," Helm Chart package per ",(0,r.kt)("a",{parentName:"p",href:"../../install"},"Install KubeVela Core")," and unarchive it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify images which can be configurable")),(0,r.kt)("p",null,"Pull the following images and push them into an image repository in the dedicated environment. Overwrite each image's\ninformation with ",(0,r.kt)("inlineCode",{parentName:"p"},"-set")," when installing by ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$  kubevela git:(master) grep -r repository charts/vela-core/values.yaml -A 1\ncharts/vela-core/values.yaml:  repository: oamdev/vela-core\ncharts/vela-core/values.yaml-  tag: latest\n--\ncharts/vela-core/values.yaml:      repository: oamdev/kube-webhook-certgen\ncharts/vela-core/values.yaml-      tag: v2.3\n--\ncharts/vela-core/values.yaml:      repository: oamdev/cluster-gateway\ncharts/vela-core/values.yaml-      tag: v1.1.7\n--\ncharts/vela-core/values.yaml:    repository: oamdev/hello-world\ncharts/vela-core/values.yaml-    tag: v1\n--\ncharts/vela-core/values.yaml:    repository: oamdev/alpine-k8s\ncharts/vela-core/values.yaml-    tag: 1.18.2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify images which could not be configurable")),(0,r.kt)("p",null,"The value ",(0,r.kt)("inlineCode",{parentName:"p"},"enableFluxcdAddon")," indicates whether to enable Addon ",(0,r.kt)("inlineCode",{parentName:"p"},"FluxCD")," by default. If it is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the following images\nhave to be pulled and pushed into an image repository in the dedicated environment in advance. Overwrite each image's information\nin the following YAML files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$  kubevela git:(master) grep -r -i image: charts/vela-core/templates/addon\ncharts/vela-core/templates/addon/fluxcd.yaml:                      image: fluxcd/helm-controller:v0.11.1\ncharts/vela-core/templates/addon/fluxcd.yaml:                      image: fluxcd/image-automation-controller:v0.14.0\ncharts/vela-core/templates/addon/fluxcd.yaml:                      image: fluxcd/image-reflector-controller:v0.11.0\ncharts/vela-core/templates/addon/fluxcd.yaml:                      image: fluxcd/kustomize-controller:v0.13.1\ncharts/vela-core/templates/addon/fluxcd.yaml:                      image: fluxcd/source-controller:v0.15.3\n\n\n$  kubevela git:(master) grep -r -i image: charts/vela-core  --exclude-dir=charts/vela-core/templates/addon | grep -v .Values\ncharts/vela-core/templates/defwithtemplate/nocalhost.yaml:                              image: "nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:latest"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Repackage vela-core Helm Chart")),(0,r.kt)("p",null,"Repackage the Helm Chart package from the modified chart. Install it directly or install it from a dedicated Helm Chart\nrepository after you pushed the package into the repository."),(0,r.kt)("h2",{id:"kubevela-addon-offline-installation"},"KubeVela Addon Offline installation"))}u.isMDXComponent=!0}}]);