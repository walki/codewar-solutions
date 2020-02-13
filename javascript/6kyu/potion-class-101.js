class Potion {
    constructor( col, vol ){
      this.color = col;
      this.volume = vol;
    }
    
    mix( other ){
      let mixedVol = this.volume + other.volume;
      let mixedCol = [ Math.ceil( ( this.color[0] * this.volume + other.color[0] * other.volume ) / mixedVol ),
                       Math.ceil( ( this.color[1] * this.volume + other.color[1] * other.volume ) / mixedVol ),
                       Math.ceil( ( this.color[2] * this.volume + other.color[2] * other.volume ) / mixedVol ) ];
      return new Potion( mixedCol, mixedVol );
    }
  }