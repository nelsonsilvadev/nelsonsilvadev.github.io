---
layout: post
excerpt: Blog
title: 'Lambda in C#'
description: 'Discover how to work with lambda in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, lambda, post'
date: 2022-02-02
categories: [C#]
---

In this post, you will learn how to work with lambda so that you can use that same knowledge and thus evolve.

- lambda is used in the creation of anonymous functions and these are so called because they are not declared with the terms of creating a typical function;
- in short, lambda's main objective is to simplify certain and certain functions, and these often do not use the term "return" but rather an expression;
- the LINQ (Language-Integrated Query) translated to the letter represents the queries integrated to the language.

```csharp
using System;
using System.Linq;

namespace Base {
  class Lambda {
    private int[] numbers = new int[] {
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    };

    public void Run() {
      /*
        Console.WriteLine($"Total of even numbers: {CountEvenNumbers()}");
        Console.WriteLine($"Total of odd numbers: {CountOddNumbers()}");
      */

      Console.WriteLine($"Total of even numbers: {numbers.Count(number => number % 2 == 0)}");
      Console.WriteLine($"Total of odd numbers: {numbers.Count(number => number % 2 != 0)}");
    }

    private int CountEvenNumbers() {
      var counter = 0;

      foreach (var number in numbers) {
        if (number % 2 == 0)
          counter++;
      }

      return counter;
    }

    private int CountOddNumbers() {
      var counter = 0;

      foreach (var number in numbers) {
        if (number % 2 != 0)
          counter++;
      }

      return counter;
    }
  }
}

/*
  Total of even numbers: 5
  Total of odd numbers: 6
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BrpYkREnwfM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/BrpYkREnwfM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220202/lambda-em-csharp/){:target="\_blank"}.

### _Happy coding!_
