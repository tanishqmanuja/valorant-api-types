import {ValorantEndpoint} from '../../../ValorantEndpoint'
import {z} from 'zod'
import {chatMessagesSchema} from '../../../commonTypes'

export const sendChatEndpoint = {
    name: 'Send Chat',
    description: 'Send a message to the specified group',
    category: ['Local Endpoints', 'Chat'] as string[],
    type: 'local',
    suffix: 'chat/v6/messages',
    method: 'POST',
    body: z.object({
        cid: z.string().describe('The conversation ID of the group to send the message to'),
        message: z.string(),
        type: z.enum(['groupchat', 'chat', 'system']).describe('Use `chat` for whispers, `groupchat` for group messages, and `system` for system messages'),
    }),
    riotRequirements: {
        localAuth: true
    },
    responses: {
        '200': chatMessagesSchema
    }
} as const satisfies ValorantEndpoint

export type SendChatResponse = z.input<typeof sendChatEndpoint.responses['200']>