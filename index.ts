import { createSelector } from 'reselect';
export interface State {
    a: string;
    b: number;
}
export const selector = createSelector<State, string, number, { out: string }>(
    state => state.a,
    state => state.b,
    (a, b) => {
        return {
            out: `${a}+${b}`
        };
    }
);
console.log(selector({ a: 'string', b: 5 }));