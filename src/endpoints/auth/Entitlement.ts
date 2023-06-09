import {ValorantEndpoint} from '../../ValorantEndpoint'
import {z} from 'zod'

export const entitlementEndpoint = {
    name: 'Entitlement',
    description: 'Get entitlement for remote requests with a token',
    category: 'Authentication Endpoints',
    type: 'other',
    suffix: 'https://entitlements.auth.riotgames.com/api/token/v1',
    method: 'POST',
    headers: new Map([
        ['Content-Type', 'application/json'],
    ]),
    riotRequirements: {
        token: true
    },
    responses: {
        '200': z.object({
            entitlements_token: z.string()
        })
    }
} as const satisfies ValorantEndpoint

export type EntitlementResponse = z.input<typeof entitlementEndpoint.responses['200']>