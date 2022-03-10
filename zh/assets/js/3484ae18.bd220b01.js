(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[56020],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return c}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=o,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function c(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},83520:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i={},l={permalink:"/zh/blog/2022/03/01/kubevela-generate-top-50-popular-resources-of-aws-using-100-lines-of-code",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/2022-03-01-kubevela-generate-top-50-popular-resources-of-aws-using-100-lines-of-code.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022-03-01-kubevela-generate-top-50-popular-resources-of-aws-using-100-lines-of-code.md",title:"Kubevela: \u5982\u4f55\u7528 100 \u884c\u4ee3\u7801\u5feb\u901f\u5f15\u5165 AWS \u6700\u53d7\u6b22\u8fce\u7684 50 \u79cd\u4e91\u8d44\u6e90",description:"\u4f5c\u8005\uff1a Avery Qi \uff08\u540c\u6d4e\u5927\u5b66\uff09 \u5468\u6b63\u559c\uff08\u963f\u91cc\u4e91)",date:"2022-03-01T00:00:00.000Z",formattedDate:"2022\u5e743\u67081\u65e5",tags:[],readingTime:3.27,truncated:!1,nextItem:{title:"KubeVela v1.2 \u53d1\u5e03\uff1a\u805a\u7126\u5f00\u53d1\u8005\u4f53\u9a8c\uff0c\u8f7b\u677e\u53d1\u5e03\u4f60\u7684\u591a\u96c6\u7fa4\u5e94\u7528",permalink:"/zh/blog/2022/01/27/blog-1.2"}},s=[{value:"\u89e3\u6790\u4e91\u8d44\u6e90\u6570\u636e",id:"\u89e3\u6790\u4e91\u8d44\u6e90\u6570\u636e",children:[]},{value:"\u6279\u91cf\u751f\u6210\u4e91\u8d44\u6e90",id:"\u6279\u91cf\u751f\u6210\u4e91\u8d44\u6e90",children:[]}],u={toc:s};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f5c\u8005\uff1a ",(0,a.kt)("strong",{parentName:"p"},"Avery Qi")," \uff08\u540c\u6d4e\u5927\u5b66\uff09 \u5468\u6b63\u559c\uff08\u963f\u91cc\u4e91)"),(0,a.kt)("p",null,"KubeVela \u76ee\u524d\u5df2\u7ecf\u652f\u6301\u4e86 AWS\u3001Azure\u3001GCP\u3001\u963f\u91cc\u4e91\u3001\u817e\u8baf\u4e91\u3001\u767e\u5ea6\u4e91\u3001UCloud \u7b49\u4e91\u5382\u5546\uff0c\u4e5f\u63d0\u4f9b\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/next/platform-engineers/components/component-terraform"},"\u7b80\u5355\u5feb\u6377\u7684\u547d\u4ee4\u884c\u5de5\u5177"),"\u5f15\u5165\u4e91\u670d\u52a1\u5546\u7684\u4e91\u8d44\u6e90\uff0c\u4f46\u662f\u5728 KubeVela \u91cc\u4e00\u4e2a\u4e00\u4e2a\u5730\u652f\u6301\u4e91\u670d\u52a1\u5546\u7684\u4e91\u8d44\u6e90\u4e0d\u5229\u4e8e\u5feb\u901f\u6ee1\u8db3\u7528\u6237\u5bf9\u4e8e\u4e91\u8d44\u6e90\u7684\u9700\u6c42\uff0c\u672c\u6587\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u6848\uff0c\u7528\u4e0d\u5230 100 \u884c\u4ee3\u7801\u5feb\u901f\u5f15\u5165 AWS \u524d 50 \u6700\u53d7\u6b22\u8fce\u7684\u4e91\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u671f\u671b\u7528\u6237\u53d7\u5230\u672c\u6587\u7684\u542f\u53d1\uff0c\u8d21\u732e\u5176\u4ed6\u4e91\u670d\u52a1\u5546\u7684\u4e91\u8d44\u6e90\u3002"),(0,a.kt)("h1",{id:"aws-\u6700\u53d7\u6b22\u8fce\u7684\u4e91\u8d44\u6e90\u5728\u54ea\u91cc\uff1f"},"AWS \u6700\u53d7\u6b22\u8fce\u7684\u4e91\u8d44\u6e90\u5728\u54ea\u91cc\uff1f"),(0,a.kt)("p",null,"Terraform \u5b98\u7f51\u63d0\u4f9b\u4e86\u5404\u4e2a\u4e91\u670d\u52a1\u5546\u7684 Terraform modules\uff0c\u6bd4\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/terraform-aws-modules"},"AWS \u7684\u4e91\u8d44\u6e90 Terraform modules"),"\u3002\u5176\u4e2d\uff0c\u4e91\u8d44\u6e90\u6309\u7167\u53d7\u6b22\u8fce\u7684\u4f7f\u7528\u7a0b\u5ea6\uff08\u4e0b\u8f7d\u91cf\uff09\u6392\u5e8f\uff0c\u6bd4\u5982 AWS VPC \u4e0b\u8f7d\u91cf\u4e3a 1870 \u4e07\u6b21\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u7b80\u5355\u5206\u6790\uff0c\u6211\u4eec\u53d1\u73b0 AWS \u524d 50 Terraform modules \u7684\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42 ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/v2/modules?filter%5Bprovider%5D=aws&include=latest-version&page%5Bsize%5D=50&page%5Bnumber%5D=1"},"https://registry.terraform.io/v2/modules?filter%5Bprovider%5D=aws&include=latest-version&page%5Bsize%5D=50&page%5Bnumber%5D=1")," \u83b7\u53d6\u3002"),(0,a.kt)("h1",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,a.kt)("p",null,"\u4ee3\u7801\u63a5\u53d7\u4e24\u4e2a\u7528\u6237\u4f20\u5165\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"provider \u7684\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"\u8be5 provider \u5bf9\u5e94\u7684 Terraform Modules \u7684 URL")),(0,a.kt)("p",null,"\u5bf9\u4e8e AWS \u6765\u8bf4\uff0cProvider\u540d\u79f0\u4e3a \u201caws\u201d\uff0c\u5bf9\u5e94\u7684 Terraform modules\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/v2/modules?filter%5Bprovider%5D=aws&include=latest-version&page%5Bsize%5D=50&page%5Bnumber%5D=1"},"Terraform Modules json\u683c\u5f0f\u63a5\u53e3"),"\uff08\u5373\u5728",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/"},"Terraform Registry"),"\u4e2d\u641c\u7d22provider\u4e3aaws\u65f6\u6700\u53d7\u6b22\u8fce\u768450\u79cd\u4e91\u8d44\u6e90\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u6267\u884c\u4ee3\u7801\u4e4b\u524d\u9700\u8981\u786e\u8ba4providerName(aws)\u548cModules\u94fe\u63a5\u65e0\u8bef\u3002"),(0,a.kt)("h1",{id:"\u6267\u884c\u4ee3\u7801"},"\u6267\u884c\u4ee3\u7801"),(0,a.kt)("p",null,"\u90a3\u4e48\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b 100 \u884c\u5de6\u53f3\u7684\u4ee3\u7801\uff08\u6587\u4ef6\u540d gen.go\uff09\u6765\u6279\u91cf\u5730\u5feb\u901f\u5f15\u5165 AWS \u6700\u53d7\u6b22\u8fce\u7684\u524d 50 \u79cd\u4e91\u8d44\u6e90\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import (\n  "encoding/json"\n  "fmt"\n  "io"\n  "log"\n  "net/http"\n  "os"\n  "os/exec"\n  "path/filepath"\n  "strings"\n\n  "github.com/pkg/errors"\n)\n\ntype TFDownload struct {\n  Data     []DataItem     `json:"data"`\n  Included []IncludedItem `json:"included"`\n}\n\ntype IncludedItem struct {\n  Id         string     `json:"id"`\n  Attributes Attributes `json:"attributes"`\n}\n\ntype DataItem struct {\n  Attributes    Attributes    `json:"attributes"`\n  Relationships Relationships `json:"relationships"`\n}\n\ntype Relationships struct {\n  LatestVersion RelationshipLatestVersion `json:"latest-version"`\n}\n\ntype RelationshipLatestVersion struct {\n  Data RelationshipData `json:"data"`\n}\n\ntype RelationshipData struct {\n  Id string `json:"id"`\n}\n\nvar errNoVariables = errors.New("failed to find main.tf or variables.tf in Terraform configurations")\n\ntype Attributes struct {\n  Name        string `json:"name"`\n  Downloads   int    `json:"downloads"`\n  Source      string `json:"source"`\n  Description string `json:"description"`\n  Verified    bool   `json:"verified"`\n}\n\nfunc main() {\n  if len(os.Args) < 2 {\n     fmt.Println("Please provide the cloud provider name and an official Terraform modules URL")\n     os.Exit(1)\n  }\n  providerName := os.Args[1]\n  terraformModulesUrl := os.Args[2]\n  resp, err := http.Get(terraformModulesUrl)\n  if err != nil {\n     log.Fatal(err)\n  }\n  defer resp.Body.Close()\n  body, err := io.ReadAll(resp.Body)\n  if err != nil {\n     log.Fatal(err)\n  }\n\n  var modules TFDownload\n  if err := json.Unmarshal(body, &modules); err != nil {\n     fmt.Println(err.Error())\n     os.Exit(1)\n  }\n\n  if _, err = os.Stat(providerName); err == nil {\n     if err := os.RemoveAll(providerName); err != nil {\n        log.Fatal(err)\n     }\n     fmt.Printf("Successfully deleted existed directory %s\\n", providerName)\n  }\n  if _, err = os.Stat(providerName); os.IsNotExist(err) {\n     if err := os.Mkdir(providerName, 0755); err != nil {\n        if !os.IsExist(err) {\n           log.Fatal(err)\n        }\n        fmt.Printf("Successfully created directory %s\\n", providerName)\n     }\n  }\n\n  for _, module := range modules.Data {\n     var description string\n     for _, attr := range modules.Included {\n        if module.Relationships.LatestVersion.Data.Id == attr.Id {\n           description = attr.Attributes.Description\n        }\n     }\n     if description == "" {\n        description = strings.ToUpper(providerName) + " " + strings.Title(module.Attributes.Name)\n     }\n\n     outputFile := fmt.Sprintf("%s/terraform-%s-%s.yaml", providerName, providerName, module.Attributes.Name)\n     if _, err := os.Stat(outputFile); !os.IsNotExist(err) {\n        continue\n     }\n     if providerName == "aws" && (module.Attributes.Name == "rds" || module.Attributes.Name == "s3-bucket" ||\n        module.Attributes.Name == "subnet" || module.Attributes.Name == "vpc") {\n        continue\n     }\n     if err := generateDefinition(providerName, module.Attributes.Name, module.Attributes.Source, "", description); err != nil {\n        fmt.Println(err.Error())\n        os.Exit(1)\n     }\n  }\n}\n\nfunc generateDefinition(provider, name, gitURL, path, description string) error {\n  defYaml := filepath.Join(provider, fmt.Sprintf("terraform-%s-%s.yaml", provider, name))\n\n  cmd := fmt.Sprintf("vela def init %s --type component --provider %s --git %s.git --desc \\"%s\\" -o %s",\n     name, provider, gitURL, description, defYaml)\n  if path != "" {\n     cmd = fmt.Sprintf("%s --path %s", cmd, path)\n  }\n  fmt.Println(cmd)\n  stdout, err := exec.Command("bash", "-c", cmd).CombinedOutput()\n  if err != nil {\n     return errors.Wrap(err, string(stdout))\n  }\n  fmt.Println(string(stdout))\n  return nil\n}\n')),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'go run gen.go aws "https://registry.terraform.io/v2/modules?filter%5Bprovider%5D=aws&include=latest-version&page%5Bsize%5D=50&page%5Bnumber%5D=1"\n')),(0,a.kt)("h1",{id:"\u4ee3\u7801\u7b80\u8981\u8bf4\u660e"},"\u4ee3\u7801\u7b80\u8981\u8bf4\u660e"),(0,a.kt)("h2",{id:"\u89e3\u6790\u4e91\u8d44\u6e90\u6570\u636e"},"\u89e3\u6790\u4e91\u8d44\u6e90\u6570\u636e"),(0,a.kt)("p",null,"\u8bbf\u95ee\u7528\u6237\u4f20\u5165\u7684URL\uff0c\u5c06\u8fd4\u56de\u7684json\u6570\u636e\u89e3\u6790\u4e3aGo\u4e2d\u7684\u7ed3\u6784\u4f53\u3002"),(0,a.kt)("p",null,"\u8d44\u6e90\u5bf9\u5e94\u7684json\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "data": [\n    {\n      "type": "modules",\n      "id": "23",\n      "attributes": {\n        "downloads": 18440513,\n        "full-name": "terraform-aws-modules/vpc/aws",\n        "name": "vpc",\n        "namespace": "terraform-aws-modules",\n        "owner-name": "",\n        "provider-logo-url": "/images/providers/aws.png",\n        "provider-name": "aws",\n        "source": "https://github.com/terraform-aws-modules/terraform-aws-vpc",\n        "verified": true\n      },\n      "relationships": {\n        "latest-version": {\n          "data": {\n            "id": "142143",\n            "type": "module-versions"\n          }\n        }\n      },\n      "links": {\n        "self": "/v2/modules/23"\n      }\n    },\n    ...\n  ],\n  "included": [\n    {\n      "type": "module-versions",\n      "id": "36806",\n      "attributes": {\n        "created-at": "2020-01-03T11:35:36Z",\n        "description": "Terraform module Terraform module for creating AWS IAM Roles with heredocs",\n        "downloads": 260030,\n        "published-at": "2020-02-06T06:26:08Z",\n        "source": "",\n        "tag": "v2.0.0",\n        "updated-at": "2022-02-22T00:45:44Z",\n        "version": "2.0.0"\n      },\n      "links": {\n        "self": "/v2/module-versions/36806"\n      }\n    },\n    ...\n  ],\n  ...\n}\n')),(0,a.kt)("p",null,"\u5728Modules\u5bf9\u5e94\u7684json\u6570\u636e\u4e2d\uff0c\u6211\u4eec\u53ea\u5173\u5fc3\u4e24\u4e2a\u952e\u503c\u5bf9\uff0c\u5373\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"data\uff1a\u5305\u542bModules\u540d\u79f0\u53ca\u5c5e\u6027\u7684\u5217\u8868"),(0,a.kt)("li",{parentName:"ul"},"Included\uff1a\u7b5b\u9009\u51fa\u7684\u7279\u5b9a\u7248\u672c\u7684Modules\u5177\u4f53\u4fe1\u606f")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c\u5bf9\u4e8edata\u4e2d\u7684\u6bcf\u4e2aModule\u5143\u7d20\uff0c\u89e3\u6790\u5b83\u7684\u5c5e\u6027\uff0cId\u548crelationship\u4e2d\u7684latest-version\u5bf9\u5e94\u7684id\uff1b\u5bf9\u4e8eIncluded\u4e2d\u7684\u6bcf\u4e2aModule\u7248\u672c\u5143\u7d20\uff0c\u89e3\u6790\u5b83\u7684\u5c5e\u6027\u548cId\u3002"),(0,a.kt)("p",null,"\u5c5e\u6027\u53c8\u89e3\u6790\u5982\u4e0b\u4e94\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name"),(0,a.kt)("li",{parentName:"ul"},"Downloads"),(0,a.kt)("li",{parentName:"ul"},"Source"),(0,a.kt)("li",{parentName:"ul"},"Description"),(0,a.kt)("li",{parentName:"ul"},"Verified")),(0,a.kt)("p",null,"\u7ed3\u6784\u4f53\u5b9a\u4e49\u5728\u7ed3\u6784\u4f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"TFDownload "),"\u4e2d\uff0c\u901a\u8fc7 http \u5e93\u83b7\u53d6 json \u6570\u636e\uff0c\u518d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"json.Unmarshal")," \u89e3\u6790\u51fa Terraform modules \u7684\u7ed3\u6784\u4f53\u3002"),(0,a.kt)("h2",{id:"\u6279\u91cf\u751f\u6210\u4e91\u8d44\u6e90"},"\u6279\u91cf\u751f\u6210\u4e91\u8d44\u6e90"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u76ee\u5f55\uff0c\u751f\u6210\u8d44\u6e90\u6240\u9700\u6587\u4ef6")),(0,a.kt)("p",null,"\u89e3\u6790\u5b8c\u6bd5\u540e\uff0c\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u6587\u4ef6\u5939\u547d\u540d\u4e3aprovider\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u904d\u5386\u89e3\u6790\u540e\u7684data\uff0c\u5bf9\u4e8e\u5176\u4e2d\u6bcf\u4e2aModule\u5143\u7d20\uff0c\u6267\u884c\u4e0b\u8ff0\u64cd\u4f5c\uff0c\u4e3a\u5176\u751f\u6210\u76f8\u5e94\u914d\u7f6e\u6587\u4ef6\uff0c\u5b9a\u4e49\u548c\u76f8\u5e94\u6587\u6863\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5b9a\u4e49\u6587\u4ef6")),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0b\u8ff0 vela \u6307\u4ee4\u4ece\u6a21\u5757\u5bf9\u5e94\u7684github\u4ed3\u5e93\u8bfb\u53d6\u76f8\u5e94\u4fe1\u606f\u751f\u6210\u5b9a\u4e49\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela def init {ModuleName} --type component --provider {providerName} --git {gitURL} --desc {description} -o {yamlFileName}\n")),(0,a.kt)("p",null,"\u6307\u4ee4\u4e2d\u9700\u8981\u586b\u5165\u7684\u51e0\u9879\u7531\u89e3\u6790\u597d\u7684Module\u7ed3\u6784\u4f53\u4f20\u5165\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gitURL: \t{Module.Attributes.Source}.git"),(0,a.kt)("li",{parentName:"ul"},"description:\t\u5982\u679cIncluded\u4e2d\u5b58\u5728\u5143\u7d20ID\u4e0e\u6a21\u5757relationship\u4e2dlatest-version\u5bf9\u5e94ID\u76f8\u540c\uff0c\u5219description\u4e3aIncluded\u4e2d\u5bf9\u5e94\u5143\u7d20\u5c5e\u6027\u7684description;\u5426\u5219description\u4e3aproviderName\u4e0e\u6a21\u5757\u540d\u79f0\u7684\u62fc\u63a5"),(0,a.kt)("li",{parentName:"ul"},"yamlFileName\uff1aterraform-{providerName}-{Module.Attributes.Name}.yaml")),(0,a.kt)("h1",{id:"\u4f60\u4e5f\u6765\u8bd5\u8bd5\uff1f"},"\u4f60\u4e5f\u6765\u8bd5\u8bd5\uff1f"),(0,a.kt)("p",null,"\u8fd8\u6709\u4e0d\u5c11\u4e91\u670d\u52a1\u5546\u4e5f\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684 Terraform modules\uff0c\u6bd4\u5982"),(0,a.kt)("p",null,"GCP\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/terraform-google-modules"},"https://registry.terraform.io/namespaces/terraform-google-modules")),(0,a.kt)("p",null,"\u963f\u91cc\u4e91\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/terraform-alicloud-modules"},"https://registry.terraform.io/namespaces/terraform-alicloud-modules")),(0,a.kt)("p",null,"\u4f60\u8981\u4e0d\u8981\u4e5f\u4e3a KubeVela \u5f15\u5165\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u3001\u6216\u559c\u6b22\u7684\u4e91\u670d\u52a1\u5546\u7684\u4e91\u8d44\u6e90\uff1f"))}p.isMDXComponent=!0}}]);