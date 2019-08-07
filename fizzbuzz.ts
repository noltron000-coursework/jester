export const FIZZ = 'fizz'
export const BUZZ = 'buzz'
export const FIZZBUZZ = 'fizzbuzz'

interface FizziumBuzzord {
	count: number,
	fizz: number,
	buzz: number, 
	fizzBuzz: number,
}

// returns true when n is divisible by 3.
export const isFizzy = (n:number):boolean => {
	return n % 3 === 0
}

// returns true when n is divisible by 5.
export const isBuzzy = (n:number):boolean => {
	return n % 5 === 0
}

// returns FIZZ, BUZZ, or FIZZBUZZ
// when a number is divisible by 3, 5, or both.
export const fizzyBuzzy = (n:number):string => {
	let result = ''
	if (isFizzy(n)) { result += FIZZ }
	if (isBuzzy(n)) { result += BUZZ }
	return result
}

// returns an object describing sequences of fizz buzz counts.
export const fizzBuzz = (count:number):FizziumBuzzord => {
	let result = {
		count: count,
		fizz: 0,
		buzz: 0, 
		fizzBuzz: 0
	}
	for (let i = 1; i <= count; i += 1) {
		const str = fizzyBuzzy(i)
		switch(str) {
			case FIZZ:
				result.fizz += 1
				break
			case BUZZ:
				result.buzz += 1
				break
			case FIZZBUZZ:
				result.fizzBuzz += 1
				break
		}
	}
	return result
}
