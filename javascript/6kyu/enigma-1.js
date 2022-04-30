class Plugboard{

    connection = {};

    constructor(wires){
        for (let i = 0; i < wires.length; i += 2) {
            this.connection[wires[i]] = wires[i+1];
            this.connection[wires[i+1]] = wires[i];
        }
    }

    process(wire){
        return this.connection[wire] ? this.connection[wire] : wire;
    }
}

module.exports = Plugboard;