---
layout: post
excerpt: Blog
title: 'Variables em Go'
description: 'Discover how to work with integer, decimal (float32 e float64), string, char and boolean variables in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, variables, variable, integer, decimal, float, string, char, boolean, post'
date: 2022-04-21
categories: [Go]
---

In this post, you will learn how to work with integer, decimal (float32 e float64), string, char and boolean variables so that you can use that same knowledge and thus evolve.

- a variable is an object (a position located in memory) that represents a value or an expression;
- in some of the existing programming languages it is necessary to define the variable type and in others it is not, however, in the Go programming language you can choose to make such a definition or not (there is a possibility that the variable type is automatically detected depending on its content);
- types of variables: integer, decimal (float32 and float64), string, boolean and a few more.

```go
package main

import "fmt"

func main() {
	var integer int = 10
	var _string string = "I am a string."
	var withoutType = "I continue to be a string."

	decimal := 10.5
	boolean := true

	fmt.Println("integer:", integer) // integer: 10
	fmt.Println("string:", _string) // string: I am a string.
	fmt.Println("without type:", withoutType) // without type: I continue to be a string.
	fmt.Println("decimal:", decimal) // decimal: 10.5
	fmt.Println("boolean:", boolean) // boolean: true
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/DrlftMQf8jw" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/DrlftMQf8jw){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/variaveis-em-go/){:target="\_blank"}.

### _Happy coding!_
