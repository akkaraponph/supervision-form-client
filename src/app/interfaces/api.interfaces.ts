export interface APIResponse<T> {
	msg: string;
	meta?: Meta;
	payload: T;
  }
  
export interface Meta {
	totalRecords: number
	totalPages: number
	currentPage: number
	nextPage: number
	nextLink: string
}