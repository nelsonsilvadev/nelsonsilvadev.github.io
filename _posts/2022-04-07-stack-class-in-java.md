---
layout: post
excerpt: Blog
title: 'Stack Class in Java'
description: 'Discover how to work with the Stack class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, stack class, stack, class, post'
date: 2022-04-07
categories: [Java]
---

In this post, you will learn how to work with the Stack class so that you can use that same knowledge and thus evolve.

- this class is basically a stack (due to the way it works) and represents a LIFO (Last In - First Out) type collection, that is, the last value entered will always be the first one out;
- these values that make up a stack are called elements.

`Stack (object).push()` | Adds an object at the top of the stack
`Stack (object).pop()` | Remove and return the object at the top of the stack
`Stack (object).peek()` | Returns the object at the top of the stack without removing it

```java
package com.caffeinealgorithm.programminginjava;

import java.util.Stack;

public class StackClass {
  private Stack<Integer> stack = new Stack<>();
  private int multiplier = 10, number = 1;

  public void Run() {
    for (int index = 1; index <= 5; index++) {
      stack.push(number);
      number *= multiplier;
    }

    printStack();

    System.out.printf("\nRemoving the number %d from the stack with the pop() function.\n\n", stack.pop());

    printStack();

    System.out.printf("\nThe number at the top of the stack is %d.", stack.peek());
  }

  private void printStack() {
    for (int number : stack)
      System.out.println(number);
  }
}

/*
  1
  10
  100
  1000
  10000

  Removing the number 10000 from the stack with the Pop() function.

  1
  10
  100
  1000

  The number at the top of the stack is 1000.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kfCzIPNX2CA" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/kfCzIPNX2CA){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-stack-em-java/){:target="\_blank"}.

### _Happy coding!_
