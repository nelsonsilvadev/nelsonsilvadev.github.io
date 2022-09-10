---
layout: post
excerpt: Blog
title: 'Common Mistakes in Java'
description: 'Discover how to work with common mistakes in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, common mistakes, mistakes, mistake, post'
date: 2022-03-09
categories: [Java]
---

In this post, you will learn how to work with common mistakes so that you can use that same knowledge and thus evolve.

- there are three types of errors: compile errors, runtime errors and logic errors;
- compilation errors are errors that prevent our application from running and are mostly caused by bad typing of our code (for example, not inserting the code to finish a certain line of code);
- runtime errors are errors that occur while our application is running and we usually take care of them when the application tries an operation that is impossible to execute (for example the division by zero);
- logic errors are errors that are errors that prevent our application from doing what it is intended to do, that is, our code is complicated and runs without errors, but the result of an expected operation does not finish example not complement a given variable of string type);
- of these three types of errors, logical errors are the most difficult to find and correct.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.Scanner;

public class CommonMistakes {
  public void Run() {
    // Compilation error
    System.out.println("I am a string.");

    // Runtime error
    int x = 10, y = 0;
    // System.out.printf("Division result: %d", x / y);

    // Logic error
    Scanner userInput = new Scanner(System.in);
    String firstName = null, lastName = null;

    System.out.print("Enter your last name: ");
    lastName = userInput.nextLine();

    System.out.printf("Name: %s %s", firstName, lastName);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/HCclW4TLSyY" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/HCclW4TLSyY){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/erros-comuns-em-java/){:target="\_blank"}.

### _Happy coding!_
