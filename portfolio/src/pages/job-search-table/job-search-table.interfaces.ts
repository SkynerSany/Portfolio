export interface IResponse {
  "title": string,
  "requirements": string[],
  "responseTime": string,
  "date": string,
  "result": string,
  "feedback": string[]
};

export interface ICompany {
  "name": string,
  "date": string,
  "responses": IResponse[]
}