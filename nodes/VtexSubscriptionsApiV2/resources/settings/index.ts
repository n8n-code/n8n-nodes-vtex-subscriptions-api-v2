import type { INodeProperties } from 'n8n-workflow';

export const settingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					]
				}
			},
			"options": [
				{
					"name": "Get Settings",
					"value": "Get Settings",
					"action": "Get Subscriptions Settings",
					"description": "Lists the current Subscriptions settings in your store.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings"
						}
					}
				},
				{
					"name": "Edit Settings",
					"value": "Edit Settings",
					"action": "Edit Subscriptions settings",
					"description": "Edits Subscriptions settings in your store.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Settings"
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
						"Settings"
					],
					"operation": [
						"Get Settings"
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
						"Settings"
					],
					"operation": [
						"Get Settings"
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
						"Settings"
					],
					"operation": [
						"Get Settings"
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
						"Settings"
					],
					"operation": [
						"Get Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
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
						"Settings"
					],
					"operation": [
						"Edit Settings"
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
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Default Sla",
			"name": "defaultSla",
			"type": "string",
			"default": null,
			"description": "Default delivery method.",
			"routing": {
				"send": {
					"property": "defaultSla",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Delivery Channels",
			"name": "deliveryChannels",
			"type": "json",
			"default": "\"delivery\"",
			"description": "Array containing delivery channels.",
			"routing": {
				"send": {
					"property": "deliveryChannels",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Execution Hour In Utc",
			"name": "executionHourInUtc",
			"type": "number",
			"default": 9,
			"description": "Indicates the time future subscription orders will be generated.",
			"routing": {
				"send": {
					"property": "executionHourInUtc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Multiple Installments Enabled On Creation",
			"name": "isMultipleInstallmentsEnabledOnCreation",
			"type": "boolean",
			"default": false,
			"description": "Defines whether or not multiple installments are enabled when a subscription is created.",
			"routing": {
				"send": {
					"property": "isMultipleInstallmentsEnabledOnCreation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Multiple Installments Enabled On Update",
			"name": "isMultipleInstallmentsEnabledOnUpdate",
			"type": "boolean",
			"default": false,
			"description": "Defines whether or not multiple installments are enabled when a subscription is updated.",
			"routing": {
				"send": {
					"property": "isMultipleInstallmentsEnabledOnUpdate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Is Using V 3",
			"name": "isUsingV3",
			"type": "boolean",
			"default": true,
			"description": "Indicates whether or not Subscriptions V3 is enabled.",
			"routing": {
				"send": {
					"property": "isUsingV3",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Manual Price Allowed",
			"name": "manualPriceAllowed",
			"type": "boolean",
			"default": false,
			"description": "When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.",
			"routing": {
				"send": {
					"property": "manualPriceAllowed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "On Migration Process",
			"name": "onMigrationProcess",
			"type": "boolean",
			"default": false,
			"description": "Indicates whether or not the account is in the migration process to Subscriptions V3.",
			"routing": {
				"send": {
					"property": "onMigrationProcess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Order Custom Data App Id",
			"name": "orderCustomDataAppId",
			"type": "string",
			"default": null,
			"description": "When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.",
			"routing": {
				"send": {
					"property": "orderCustomDataAppId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Postpone Expiration",
			"name": "postponeExpiration",
			"type": "boolean",
			"default": false,
			"description": "Defines whether or not the expiration of subscriptions can be postponed.",
			"routing": {
				"send": {
					"property": "postponeExpiration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Random Id Generation",
			"name": "randomIdGeneration",
			"type": "boolean",
			"default": false,
			"description": "Defines whether or not the subscription order IDs will be randomly generated.",
			"routing": {
				"send": {
					"property": "randomIdGeneration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sla Option",
			"name": "slaOption",
			"type": "string",
			"default": "NONE",
			"description": "Delivery method.",
			"routing": {
				"send": {
					"property": "slaOption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Use Item Price From Original Order",
			"name": "useItemPriceFromOriginalOrder",
			"type": "boolean",
			"default": false,
			"description": "When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.",
			"routing": {
				"send": {
					"property": "useItemPriceFromOriginalOrder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Workflow Version",
			"name": "workflowVersion",
			"type": "string",
			"default": "1.1",
			"description": "Workflow version.",
			"routing": {
				"send": {
					"property": "workflowVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Edit Settings"
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
						"Settings"
					],
					"operation": [
						"Edit Settings"
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
						"Settings"
					],
					"operation": [
						"Edit Settings"
					]
				}
			}
		},
];
