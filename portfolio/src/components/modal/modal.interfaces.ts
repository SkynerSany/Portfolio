import { ICompany, IResponse } from "../../pages/job-search-table/job-search-table.interfaces"

export interface IModal {
  type: 'company' | 'responces', 
  show: boolean, 
  handleClose: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  data: ICompany
}

export interface IModalCompany {
  companyName: string
}