const express = require('express');
const app = express()
app.set('view engine','ejs')

app.get('/', (req, res) => {
	const code = `
Sharing code is a good thing, and it should be _really_ easy to do it.
A lot of times, I want to show you something I'm seeing - and that's where we
use pastebins.
	
Haste is the prettiest, easiest to use pastebin ever made.`
	res.render("code-display", {code });
});

app.listen(3000)