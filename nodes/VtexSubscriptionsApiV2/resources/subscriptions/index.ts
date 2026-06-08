import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					]
				}
			},
			"options": [
				{
					"name": "Getsubscriptionstocustomer",
					"value": "Getsubscriptionstocustomer",
					"action": "Retrieve customer's subscriptions",
					"description": "Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions"
						}
					}
				},
				{
					"name": "Get Subscription List",
					"value": "Get Subscription List",
					"action": "Get Subscription List",
					"description": "Retrieves a list of Subscriptions linked to your store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions/list"
						}
					}
				},
				{
					"name": "Getsubscriptionby Id",
					"value": "Getsubscriptionby Id",
					"action": "Retrieve subscription by ID",
					"description": "Lists Subscription's details, searching by `subscriptionId`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				},
				{
					"name": "Update Subscriptionsby Subscription Id",
					"value": "Update Subscriptionsby Subscription Id",
					"action": "Update Subscriptions by SubscriptionId",
					"description": "Update, add or alter information of a given Subscription, filtering by `subscriptionId`.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				},
				{
					"name": "Insert Addressesfor Subscription",
					"value": "Insert Addressesfor Subscription",
					"action": "Insert Addresses for Subscription",
					"description": "Inserts address's information to complement the Subscription details.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}/addresses"
						}
					}
				},
				{
					"name": "Cancel Subscriptionsby Subscription Id",
					"value": "Cancel Subscriptionsby Subscription Id",
					"action": "Cancel Subscriptions by SubscriptionId",
					"description": "Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}/cancel"
						}
					}
				},
				{
					"name": "Getfrequencyoptionsbysubscription Id",
					"value": "Getfrequencyoptionsbysubscription Id",
					"action": "Get frequency options by subscriptionId",
					"description": "Lists frequency options for the Subscription, filtering by `subscriptionId`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}/frequency-options"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionstocustomer"
					]
				}
			}
		},
		{
			"displayName": "Customer Id",
			"name": "customerId",
			"required": true,
			"description": "Customer ID.",
			"default": "user@vtex.com.br",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "customerId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionstocustomer"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionstocustomer"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionstocustomer"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionstocustomer"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionstocustomer"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Get Subscription List"
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
						"Subscriptions"
					],
					"operation": [
						"Get Subscription List"
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
						"Subscriptions"
					],
					"operation": [
						"Get Subscription List"
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
						"Subscriptions"
					],
					"operation": [
						"Get Subscription List"
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
						"Subscriptions"
					],
					"operation": [
						"Get Subscription List"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionby Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionby Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionby Id"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"description": "Subscription ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionby Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionby Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getsubscriptionby Id"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"description": "Subscription ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Item",
			"name": "item",
			"type": "json",
			"default": "{\n  \"endpoint\": \"string\",\n  \"priceAtSubscriptionDate\": 0,\n  \"quantity\": 0,\n  \"sellingPrice\": 0,\n  \"sku\": {\n    \"detailUrl\": \"string\",\n    \"id\": \"string\",\n    \"imageUrl\": \"string\",\n    \"name\": \"string\",\n    \"nameComplete\": \"string\",\n    \"productName\": \"string\"\n  }\n}",
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Update Subscriptionsby Subscription Id"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions/{subscriptionId}/addresses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"description": "Subscription ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
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
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
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
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"additionalComponents\": null,\n  \"addressId\": \"1234567890\",\n  \"addressName\": \"xt5353818181nhshs\",\n  \"addressType\": \"residential\",\n  \"city\": \"Rio de Janeiro\",\n  \"complement\": null,\n  \"country\": \"BRA\",\n  \"formattedAddress\": null,\n  \"geoCoordinate\": null,\n  \"neighborhood\": \"Barra da Tijuca\",\n  \"number\": \"1\",\n  \"postalCode\": \"22204-004\",\n  \"receiverName\": \"Fulano\",\n  \"reference\": null,\n  \"state\": \"RJ\",\n  \"street\": \"Avenida do Estado\"\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
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
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
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
						"Subscriptions"
					],
					"operation": [
						"Insert Addressesfor Subscription"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscriptions/{subscriptionId}/cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Cancel Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Cancel Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Cancel Subscriptionsby Subscription Id"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"description": "Subscription ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Cancel Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Cancel Subscriptionsby Subscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Cancel Subscriptionsby Subscription Id"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions/{subscriptionId}/frequency-options",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Getfrequencyoptionsbysubscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getfrequencyoptionsbysubscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getfrequencyoptionsbysubscription Id"
					]
				}
			}
		},
		{
			"displayName": "Subscription Id",
			"name": "subscriptionId",
			"required": true,
			"description": "Subscription ID.",
			"default": "1",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Getfrequencyoptionsbysubscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getfrequencyoptionsbysubscription Id"
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
						"Subscriptions"
					],
					"operation": [
						"Getfrequencyoptionsbysubscription Id"
					]
				}
			}
		},
];
