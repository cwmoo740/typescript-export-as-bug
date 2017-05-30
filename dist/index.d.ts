export interface State {
    a: string;
    b: number;
}
export declare const selector: Reselect.OutputSelector<State, {
    out: string;
}, (res1: string, res2: number) => {
    out: string;
}>;
