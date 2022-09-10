---
layout: post
excerpt: Blog
title: 'User Input (bufio) in Go'
description: 'Discover how to work with the user input (bufio) in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, user input, user, input, bufio, post'
date: 2022-04-28
categories: [Go]
---

In this post, you will learn how to work with the user input (bufio) so that you can use that same knowledge and thus evolve.

- the bufio library in conjunction with the function `NewReader()` and the function `ReadString()` have as main objective "extract" information given by the user;
- in short, this same junction serves to increase interaction with it;

```go
package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
)

func main() {
	userInput := bufio.NewReader(os.Stdin)

	fmt.Print("Enter your first name: ")
	firstName, _ := userInput.ReadString('\n')

	fmt.Print("Enter your last name: ")
	lastName, _ := userInput.ReadString('\n')

	fmt.Print("Enter your age: ")
	age, _ := userInput.ReadString('\n')

	/*
		CR+LF -> \r\n
		CR -> \r
		LF -> \n
	*/

	fmt.Printf("Name: %s %s\nAge: %s",
						 strings.ReplaceAll(firstName, "\r\n", ""),
						 strings.ReplaceAll(lastName, "\r\n", ""),
						 strings.ReplaceAll(age, "\r\n", ""))
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/3HDVH40ZR2w" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/3HDVH40ZR2w){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/input-do-utilizador-bufio-em-go/){:target="\_blank"}.

### _Happy coding!_
