import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { subscriptionsDescription } from './resources/subscriptions';
import { subscriptionGroupDescription } from './resources/subscription-group';
import { reportDescription } from './resources/report';
import { settingsDescription } from './resources/settings';

export class VtexSubscriptionsApiV2 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-subscriptions-api-v2',
		name: 'N8nDevVtexSubscriptionsApiV2',
		icon: { light: 'file:./vtex-subscriptions-api-v2.svg', dark: 'file:./vtex-subscriptions-api-v2.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'VTEX Subscriptions REST API Documentation',
		defaults: { name: 'vtex-subscriptions-api-v2' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexSubscriptionsApiV2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Subscriptions",
					"value": "Subscriptions",
					"description": ""
				},
				{
					"name": "Subscription Group",
					"value": "Subscription Group",
					"description": ""
				},
				{
					"name": "Report",
					"value": "Report",
					"description": ""
				},
				{
					"name": "Settings",
					"value": "Settings",
					"description": ""
				}
			],
			"default": ""
		},
		...subscriptionsDescription,
		...subscriptionGroupDescription,
		...reportDescription,
		...settingsDescription
		],
	};
}
