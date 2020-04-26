let data = [
  {
    Id: "",
    SB: "CNG",
    SI: "596",
    FN: "Công ty cổ phần CNG Việt Nam",
    TD: "08/01/2020",
    ST: "2",
    CL: 26600,
    FL: 23200,
    RE: 24500,
    CP: 24900,
    CV: 0,
    CH: 400,
    TT: 1580,
    TV: 39000000,
    AP: 24683.5,
    OP: 24900,
    HI: 24900,
    LO: 24900,
    FB: 410,
    FS: 0,
    FR: 7636390,
    FO: 13230000,
    TO: 0,
    TB: 0,
    PP: 0,
    SS: " | | | | | | ",
    P1: "",
    PMQ: 0,
    PMP: 0,
    PTQ: 0,
    PTV: 0,
    FC: "10",
    P2: "",
    OI: "",
    OIC: "",
    FTD: "",
    LTD: "        ",
    ULS: "        ",
    B3: 23500,
    V3: 4300,
    B2: 23600,
    V2: 4000,
    B1: 24500,
    V1: 9370,
    S1: 24850,
    U1: 400,
    S2: 24900,
    U2: 850,
    S3: 24950,
    U3: 3610,
    TSI: "",
    LS: "27000000",
    CWT: " ",
    EX: "HOSE",
    EP: "0",
    ER: "           ",
    IN: "                         ",
    MD: "        ",
  },
  {
    Id: "",
    SB: "VIS",
    SI: "3809",
    FN: "Công ty Cổ phần Thép Việt Ý",
    TD: "08/01/2020",
    ST: "2",
    CL: 25450,
    FL: 22150,
    RE: 23800,
    CP: 23800,
    CV: 0,
    CH: 0,
    TT: 350,
    TV: 8000000,
    AP: 22857.1,
    OP: 23800,
    HI: 23800,
    LO: 23800,
    FB: 0,
    FS: 350,
    FR: 19069000,
    FO: 73830400,
    TO: 0,
    TB: 0,
    PP: 0,
    SS: " | | | | | | ",
    P1: "",
    PMQ: 0,
    PMP: 0,
    PTQ: 0,
    PTV: 0,
    FC: "10",
    P2: "",
    OI: "",
    OIC: "",
    FTD: "",
    LTD: "        ",
    ULS: "        ",
    B3: 23000,
    V3: 1200,
    B2: 23300,
    V2: 1100,
    B1: 23500,
    V1: 1000,
    S1: 23800,
    U1: 4660,
    S2: 24000,
    U2: 50,
    S3: 24100,
    U3: 50,
    TSI: "",
    LS: "73830393",
    CWT: " ",
    EX: "HOSE",
    EP: "0",
    ER: "           ",
    IN: "                         ",
    MD: "        ",
  },
];

const actionTypes = {
  GET_STOCKS: "GET_STOCKS",
  CHANGE_STOCKS: "CHANGE_STOCKS",
};

export const getStocks = () => ({
  type: actionTypes.GET_STOCKS,
});

export const changeStocks = () => ({
  type: actionTypes.CHANGE_STOCKS,
});

const stocks = (state = data, action) => {
  switch (action.type) {
    case actionTypes.GET_STOCKS:
      return { ...state };
    case actionTypes.CHANGE_STOCKS:
      data[0].B2 = data[0].B2 + 1000;
      data[1].B2 = data[1].B2 - 1000;
      return { ...data };
    default:
      return state;
  }
};

export default stocks;
