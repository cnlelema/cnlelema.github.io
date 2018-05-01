var PhnStr = "T2kwcElFTmhiR3dnYldVZ1lYUWdOelUzTFRNek1pMDJNRFEySUNBNkxTa0sK"
var EmlStr = "T2kwcElFTnZiblJoWTNRZ2JXVWdkbWxoSUd4dFlUQXpJQ2hoZENrZ1pXMWhhV3d1ZDIwdVpXUjFJQ0E2TFNrSwo="

var PhnStrZh = "T2kwcElDc3hMVGMxTnkwek16SXROakEwTmlBZ09pMHBDZz09Cg=="
var EmlStrZh = "T2kwcElDQnNiV0V3TXlBb1lYUXBJR1Z0WVdsc0xuZHRMbVZrZFNBZ09pMHBDZz09Cg=="

function getB64D(EStr){
      return atob(EStr)
}

function getPhn(){
     return atob(getB64D(PhnStr))
}
function getEml(){
     return atob(getB64D(EmlStr))
}


function getPhnZh(){
     return atob(getB64D(PhnStrZh))
}
function getEmlZh(){
     return atob(getB64D(EmlStrZh))
}



