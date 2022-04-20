---
layout: post
excerpt: Blog
title: 'Arithmetic Operators in Go'
description: 'Discover how to work with arithmetic operators in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, arithmetic operators, arithmetic, operators, post'
date: 2022-04-20
categories: [Go]
---

In this post, you will learn how to work with arithmetic operators so that you can use that same knowledge and thus evolve.

`+` | Addition
`-` | Subtraction
`*` | Multiplication
`/` | Division
`%` | Rest

```go
package main

import "fmt"

func main() {
	fmt.Println("Addition:", (10 + 10)) // Addition: 20
	fmt.Println("Subtraction:", (10.5 - 5.5 - 4.5)) // Subtraction: 0.5
	fmt.Println("Multiplication:", (-10 * 2)) // Multiplication: -20
	fmt.Println("Division:", (10 / 10)) // Division: 1.0
	fmt.Println("Rest:", (8 % 2)) // Rest: 0
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/PUpojD6_Swo" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/PUpojD6_Swo){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220420/operadores-aritmeticos-em-go/){:target="\_blank"}.

### _Happy coding!_
