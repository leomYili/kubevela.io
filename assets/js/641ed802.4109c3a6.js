(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4434],{3905:function(e,r,o){"use strict";o.d(r,{Zo:function(){return s},kt:function(){return m}});var n=o(67294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=n.createContext({}),c=function(e){var r=n.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):d(d({},r),e)),o},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=t,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(f,d(d({ref:r},s),{},{components:o})):n.createElement(f,d({ref:r},s))}));function m(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,d=new Array(a);d[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,d[1]=l;for(var c=2;c<a;c++)d[c]=o[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},88766:function(e,r,o){"use strict";o.r(r),o.d(r,{frontMatter:function(){return d},metadata:function(){return l},toc:function(){return i},default:function(){return s}});var n=o(22122),t=o(19756),a=(o(67294),o(3905)),d={title:"Addon Cloud Resources"},l={unversionedId:"reference/addons/terraform",id:"reference/addons/terraform",isDocsHomePage:!1,title:"Addon Cloud Resources",description:"Terraform addon",source:"@site/docs/reference/addons/terraform.md",sourceDirName:"reference/addons",slug:"/reference/addons/terraform",permalink:"/docs/next/reference/addons/terraform",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/reference/addons/terraform.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1647497376,formattedLastUpdatedAt:"3/17/2022",frontMatter:{title:"Addon Cloud Resources"},sidebar:"docs",previous:{title:"VelaUX",permalink:"/docs/next/reference/addons/velaux"},next:{title:"Machine Learning Addon",permalink:"/docs/next/reference/addons/ai"}},i=[{value:"Terraform addon",id:"terraform-addon",children:[]},{value:"Terraform Provider addon for Alibaba Cloud",id:"terraform-provider-addon-for-alibaba-cloud",children:[]},{value:"Terraform Provider addon for Azure",id:"terraform-provider-addon-for-azure",children:[]},{value:"Terraform Provider addon for AWS",id:"terraform-provider-addon-for-aws",children:[]},{value:"Terraform Provider addon for Tencent Cloud",id:"terraform-provider-addon-for-tencent-cloud",children:[]}],c={toc:i};function s(e){var r=e.components,o=(0,t.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"terraform-addon"},"Terraform addon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform\n")),(0,a.kt)("h2",{id:"terraform-provider-addon-for-alibaba-cloud"},"Terraform Provider addon for Alibaba Cloud"),(0,a.kt)("p",null,"  Enable Terraform Alibaba Cloud Provider as below to ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,a.kt)("p",null,"  Here is how to get ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/knowledge_detail/38738.html"},"access key"),". Set the value for ",(0,a.kt)("inlineCode",{parentName:"p"},"ALICLOUD_REGION")," by picking one ",(0,a.kt)("inlineCode",{parentName:"p"},"RegionId")," from ",(0,a.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/72379.htm"},"Alibaba Cloud region list"),".\nYou can also set the value for parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"ALICLOUD_SECURITY_TOKEN"),", which is optional, per ",(0,a.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/28756.htm"},"this doc"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-alibaba ALICLOUD_ACCESS_KEY=<xxx> ALICLOUD_SECRET_KEY=<yyy> ALICLOUD_REGION=<region>\n")),(0,a.kt)("h2",{id:"terraform-provider-addon-for-azure"},"Terraform Provider addon for Azure"),(0,a.kt)("p",null,"  Enable Terraform Azure Provider as below to ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,a.kt)("p",null,"  Set these parameters below per ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/developer/terraform/authenticate-to-azure?tabs=bash"},"Authenticate Terraform to Azure"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-azure ARM_CLIENT_ID=<aaa> ARM_CLIENT_SECRET=<bbb> ARM_SUBSCRIPTION_ID=<ccc> ARM_TENANT_ID=<ddd>\n")),(0,a.kt)("h2",{id:"terraform-provider-addon-for-aws"},"Terraform Provider addon for AWS"),(0,a.kt)("p",null,"  Enable Terraform AWS Provider as below to ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,a.kt)("p",null,"  Set these parameters below per ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#environment-variables"},"Authenticate Terraform to AWS"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-aws AWS_ACCESS_KEY_ID=<aaa> AWS_SECRET_ACCESS_KEY=<bbb> AWS_DEFAULT_REGION=<region>\n")),(0,a.kt)("h2",{id:"terraform-provider-addon-for-tencent-cloud"},"Terraform Provider addon for Tencent Cloud"),(0,a.kt)("p",null,"Enable Terraform Tencent Cloud Provider as below to ",(0,a.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"provision and/or consume cloud resources"),"."),(0,a.kt)("p",null,"Get ",(0,a.kt)("inlineCode",{parentName:"p"},"TENCENTCLOUD_SECRET_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TENCENTCLOUD_SECRET_KEY")," per ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/1213/67093"},"this guide"),"\nGet  ",(0,a.kt)("inlineCode",{parentName:"p"},"TENCENTCLOUD_REGION")," by picking one RegionId from ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/api/1140/40509#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8"},"Tencent Cloud region list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-tencent TENCENTCLOUD_SECRET_ID=<xxx> TENCENTCLOUD_SECRET_KEY=<yyy> TENCENTCLOUD_REGION=<region>\n")))}s.isMDXComponent=!0}}]);