class state {
    constructor(ongole, chittor) {
        this.dist_ongole = ongole;
        this.dist_chittor = chittor
    }
}
class andhrapradesh extends state {
    constructor(ongole, mandals, villages, chittor) {
        super(ongole, chittor);
        this.dist_palamaner = mandals;
        this.dist_tirupati = villages

    }
}
let c1 = new andhrapradesh("gokulam", "veligandla", " kanigiri", "darsi")
console.log(c1)
