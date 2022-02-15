(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[47234],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25796:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r={title:"Customize Addon"},l={unversionedId:"platform-engineers/addon/intro",id:"version-v1.2/platform-engineers/addon/intro",isDocsHomePage:!1,title:"Customize Addon",description:"The picture below shows what KubeVela does when an addon is enabled. You can see that the Addon Registry stores the addon's resource files. When an addon is enabled through UX/CLI, it will pull these resource files from the Addon Registry, render them and create a KubeVela application. Finally, the KubeVela controller running in the management cluster completes the delivery of the resources described in the application.",source:"@site/versioned_docs/version-v1.2/platform-engineers/addon/intro.md",sourceDirName:"platform-engineers/addon",slug:"/platform-engineers/addon/intro",permalink:"/docs/platform-engineers/addon/intro",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/addon/intro.md",version:"v1.2",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1644903770,formattedLastUpdatedAt:"2/15/2022",frontMatter:{title:"Customize Addon"},sidebar:"version-v1.2/docs",previous:{title:"CUE Advanced",permalink:"/docs/platform-engineers/cue/advanced"},next:{title:"Extend a Terraform Addon",permalink:"/docs/platform-engineers/addon/terraform"}},d=[{value:"Make an addon",id:"make-an-addon",children:[{value:"metadata.yaml(Required)",id:"metadatayamlrequired",children:[]},{value:"template.yaml(Required)",id:"templateyamlrequired",children:[]},{value:"README.md(Required)",id:"readmemdrequired",children:[]},{value:"Resources directory(Optional)",id:"resources-directoryoptional",children:[]},{value:"X-Definitions directory(Optional)",id:"x-definitions-directoryoptional",children:[]},{value:"UI-Schema directory(Optional)",id:"ui-schema-directoryoptional",children:[]}]},{value:"Install Addon Locally",id:"install-addon-locally",children:[]},{value:"Known Limits",id:"known-limits",children:[]}],s={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The picture below shows what KubeVela does when an addon is enabled. You can see that the Addon Registry stores the addon's resource files. When an addon is enabled through UX/CLI, it will pull these resource files from the Addon Registry, render them and create a KubeVela application. Finally, the KubeVela controller running in the management cluster completes the delivery of the resources described in the application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(7582).Z})),(0,o.kt)("h2",{id:"make-an-addon"},"Make an addon"),(0,o.kt)("p",null,"Next, we will introduce how to make an addon of your own. First, you need to add a directory for storing addon resource files in the Addon Registry. Typically this directory structure looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 resources/\n\u2502   \u251c\u2500\u2500 xxx.cue\n\u2502   \u251c\u2500\u2500 xxx.yaml\n\u2502   \u2514\u2500\u2500 parameter.cue\n\u251c\u2500\u2500 definitions/\n\u251c\u2500\u2500 schemas/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 metadata.yaml\n\u2514\u2500\u2500 template.yaml\n")),(0,o.kt)("p",null,"Then let's get to the details of each resource file and subdirectory under this directory."),(0,o.kt)("h3",{id:"metadatayamlrequired"},"metadata.yaml(Required)"),(0,o.kt)("p",null,"First, you need to write an addon metadata file (metadata.yaml), which describes the basic information such as the name and description of the addon. Only obeying this format, a directory under a repository will be recognized by UX/CLI as an addon's resource directory, an example of a metadata file is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\nversion: 1.0.0\ndescription: Example adddon.\nicon: xxx\nurl: xxx\n\ntags:\n  - only_example\n\ndeployTo:\n  runtimeCluster: false\n\ndependencies: []\n- name: addon_name\n\ninvisible: false\n")),(0,o.kt)("p",null,"Other than the basic information such as name, version, tag, etc, it includes the following fields that control the behavior of the addon:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deployTo.runtimeCluster"),": Indicates whether the addon is installed in the sub-cluster. When this field is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", the resources in the application will be delivered to the sub-cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dependencies"),": Indicates other addons it depends on. When enabled, KubeVela will automatically enable the addons it depends on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"invisible"),": Indicates whether to display the addon when pulling the addon list. When you find that the addon has some fatal bugs, you can temporarily hide the addon from users by setting this field to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("h3",{id:"templateyamlrequired"},"template.yaml(Required)"),(0,o.kt)("p",null,"Next, you need to write an addon application template file (template.yaml)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: velaux\n  namespace: vela-system\nspec:\n# component definition of resource dir .\n")),(0,o.kt)("p",null,"The template file is actually a template of KubeVela Application, resources can be automatically rendered to fill the spec."),(0,o.kt)("p",null,"All files under the Addon Registry will eventually be rendered as a KubeVela application, the template can be convenient if you want to describe some basic information of the application previously. For example, you can add specific tags or annotations to the application. Of course, you can also add components and workflowsteps directly in the application template file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: kruise\n  namespace: vela-system\nspec:\n  components:\n    - name: kruise\n      type: helm\n      properties:\n        repoType: git\n        url: https://github.com/openkruise/kruise\n        chart: ./charts/kruise/v1.0.0\n        git:\n          branch: master\n        values:\n          featureGates: PreDownloadImageForInPlaceUpdate=true\n  workflow:\n    steps:\n      - name: apply-resources\n        type: apply-application\n")),(0,o.kt)("p",null,"The example above will directly install openkurise addon from the helm chart."),(0,o.kt)("p",null,"Note that even if you set the application name through the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.name")," field, this setting will not take effect. When enabled, the application will be uniformly named in the format of addon-{addonName}."),(0,o.kt)("h3",{id:"readmemdrequired"},"README.md(Required)"),(0,o.kt)("p",null,"The addon's self-describing file is used to describe the main functionality of the addon, and this file is presented to the user on the addon details page in UX."),(0,o.kt)("h3",{id:"resources-directoryoptional"},"Resources directory(Optional)"),(0,o.kt)("p",null,"In addition to adding components directly in the template file, you can also create a ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," directory in the Addon Registry, add YAML/CUE type files in it. These files are eventually rendered into components and added to the application."),(0,o.kt)("p",null,"Among them, the YAML type file should contain a K8S resource object, which will be directly added to the application as a K8s-object type component during rendering."),(0,o.kt)("h4",{id:"cue-format-resource"},"CUE format resource"),(0,o.kt)("p",null,"If you need to add a component to your application that needs to be rendered dynamically based on parameters when enabled, you can write a CUE format file as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},'output: {\n    type: "raw"\n    properties: {\n        apiVersion: "v1"\n        kind:       "ConfigMap"\n        metadata: {\n            name:      "exampleinput"\n            namespace: "default"\n        }\n        data: input: parameter.example\n    }\n}\n')),(0,o.kt)("p",null,"You also need to write a ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter.cue")," file describing which parameters are enabled, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n  example: string\n}\n")),(0,o.kt)("p",null,"If you know how to write the CUE template in ",(0,o.kt)("a",{parentName:"p",href:"../oam/x-definition"},"x-definition"),", you should be very familiar with this. The difference between them is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," defined by the template is a specific K8S object, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," here is a specific component in an application."),(0,o.kt)("p",null,"You can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," in the above example describes a component of type ",(0,o.kt)("inlineCode",{parentName:"p"},"raw"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"properties.data.input")," needs to be specified according to the input parameters when enabled. You can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," in the above example describes a component of type ",(0,o.kt)("inlineCode",{parentName:"p"},"raw"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"properties.data.input")," needs to be specified according to the input parameters when enabled."),(0,o.kt)("p",null,"When the addon is enabled, the parameters need to be written in the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter.cue")," file in CUE syntax. UX/CLI renders all CUE files and ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter.cue")," in one context when the addon is enabled, resulting in a set of components that are added to the application."),(0,o.kt)("h4",{id:"yaml-format-resource"},"YAML format resource"),(0,o.kt)("p",null,"The YAML format resources is just a Kubernetes YAML object, you can define any object one by one in a file."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons/ocm-cluster-manager/resources"},"OCM")," addon defines all it's resources in the addon. All these YAML objects will be rendered as components in an Application."),(0,o.kt)("h3",{id:"x-definitions-directoryoptional"},"X-Definitions directory(Optional)"),(0,o.kt)("p",null,"You can create a definition's file directory under the Addon Registry to store template definition files such as component definitions, trait definitions, and workflowstep definitions. It should be noted that since the KubeVela controller is usually not installed in the managed cluster, even if the addon is enabled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployTo.runtimeCluster")," field in the metadata file (metadata.yaml) to install the addon in the subcluster, the template definition file will not be distributed to sub-clusters."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons/fluxcd/definitions"},(0,o.kt)("inlineCode",{parentName:"a"},"fluxcd"))," addon defines multiple ComponentDefinition and TraitDefinition."),(0,o.kt)("h3",{id:"ui-schema-directoryoptional"},"UI-Schema directory(Optional)"),(0,o.kt)("p",null,"The schemas directory is used to store the UI-schema files corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Definitions"),", which is used to enhance the display effect when displaying the parameters required by ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Definitions")," in UX."),(0,o.kt)("p",null,"The above is a complete introduction to how to make an addon, you can find the complete description of the above-mentioned addon in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/experimental/addons/example"},"catalog")," example."),(0,o.kt)("p",null,"In addition to uploading the addon resource files to your addon repository, you can also submit a pull request to KubeVela ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons"},"official addon repository")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/experimental/addons"},"experimental addon repository")," to addon new addons. After pr merged your addons can be discovered and used by other KubeVela users."),(0,o.kt)("h2",{id:"install-addon-locally"},"Install Addon Locally"),(0,o.kt)("p",null,"You can install addon from local to debug your own addon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela addon enable ./your-addon-dir/\n")),(0,o.kt)("h2",{id:"known-limits"},"Known Limits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now if you choose to enable the addon in the cluster, KubeVela will be installed in all subclusters by default, and the parameters filled in when enabling the addon will take effect in all clusters. Later, we plan to improve the multi-cluster addon management system, including supporting features such as cluster differential configuration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Addon version management and upgrade mechanisms, and plans to improve these features in the future.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Convenient local addon debugging methods and the follow-up plan is to provide a complete addon local debugging function on the CLI side.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install the addon in the subcluster. If the addon is not installed in the control plane, but only in subclusters, there are some issues."))))}p.isMDXComponent=!0},7582:function(e,t,n){"use strict";t.Z=n.p+"assets/images/addon-mechanism-ef77643bee0a715641f388a9f7ac4f20.jpg"}}]);