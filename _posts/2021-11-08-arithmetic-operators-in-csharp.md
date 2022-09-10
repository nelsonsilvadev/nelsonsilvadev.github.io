---
layout: post
excerpt: Blog
title: 'Arithmetic Operators in C#'
description: 'Discover how to work with arithmetic operators in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, arithmetic operators, arithmetic, operators, post'
date: 2021-11-08
categories: [C#]
---

In this post, you will learn how to work with arithmetic operators so that you can use that same knowledge and thus evolve.

`+` | Addition
`-` | Subtraction
`*` | Multiplication
`/` | Division
`%` | Rest

```csharp
using System;

namespace Base {
  class ArithmeticOperators {
    public void Run() {
      Console.WriteLine("Addition: " + (10 + 10)); // Addition: 20
      Console.WriteLine("Subtraction: " + 10.5 - 5.5 - 4.5); // Subtraction: 0,5
      Console.WriteLine("Multiplication: " + -10 * 2); // Multiplication: -20
      Console.WriteLine("Division: " + 10 / 10); // Division: 1
      Console.WriteLine("Rest: " + 8 % 2); // Rest: 0
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/x-xdi7NRJDs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/x-xdi7NRJDs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/operadores-aritmeticos-em-csharp/){:target="\_blank"}.

### _Happy coding!_
