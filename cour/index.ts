interface Fac {
  name: string;
  id: [number, boolean | any];
  role: Catg;
}

enum Catg {
  EPERT,
  MEDIUM,
  BAZIC,
}
console.log(Catg.BAZIC);

const Fac1: Fac = {
  name: "je suis",
  id: [78, 78],
  role: Catg.EPERT,
};
if (Fac1.role === Catg.EPERT) {
  console.log("C'est un Expert");
}
