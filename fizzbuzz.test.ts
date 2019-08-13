// const fizzbuzz = require('./js');
import {
	isFizzy,
	isBuzzy,
	fizzyBuzzy,
	fizzBuzz,
	FIZZ,
	BUZZ,
	FIZZBUZZ,
} from './fizzbuzz'

test('sanity check', () => {});


test('isFizzy()', () => {
	expect(isFizzy(4)).toBe(false)
	expect(isFizzy(0)).toBe(true)
	expect(isFizzy(3)).toBe(true)
})


test('isBuzzy()', () => {
	expect(isBuzzy(8)).toBe(false)
	expect(isBuzzy(0)).toBe(true)
	expect(isBuzzy(5)).toBe(true)
})


test('fizzyBuzzy()', () => {
	expect(fizzyBuzzy(0)).toBe('fizzbuzz')
	expect(fizzyBuzzy(12)).toBe('fizz')
	expect(fizzyBuzzy(100)).toBe('buzz')
	expect(fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('fizzBuzz()', () => {
	const primeFizz = {
		count: 3,
		fizz: 1,
		buzz: 0,
		fizzBuzz: 0
	}
	const primeBuzz = {
		count: 5,
		fizz: 1,
		buzz: 1,
		fizzBuzz: 0
	}
	const primeFizzBuzz = {
		count: 15,
		fizz: 4,
		buzz: 2,
		fizzBuzz: 1
	}
	expect(fizzBuzz(3)).toEqual(primeFizz)
	expect(fizzBuzz(5)).toEqual(primeBuzz)
	expect(fizzBuzz(15)).toEqual(primeFizzBuzz)
})
