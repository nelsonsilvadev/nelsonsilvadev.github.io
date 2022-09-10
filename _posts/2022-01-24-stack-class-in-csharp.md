---
layout: post
excerpt: Blog
title: 'Stack Class in C#'
description: 'Discover how to work with the Stack class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, stack class, stack, class, post'
date: 2022-01-24
categories: [C#]
---

In this post, you will learn how to work with the Stack class so that you can use that same knowledge and thus evolve.

- this class is basically a stack (due to the way it works) and represents a LIFO (Last In - First Out) type collection, that is, the last value entered will always be the first one out;
- these values that make up a stack are called elements.

`Stack (object).Push()` | Adds an object at the top of the stack
`Stack (object).Pop()` | Remove and return the object at the top of the stack
`Stack (object).Peek()` | Returns the object at the top of the stack without removing it

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class StackClass {
    private Stack<int> stack = new Stack<int>();
    private const int Multiplier = 10;
    private int number = 1;

    public void Run() {
      for (int index = 1; index <= 5; index++) {
        stack.Push(number);
        number *= Multiplier;
      }

      PrintStack();

      Console.WriteLine($"\nRemoving the number {stack.Pop()} from the stack with the Pop() function.\n");

      PrintStack();

      Console.WriteLine($"\nThe number at the top of the stack is {stack.Peek()}.");
    }

    private void PrintStack() {
      foreach (var number in stack)
        Console.WriteLine(number);
    }
  }
}

/*
  10000
  1000
  100
  10
  1

  Removing the number 10000 from the stack with the Pop() function.

  1000
  100
  10
  1

  The number at the top of the stack is 1000.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/AIxTT2P-5Dc" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/AIxTT2P-5Dc){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-stack-em-csharp/){:target="\_blank"}.

### _Happy coding!_
