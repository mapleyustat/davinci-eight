declare class Euclidean3 {
    public w: number;
    public x: number;
    public y: number;
    public z: number;
    public xy: number;
    public yz: number;
    public zx: number;
    public xyz: number;
    /**
    * Constructs a Euclidean3 from its components.
    */
    constructor(w: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, xyz: number);
    static fromCartesian(w: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, xyz: number): Euclidean3;
    static fromObject(self?: {
        w?: number;
        x?: number;
        y?: number;
        z?: number;
        xy?: number;
        yz?: number;
        zx?: number;
        xyz?: number;
    }): Euclidean3;
    public coordinates(): number[];
    public coordinate(index: number): number;
    public add(rhs: Euclidean3): Euclidean3;
    public sub(rhs: Euclidean3): Euclidean3;
    public mul(rhs: any): Euclidean3;
    public div(rhs: any): Euclidean3;
    public wedge(rhs: Euclidean3): Euclidean3;
    public lshift(rhs: Euclidean3): Euclidean3;
    public rshift(rhs: Euclidean3): Euclidean3;
    public grade(index: number): Euclidean3;
    public dot(vector: Euclidean3): number;
    public cross(vector: Euclidean3): Euclidean3;
    public length(): number;
    public norm(): Euclidean3;
    public quad(): Euclidean3;
    public sqrt(): Euclidean3;
    public toString(): string;
    public toStringIJK(): string;
    public toStringLATEX(): string;
}
export = Euclidean3;
