---
layout: post
excerpt: Blog
title: 'More about Strings in Go'
description: 'Discover how to work with something more about strings in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, strings, string, post'
date: 2022-04-26
categories: [Go]
---

In this post, you will learn how to work with something more about strings so that you can use that same knowledge and thus evolve.

`\n` | New line
`\t` | New tab (indentation)
`len(variavel)` | Returns the number of characters (in case of a string)
`strings.ToUpper()` | Turns all letters present in the string into uppercase letters
`strings.ToLower()` | Turns all letters present in the string into lowercase letters
`Printf()` | Places values in certain locations

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	firstName, lastName := "Nelson", "Silva"
	age := 25

	fmt.Println("Name:", strings.ToUpper(firstName), strings.ToLower(lastName), "\nAge:", age)

	fmt.Printf("Name: %s %s\nAge: %d", firstName, lastName, age)

  /*
    Name: NELSON silva
    Idade: 25
    Name: Nelson Silva
    Idade: 25
  */
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/4xldTbYwVcM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/4xldTbYwVcM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220426/mais-sobre-as-strings-em-go/){:target="\_blank"}.

### _Happy coding!_
