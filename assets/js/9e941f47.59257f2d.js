(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[11828],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},79204:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Deploy Cloud Service",description:"This section introduces the delivery of services provided by cloud vendors through KubeVela and orchestrating your services in the Kubernetes cluster."},l={unversionedId:"deliver-app/consume-cloud-services",id:"deliver-app/consume-cloud-services",isDocsHomePage:!1,title:"Deploy Cloud Service",description:"This section introduces the delivery of services provided by cloud vendors through KubeVela and orchestrating your services in the Kubernetes cluster.",source:"@site/docs/deliver-app/consume-cloud-services.md",sourceDirName:"deliver-app",slug:"/deliver-app/consume-cloud-services",permalink:"/docs/next/deliver-app/consume-cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/deliver-app/consume-cloud-services.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1641290441,formattedLastUpdatedAt:"1/4/2022",frontMatter:{title:"Deploy Cloud Service",description:"This section introduces the delivery of services provided by cloud vendors through KubeVela and orchestrating your services in the Kubernetes cluster."},sidebar:"docs",previous:{title:"Deploy Kubernetes Objects",permalink:"/docs/next/deliver-app/k8s-object"},next:{title:"Modify Replicas",permalink:"/docs/next/deliver-app/scaler"}},s=[{value:"Before starting",id:"before-starting",children:[]},{value:"Enabling cloud vendor Addons",id:"enabling-cloud-vendor-addons",children:[]},{value:"Setting up Targets",id:"setting-up-targets",children:[]},{value:"Creating your cloud service",id:"creating-your-cloud-service",children:[]},{value:"Viewing cloud resource creation status",id:"viewing-cloud-resource-creation-status",children:[]},{value:"FAQ",id:"faq",children:[]}],c={toc:s};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Integrating cloud service is the most frequent need in our daily development. Varies from the Object storage\u3001Cloud database to LoadBalancer, cache, or search engine, faster to loading them save more time. Meanwhile, to orchestrate different resources from multi-cloud is quite a pain point."),(0,o.kt)("p",null,"In this section, we introduce an example of using Alibaba Cloud RDS to show you how to deploy cloud services."),(0,o.kt)("h2",{id:"before-starting"},"Before starting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Has a cloud vendor account. To keep its permission more secure, we recommend delegating a subaccount of security keys. For example in AliCloud, please head it to ",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/doc-detail/28627.html"},"Creating RAM"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure your account has a sufficient balance ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connect to a Kubernetes cluster on this cloud vendor for hosting your cloud services"))),(0,o.kt)("h2",{id:"enabling-cloud-vendor-addons"},"Enabling cloud vendor Addons"),(0,o.kt)("p",null,"First, we open up VelaUX Dashboard, switch to the tab ",(0,o.kt)("inlineCode",{parentName:"p"},"Addon"),", and click up terraform-alibaba:"),(0,o.kt)("p",null,"Then fill in your ALICLOUD_ACCESS_KEY, ALICLOUD_REGION, and ALICLOUD_SECRET_KEY to enable it\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice: KubeVela encrypt all the keys hence no need to worry about its safety")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"addon-alibaba",src:n(9790).Z})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"terraform-alibaba")," addon depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform")," addon. If the latter isn't enabled, it'll be automatically enabled when the former does. The creating process of cloud services pulls configuration from GitHub. If your control plane cluster that runs KubeVela is very hard to connect to GitHub, please open up the  ",(0,o.kt)("inlineCode",{parentName:"p"},"GithubBlocked")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform")," addon."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform-alibaba")," addon supports the following types of resources and more later on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"alibaba-rds"),(0,o.kt)("li",{parentName:"ul"},"alibaba-ack"),(0,o.kt)("li",{parentName:"ul"},"alibaba-ask"),(0,o.kt)("li",{parentName:"ul"},"alibaba-oss"),(0,o.kt)("li",{parentName:"ul"},"alibaba-rds"),(0,o.kt)("li",{parentName:"ul"},"alibaba-redis")),(0,o.kt)("h2",{id:"setting-up-targets"},"Setting up Targets"),(0,o.kt)("p",null,"The way of deploying cloud services differs from other types of apps, cause its controller only runs in the control plane cluster. Therefore, we need to set the cloud vendor and regional parameters of each target."),(0,o.kt)("p",null,"Enter the page of Targets, select the cloud service you need. Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," to the edit mode or simply create a new one."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"target-variables",src:n(3787).Z})),(0,o.kt)("p",null,"The target first mainly describes the Namespace of the Kubernetes cluster and then describes the cloud vendor and region where the cluster is located by setting shared variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cloud Service Provider: The cloud service provider is bound to AK/SK. The default name generated by ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform-alibaba")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"default"),", so fill in default here."),(0,o.kt)("li",{parentName:"ul"},"Region: Region, select a region based on this parameter when creating a cloud service. You should fill in the location of the Kubernetes cluster described in the current target so that applications in Kubernetes can directly access the delivered cloud services.")),(0,o.kt)("h2",{id:"creating-your-cloud-service"},"Creating your cloud service"),(0,o.kt)("p",null,"After finishing setting up the target, let's go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Applications")," page and click  ",(0,o.kt)("inlineCode",{parentName:"p"},"New Application")," to create. Similar to other apps, you need to choose the type of your cloud service, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"alibaba-rds"),"; then choose an environment that must have both ",(0,o.kt)("inlineCode",{parentName:"p"},"Cloud Service Provider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Region")," parameters set up."),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Next Step")," to the configuration page. For different vendors, these parameters update accordingly. As for ",(0,o.kt)("inlineCode",{parentName:"p"},"alibaba-rds"),", it has the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"InstanceName: the name of the instance"),(0,o.kt)("li",{parentName:"ul"},"DatabaseName: the name of the database"),(0,o.kt)("li",{parentName:"ul"},"AccountName: account name by default"),(0,o.kt)("li",{parentName:"ul"},"Password: password by default"),(0,o.kt)("li",{parentName:"ul"},"AllocatePublicConnection: Whether to assign a public network access address"),(0,o.kt)("li",{parentName:"ul"},"DeleteResource: Whether to delete the corresponding cloud service when the app is deleted"),(0,o.kt)("li",{parentName:"ul"},"Privilege: default account permissions")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"set-rds",src:n(2721).Z})),(0,o.kt)("p",null,"For other cloud resources, you could read the description of each field to get know how to use it. "),(0,o.kt)("p",null,"Set the above parameters according to your needs, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," to enter the application management page, and click the deploy button to start the deployment of cloud services."),(0,o.kt)("h2",{id:"viewing-cloud-resource-creation-status"},"Viewing cloud resource creation status"),(0,o.kt)("p",null,"Like other apps, cloud service apps also need to switch to the corresponding environment page to view instance information. By default, there are several targets in an environment, and the cloud service will generate a corresponding number of instances."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rds-instances",src:n(80406).Z})),(0,o.kt)("p",null,"In the instance list, the instance name, status, resource type, and location are displayed. In the beginning, the name is empty, because the cloud service instance generation takes a certain amount of time, and the name will appear when the instance is generated normally. Click the name to enter the cloud vendor console page corresponding to the resource."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rds-status",src:n(56277).Z})),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Check the detail")," button to view the application details. You will find that each instance generates a Secret resource, which generally records the service's access address and key information. Secret resources will be distributed to the cluster and Namespace where the target is located while the control cluster exists. Therefore, other applications in the same environment can directly use the resource in the environment variable to obtain the access address and key."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"env-secret",src:n(50470).Z})),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The cloud service instance is in the ProviderNotReady state")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"First to look at whether the parameters of the target are correctly set according to the documentation guidelines. Then make sure that the AK/SK is correct and the corresponding user has the authority to create the resource.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The cloud service is always ProvisioningAndChecking and has no name")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The creation of cloud services generally takes a certain amount of time. Please wait or enter the cloud vendor console to view the creation progress.")))}u.isMDXComponent=!0},9790:function(e,t,n){"use strict";t.Z=n.p+"assets/images/addon-alibaba-8a416daa30d74ec6add6fdc2641b9693.jpg"},50470:function(e,t,n){"use strict";t.Z=n.p+"assets/images/env-secret-58fdadc7740c54cd53e07c80309afb4a.jpg"},80406:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rds-instances-22ec1ed5cc39b0a3b0ca0528134eb8f1.jpg"},56277:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rds-status-5580d4537c3319a82905003327d23a9f.jpg"},2721:function(e,t,n){"use strict";t.Z=n.p+"assets/images/set-rds-99f30b1b45fab477020e6d20f98f3e05.jpg"},3787:function(e,t,n){"use strict";t.Z=n.p+"assets/images/target-variables-c2383b85ef10b3df13ac08bea30146bc.jpg"}}]);