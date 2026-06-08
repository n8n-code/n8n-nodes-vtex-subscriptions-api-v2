import type { INodeProperties } from 'n8n-workflow';

export const subscriptionGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					]
				}
			},
			"options": [
				{
					"name": "Get Allsubscriptiongroup",
					"value": "Get Allsubscriptiongroup",
					"action": "List All subscription groups",
					"description": "Retrieves all subscription groups in your store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group"
						}
					}
				},
				{
					"name": "Getsubscriptiongrouplist",
					"value": "Getsubscriptiongrouplist",
					"action": "Get subscription group list",
					"description": "Retrieves a list of Subscription groups in your store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/list"
						}
					}
				},
				{
					"name": "Get Nextpurchase",
					"value": "Get Nextpurchase",
					"action": "Get Next purchase",
					"description": "Lists details of a given subscription group's next purchase, filtering by dateStr.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/nextPurchase/{{$parameter[\"dateStr\"]}}"
						}
					}
				},
				{
					"name": "Get Simulatebysubscription Group",
					"value": "Get Simulatebysubscription Group",
					"action": "Get Simulation by subscription-group",
					"description": "Retrieves Subscription simulations, filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/simulate/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Get Subscriptionbygroup Id",
					"value": "Get Subscriptionbygroup Id",
					"action": "Get Subscription by groupId",
					"description": "Lists Subscription details, filtering by `groupId`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Update Subscriptionbygroup Id",
					"value": "Update Subscriptionbygroup Id",
					"action": "Update Subscription by groupId",
					"description": "Updates a Subscription by `groupId`.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "Additemsubscription Group Id",
					"value": "Additemsubscription Group Id",
					"action": "Add Subscription item by groupId",
					"description": "Adds an SKU to a given Subscription, filtering by groupId.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/additem"
						}
					}
				},
				{
					"name": "Getaddressesbygroup Id",
					"value": "Getaddressesbygroup Id",
					"action": "Get addresses by groupId",
					"description": "Lists addresses linked to a given Subscription group, filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/addresses"
						}
					}
				},
				{
					"name": "Insert Addressesbygroup Id",
					"value": "Insert Addressesbygroup Id",
					"action": "Insert Addresses by groupId",
					"description": "Insert address information of a given Subscription group, filtering by groupId.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/addresses"
						}
					}
				},
				{
					"name": "Cancel Subscriptionbygroup Id",
					"value": "Cancel Subscriptionbygroup Id",
					"action": "Cancel Subscription by groupId",
					"description": "Cancels Subscription by `groupId`",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/cancel"
						}
					}
				},
				{
					"name": "Get Configsubscriptionsgroup",
					"value": "Get Configsubscriptionsgroup",
					"action": "List Subscription group's Configuration",
					"description": "Retrieves details about a given subscription group's configuration, filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/config"
						}
					}
				},
				{
					"name": "Get Conversation Messagebygroup Id",
					"value": "Get Conversation Messagebygroup Id",
					"action": "Get Conversation Message by groupId",
					"description": "Retrieves the conversation of a given Subscription group, filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/conversation-message"
						}
					}
				},
				{
					"name": "Getfrequencyoptionsbygroup Id",
					"value": "Getfrequencyoptionsbygroup Id",
					"action": "Get frequency options by groupId",
					"description": "Lists frequency options of a given Subscription group, filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/frequency-options"
						}
					}
				},
				{
					"name": "Getpayment Systembygroup Id",
					"value": "Getpayment Systembygroup Id",
					"action": "Get payment System by groupId",
					"description": "Retrieves payment system's information of a given Subscription group, filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/payment-systems"
						}
					}
				},
				{
					"name": "Getwillcreatebygroup Id",
					"value": "Getwillcreatebygroup Id",
					"action": "List 'Will create' by groupId",
					"description": "Retrieves Subscription groups listed as 'will create', filtering by groupId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions-group/{{$parameter[\"groupId\"]}}/will-create"
						}
					}
				},
				{
					"name": "Retrysubscriptionbygroup Id",
					"value": "Retrysubscriptionbygroup Id",
					"action": "Retry subscription by groupId",
					"description": "Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions-group/{{$parameter[\"groupid\"]}}/instances/{{$parameter[\"instanceId\"]}}/retry"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /subscriptions-group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Allsubscriptiongroup"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Allsubscriptiongroup"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Allsubscriptiongroup"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Allsubscriptiongroup"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Allsubscriptiongroup"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getsubscriptiongrouplist"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getsubscriptiongrouplist"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getsubscriptiongrouplist"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getsubscriptiongrouplist"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getsubscriptiongrouplist"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/nextPurchase/{dateStr}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Nextpurchase"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Nextpurchase"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Nextpurchase"
					]
				}
			}
		},
		{
			"displayName": "Date Str",
			"name": "dateStr",
			"required": true,
			"description": "Reference date that retrieves all next purchases, starting from the dateStr inserted. Must be in the format of {{yyyyMMdd}}",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Nextpurchase"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Nextpurchase"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Nextpurchase"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/simulate/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Simulatebysubscription Group"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Simulatebysubscription Group"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Simulatebysubscription Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Simulatebysubscription Group"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Simulatebysubscription Group"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Simulatebysubscription Group"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscriptions-group/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Skipped",
			"name": "isSkipped",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "isSkipped",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Item",
			"name": "item",
			"type": "json",
			"default": "[\n  {\n    \"SubscriptionId\": \"string\",\n    \"createdAt\": \"2019-06-20T18:27:41.23Z\",\n    \"cycleCount\": 0,\n    \"endpoint\": \"string\",\n    \"isSkipped\": true,\n    \"lastUpdate\": \"2019-06-20T18:27:41.23Z\",\n    \"metadata\": [\n      {\n        \"name\": \"string\",\n        \"properties\": {\n          \"additionalProp1\": \"string\",\n          \"additionalProp2\": \"string\",\n          \"additionalProp3\": \"string\"\n        }\n      }\n    ],\n    \"originalItemIndex\": 0,\n    \"originalOrderId\": \"string\",\n    \"priceAtSubscriptionDate\": 0,\n    \"quantity\": 0,\n    \"sellingPrice\": 0,\n    \"sku\": {\n      \"detailUrl\": \"string\",\n      \"id\": \"string\",\n      \"imageUrl\": \"string\",\n      \"name\": \"string\",\n      \"nameComplete\": \"string\",\n      \"productName\": \"string\"\n    },\n    \"status\": \"ACTIVE\"\n  }\n]",
			"description": "",
			"routing": {
				"send": {
					"property": "item",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Metadata",
			"name": "metadata",
			"type": "json",
			"default": "[\n  {\n    \"name\": \"string\",\n    \"properties\": {\n      \"additionalProp1\": \"string\",\n      \"additionalProp2\": \"string\",\n      \"additionalProp3\": \"string\"\n    }\n  }\n]",
			"description": "",
			"routing": {
				"send": {
					"property": "metadata",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Plan",
			"name": "plan",
			"type": "json",
			"default": "{\n  \"frequency\": {\n    \"interval\": 0,\n    \"periodicity\": \"string\"\n  },\n  \"type\": \"string\",\n  \"validity\": {\n    \"begin\": \"2019-07-04T14:40:30.819Z\",\n    \"end\": \"2019-07-04T14:40:30.819Z\"\n  }\n}",
			"routing": {
				"send": {
					"property": "plan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Purchase Settings",
			"name": "purchaseSettings",
			"type": "json",
			"default": "{\n  \"currencyCode\": \"string\",\n  \"paymentMethod\": {\n    \"paymentAccountId\": \"string\",\n    \"paymentSystem\": \"string\"\n  },\n  \"purchaseDay\": \"string\",\n  \"salesChannel\": \"string\",\n  \"selectedSla\": \"string\",\n  \"seller\": \"string\"\n}",
			"routing": {
				"send": {
					"property": "purchaseSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shipping Address",
			"name": "shippingAddress",
			"type": "json",
			"default": "{\n  \"additionalComponents\": [\n    {\n      \"longName\": \"string\",\n      \"shortName\": \"string\",\n      \"types\": [\n        \"string\"\n      ]\n    }\n  ],\n  \"addressId\": \"string\",\n  \"addressName\": \"string\",\n  \"addressType\": \"string\",\n  \"city\": \"string\",\n  \"complement\": \"string\",\n  \"country\": \"string\",\n  \"formattedAddress\": \"string\",\n  \"geoCoordinate\": [\n    0\n  ],\n  \"neighborhood\": \"string\",\n  \"number\": \"string\",\n  \"postalCode\": \"string\",\n  \"receiverName\": \"string\",\n  \"reference\": \"string\",\n  \"state\": \"string\",\n  \"street\": \"string\"\n}",
			"routing": {
				"send": {
					"property": "shippingAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Update Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions-group/{groupId}/additem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Endpoint",
			"name": "endpoint",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endpoint",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Price At Subscription Date",
			"name": "priceAtSubscriptionDate",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "priceAtSubscriptionDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Quantity",
			"name": "quantity",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "quantity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Selling Price",
			"name": "sellingPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "sellingPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sku",
			"name": "sku",
			"type": "json",
			"default": "{\n  \"detailUrl\": \"string\",\n  \"id\": \"string\",\n  \"imageUrl\": \"string\",\n  \"name\": \"string\",\n  \"nameComplete\": \"string\",\n  \"productName\": \"string\"\n}",
			"routing": {
				"send": {
					"property": "sku",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Additemsubscription Group Id"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getaddressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getaddressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getaddressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getaddressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getaddressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getaddressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions-group/{groupId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Additional Components",
			"name": "additionalComponents",
			"type": "json",
			"default": "[\n  {\n    \"longName\": \"string\",\n    \"shortName\": \"string\",\n    \"types\": [\n      \"string\"\n    ]\n  }\n]",
			"description": "",
			"routing": {
				"send": {
					"property": "additionalComponents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address Id",
			"name": "addressId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address Name",
			"name": "addressName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address Type",
			"name": "addressType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "addressType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Complement",
			"name": "complement",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "complement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country",
			"name": "country",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "country",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Formatted Address",
			"name": "formattedAddress",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "formattedAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Geo Coordinate",
			"name": "geoCoordinate",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "",
			"routing": {
				"send": {
					"property": "geoCoordinate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Neighborhood",
			"name": "neighborhood",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "neighborhood",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Postal Code",
			"name": "postalCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "postalCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Receiver Name",
			"name": "receiverName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "receiverName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "State",
			"name": "state",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Insert Addressesbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscriptions-group/{groupId}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Cancel Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Cancel Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Cancel Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Cancel Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Cancel Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Cancel Subscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Configsubscriptionsgroup"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Configsubscriptionsgroup"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Configsubscriptionsgroup"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Configsubscriptionsgroup"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Configsubscriptionsgroup"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Configsubscriptionsgroup"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}/conversation-message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Conversation Messagebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Conversation Messagebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Conversation Messagebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Conversation Messagebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Conversation Messagebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Get Conversation Messagebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}/frequency-options",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getfrequencyoptionsbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getfrequencyoptionsbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getfrequencyoptionsbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getfrequencyoptionsbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getfrequencyoptionsbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getfrequencyoptionsbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}/payment-systems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getpayment Systembygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getpayment Systembygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getpayment Systembygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getpayment Systembygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getpayment Systembygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getpayment Systembygroup Id"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions-group/{groupId}/will-create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getwillcreatebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getwillcreatebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getwillcreatebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getwillcreatebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getwillcreatebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Getwillcreatebygroup Id"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions-group/{groupid}/instances/{instanceId}/retry",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Groupid",
			"name": "groupid",
			"required": true,
			"description": "Group ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Instance Id",
			"name": "instanceId",
			"required": true,
			"description": "Instance ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Type of the content being sent.",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscription Group"
					],
					"operation": [
						"Retrysubscriptionbygroup Id"
					]
				}
			}
		},
];
