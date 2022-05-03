---
layout: post
excerpt: Blog
title: 'Comparison Operators in Go'
description: 'Discover how to work with comparison operators in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, comparison operators, comparison, operators, post'
date: 2022-05-03
categories: [Go]
---

In this post, you will learn how to work with comparison operators so that you can use that same knowledge and thus evolve.

`==` | Equal
`!=` | Different
`>` | Greater
`<` | Smaller
`>=` | Greater and equal
`<=` | Smaller and equal
`and` | And
`or` | Or

```go
package main

import "fmt"

func main() {
	x := 10
	y := 20

	if (x <= y || x == y) {
		fmt.Println("This condition is true.")
	} else {
		fmt.Println("This condition is false.")
	}
}

// This condition is true.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/dvCuGh0SGv8" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/dvCuGh0SGv8){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220503/operadores-de-comparacao-em-go/){:target="\_blank"}.

### _Happy coding!_
