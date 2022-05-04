---
layout: post
excerpt: Blog
title: 'Switch in Go'
description: 'Discover how to work with switch in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, switch, conditions, condition, post'
date: 2020-05-04
categories: [Go]
---

In this post, you will learn how to work with switch so that you can use that same knowledge and thus evolve.

- the switch is another way of working with decisions and it can only check an equality relationship, that is, it cannot use comparison operators (and of course, note that there are two types of switch (by expression and/or by type) );
- the case compares what was defined in itself with the content of the argument that was defined in the switch;
- default is executed when the content of the argument that was defined in the switch is not found in any case.

```go
package main

import "fmt"

func main() {
	_case := "D"

	switch (_case) {
		case "A":
			fmt.Println("The case A exists.")
		case "B":
			fmt.Println("The case B exists.")
		case "C":
			fmt.Println("The case C exists.")
		default:
			fmt.Printf("The case %s does not exist.", _case)
	}
}

// The case D does not exist.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-MckZGlZX1A" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/-MckZGlZX1A){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220504/switch-em-go/){:target="\_blank"}.

### _Happy coding!_
