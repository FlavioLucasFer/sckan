import { renderHook, act } from '@testing-library/react-hooks';

import useFormInput from 'core/hooks/useFormInput';

describe('Testing useFormInput core custom hook', () => {
	it('should have "test" as initial value', () => {
		const { result } = renderHook(() => useFormInput('test'));

		expect(result.current.value).toBe('test');
	});

	it('should change value to "onchange"', () => {
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

	it('should value be defined', () => {
		const { result } = renderHook(() => useFormInput('0'));

		expect(result.current.value).toBeDefined();
	});

	it('should onChange be a function', () => {
		const { result } = renderHook(() => useFormInput());

		expect(typeof result.current.onChange).toBe('function');
	});
});