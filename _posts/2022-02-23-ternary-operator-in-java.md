---
layout: post
excerpt: Blog
title: 'Ternary Operator in Java'
description: 'Discover how to work with the ternary operator in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, ternary operator, ternary, operator, post'
date: 2022-02-23
categories: [Java]
---

In this post, you will learn how to work with the ternary operator so that you can use that same knowledge and thus evolve.

- the ternary operator (`?:`) serves to simplify a decision without having to use if or else.

```java
package com.caffeinealgorithm.programminginjava;

public class TernaryOperator {
  // (condition) ? condition is true : condition is false

  public void Run() {
    int age = 25;
    boolean isOfLegalAge;

    /*
      if (age >= 18)
        isOfLegalAge = true;
      else
        isOfLegalAge = false;
    */

    isOfLegalAge = (age >= 18) ? true : false;

    System.out.printf("Is of legal age: %b", isOfLegalAge);
  }
}

// Is of legal age: true
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/rCUwMA4JHHk" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/rCUwMA4JHHk){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/operador-ternario-em-java/){:target="\_blank"}.

### _Happy coding!_
