(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[90434],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95501:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"\u4e91\u8d44\u6e90\u63d2\u4ef6"},c={unversionedId:"reference/addons/terraform",id:"reference/addons/terraform",isDocsHomePage:!1,title:"\u4e91\u8d44\u6e90\u63d2\u4ef6",description:"Terraform \u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/addons/terraform.md",sourceDirName:"reference/addons",slug:"/reference/addons/terraform",permalink:"/zh/docs/next/reference/addons/terraform",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/reference/addons/terraform.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1647497376,formattedLastUpdatedAt:"2022/3/17",frontMatter:{title:"\u4e91\u8d44\u6e90\u63d2\u4ef6"},sidebar:"docs",previous:{title:"\u542f\u7528 VelaUX \u63a7\u5236\u53f0",permalink:"/zh/docs/next/reference/addons/velaux"},next:{title:"\u673a\u5668\u5b66\u4e60\u63d2\u4ef6",permalink:"/zh/docs/next/reference/addons/ai"}},l=[{value:"Terraform \u63d2\u4ef6",id:"terraform-\u63d2\u4ef6",children:[]},{value:"\u963f\u91cc\u4e91 Terraform Provider \u63d2\u4ef6",id:"\u963f\u91cc\u4e91-terraform-provider-\u63d2\u4ef6",children:[]},{value:"Azure Terraform Provider \u63d2\u4ef6",id:"azure-terraform-provider-\u63d2\u4ef6",children:[]},{value:"AWS Terraform Provider \u63d2\u4ef6",id:"aws-terraform-provider-\u63d2\u4ef6",children:[]},{value:"\u817e\u8baf\u4e91 Terraform Provider \u63d2\u4ef6",id:"\u817e\u8baf\u4e91-terraform-provider-\u63d2\u4ef6",children:[]}],d={toc:l};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"terraform-\u63d2\u4ef6"},"Terraform \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform\n")),(0,o.kt)("h2",{id:"\u963f\u91cc\u4e91-terraform-provider-\u63d2\u4ef6"},"\u963f\u91cc\u4e91 Terraform Provider \u63d2\u4ef6"),(0,o.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5f00\u542f Terraform \u5bf9\u963f\u91cc\u4e91\u7684\u652f\u6301\uff0c\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"\u521b\u5efa\u548c\u6d88\u8d39\u4e91\u8d44\u6e90"),"\uff1a"),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://help.aliyun.com/knowledge_detail/38738.html"},"\u5982\u4f55\u83b7\u53d6 Access Key"),"\u8bbe\u7f6e Access Key\uff0c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/72379.htm"},"Region \u5217\u8868")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"RegionId")," \u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"ALICLOUD_REGION"),"\u3002\n\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"ALICLOUD_SECURITY_TOKEN")," \u662f\u53ef\u9009\u7684\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/zh/doc-detail/28756.htm"},"\u8fd9\u7bc7\u4ecb\u7ecd")," \u8bbe\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-alibaba ALICLOUD_ACCESS_KEY=<xxx> ALICLOUD_SECRET_KEY=<yyy> ALICLOUD_REGION=<region>\n")),(0,o.kt)("h2",{id:"azure-terraform-provider-\u63d2\u4ef6"},"Azure Terraform Provider \u63d2\u4ef6"),(0,o.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5f00\u542f Terraform \u5bf9 Azure \u7684\u652f\u6301\uff0c\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"\u521b\u5efa\u548c\u6d88\u8d39\u4e91\u8d44\u6e90"),"\uff1a"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/developer/terraform/authenticate-to-azure?tabs=bash"},"Authenticate Terraform to Azure"),"\uff0c\u8bbe\u7f6e\u5982\u4e0b\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-azure ARM_CLIENT_ID=<aaa> ARM_CLIENT_SECRET=<bbb> ARM_SUBSCRIPTION_ID=<ccc> ARM_TENANT_ID=<ddd>\n")),(0,o.kt)("h2",{id:"aws-terraform-provider-\u63d2\u4ef6"},"AWS Terraform Provider \u63d2\u4ef6"),(0,o.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5f00\u542f Terraform \u5bf9 AWS \u7684\u652f\u6301\uff0c\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"../../end-user/components/cloud-services/provision-and-consume-cloud-services"},"\u521b\u5efa\u548c\u6d88\u8d39\u4e91\u8d44\u6e90"),"\uff1a"),(0,o.kt)("p",null,"\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs#environment-variables"},"Authenticate Terraform to AWS"),"\uff0c\u8bbe\u7f6e\u5982\u4e0b\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-aws AWS_ACCESS_KEY_ID=<aaa> AWS_SECRET_ACCESS_KEY=<bbb> AWS_DEFAULT_REGION=<region>\n")),(0,o.kt)("h2",{id:"\u817e\u8baf\u4e91-terraform-provider-\u63d2\u4ef6"},"\u817e\u8baf\u4e91 Terraform Provider \u63d2\u4ef6"),(0,o.kt)("p",null,"\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/1213/67093"},"\u6587\u6863")," \u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"TENCENTCLOUD_SECRET_ID")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"TENCENTCLOUD_SECRET_KEY"),"\u3002\n\u5728",(0,o.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/api/1140/40509#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8"},"\u817e\u8baf\u4e91\u533a\u57df\u5217\u8868"),"\u4e2d\u9009\u62e9\u4e00\u4e2a RegionId \u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"TENCENTCLOUD_REGION"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform-tencent TENCENTCLOUD_SECRET_ID=<xxx> TENCENTCLOUD_SECRET_KEY=<yyy> TENCENTCLOUD_REGION=<region>\n")))}p.isMDXComponent=!0}}]);