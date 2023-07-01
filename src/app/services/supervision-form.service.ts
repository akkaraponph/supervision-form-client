import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ISchool } from '../interfaces/schools';
import { SupervisionFormArrayResponse, SupervisionFormPayload, SupervisionFormTypeArrayResponse, YearArraySupervisionFormResponse } from '../interfaces/supervision-form.interfaces';
import { SupervisionFormTypePayload } from './../interfaces/supervision-form.interfaces';

@Injectable({
	providedIn: 'root'
})
export class SupervisionFormService {

	private APPENDPONT: string;

	private SERVICE_ENDPOINT: string;

	constructor(private http: HttpClient) {

		this.APPENDPONT = environment.endpoint;
		this.SERVICE_ENDPOINT = 'api/supervision_forms';


	}


	getYearArraySupervisionForm(): Observable<YearArraySupervisionFormResponse> {
		const response = this.http.get<YearArraySupervisionFormResponse>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}/year`);
		return response;
	}

	getAllSupervisionFormType(): Observable<SupervisionFormTypeArrayResponse> {
		const response = this.http.get<SupervisionFormTypeArrayResponse>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}/types`);
		return response;
	}

	getAllSupervisionForm(query: {
		year: string,
		term: string,
	}): Observable<SupervisionFormArrayResponse> {
		console.log("------------------")
		console.log(query)
		if (query.year && query.term) {
			const response = this.http.get<SupervisionFormArrayResponse>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}?year=${query.year}&term=${query.term}`);
			return response;
		} else {
			const response = this.http.get<SupervisionFormArrayResponse>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}`);
			return response;

		}
	}


	//   AddSchool(schools: ISchool): Observable<void> {
	//     return this.http.post<void>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}`, schools);
	//   }

	//   DeleteSchool(id: number): Observable<void> {
	//     return this.http.delete<void>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}${id}`);
	//   }

	//   GetSchool(id: number): Observable<any> {
	//     return this.http.get<any>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}${id}`);
	//   }

	//   UpdateSchool(id: number, schools: ISchool): Observable<void> {
	//     return this.http.put<void>(`${this.APPENDPONT}${this.SERVICE_ENDPOINT}${id}`, schools);
	//   }
}
