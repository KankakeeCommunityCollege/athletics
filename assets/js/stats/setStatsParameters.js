let sheetParams = {}; // The thing we are here for
const path = window.location.pathname;
// Conditions
const urlIsBaseball = path.search('/baseball') !== -1;
const urlIsMensBasketball = path.search('/mens-basketball') !== -1;
const urlIsWomensSoccer = path.search('/womens-soccer') !== -1;
const urlIsSoccer = path.search('/soccer') !== -1;
const urlIsWomensBasketball = path.search('/womens-basketball') !== -1;
const urlIsSoftball = path.search('/softball') !== -1;
const urlIsVolleyball = path.search('/volleyball') !== -1;
const urlIsStats = path.search('/stats') !== -1;
// Sheet Keys
const baseballStatsId = '1CjI-KFAmasBUipURvXRtGuu6kWYbrNmo49VPeg7d6Os';
const mensBasketballStatsId = '1zBMYYFRJLLgUu9XKR8voz37o5Nz1dMVAdfy3cj3W_PI';
const womensSoccerStatsId = '1kh9ordjrIok0lrh8hcl8vE6TFUJIORU4T-sC_UC4STQ';
const soccerStatsId = '1CR7waySsJVjNEq7OuWGA7y1-FXWnE4hsvybYUg9l8cw';
const softballStatsId = '1qZHyYT_fJE6jajEUjFJK8Z8yKYbu76YnJ9ec3Vzk-KM';
const volleyballStatsId = '1tzACDaWtF9Vohd20ooWsTxSyRaAxAKvpnvxmoO6biAI';
const womensBasketballStatsId = '1-RkDZ4YpX4XGFvOL7jgXuCm_rLD843NjzPoWJ-Otnf8';

function setId(i) {
  sheetParams.spreadsheetId = i;
}

function setRange(r) {
  sheetParams.ranges = r;
}

function setStatsId() {
  urlIsBaseball ? setId(baseballStatsId)
  : urlIsMensBasketball ? setId(mensBasketballStatsId)
  : urlIsWomensSoccer ? setId(womensSoccerStatsId)
  : urlIsSoccer ? setId(soccerStatsId)
  : urlIsWomensBasketball ? setId(womensBasketballStatsId)
  : urlIsSoftball ? setId(softballStatsId)
  : urlIsVolleyball ? setId(volleyballStatsId)
  : null;
}

function setParams(r) {
  setStatsId();
  setRange(r);
}

function setStatsParameters(rangeArray) {

  setParams(rangeArray);

  //console.log(sheetParams);
  return sheetParams;
}
//
//  USAGE:
//    const sheetParams = setSheetParameters();
//
export default setStatsParameters;
