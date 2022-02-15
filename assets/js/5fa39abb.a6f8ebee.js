(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[33386],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return t?o.createElement(f,d(d({ref:r},u),{},{components:t})):o.createElement(f,d({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var c=2;c<a;c++)d[c]=t[c];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1330:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return d},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var o=t(22122),n=t(19756),a=(t(67294),t(3905)),d={title:"Extend a Terraform Addon"},i={unversionedId:"platform-engineers/addon/terraform",id:"version-v1.2/platform-engineers/addon/terraform",isDocsHomePage:!1,title:"Extend a Terraform Addon",description:"Terraform Controller is the core controller to provision and manage",source:"@site/versioned_docs/version-v1.2/platform-engineers/addon/terraform.md",sourceDirName:"platform-engineers/addon",slug:"/platform-engineers/addon/terraform",permalink:"/docs/platform-engineers/addon/terraform",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/addon/terraform.md",version:"v1.2",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1644927114,formattedLastUpdatedAt:"2/15/2022",frontMatter:{title:"Extend a Terraform Addon"},sidebar:"version-v1.2/docs",previous:{title:"Customize Addon",permalink:"/docs/platform-engineers/addon/intro"},next:{title:"CUE Components",permalink:"/docs/platform-engineers/components/custom-component"}},l=[{value:"Choose a Cloud Provider",id:"choose-a-cloud-provider",children:[]},{value:"Prepare metadata for the Cloud Provider",id:"prepare-metadata-for-the-cloud-provider",children:[]},{value:"Generate a Terraform Addon",id:"generate-a-terraform-addon",children:[]},{value:"Verify the Terraform Addon",id:"verify-the-terraform-addon",children:[]},{value:"Submit the Terraform Addon",id:"submit-the-terraform-addon",children:[]},{value:"Contribute documentation",id:"contribute-documentation",children:[]}],c={toc:l};function u(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller"},"Terraform Controller")," is the core controller to provision and manage\ncloud resources for KubeVela. It has supported ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller#supported-cloud-providers"},"some cloud providers"),", including AWS, Azure, GCP, Alibaba Cloud,\nTencent Cloud, etc. But only ",(0,a.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/tutorials/consume-cloud-services#enabling-cloud-vendor-addons"},"a few")," has been supported as Terraform Addons in KubeVela."),(0,a.kt)("p",null,"This guide will show you how to extend a Terraform Addon to support your cloud provider."),(0,a.kt)("h2",{id:"choose-a-cloud-provider"},"Choose a Cloud Provider"),(0,a.kt)("p",null,"If the cloud provider you want to support is none of supported cloud providers in Terraform Controller, you have to support it first.\nIf it has been supported by Terraform Controller, you can continue to extend the addon."),(0,a.kt)("h2",{id:"prepare-metadata-for-the-cloud-provider"},"Prepare metadata for the Cloud Provider"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone oam-dev/catalog")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/oam-dev/catalog.git\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepare a metadata file")),(0,a.kt)("p",null,"Edit the metadata file ",(0,a.kt)("inlineCode",{parentName:"p"},"hack/addons/terraform/terraform-provider-scaffold/metadata.yaml")," for your cloud provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n\n# -------------------------------------Configuration Metadata for a Terraform Addon-------------------------------------\n# provider short name\nshortCloudName: tencent\n\n# The Cloud name of the provider\ncompleteCloudName: Tencent Cloud\n\n# When enabling a Terraform provider, these properties need to set for authentication. For Tencent Cloud,\n# name: Environment variable name when authenticating Terraform, like https://github.com/oam-dev/terraform-controller/blob/master/controllers/provider/credentials.go#L59\n# secretKey: Secret key when storing authentication information in a Kubernetes, like https://github.com/oam-dev/terraform-controller/blob/master/controllers/provider/credentials.go#L109.\ncloudProperties:\n  - name: TENCENTCLOUD_SECRET_ID\n    secretKey: secretID\n    description: Get TENCENTCLOUD_SECRET_ID per this guide https://cloud.tencent.com/document/product/1213/67093\n  - name: TENCENTCLOUD_SECRET_KEY\n    secretKey: secretKey\n    description: Get TENCENTCLOUD_SECRET_KEY per this guide https://cloud.tencent.com/document/product/1213/67093\n    # If one property is region, please set `isRegion` to true\n  - name: TENCENTCLOUD_REGION\n    description: Get TENCENTCLOUD_REGION by picking one RegionId from Tencent Cloud region list https://cloud.tencent.com/document/api/1140/40509#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8\n    isRegion: true\n")),(0,a.kt)("h2",{id:"generate-a-terraform-addon"},"Generate a Terraform Addon"),(0,a.kt)("p",null,"Generate a Terraform Addon for your cloud provider. The generated addon code will be stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"addons/terraform-tencent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ make terraform-addon-gen\ngo run hack/addons/terraform/gen.go hack/addons/terraform/provider-sample.yaml\nGenerating addon for provider tencent in addons/terraform-tencent\nRendering hack/addons/terraform/terraform-provider-skaffold/metadata.yaml\nRendering hack/addons/terraform/terraform-provider-skaffold/readme.md\nRendering hack/addons/terraform/terraform-provider-skaffold/resources/account-creds.cue\nRendering hack/addons/terraform/terraform-provider-skaffold/resources/parameter.cue\nRendering hack/addons/terraform/terraform-provider-skaffold/resources/provider.cue\nRendering hack/addons/terraform/terraform-provider-skaffold/template.yaml\n\n$ ls addons/terraform-tencent\ndefinitions   metadata.yaml readme.md     resources     template.yaml\n")),(0,a.kt)("h2",{id:"verify-the-terraform-addon"},"Verify the Terraform Addon"),(0,a.kt)("p",null,"Enable the addon Check whether a ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," is created whose name is the same as your cloud provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ vela addon enable ./addons/terraform-tencent TENCENTCLOUD_SECRET_ID=xxx TENCENTCLOUD_SECRET_KEY=yyy TENCENTCLOUD_REGION=ap-chengdu\nI0207 10:15:14.005269   32481 apply.go:106] "patching object" name="addon-terraform-tencent" resource="core.oam.dev/v1beta1, Kind=Application"\nI0207 10:15:14.138645   32481 apply.go:106] "patching object" name="addon-secret-terraform-tencent" resource="/v1, Kind=Secret"\nAddon: terraform-tencent enabled Successfully.\n\n$ kubectl get provider\nNAME      STATE   AGE\ntencent   ready   1d\n')),(0,a.kt)("p",null,"You are encouraged to further verify the provider by ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/consume-cloud-services"},"provision a cloud resource of your cloud provider"),"."),(0,a.kt)("h2",{id:"submit-the-terraform-addon"},"Submit the Terraform Addon"),(0,a.kt)("p",null,"Push the code generated in ",(0,a.kt)("inlineCode",{parentName:"p"},"./addons")," and make a pull request."),(0,a.kt)("h2",{id:"contribute-documentation"},"Contribute documentation"),(0,a.kt)("p",null,"Write ",(0,a.kt)("a",{parentName:"p",href:"../../reference/addons/terraform"},"Terraform Addon enable doc")," for your cloud provider and add it to ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/consume-cloud-services#enabling-cloud-vendor-addons"},"all supported cloud providers"),"."))}u.isMDXComponent=!0}}]);