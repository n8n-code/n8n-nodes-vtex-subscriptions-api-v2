import type { INodeProperties } from 'n8n-workflow';

export const reportDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					]
				}
			},
			"options": [
				{
					"name": "Getreportstatusby ID",
					"value": "Getreportstatusby ID",
					"action": "Get report status by ID",
					"description": "Retrieves the Subscription's report status, filtering by its reportId.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/report/reportStatus/{{$parameter[\"reportId\"]}}"
						}
					}
				},
				{
					"name": "Requestreportbydate",
					"value": "Requestreportbydate",
					"action": "Retrieve Subscription report by date",
					"description": "Retrieves a report with the subscriptions created at the date interval requested",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/report/subscriptionsByDate"
						}
					}
				},
				{
					"name": "Requestreportby Status",
					"value": "Requestreportby Status",
					"action": "Retrieve Subscription report by Status",
					"description": "Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/report/subscriptionsByStatus"
						}
					}
				},
				{
					"name": "Requestreportbyorderdate",
					"value": "Requestreportbyorderdate",
					"action": "Retrieve Subscription report by order date",
					"description": "Retrieves a report regarding the Subscriptions created during the date interval of orders.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/report/subscriptionsOrderByDate"
						}
					}
				},
				{
					"name": "Requestreportbyschedule",
					"value": "Requestreportbyschedule",
					"action": "Retrieve Subscription report by schedule",
					"description": "Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/report/subscriptionsScheduled"
						}
					}
				},
				{
					"name": "Requestreportbyupdate",
					"value": "Requestreportbyupdate",
					"action": "Request report by update",
					"description": "Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/report/subscriptionsUpdated"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /report/reportStatus/{reportId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Getreportstatusby ID"
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
						"Report"
					],
					"operation": [
						"Getreportstatusby ID"
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
						"Report"
					],
					"operation": [
						"Getreportstatusby ID"
					]
				}
			}
		},
		{
			"displayName": "Report Id",
			"name": "reportId",
			"required": true,
			"description": "Report ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Getreportstatusby ID"
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
						"Report"
					],
					"operation": [
						"Getreportstatusby ID"
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
						"Report"
					],
					"operation": [
						"Getreportstatusby ID"
					]
				}
			}
		},
		{
			"displayName": "GET /report/subscriptionsByDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbydate"
					]
				}
			}
		},
		{
			"displayName": "Requester Email",
			"name": "requesterEmail",
			"required": true,
			"description": "Email that the report will be sent to",
			"default": "user@vtex.com.br",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requesterEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbydate"
					]
				}
			}
		},
		{
			"displayName": "Begin Date",
			"name": "beginDate",
			"required": true,
			"description": "begin date of report interval, use format yyyyMMdd",
			"default": 20190101,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "beginDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbydate"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "end date of report interval, use format yyyyMMdd",
			"default": 20190701,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbydate"
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
						"Report"
					],
					"operation": [
						"Requestreportbydate"
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
						"Report"
					],
					"operation": [
						"Requestreportbydate"
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
						"Report"
					],
					"operation": [
						"Requestreportbydate"
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
						"Report"
					],
					"operation": [
						"Requestreportbydate"
					]
				}
			}
		},
		{
			"displayName": "GET /report/subscriptionsByStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportby Status"
					]
				}
			}
		},
		{
			"displayName": "Requester Email",
			"name": "requesterEmail",
			"required": true,
			"description": "Email that the report will be sent to",
			"default": "user@vtex.com.br",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requesterEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportby Status"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"required": true,
			"description": "Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportby Status"
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
						"Report"
					],
					"operation": [
						"Requestreportby Status"
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
						"Report"
					],
					"operation": [
						"Requestreportby Status"
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
						"Report"
					],
					"operation": [
						"Requestreportby Status"
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
						"Report"
					],
					"operation": [
						"Requestreportby Status"
					]
				}
			}
		},
		{
			"displayName": "GET /report/subscriptionsOrderByDate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
					]
				}
			}
		},
		{
			"displayName": "Requester Email",
			"name": "requesterEmail",
			"required": true,
			"description": "Email that the report will be sent to",
			"default": "user@vtex.com.br",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requesterEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
					]
				}
			}
		},
		{
			"displayName": "Begin Date",
			"name": "beginDate",
			"required": true,
			"description": "begin date of report interval, use format yyyyMMdd",
			"default": 20190101,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "beginDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "end date of report interval, use format yyyyMMdd",
			"default": 20190701,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyorderdate"
					]
				}
			}
		},
		{
			"displayName": "GET /report/subscriptionsScheduled",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
					]
				}
			}
		},
		{
			"displayName": "Requester Email",
			"name": "requesterEmail",
			"required": true,
			"description": "Email that the report will be sent to",
			"default": "user@vtex.com.br",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requesterEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
					]
				}
			}
		},
		{
			"displayName": "Begin Date",
			"name": "beginDate",
			"required": true,
			"description": "begin date of report interval, use format yyyyMMdd",
			"default": 20190101,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "beginDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "end date of report interval, use format yyyyMMdd",
			"default": 20190701,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
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
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
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
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
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
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
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
						"Report"
					],
					"operation": [
						"Requestreportbyschedule"
					]
				}
			}
		},
		{
			"displayName": "GET /report/subscriptionsUpdated",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
					]
				}
			}
		},
		{
			"displayName": "Requester Email",
			"name": "requesterEmail",
			"required": true,
			"description": "Email that the report will be sent to",
			"default": "user@vtex.com.br",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requesterEmail",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
					]
				}
			}
		},
		{
			"displayName": "Begin Date",
			"name": "beginDate",
			"required": true,
			"description": "begin date of report interval, use format yyyyMMdd",
			"default": 20190101,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "beginDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"required": true,
			"description": "end date of report interval, use format yyyyMMdd",
			"default": 20190701,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
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
						"Report"
					],
					"operation": [
						"Requestreportbyupdate"
					]
				}
			}
		},
];
