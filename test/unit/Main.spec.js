import Main from '../../src/Main.js'

describe('Main.', () => {

	test('Main fn', () => {
		Main.init()
		expect(2 + 2).toBe(4)
	})

})