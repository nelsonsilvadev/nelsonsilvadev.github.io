---
layout: post
excerpt: Blog
title: 'Math Class in Java'
description: 'Discover how to work with the Math class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, math class, math, class, post'
date: 2022-03-28
categories: [Java]
---

In this post, you will learn how to work with the Math class so that you can use that same knowledge and thus evolve.

- this class is intended to provide constants and static methods for working with trigonometric, logarithmic and other common mathematical methods.

`sin (variable)` | Calculate the sine
`cos (variable)` | Calculate the cosine
`tan (variable)` | Calculate the tangent
`floor (variable)` | Remove decimal value from given number
`ceil (variable)` | Round the given number to the next
`abs (variable)` | Returns the absolute value of the given number
`sqrt (variable)` | Returns the square root of the given number
`pow (variableA, variableB)` | Multiplies its initial value multiple times (depending on the number of times)

```java
package com.caffeinealgorithm.programminginjava;

public class MathClass {
  public void Run() {
    System.out.printf("Result of the sin() method: %.2f\n", Math.sin(10.5));
    System.out.printf("Result of the cos() method: %.2f\n", Math.cos(10.5));
    System.out.printf("Result of the tan() method: %.2f\n", Math.tan(10.5));
    System.out.printf("Result of the floor() method: %.2f\n", Math.floor(10.5));
    System.out.printf("Result of the ceil() method: %.2f\n", Math.ceil(10.5));
    System.out.printf("Result of the abs() method: %.2f\n", Math.abs(-10.5));
    System.out.printf("Result of the sqrt() method: %.2f\n", Math.sqrt(9));
    System.out.printf("Result of the pow() method: %.2f", Math.pow(2, 5));
  }
}

/*
  Result of the sin() method: -0.88
  Result of the cos() method: -0.48
  Result of the tan() method: 1.85
  Result of the floor() method: 10.00
  Result of the ceil() method: 11.00
  Result of the abs() method: 10.50
  Result of the sqrt() method: 3.00
  Result of the pow() method: 32.00
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/cpzjF8rXdI0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/cpzjF8rXdI0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-math-em-java/){:target="\_blank"}.

### _Happy coding!_
