---
layout: post
excerpt: Blog
title: 'Println() function and Strings em Go'
description: 'Discover how to work with the Println() function and with strings in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, println function, println, function, strings, string, post'
date: 2022-04-19
categories: [Go]
---

In this post, you will learn how to work with the `Println()` function and with strings so that you can use that same knowledge and thus evolve.

- the `Println()` function prints all its content on the command line and re-lines it (then we have the `Print()` function that doesn't wrap lines and the `Printf()` function that puts values in certain places - of course we will use this last method during the series, and at this point I'll explain better the working of this function - `Printf()`);
- a string is a set of characters (letters, numbers and/or symbols);
- all strings are initialized and ended with quotes ("string");
- the escaped character is `\` and aims to make the character that follows part of the string.
- you can increment (join the contents of the various strings) with a comma.

```go
package main

import "fmt"

func main() {
	fmt.Println("We are using the Println() function and I am a string.")
	fmt.Println("Maria said that Miguel was \"sick\".") // Maria said that Miguel was "sick".
	fmt.Println("Caffeine", "Algorithm") // Caffeine Algorithm
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/cCq9DRRNX5A" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/cCq9DRRNX5A){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220419/funcao-print-e-strings-em-go/){:target="\_blank"}.

### _Happy coding!_
