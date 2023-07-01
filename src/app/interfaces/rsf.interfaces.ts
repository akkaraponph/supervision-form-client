
export interface RSFSectionPayload {
	id: string
	type: string
	supervisionFormId?: string
	RSFQuestions: RSFQuestionPayload[]
}



export interface RSFQuestionPayload {
	id: string
	question: string
	RSFSectionId: string
}


