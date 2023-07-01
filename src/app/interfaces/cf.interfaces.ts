
export interface CFSectionPayload {
	id: string
	section: string
	haveSubSection: boolean
	supervisionFormId?: string
	CFSubSections: CFSubSectionPayload[]
	CFQSections: CFQSectionPayload[]
}

export interface CFSubSectionPayload {
	id: string
	section: string
	target: any
	CFSectionId: string
	CFQSubSections: CFQsubSectionPayload[]
}

export interface CFQsubSectionPayload {
	id: string
	question: string
	type: string
	CFSubSectionId: string
}

export interface CFQSectionPayload {
	id: string
	question: string
	type: string
	CFSectionId: string
}