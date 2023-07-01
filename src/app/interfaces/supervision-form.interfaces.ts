import { APIResponse, } from "./api.interfaces"
import { CFSectionPayload } from "./cf.interfaces"
import { QFPayload } from "./qf.interfaces"
import { RSFSectionPayload } from "./rsf.interfaces"

export interface YearArraySupervisionFormResponse {
	msg: string
	payload: string[]	  
}


export interface SupervisionFormTypePayload {
	id: string
	type: string
	name: string
	formType: string
	created_at: string
	updated_at: string
}
export type SupervisionFormTypeArrayResponse = APIResponse<SupervisionFormTypePayload[]>
export type SupervisionFormTypeResponse = APIResponse<SupervisionFormTypePayload>



export interface SupervisionFormPayload {
	id: string
	name: string
	detail: string
	term: string
	year: string
	suggestion: string
	supervisorName: string
	supervisionFormTypeId?: string
	created_at: string
	updated_at: string
	SupervisionFormType: SupervisionFormTypePayload
	RSFSections: RSFSectionPayload[]
	CFSections: CFSectionPayload[]
	QFs: QFPayload[]
}

export type SupervisionFormArrayResponse = APIResponse<SupervisionFormPayload[]>
export type SupervisionFormResponse = APIResponse<SupervisionFormPayload>
