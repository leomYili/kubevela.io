(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[15456],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),i=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=i(a),m=n,d=k["".concat(u,".").concat(m)]||k[m]||p[m]||r;return a?l.createElement(d,o(o({ref:t},c),{},{components:a})):l.createElement(d,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var l=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var l=a(67294),n=a(80944),r=a(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,i=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,k=e.groupId,m=e.className,d=(0,n.Z)(),b=d.tabGroupChoices,v=d.setTabGroupChoices,g=(0,l.useState)(c),f=g[0],h=g[1],N=l.Children.toArray(e.children),y=[];if(null!=k){var x=b[k];null!=x&&x!==f&&p.some((function(e){return e.value===x}))&&h(x)}var w=function(e){var t=e.currentTarget,a=y.indexOf(t),l=p[a].value;h(l),null!=k&&(v(k,l),setTimeout((function(){var e,a,l,n,r,o,u,i;(e=t.getBoundingClientRect(),a=e.top,l=e.left,n=e.bottom,r=e.right,o=window,u=o.innerHeight,i=o.innerWidth,a>=0&&r<=i&&n<=u&&l>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},K=function(e){var t,a;switch(e.keyCode){case i:var l=y.indexOf(e.target)+1;a=y[l]||y[0];break;case u:var n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return l.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:K,onFocus:w,onClick:w},a)}))),t?(0,l.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,a){"use strict";var l=(0,a(67294).createContext)(void 0);t.Z=l},80944:function(e,t,a){"use strict";var l=a(67294),n=a(79443);t.Z=function(){var e=(0,l.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},10583:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return k}});var l=a(22122),n=a(19756),r=(a(67294),a(3905)),o=a(41395),s=a(58215),u={title:"\u5feb\u901f\u5b89\u88c5"},i={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"\u5feb\u901f\u5b89\u88c5",description:"\u5982\u679c\u662f\u8981\u5347\u7ea7\u73b0\u6709\u7684 KubeVela\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb \u5347\u7ea7\u6307\u5357\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install.mdx",sourceDirName:".",slug:"/install",permalink:"/zh/docs/next/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1647847533,formattedLastUpdatedAt:"2022/3/21",frontMatter:{title:"\u5feb\u901f\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/next/getting-started/architecture"},next:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/next/quick-start"}},c=[{value:"1. \u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684 Kubernetes \u96c6\u7fa4",id:"1-\u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684-kubernetes-\u96c6\u7fa4",children:[]},{value:"2. \u5b89\u88c5 KubeVela CLI",id:"2-\u5b89\u88c5-kubevela-cli",children:[]},{value:"3. \u5b89\u88c5 KubeVela Core",id:"3-\u5b89\u88c5-kubevela-core",children:[]},{value:"4. \u5b89\u88c5 VelaUX",id:"4-\u5b89\u88c5-velaux",children:[]},{value:"5. \u5378\u8f7d",id:"5-\u5378\u8f7d",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],p={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u8981\u5347\u7ea7\u73b0\u6709\u7684 KubeVela\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#%E5%8D%87%E7%BA%A7"},"\u5347\u7ea7\u6307\u5357"),"\u3002\n\u5982\u679c\u9700\u8981\u79bb\u7ebf\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/system-operation/offline-installation"},"KubeVela \u79bb\u7ebf\u90e8\u7f72\u624b\u518c"),"\u3002")),(0,r.kt)("h2",{id:"1-\u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684-kubernetes-\u96c6\u7fa4"},"1. \u51c6\u5907\u63a7\u5236\u5e73\u9762\u7684 Kubernetes \u96c6\u7fa4"),(0,r.kt)("p",null,"\u786e\u4fdd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u7248\u672c >= v1.19 && < v1.22")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u82e5\u4f60\u5df2\u662f Kubernetes \u7528\u6237\uff0c\u5177\u6709\u6ee1\u8db3\u4e0a\u8ff0\u6761\u4ef6\u7684\u96c6\u7fa4\uff0c\u8bf7\u76f4\u63a5\u8fdb\u5165 ",(0,r.kt)("a",{parentName:"p",href:"#2-%E5%AE%89%E8%A3%85-kubevela-core"},"\u4e0b\u4e00\u8282")," \u3002\u82e5\u4f60\u6ca1\u6709\u6ee1\u8db3\u8981\u6c42\u7684\u96c6\u7fa4\uff0c\u53ef\u901a\u8fc7\u4e0b\u8ff0\u65b9\u5f0f\u5b89\u88c5\u4fbf\u6377\u5b89\u88c5\u3002\u751f\u4ea7\u573a\u666f\u63a8\u8350\u4f7f\u7528\u4e91\u670d\u52a1\u6216 RKE \u5b89\u88c5\u65b9\u5f0f\u3002")),(0,r.kt)("p",null,"KubeVela \u63a7\u5236\u5e73\u9762\u4f9d\u8d56 Kubernetes\u3002\u5b83\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u4f55\u6258\u7ba1 Kubernetes \u4f5c\u4e3a\u5e95\u5ea7\u7684\u4ea7\u54c1\u6216\u81ea\u5efa Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 kind \u6216 minikube \u5728\u672c\u5730\u90e8\u7f72\u3001\u6d4b\u8bd5 KubeVela\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f53\u642d\u5efa\u751f\u4ea7\u73af\u5883\u65f6\uff0c\u8bf7\u5148\u51c6\u5907\u751f\u4ea7\u7528 Kubernetes \u96c6\u7fa4\u6216\u4f7f\u7528\u4e91\u5382\u5546\u63d0\u4f9b\u7684 Kubernetes \u670d\u52a1\u3002")),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"Minikube",value:"minikube"},{label:"K3s",value:"k3s"},{label:"RKE",value:"rke"},{label:"\u4e91\u670d\u52a1",value:"cloudprovider"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"minikube",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ec5\u9002\u7528\u4e8e\u6d4b\u8bd5/\u8bd5\u7528\u573a\u666f\u3002")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"\u5b89\u88c5 minikube")," \u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,r.kt)("p",null,"\u5b89\u88c5 ingress \u542f\u7528\u8def\u7531\u8bbf\u95ee\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),(0,r.kt)(s.Z,{value:"k3s",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"k3s \u9002\u5408\u4ee5\u4e0b\u573a\u666f Edge\u3001IoT\u3001Development\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 k3s \u4f5c\u4e3a KubeVela \u7ba1\u63a7\u5e73\u9762\u7684\u7684\u8f7b\u91cf\u7ea7\u5e95\u5ea7\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 K3s")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"K3s \u53ea\u652f\u6301\u5b89\u88c5\u5728\u5177\u6709 systemd \u6216\u8005 openrc \u670d\u52a1\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"K3s \u5feb\u901f\u5f00\u59cb\u6587\u6863")," \u83b7\u53d6\u66f4\u591a\u652f\u6301\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sfL https://get.k3s.io | sh -\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236 kubeconfig \u6587\u4ef6\u5230\u9ed8\u8ba4\u76ee\u5f55\u4e0b\u3002\u5982\u679c\u4f60\u9700\u8981\u5728\u672c\u5730\u64cd\u4f5c\u540e\u7eed\u5b89\u88c5\uff0c\u8bf7\u5c06\u5176\u590d\u5236\u5230\u672c\u5730\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make ~/.kube\ncp /etc/rancher/k3s/k3s.yaml ~/.kube/config\n"))),(0,r.kt)(s.Z,{value:"rke",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u524d\u8bf7\u51c6\u5907 1-N \u53f0\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\uff0c\u8be5\u5b89\u88c5\u6a21\u5f0f\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,r.kt)("b",null,"\uff081\uff09\u5b89\u88c5 Docker (\u53ef\u9009)"),(0,r.kt)("p",null,"RKE \u7684\u5b89\u88c5\u4f9d\u8d56\u4e8e Docker, \u8bf7\u5728\u6240\u6709\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\u5b89\u88c5 Docker \u670d\u52a1\uff0c\u5982\u672a\u5b89\u88c5\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker \u5b89\u88c5\u6307\u5357"),"."),(0,r.kt)("b",null,"\uff082\uff09\u5b89\u88c5 RKE \u547d\u4ee4\u884c"),(0,r.kt)("p",null,"\u4e0b\u8f7d RKE \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"\u524d\u5f80 RKE Release \u9875\u9762"),"."),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7f51\u7edc\u53d7\u9650\u65e0\u6cd5\u4e0b\u8f7d\uff08\u7279\u522b\u662f\u4e2d\u56fd\u7528\u6237\uff09\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u4e0b\u8ff0\u65b9\u5f0f\u5b89\u88c5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://static.kubevela.net/binary/rke/rke_linux-amd64 -O /usr/bin/rke\nchmod +x /usr/bin/rke\n")),(0,r.kt)("b",null,"\uff083\uff09\u5b89\u88c5 RKE \u96c6\u7fa4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u5207\u6362\u5230\u975e root \u4e14\u6709\u6743\u9650\u64cd\u4f5c docker \u7684\u7528\u6237\u4e0b\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 RKE \u96c6\u7fa4\uff0c\u4f8b\u5982: docker")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"  mkdir ~/rkeinit && cd ~/rkeinit\n  # \u5f15\u5bfc\u5f0f\u914d\u7f6e\uff0c\u53ef\u53c2\u8003 [RKE\u96c6\u7fa4\u914d\u7f6e\u8bf4\u660e\u6587\u6863](https://rancher.com/docs/rke/latest/en/example-yamls/)\u3002\n  rke config\n  # \u786e\u8ba4\u914d\u7f6e\u5b8c\u6210\u540e\u5373\u53ef\u5b89\u88c5\u96c6\u7fa4\uff0c\u5982\u6709\u5f02\u5e38\u8bf7\u53c2\u8003 RKE \u76f8\u5173\u6587\u6863\u3002\n  rke up\n  # \u5b89\u88c5 Kubectl \u547d\u4ee4\u884c\u5de5\u5177\n  mkdir ~/.kube\n  cp kube_config_cluster.yml ~/.kube/config\n  docker cp kubelet:/usr/local/bin/kubectl /usr/local/bin/kubectl\n"))),(0,r.kt)(s.Z,{value:"kind",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ec5\u9002\u7528\u4e8e\u6d4b\u8bd5/\u8bd5\u7528\u573a\u666f\u3002")),(0,r.kt)("p",null,"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"Kind \u547d\u4ee4\u884c\u5de5\u5177"),"\u540e\uff0c\u521b\u5efa\u96c6\u7fa4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,r.kt)("p",null,"\u5b89\u88c5 ingress \u542f\u7528\u8def\u7531\u8bbf\u95ee\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n"))),(0,r.kt)(s.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 ",(0,r.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK \u670d\u52a1")),(0,r.kt)("li",{parentName:"ul"},"AWS ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS \u670d\u52a1")),(0,r.kt)("li",{parentName:"ul"},"Azure ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS \u670d\u52a1")),(0,r.kt)("li",{parentName:"ul"},"Google ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE \u670d\u52a1"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u8bf7\u786e\u4fdd\u4e91\u5382\u5546\u7684\u96c6\u7fa4",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"\u5df2\u5b89\u88c5\u6216\u542f\u7528 ingress-nginx")," \u4ee5\u4fdd\u8bc1\u8def\u7531\u8bbf\u95ee\u529f\u80fd\u53ef\u6b63\u5e38\u4f7f\u7528\u3002")))),(0,r.kt)("h2",{id:"2-\u5b89\u88c5-kubevela-cli"},"2. \u5b89\u88c5 KubeVela CLI"),(0,r.kt)("p",null,"KubeVela CLI \u63d0\u4f9b\u4e86\u547d\u4ee4\u884c\u5de5\u5177\u6765\u4fbf\u6377\u7684\u5e94\u7528\u7ec8\u7aef\u7ba1\u7406\u80fd\u529b\u3002"),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," MacOS/Linux ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash -s 1.2.4\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ec5\u652f\u6301\u5b89\u88c5\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,r.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,r.kt)("p",null,"\u5148\u66f4\u65b0\u4e0b\u4f60\u7684 brew\uff0c\u8bf7\u6ce8\u610f brew \u9014\u5f84\u4ec5\u652f\u6301\u5b89\u88c5\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,r.kt)("p",null,"\u7d27\u63a5\u7740\u5b89\u88c5 KubeVela CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,r.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"\u53d1\u5e03\u65e5\u5fd7"),"\u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u538b\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u4e14\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH")," \u4e2d\u914d\u597d\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u641e\u5b9a\u5566\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"\u5b89\u88c5\u63d0\u793a"),":\n\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Mac \u7cfb\u7edf\uff0c\u5b83\u4f1a\u5f39\u51fa \u201cvela\u201d \u65e0\u6cd5\u6253\u5f00\u7684\u8b66\u544a\uff0c\u56e0\u4e3a\u6765\u81ea\u5f00\u53d1\u8005\u7684\u5305\u65e0\u6cd5\u9a8c\u8bc1\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"MacOS \u5bf9\u80fd\u591f\u5728\u7cfb\u7edf\u4e2d\u8fd0\u884c\u7684\u8f6f\u4ef6\uff0c\u91c7\u53d6\u4e86\u66f4\u52a0\u4e25\u683c\u7684\u9650\u5236\u3002\u4f60\u6682\u65f6\u53ef\u4ee5\u901a\u8fc7\u6253\u5f00 'System Preference' -> 'Security & Privacy' -> General \u5e76\u70b9\u51fb 'Allow Anyway' \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")))),(0,r.kt)("h2",{id:"3-\u5b89\u88c5-kubevela-core"},"3. \u5b89\u88c5 KubeVela Core"),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"vela",values:[{label:"Default",value:"vela"},{label:"Helm",value:"helm"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"vela",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Vela CLI \u7248\u672c\u9700\u8981 >=1.2.3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela install\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null,"\u6210\u529f\u5b89\u88c5\u540e\u9884\u671f\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'...\nWatching for changes to Job kubevela-vela-core-cluster-gateway-tls-secret-patch with timeout of 18m0s\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: ADDED\nkubevela-vela-core-cluster-gateway-tls-secret-patch: Jobs active: 0, jobs failed: 0, jobs succeeded: 0\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: MODIFIED\nkubevela-vela-core-cluster-gateway-tls-secret-patch: Jobs active: 1, jobs failed: 0, jobs succeeded: 0\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: MODIFIED\nkubevela-vela-core-cluster-gateway-tls-secret-patch: Jobs active: 1, jobs failed: 0, jobs succeeded: 0\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: MODIFIED\nStarting delete for "kubevela-vela-core-admission" ServiceAccount\nStarting delete for "kubevela-vela-core-admission" ClusterRole\nStarting delete for "kubevela-vela-core-admission" ClusterRoleBinding\nStarting delete for "kubevela-vela-core-admission" Role\nStarting delete for "kubevela-vela-core-admission" RoleBinding\nStarting delete for "kubevela-vela-core-admission-patch" Job\nStarting delete for "kubevela-vela-core-cluster-gateway-admission" ServiceAccount\nStarting delete for "kubevela-vela-core-cluster-gateway-admission" Role\nStarting delete for "kubevela-vela-core-cluster-gateway-admission" RoleBinding\nStarting delete for "kubevela-vela-core-cluster-gateway-tls-secret-patch" Job\n\nKubeVela control plane has been successfully set up on your cluster.\nIf you want to enable dashboard, please run "vela addon enable velaux"\n')))),(0,r.kt)(s.Z,{value:"helm",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5982\u679c\u4f60\u662f Helm \u7528\u6237\uff0c\u4f60\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 Helm \u5b89\u88c5 KubeVela Core:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"helm \u7248\u672c >= 3.2.0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\nhelm install --create-namespace -n vela-system kubevela kubevela/vela-core --version 1.2.4 --wait\n")))),(0,r.kt)("h2",{id:"4-\u5b89\u88c5-velaux"},"4. \u5b89\u88c5 VelaUX"),(0,r.kt)("p",null,"VelaUX \u662f\u4e00\u4e2a\u53ef\u89c6\u5316\u64cd\u4f5c\u754c\u9762\uff0c\u5305\u62ec UI+API \u670d\u52a1\uff0c\u5b83\u9002\u7528\u4e8e\u5927\u591a\u6570\u5382\u5546\u5f00\u7bb1\u5373\u7528\u7684\u83b7\u53d6\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u80fd\u529b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'vela addon enable velaux serviceType=NodePort\n\n# \u83b7\u53d6\u6620\u5c04\u7684\u7aef\u53e3\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u8bbf\u95ee VelaUX\nkubectl get service velaux -n vela-system -o jsonpath="{.spec.ports[0].nodePort}"\n')),(0,r.kt)("p",null,"\u56fd\u5185\u73af\u5883\u53ef\u4f7f\u7528\u4ee5\u4e0b\u5b89\u88c5\u65b9\u5f0f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela addon enable velaux serviceType=NodePort repo=acr.kubevela.net\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"serviceType")," \u914d\u7f6e velaux \u670d\u52a1\u7684\u8bbf\u95ee\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u4e91\u670d\u52a1\u96c6\u7fa4\uff0c\u8bf7\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceType=LoadBalancer"),"\uff0c\u542f\u7528\u5b8c\u6210\u540e\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\u8bbf\u95ee\u5730\u5740:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'vela addon enable velaux serviceType=LoadBalancer repo=acr.kubevela.net\n\nkubectl get service velaux -n vela-system -o jsonpath="{.status.loadBalancer.ingress[0].ip}"\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 Nginx Ingress Controller\uff0c\u800c\u4e14\u4f60\u5177\u6709\u53ef\u7528\u7684\u57df\u540d\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u90e8\u7f72 VelaUX(\u8bf7\u4f7f\u7528\u771f\u5b9e\u57df\u540d\u66ff\u6362 example.doamin.com):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux repo=acr.kubevela.net domain=example.doamin.com\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u8bf7\u8003\u8651\u542f\u7528 MongoDB \u4f5c\u4e3a VelaUX \u7684\u6570\u636e\u5b58\u50a8\uff0c\u4f7f\u7528 MongoDB \u4f5c\u4e3a\u6570\u636e\u5e93\u7684\u914d\u7f6e\u65b9\u5f0f\u53c2\u8003\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux dbType=mongodb database=kubevela dbURL=mongodb://<Mongo-Host>:<Mongo-Port>\n")),(0,r.kt)("h2",{id:"5-\u5378\u8f7d"},"5. \u5378\u8f7d"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8bd5\u7528\u5b8c\u6210\u540e\u9700\u8981\u5378\u8f7d KubeVela\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u64cd\u4f5c\u8fdb\u884c\uff1a"),(0,r.kt)("p",null,"\u5728\u5378\u8f7d\u4e4b\u524d\uff0c\u8bf7\u5148\u5c06\u6240\u6709\u5e94\u7528\u5220\u9664\uff0c\u6240\u6709 addon \u7981\u7528\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d VelaUX")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela addon disable velaux\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d KubeVela Core")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela uninstall\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5378\u8f7d KubeVela \u5b89\u88c5\u7684 CRD")),(0,r.kt)("p",null,"\u5220\u9664\u524d\uff0c\u9700\u8981\u786e\u4fdd\u6240\u6709\u5bf9\u5e94\u7684 CR \u8d44\u6e90\u5df2\u5220\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get crd |grep oam | awk '{print $1}' | xargs kubectl delete crd\n")),(0,r.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6bd5 KubeVela\uff0c\u5f00\u59cb ",(0,r.kt)("a",{parentName:"li",href:"./quick-start"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"),"\u3002")))}k.isMDXComponent=!0},86010:function(e,t,a){"use strict";function l(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=l(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);