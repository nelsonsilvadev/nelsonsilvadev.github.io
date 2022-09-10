---
layout: post
excerpt: Blog
title: 'More about Exceptions in Java'
description: 'Discover how to work with more about exceptions in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, exceptions, exception, post'
date: 2022-03-18
categories: [Java]
---

In this post, you will learn how to work with more about exceptions so that you can use that same knowledge and thus evolve.

- an exception is an event that occurs during the execution of a piece of code that interrupts its normal flow of instructions;
- in short, an exception represents an error;
- there is a possibility to create your own exceptions and to use them with the throw;
- the throw is used to signal the occurrence of an exception during the execution of the program.

```java
package com.caffeinealgorithm.programminginjava;

public class MoreAboutExceptions {
  private Exception emptyString = new Exception("You cannot check a string that is empty.");

  public void Run() {
    try {
      checkString("I am a string.");
    } catch (Exception exception) {
      System.out.println(exception);
    }
  }

  private void checkString(String string) throws Exception {
    if (string == "")
      throw emptyString;
    else
      System.out.printf("String: %s", string);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/b40p72IG4-8" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/b40p72IG4-8){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/mais-sobre-as-excecoes-em-java/){:target="\_blank"}.

### _Happy coding!_
