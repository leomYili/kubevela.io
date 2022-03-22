(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[77342],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),m=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63726:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"AWS ECS-CONTAINER-DEFINITION"},o={unversionedId:"end-user/components/cloud-services/terraform/aws-ecs-container-definition",id:"end-user/components/cloud-services/terraform/aws-ecs-container-definition",isDocsHomePage:!1,title:"AWS ECS-CONTAINER-DEFINITION",description:"Description",source:"@site/docs/end-user/components/cloud-services/terraform/aws-ecs-container-definition.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/aws-ecs-container-definition",permalink:"/docs/next/end-user/components/cloud-services/terraform/aws-ecs-container-definition",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/aws-ecs-container-definition.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1647926188,formattedLastUpdatedAt:"3/22/2022",frontMatter:{title:"AWS ECS-CONTAINER-DEFINITION"}},s=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[{value:"Properties",id:"properties",children:[]}]}],m={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Terraform module to generate well-formed JSON documents (container definitions) that are passed to the  aws_ecs_task_definition Terraform resource"),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"The hostname to use for your container."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pseudo_terminal"),(0,l.kt)("td",{parentName:"tr",align:null},"When this parameter is true, a TTY is allocated."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra_hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of hostnames and IP address mappings to append to the /etc/hosts file on the container. This is a list of maps"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    ipAddress = string\\n    hostname  = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readonly_root_filesystem"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines whether a container is given read-only access to its root filesystem. Due to how Terraform type casts booleans in json it is required to double quote this value"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"Log configuration options to send to a custom log driver for the container. For more details, see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html"},"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privileged"),(0,l.kt)("td",{parentName:"tr",align:null},"When this variable is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the container is given elevated privileges on the host container instance (similar to the root user). This parameter is not supported for Windows containers or tasks using the Fargate launch type."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map_secrets"),(0,l.kt)("td",{parentName:"tr",align:null},"The secrets variables to pass to the container. This is a map of string: {key: value}. map_secrets overrides secrets"),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource_requirements"),(0,l.kt)("td",{parentName:"tr",align:null},"The type and amount of a resource to assign to a container. The only supported resource is a GPU."),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    type  = string\\n    value = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disable_networking"),(0,l.kt)("td",{parentName:"tr",align:null},"When this parameter is true, networking is disabled within the container."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port_mappings"),(0,l.kt)("td",{parentName:"tr",align:null},'The port mappings to configure for the container. This is a list of maps. Each map should contain "containerPort", "hostPort", and "protocol", where "protocol" is one of "tcp" or "udp". If using containers in a task with the awsvpc or host network mode, the hostPort can either be left blank or set to the same value as the containerPort'),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    containerPort = number\\n    hostPort      = number\\n    protocol      = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"repository_credentials"),(0,l.kt)("td",{parentName:"tr",align:null},'Container repository credentials; required when using a private repo.  This map currently supports a single key; "credentialsParameter", which should be the ARN of a Secrets Manager\'s secret holding the credentials'),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker_labels"),(0,l.kt)("td",{parentName:"tr",align:null},"The configuration options to send to the ",(0,l.kt)("inlineCode",{parentName:"td"},"docker_labels")),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"system_controls"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of namespaced kernel parameters to set in the container, mapping to the --sysctl option to docker run. This is a list of maps: { namespace = "", value = ""}'),(0,l.kt)("td",{parentName:"tr",align:null},"list(map(string))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ulimits"),(0,l.kt)("td",{parentName:"tr",align:null},'Container ulimit settings. This is a list of maps, where each map should contain "name", "hardLimit" and "softLimit"'),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    name      = string\\n    hardLimit = number\\n    softLimit = number\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Time duration (in seconds) to wait before giving up on resolving dependencies for a container"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_definition"),(0,l.kt)("td",{parentName:"tr",align:null},"Container definition overrides which allows for extra keys or overriding existing keys."),(0,l.kt)("td",{parentName:"tr",align:null},"map(any)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthcheck"),(0,l.kt)("td",{parentName:"tr",align:null},"A map containing command (string), timeout, interval (duration in seconds), retries (1-10, number of times to retry before marking container unhealthy), and startPeriod (0-300, optional grace period to wait, in seconds, before failed healthchecks count toward retries)"),(0,l.kt)("td",{parentName:"tr",align:null},"object({\\n    command     = list(string)\\n    retries     = number\\n    timeout     = number\\n    interval    = number\\n    startPeriod = number\\n  })"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entrypoint"),(0,l.kt)("td",{parentName:"tr",align:null},"The entry point that is passed to the container"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"working_directory"),(0,l.kt)("td",{parentName:"tr",align:null},"The working directory to run commands inside the container"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"firelens_configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more details, see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FirelensConfiguration.html"},"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FirelensConfiguration.html")),(0,l.kt)("td",{parentName:"tr",align:null},"object({\\n    type    = string\\n    options = map(string)\\n  })"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dns_search_domains"),(0,l.kt)("td",{parentName:"tr",align:null},"Container DNS search domains. A list of DNS search domains that are presented to the container"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"The user to run as inside the container. Can be any of these formats: user, user:group, uid, uid:gid, user:gid, uid:group. The default (null) will use the container's configured ",(0,l.kt)("inlineCode",{parentName:"td"},"USER")," directive or root if not set."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interactive"),(0,l.kt)("td",{parentName:"tr",align:null},"When this parameter is true, this allows you to deploy containerized applications that require stdin or a tty to be allocated."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docker_security_options"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of strings to provide custom labels for SELinux and AppArmor multi-level security systems."),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the container. Up to 255 characters (","[a-z]",", ","[A-Z]",", ","[0-9]",", -, _ allowed)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_memory"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of memory (in MiB) to allow the container to use. This is a hard limit, if the container attempts to exceed the container_memory, the container is killed. This field is optional for Fargate launch type and the total amount of container_memory of all containers in a task will need to be lower than the task memory value"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"environment"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment variables to pass to the container. This is a list of maps. map_environment overrides environment"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    name  = string\\n    value = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volumes_from"),(0,l.kt)("td",{parentName:"tr",align:null},'A list of VolumesFrom maps which contain "sourceContainer" (name of the container that has the volumes to mount) and "readOnly" (whether the container can write to the volume)'),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    sourceContainer = string\\n    readOnly        = bool\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"links"),(0,l.kt)("td",{parentName:"tr",align:null},"List of container names this container can communicate with without port mappings"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_depends_on"),(0,l.kt)("td",{parentName:"tr",align:null},"The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed. The condition can be one of START, COMPLETE, SUCCESS or HEALTHY"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    containerName = string\\n    condition     = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_image"),(0,l.kt)("td",{parentName:"tr",align:null},"The image used to start the container. Images in the Docker Hub registry available by default"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of cpu units to reserve for the container. This is optional for tasks using Fargate launch type and the total amount of container_cpu of all containers in a task will need to be lower than the task-level cpu value"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map_environment"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment variables to pass to the container. This is a map of string: {key: value}. map_environment overrides environment"),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linux_parameters"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more details, see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LinuxParameters.html"},"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LinuxParameters.html")),(0,l.kt)("td",{parentName:"tr",align:null},"object({\\n    capabilities = object({\\n      add  = list(string)\\n      drop = list(string)\\n    })\\n    devices = list(object({\\n      containerPath = string\\n      hostPath      = string\\n      permissions   = list(string)\\n    }))\\n    initProcessEnabled = bool\\n    maxSwap            = number\\n    sharedMemorySize   = number\\n    swappiness         = number\\n    tmpfs = list(object({\\n      containerPath = string\\n      mountOptions  = list(string)\\n      size          = number\\n    }))\\n  })"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secrets"),(0,l.kt)("td",{parentName:"tr",align:null},"The secrets to pass to the container. This is a list of maps"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    name      = string\\n    valueFrom = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mount_points"),(0,l.kt)("td",{parentName:"tr",align:null},"Container mount points. This is a list of maps, where each map should contain ",(0,l.kt)("inlineCode",{parentName:"td"},"containerPath"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sourceVolume")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"readOnly")),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    containerPath = string\\n    sourceVolume  = string\\n    readOnly      = bool\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dns_servers"),(0,l.kt)("td",{parentName:"tr",align:null},"Container DNS servers. This is a list of strings specifying the IP addresses of the DNS servers"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"container_memory_reservation"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of memory (in MiB) to reserve for the container. If container needs to exceed this threshold, it can do so up to the set container_memory hard limit"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"essential"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines whether all other containers in a task are stopped, if this container fails or stops for any reason. Due to how Terraform type casts booleans in json it is required to double quote this value"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"command"),(0,l.kt)("td",{parentName:"tr",align:null},"The command that is passed to the container"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"environment_files"),(0,l.kt)("td",{parentName:"tr",align:null},"One or more files containing the environment variables to pass to the container. This maps to the --env-file option to docker run. The file must be hosted in Amazon S3. This option is only available to tasks using the EC2 launch type. This is a list of maps"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    value = string\\n    type  = string\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);