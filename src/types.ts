//this will contain all the custom types required for this project

export type TSummaryTable = {
    field:string,
    category:string,
    amount:number,
    date: Date
    id:number,

}

export type TDonutChartData = {
    
}
export type TokenData = {
    email: string;
    token_type: string;
    exp: number;   
    iat: number;   
    jti: string;   
    user_id: number;
    token: string; 
  }
  type PieChartDataKey = 'incomeLabels' | 'incomeValues' | 'expenseLabels' | 'expenseValues';

  export type PieChartDataT = Record<PieChartDataKey, any[]>;
  