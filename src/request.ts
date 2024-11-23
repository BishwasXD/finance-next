
const BASE_URL = "https://trackmyfinance-production.up.railway.app/"
export const backendRequests = {
  loginUrl: `${BASE_URL}/accounts/login`,
  downloadCsvUrl: `${BASE_URL}/core/get-csv-file`,
  signUpUrl: `${BASE_URL}/accounts/register`,
  getLineChartDataUrl: `${BASE_URL}/core/get-line-chart`,
  getPieChartDataUrl: `${BASE_URL}/core/get-pie-chart`,
  getDonutChartDataUrl: `${BASE_URL}/core/get-donut-chart`,
  getTableSummaryData: `${BASE_URL}/core/get-summarytable-data`,
  addTransactions: `${BASE_URL}/core/add-transaction`,
  verifyTokenUrl: `${BASE_URL}/accounts/verify-token`,
  getSummaryCardDataUrl: `${BASE_URL}/core/get-summary-data`,
  getBarChartUrl: `${BASE_URL}/core/get-bar-chart`,
  editTransactionUrl: `${BASE_URL}/core/edit-transaction-data`,
  summaryReportUrl: `${BASE_URL}/core/get-report`
};
