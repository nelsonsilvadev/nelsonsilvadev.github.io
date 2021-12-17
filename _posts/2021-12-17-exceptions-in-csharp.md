---
layout: post
excerpt: Blog
title: 'Exceptions in C#'
description: 'Discover how to work with exceptions in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, exceptions, exception, post'
date: 2021-12-17
categories: [C#]
---

In this post, you will learn how to work with exceptions so that you can use that same knowledge and thus evolve.

- an exception is an event that occurs during the execution of a piece of code that interrupts its normal flow of instructions;
- in short, an exception represents an error;
- the try executes the entire piece of code present in itself and automatically passes to the catch;
- the catch checks the result of what was executed inside the try and transmits what is contained in it (most of the time the exception itself);
- the finally is executed whether there is any exception or not.

```csharp
using System;

namespace Base {
  class Exceptions {
    public void Run() {
      int[] numbers = new int[5] {
        1, 2, 3, 4, 5
      };

      try {
        Console.WriteLine($"Element content: {numbers[4]}");
      }
      catch (Exception exception) {
        // Console.WriteLine("The code in the try is not working correctly.");
        Console.WriteLine(exception);
      }
      finally {
        Console.WriteLine("I am part of the finally and I'm executed if there is any exception or not.");
      }
    }
  }
}
```

Don't forget to [watch the video](https://youtu.be/Gw6RYAu0yOo){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211217/excecoes-em-csharp/){:target="\_blank"}.

### _Happy coding!_
