import schools from '../data/schools.json';
import classes from '../data/classes.json';
import bac from '../data/bac.json';

export default defineEventHandler((event) => {
	return {
		school: schools[Math.floor(Math.random() * schools.length)],
		classes: classes[Math.floor(Math.random() * classes.length)],
		bac: bac[Math.floor(Math.random() * bac.length)],
	};
});
