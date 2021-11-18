class Mobilku {
    constructor(tipe, tahun) {
        this.tipe = tipe;
        this.tahun = tahun;
    }
    usiaMobil() {
        let date = new Date();
        return date.getFullYear() - this.tahun;
    }
}

let mobilPertama = new Mobilku("Ford", 2014);

console.log("Mobilku usianya " + mobilPertama.usiaMobil() + " tahun lamanya.");