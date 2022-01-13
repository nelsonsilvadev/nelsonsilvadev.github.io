---
layout: post
excerpt: Blog
title: 'Assignment Operators in C#'
description: 'Discover how to work with assignment operators in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, assignment operators, assignment, operators, post'
date: 2021-11-10
categories: [C#]
---

In this post, you will learn how to work with assignment operators so that you can use that same knowledge and thus evolve.

`a += 2` | `a = a + 2`
`b -= 2` | `b = b - 2`
`c *= 2` | `c = c * 2`
`d /= 2` | `d = d / 2`
`e %= 2` | `e = e % 2`

```csharp
using System;

namespace Base {
  class AssignmentOperators {
    public void Run() {
      int x = 2;

      x += 3;
      Console.WriteLine("x = x + 3: " + x); // x = x + 3: 5

      x -= 2;
      Console.WriteLine("x = x - 2: " + x); // x = x - 2: 3

      x *= 2;
      Console.WriteLine("x = x * 2: " + x); // x = x * 2: 6

      x /= 2;
      Console.WriteLine("x = x / 2: " + x); // x = x / 2: 3

      x %= 3;
      Console.WriteLine("x = x % 3: " + x); // x = x % 3: 0
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/mKXawyHLewc" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/mKXawyHLewc){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211110/operadores-de-atribuicao-em-csharp/){:target="\_blank"}.

### _Happy coding!_
