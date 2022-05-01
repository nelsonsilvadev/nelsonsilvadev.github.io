---
layout: post
excerpt: Blog
title: 'Arrays in Go'
description: 'Discover how to work with arrays in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, arrays, array, post'
date: 2021-09-23
categories: [Go]
---

In this post, you will learn how to work with arrays so that you can use that same knowledge and thus evolve.

- an array (vector) has a fixed size and is used to store a set of data in a sequential way;
- it is more useful to think of an array as a set of variables of the same type in which they are adjacently placed in memory;
- these variables are called elements and each of these is identified by an index.

```go
package main

import "fmt"

func main() {
	var colors [5]string

	colors[0] = "Blue"
	colors[1] = "Green"
	colors[2] = "Yellow"
	colors[3] = "Red"
	colors[4] = "Orange"

	colors = [...]string { "Branco", "Green", "Yellow", "Red", "Orange" }

	fmt.Printf("Number of colors: %d\n", len(colors)) // Number of colors: 5
	fmt.Printf("First cor: %s\n", colors[0]) // First cor: Blue
	fmt.Printf("Last cor: %s", colors[len(colors) - 1]) // Last cor: Orange
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/PrK3pN6geso" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/PrK3pN6geso){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220429/arrays-em-go/){:target="\_blank"}.

### _Happy coding!_
