export class Bioma {
    id: number;
    bioma: number;
    area: any; // geometry(polygon, 4326)
  
    constructor(id: number, bioma: number, area: any) {
      this.id = id;
      this.bioma = bioma;
      this.area = area;
    }
  }
  