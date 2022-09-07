class state {
    constructor(ongole, chittor) {
        this.dist_ongole = ongole;
        this.dist_chittor = chittor
    }
}
class andhrapradesh extends state {
    constructor(ongole, mandals, villages, chittor) {
        super(ongole, chittor);
        this.dist_pamur = mandals;
        this.dist_tirupati = villages

    }
}
let c1 = new andhrapradesh("gokulam", "veligandla", " kanigiri", "darsi")
console.log(c1)
class praveen extends state{
    constructor(ongole,mandals, villages, chittor,nellore){
        super(ongole,chittor)
        this.dist_palamaner=mandals
        this.dist_tirupati=villages
        this.dist_nellore=nellore
    }
    
}
let c2=new  praveen('ongole','mandals', 'villages', 'chittor','nellore')
console.log(c2)
