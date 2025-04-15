export class Risco {
    id: number;
    data: Date;
    geometria: any; // geometry(point, 4326)
    estado_id: number;
    bioma_id: number;
  
    constructor(id: number, data: Date, geometria: any, estado_id: number, bioma_id: number) {
      this.id = id;
      this.data = data;
      this.geometria = geometria;
      this.estado_id = estado_id;
      this.bioma_id = bioma_id;
    }
  }
  