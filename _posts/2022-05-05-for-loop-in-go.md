---
layout: post
excerpt: Blog
title: 'for Loop in Go'
description: 'Discover how to work with the for loop in the Go programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'go, golang, for loop, for, loop, loops, post'
date: 2022-05-05
categories: [Go]
---

In this post, you will learn how to work with the for loop so that you can use that same knowledge and thus evolve.

- a cycle allows executing an instruction or a set of instructions several times;
- there are three types of a for cycle and it loops (iterates) according to a given range and/or a given condition (it must be true);
- it's important to know that an infinite loop happens whenever a certain condition doesn't stop being true and this boils down to a loop that keeps on iterating.

```go
package main

import "fmt"

func main() {
	// schoolSupplies := [...]string { "Backpack", "Case", "Pencil", "Eraser", "Sharpen", "Scissors" }

	/*
    fmt.Println(schoolSupplies[0]);
	  fmt.Println(schoolSupplies[1]);

    for index := 0; index < len(schoolSupplies); index++ {
		  fmt.Printf("schoolSupplies[%d]: %s\n", index, schoolSupplies[index])

	  for index, schoolSupply := range schoolSupplies {
		  fmt.Printf("schoolSupplies[%d]: %s\n", index, schoolSupply)
	  }
  */

	number := 1

	for (number <= 10) {
		fmt.Printf("Number: %d\n", number)
		number++
	}
}

/*
  Number: 1
  Number: 2
  Number: 3
  Number: 4
  Number: 5
  Number: 6
  Number: 7
  Number: 8
  Number: 9
  Number: 10
/*
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/w7hXnuh5G2E" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/w7hXnuh5G2E){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220505/ciclo-for-em-go/){:target="\_blank"}.

### _Happy coding!_
