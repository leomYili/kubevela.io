---
title:  阿里云 REMOTE-BACKEND
---

## 描述

Deploy remote backend storage in Aliyun based on Terraform module

## 参数说明


### 属性

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 create_backend_bucket | Boolean.  If you have a OSS bucket already, use that one, else make this true and one will be created |  | false |  
 backend_oss_bucket | Name of OSS bucket prepared to hold your terraform state(s). If not set, the module will craete one with prefix `terraform-remote-backend` |  | false |  
 encrypt_state | Boolean. Whether to encrypt terraform state. |  | false |  
 state_path | The path directory of the state file will be stored. Examples: dev/frontend, prod/db, etc.. |  | false |  
 state_name | The name of the state file. Examples: dev/tf.state, dev/frontend/tf.tfstate, etc.. |  | false |  
 create_ots_lock_instance | Boolean:  If you have a OTS instance already, use that one, else make this true and one will be created |  | false |  
 create_ots_lock_table | Boolean:  If you have a ots table already, use that one, else make this true and one will be created |  | false |  
 backend_ots_lock_table | OTS table to hold state lock when updating. If not set, the module will craete one with prefix `terraform-remote-backend` |  | false |  
 state_acl | Canned ACL applied to bucket. |  | false |  
 region | The region used to launch this module resources. |  | false |  
 backend_ots_lock_instance | The name of OTS instance to which table belongs. |  | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
