---
layout: post
excerpt: Blog
title: 'Assignment Operators in Java'
description: 'Discover how to work with assignment operators in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, assignment operators, assignment, operators, post'
date: 2022-02-11
categories: [Java]
---

In this post, you will learn how to work with assignment operators so that you can use that same knowledge and thus evolve.

`a += 2` | `a = a + 2`
`b -= 2` | `b = b - 2`
`c *= 2` | `c = c * 2`
`d /= 2` | `d = d / 2`
`e %= 2` | `e = e % 2`

```java
package com.caffeinealgorithm.programminginjava;

public class AssignmentOperators {
  public void Run() {
    int x = 2;

    x += 3;
    System.out.println("x = x + 3: " + x); // x = x + 3: 5

    x -= 2;
    System.out.println("x = x - 2: " + x); // x = x - 2: 3

    x *= 2;
    System.out.println("x = x * 2: " + x); // x = x * 2: 6

    x /= 2;
    System.out.println("x = x / 2: " + x); // x = x / 2: 3

    x %= 3;
    System.out.println("x = x % 3: " + x); // x = x % 3: 0
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/GQVf0VwJh9c" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/GQVf0VwJh9c){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/operadores-de-atribuicao-em-java/){:target="\_blank"}.

### _Happy coding!_
