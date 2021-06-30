import { renderHook, act } from '@testing-library/react-hooks';
import useFormInput from './useFormInput';

describe('Testing useFormInput custom hook', () => {
	test('Should have "test" as initial value', () => {
		const { result } = renderHook(() => useFormInput('test'));

		expect(result.current.value).toBe('test');
	});

	test('Should change value to "onchange"', () => {
		const { result } = renderHook(() => useFormInput('test'));
		const e = {
			target: {
				value: 'onchange',
			},
		};

		expect(result.current.value).toBe('test');

		act(() => result.current.onChange(e));

		expect(result.current.value).toBe('onchange');
	});

	test('Should value be defined', () => {
		const { result } = renderHook(() => useFormInput('0'));

		expect(result.current.value).toBeDefined();
	});

	test('Should value be undefined', () => {
		const { result } = renderHook(() => useFormInput());

		expect(result.current.value).toBeUndefined();
	});

	test('Should onChange be a function', () => {
		const { result } = renderHook(() => useFormInput());

		expect(typeof result.current.onChange).toBe('function');
	});

	test('Should value start undefined, but become defined on change', () => {
		const { result } = renderHook(() => useFormInput());
		const e = {
			target: {
				value: 'test',
			},
		};

		expect(result.current.value).toBeUndefined();

		act(() => result.current.onChange(e));

		expect(result.current.value).toBeDefined();
	});
});