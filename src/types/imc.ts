export type LevelImc = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[];
    yourImc?: number;
}