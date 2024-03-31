"use strict";
var Catg;
(function (Catg) {
    Catg[Catg["EPERT"] = 0] = "EPERT";
    Catg[Catg["MEDIUM"] = 1] = "MEDIUM";
    Catg[Catg["BAZIC"] = 2] = "BAZIC";
})(Catg || (Catg = {}));
console.log(Catg.BAZIC);
const Fac1 = {
    name: "je suis",
    id: [78, 78],
    role: Catg.EPERT,
};
if (Fac1.role === Catg.EPERT) {
    console.log("C'est un Expert");
}
