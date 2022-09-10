---
layout: post
excerpt: Blog
title: 'Common Mistakes in C#'
description: 'Discover how to work with common mistakes in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, common mistakes, mistakes, mistake, post'
date: 2021-12-13
categories: [C#]
---

In this post, you will learn how to work with common mistakes so that you can use that same knowledge and thus evolve.

- there are three types of errors: compilation errors, runtime errors and logic errors;
- compilation errors are errors that impede the execution of our application and are mostly caused by bad typing of our code (for example not inserting the ';' to finish a certain line of code);
- runtime errors are errors that occur while our application is running and we usually take care of them when the application tries an operation that is impossible to execute (eg division by zero);
- logic errors are errors that prevent our application from doing what it is intended to do, that is, our code is complicated and runs without errors, but the result of an operation turns out to be not what was expected (for example, not complement a given variable of type string);
- of these three types of errors, logical errors are the most difficult to locate and correct.

```csharp
using System;

namespace Base {
  class CommonMistakes {
    public void Run() {
      // Compilation error
      Console.WriteLine("I am a string.");

      // Runtime error
      int x = 10, y = 0;
      // Console.WriteLine($"Division result: {x / y}");

      // Logic error
      string firstName = string.Empty, lastName = string.Empty;

      Console.Write("Enter your last name: ");
      lastName = Console.ReadLine();

      Console.WriteLine($"Name: {firstName} {lastName}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/zTZxnegO2Ro" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/zTZxnegO2Ro){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/erros-comuns-em-csharp/){:target="\_blank"}.

### _Happy coding!_
