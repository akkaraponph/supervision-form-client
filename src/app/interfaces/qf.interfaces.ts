import { APIResponse } from "./api.interfaces"

export interface QFPayload {
	id: string
	question: string
	supervisionFormId?: string
}

export type QFResponse = APIResponse<QFPayload>