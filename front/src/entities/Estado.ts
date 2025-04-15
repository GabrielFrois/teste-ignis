export class Estado {
    id: number;
    estado: number;
    area: any; // geometry(polygon, 4326)
  
    constructor(id: number, estado: number, area: any) {
      this.id = id;
      this.estado = estado;
      this.area = area;
    }
  }
  