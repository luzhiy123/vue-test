
import * as menu from './tempdata/menu'

const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

var cityGuess = () => setpromise(menu.guesscity);

export {cityGuess}