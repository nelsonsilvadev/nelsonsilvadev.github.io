---
layout: post
excerpt: Blog
title: 'Math Class in C#'
description: 'Discover how to work with the Math class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp math class, math, class, post'
date: 2022-01-07
categories: [C#]
---

In this post, you will learn how to work with the Math class so that you can use that same knowledge and thus evolve.

- this class is intended to provide constants and static methods for working with trigonometric, logarithmic and other common mathematical methods.

`Sin (variable)` | Calculate the sine
`Cos (variable)` | Calculate the cosine
`Tan (variable)` | Calculate the tangent
`Floor (variable)` | Remove decimal value from given number
`Ceiling (variable)` | Round the given number to the next
`Abs (variable)` | Returns the absolute value of the given number
`Sqrt (variable)` | Returns the square root of the given number
`Pow (variableA, variableB)` | Multiplies its initial value multiple times (depending on the number of times)

```csharp
using System;

namespace Base {
  class MathClass {
    public void Run() {
      Console.WriteLine($"Result of the Sin() method: {Math.Sin(10.5)}");
      Console.WriteLine($"Result of the Sin() method: {Math.Cos(10.5)}");
      Console.WriteLine($"Result of the Tan() method: {Math.Tan(10.5)}");
      Console.WriteLine($"Result of the Floor() method: {Math.Floor(10.5)}");
      Console.WriteLine($"Result of Ceiling() method: {Math.Ceiling(10.5)}");
      Console.WriteLine($"Result of Abs() method: {Math.Abs(-10.5)}");
      Console.WriteLine($"Result of Sqrt() method: {Math.Sqrt(9)}");
      Console.WriteLine($"Result of Pow() method: {Math.Pow(2, 5)}");
    }
  }
}

/*
  Result of the Sin() method: -0,87969575997167
  Result of the Cos() method: -0,4755369279959925
  Result of the Tan() method: 1,8498999934219273
  Result of the Floor() method: 10
  Result of the Ceiling() method: 11
  Result of the Abs() method: 10,5
  Result of the Sqrt() method: 3
  Result of the Pow() method: 32
*/
```

Don't forget to [watch the video](https://youtu.be/ZCr9-qfctoU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220107/classe-math-em-csharp/){:target="\_blank"}.

### _Happy coding!_
