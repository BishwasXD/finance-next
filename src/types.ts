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
  
  export type ReportDataT = {
    total_transactions: number,
    total_income: number,
    total_expense:number,
    net_balance:number
    top_income_cat: {
      category:string
      amount:number
    }
    top_expense_cat:{
      category:string
      amount:number
    }
  }