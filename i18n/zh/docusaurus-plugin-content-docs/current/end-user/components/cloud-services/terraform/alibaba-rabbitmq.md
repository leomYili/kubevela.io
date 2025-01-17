---
title:  阿里云 RABBITMQ
---

## 描述

Create a RabbitMQ based on Terraform module in Ali cloud

## 参数说明


### 属性

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 virtual_host_name | VirtualHostName. | string | false |  
 binding_type | The specification of the binding type. | string | false |  
 instance_name | The specification of module name. | string | false |  
 max_tps | The specification of the peak TPS traffic. | number | false |  
 queue_capacity | The specification of the queue capacity. | number | false |  
 exchange_type | The specification of the exchange type. | string | false |  
 internal | The specification of the internal. | bool | false |  
 instance_id | The instance_id used to RabbitMQ. If 'create' is true, the 'instance ID' is invalid.If 'create' is false,you must specify an existing instance by setting 'instance_id'. | string | false |  
 queue_name | The name of the queue. | string | false |  
 auto_delete_state | The specification of the auto delete state. | bool | false |  
 payment_type | The specification of the payment type. | string | false |  
 modify_type | The modify type.It is required when updating other attributes. | string | false |  
 argument | The specification of the argument. | string | false |  
 instance_type | The specification of the instance type. | string | false |  
 support_eip | The specification of support EIP. | bool | false |  
 max_eip_tps | The specification of the max eip tps. | number | false |  
 exchange_name | The name of the exchange. | string | false |  
 name | (Deprecated from version 1.1.0) The specification of module name. | string | false |  
 period | The specification of the period. | number | false |  
 create | Whether to create instance. If false, you can specify an existing instance by setting 'instance_id'. | bool | false |  
 writeConnectionSecretToRef | The secret which the cloud resource connection will be written to | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false |  


#### writeConnectionSecretToRef

 名称 | 描述 | 类型 | 是否必须 | 默认值 
 ------------ | ------------- | ------------- | ------------- | ------------- 
 name | The secret name which the cloud resource connection will be written to | string | true |  
 namespace | The secret namespace which the cloud resource connection will be written to | string | false |  
