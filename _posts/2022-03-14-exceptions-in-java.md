---
layout: post
excerpt: Blog
title: 'Exceptions in Java'
description: 'Discover how to work with exceptions in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, exceptions, exception, post'
date: 2022-03-14
categories: [Java]
---

In this post, you will learn how to work with exceptions so that you can use that same knowledge and thus evolve.

- an exception is an event that occurs during the execution of a piece of code that interrupts its normal flow of instructions;
- in short, an exception represents an error;
- the try executes the entire piece of code present in itself and automatically passes to the catch;
- the catch checks the result of what was executed inside the try and transmits what is contained in it (most of the time the exception itself);
- the finally is executed whether there is any exception or not.

```java
package com.caffeinealgorithm.programminginjava;

public class Exceptions {
  public void Run() {
    int[] numbers = new int[] {
        1, 2, 3, 4, 5
    };

    try {
      System.out.printf("Element content: %d\n", numbers[4]);
    } catch (Exception exception) {
      // System.out.println("The code in the try is not working correctly.");
      System.out.println(exception);
    }
    finally {
      System.out.println("I am part of the finally and I'm executed if there is any exception or not.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/RqbnpHEBZgc" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/RqbnpHEBZgc){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220314/excecoes-em-java/){:target="\_blank"}.

### _Happy coding!_
