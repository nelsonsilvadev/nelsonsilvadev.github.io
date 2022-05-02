---
layout: post
excerpt: Blog
title: 'if, else if and else in Go'
description: 'Discover how to work with decisions (if, else if and else) in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, if, else if, else, conditions, condition, post'
date: 2022-05-02
categories: [Go]
---

In this post, you will learn how to work with decisions (if, else if and else) so that you can use that same knowledge and thus evolve.

```go
package main

import "fmt"

/*
  (if - if) condition is true {
    the code inside the if is executed
  }
  (else if - otherwise if) condition is true (else if only occurs if if condition is false) {
    code inside else if is executed
  }
  (else - if not) no condition (only occurs if condition of if and else if are false) {
    the code inside the else is executed
  }
*/

func main() {
	x := 30

	if x == 10 {
		fmt.Println("The value of x is equal to 10.")
	} else if x == 20 {
		fmt.Println("The value of x is equal to 20.")
	} else {
		fmt.Println("The value of x is different from 10 and 20.")
	}
}

// The value of x is different from 10 and 20.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/B8Lg8TbighI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/B8Lg8TbighI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220502/if-else-if-and-else-em-go/){:target="\_blank"}.

### _Happy coding!_
