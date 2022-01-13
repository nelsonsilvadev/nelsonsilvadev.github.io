---
layout: post
excerpt: Blog
title: 'Comparison Operators in C#'
description: 'Discover how to work with comparison operators in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, comparison operators, comparison, operators, post'
date: 2021-11-19
categories: [C#]
---

In this post, you will learn how to work with comparison operators so that you can use that same knowledge and thus evolve.

`==` | Equal
`!=` | Different
`>` | Greater
`<` | Smaller
`>=` | Greater and equal
`<=` | Smaller and equal
`&&` | And
`||` | Or

```csharp
using System;

namespace Base {
  class ComparisonOperators {
    public void Run() {
      int x = 10;
      int y = 20;

      if (x <= y || x == y) {
        Console.WriteLine("This condition is true.");
      }
      else {
        Console.WriteLine("This condition is false.");
      }
    }
  }
}

// This condition is true.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Vg8cCo5bIic" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Vg8cCo5bIic){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211119/operadores-de-comparacao-em-csharp/){:target="\_blank"}.

### _Happy coding!_
