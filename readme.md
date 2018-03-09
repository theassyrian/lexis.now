<h1 align="center">lexis.now</h1>

<p align="center">A minimal word counting service.</p>

---

<p align="center">
	<sub>Visit <a href="https://lexis.now.sh"><code>lexis.now.sh</code></a> for a live demo. Check out my <a href="https://nikolaskama.me">blog</a> and follow me on <a href="https://twitter.com/nikolaskama">Twitter</a>.</sub>
</p>


<br>

# Installation & Configuration

In order to run `lexis.now` localy, clone the repository and install all dependencies by running:

```
~ ❯❯❯ git clone https://github.com/k4m4/lexis.now
~ ❯❯❯ cd lexis.now/
~/lexis.now ❯❯❯ npm install
~/lexis.now ❯❯❯ npm start
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).


<br>

# Deployment

First, [download `now`](https://zeit.co/download):

```
~ ❯❯❯ npm install -g now
```

Then, run `now` from *within* the directory of `lexis.now`:

```
~/lexis.now ❯❯❯ now
```


<br>

# Credits

- The favicon is called [Right Align](https://thenounproject.com/search/?q=word%20counter&i=377289) by [Chameleon Design](https://thenounproject.com/Chamedesign)
- Most of the styling was adapted from [Evil Rabbit](https://twitter.com/evilrabbit_)'s [front site](https://github.com/evilrabbit/front).


<br>

# Related

- [lexis-cli](https://github.com/k4m4/lexis-cli) - Word counting made easy. Retrieve the number of words in a string or stdin. (CLI)
- [lexis-count](https://github.com/k4m4/lexis-count) - Retrieve the number of words in a string. (API)


<br>

# License

Copyright (c) 2018 by Nikolaos Kamarinakis. Some rights reserved.

`lexis.now` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).

For more information on this project you can go ahead and email me anytime at **nikolaskam{at}gmail{dot}com**.