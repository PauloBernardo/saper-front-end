import { sum } from './utils';
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 4 + (-8) to equal -4', () => {
    expect(sum(4, -8)).toBe(-4);
});