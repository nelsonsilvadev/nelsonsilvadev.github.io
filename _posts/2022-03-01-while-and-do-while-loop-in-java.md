---
layout: post
excerpt: Blog
title: 'while and do while Loop in Java'
description: 'Discover how to work with while and do while loop in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, while loop, do while loop, loop, while, do while, loops, post'
date: 2022-03-01
categories: [Java]
---

In this post, you will learn how to work with while and do while loop so that you can use that same knowledge and thus evolve.

- a cycle allows executing an instruction or a set of instructions several times;
- the while and the while loops loop (item) according to a given condition (it must be true);
- the difference between these two loops is that the while loop executes all its content at least once, whether the condition is true or false.

```java
package com.caffeinealgorithm.programminginjava;

public class WhileAndDoWhileLoop {
  public void Run() {
    int counter = 1;

    while (counter <= 10) {
      System.out.printf("[while] Counter: %d\n", counter);
      counter++;
    }

    counter = 1;

    do {
      System.out.printf("[do while] Counter: %d\n", counter);
      counter++;
    } while (counter <= 10);
  }
}

/*
  [while] Counter: 1
  [while] Counter: 2
  [while] Counter: 3
  [while] Counter: 4
  [while] Counter: 5
  [while] Counter: 6
  [while] Counter: 7
  [while] Counter: 8
  [while] Counter: 9
  [while] Counter: 10
  [do while] Counter: 1
  [do while] Counter: 2
  [do while] Counter: 3
  [do while] Counter: 4
  [do while] Counter: 5
  [do while] Counter: 6
  [do while] Counter: 7
  [do while] Counter: 8
  [do while] Counter: 9
  [do while] Counter: 10
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/KxWKMHwKJVc" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/KxWKMHwKJVc){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/ciclo-while-e-do-while-em-java/){:target="\_blank"}.

### _Happy coding!_
