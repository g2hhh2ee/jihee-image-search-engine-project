import debounce from '../utils/debounce';

jest.useFakeTimers();

describe('test debounce function', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
        func = jest.fn();
        debouncedFunc = (ms) => debounce(func, ms);
    });

    test('execute only once', () => {
        for (let i = 0; i < 100; i++) debouncedFunc(100);
        jest.runAllTimers();
        expect(func).toBeCalledTimes(1); // 상태
    });
});