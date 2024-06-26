// Sheet Keys
const schedulesSheetId = "13cd6P3Ze7bBJugzlQ2Uk2dFWc677wE68ghL94JZcnmI";
const rosterSheetId = "1odoxnNnm3ldZFpND9SDj6JhPXIct60FVJSFvcshX2aw";
const baseballStatsSheetId = '1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os';
const mensBasketballStatsSheetId = '1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI';
const womensSoccerStatsSheetId = '1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ';
const soccerStatsSheetId = '1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw';
const softballStatsSheetId = '1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM';
const volleyballStatsSheetId = '1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI';
const womensBasketballStatsSheetId = '1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8';
// Conditions
const path = window.location.pathname;
const urlIsBaseball = path.search('/baseball') !== -1;
const urlIsMensBasketball = path.search('/mens-basketball') !== -1;
const urlIsWomensSoccer = path.search('/womens-soccer') !== -1;
const urlIsSoccer = path.search('/soccer') !== -1;
const urlIsWomensBasketball = path.search('/womens-basketball') !== -1;
const urlIsSoftball = path.search('/softball') !== -1;
const urlIsVolleyball = path.search('/volleyball') !== -1;
const urlIsRoster = path.search('/roster') !== -1;
const urlIsSchedule = path.search('/schedule') !== -1;
const urlIsStats = path.search('/stats') !== -1;
const urlIsIndex = path === '/';

function setId(params, i) {
  return params.spreadsheetId = i;  // `spreadsheetId` setting is specific to Google Sheets API
}

function setRange(params, r) {
  return params.range = r;  // `range` setting is specific to Google Sheets API
}

function setStatParams(params) {
  setRange(params, []);  // This is to set the range to all data in all the sheets of the workbook
  return params.includeGridData = false;  // `includeGridData' setting is specific to Google Sheets API
}

function checkIds(params, i) {
  urlIsRoster ? setId(params, rosterSheetId)
  : urlIsSchedule ? setId(params, schedulesSheetId)
  : urlIsStats ? setStatsId(params)
  : setId(params, schedulesSheetId);

  return params;
}

function checkRanges(params, r) {
  urlIsRoster || urlIsSchedule ? setRange(params, r)
  : urlIsStats ? setStatParams(params)
  : urlIsIndex ? setRange(params, r + ' Current!A1:I15')
  : setRange(params, r + ' Current');

  return params;
}

function setStatsId(params) {
  urlIsBaseball ? setId(params, baseballStatsSheetId)
  : urlIsMensBasketball ? setId(params, mensBasketballStatsSheetId)
  : urlIsWomensSoccer ? setId(params, womensSoccerStatsSheetId)
  : urlIsSoccer ? setId(params, soccerStatsSheetId)
  : urlIsWomensBasketball ? setId(params, womensBasketballStatsSheetId)
  : urlIsSoftball ? setId(params, softballStatsSheetId)
  : urlIsVolleyball ? setId(params, volleyballStatsSheetId)
  : null;

  return params;
}

function setParams(params, r) {
  checkIds(params, r);
  checkRanges(params, r);

  return params;
}

function setSheetParameters() {
  let sheetParams = {}; // The thing we are here for

  urlIsBaseball ? setParams(sheetParams, 'Baseball')
  : urlIsMensBasketball ? setParams(sheetParams, 'Mens Basketball')
  : urlIsWomensBasketball ? setParams(sheetParams, 'Womens Basketball')
  : urlIsSoccer ? setParams(sheetParams, 'Soccer')
  : urlIsWomensSoccer ? setParams(sheetParams, 'Womens Soccer')
  : urlIsSoftball ? setParams(sheetParams, 'Softball')
  : urlIsVolleyball ? setParams(sheetParams, 'Volleyball')
  : setParams(sheetParams, 'All'); // Default option (for '/')
  return sheetParams;
}
//
//  USAGE:
//    const sheetParams = setSheetParameters();
//
export default setSheetParameters;
