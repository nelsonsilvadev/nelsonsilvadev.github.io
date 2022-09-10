---
layout: post
excerpt: Blog
title: 'Bitwise Operators in C#'
description: 'Discover how to work with bitwise operators in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, bitwise operators, bitwise, operators, post'
date: 2022-02-03
categories: [C#]
---

In this post, you will learn how to work with bitwise operators so that you can use that same knowledge and thus evolve.

- bitwise operators operate one bit at a time and it is important to be aware of what binary code is.

`1` | Real
`0` | False
`&` | Only true when both numbers correspond to 1 and 1
`|` | It is only false when both numbers match 0 and 0
`<<` | Shift bits according to given number to the left
`>>` | Shift bits according to given number to the right

- then we also have the operators `^` and `~`;
- such operators are mostly used in various situations (encryption, data compression, production of hash codes, communication with hardware, games and etc).

```csharp
using System;

namespace Base {
  class BitwiseOperators {
    private int x = 60; // 00111100 < 01111000 < 11110000 | 00111100 > 00011110 > 00001111
    private int y = 13; // 00001101

    public void Run() {
      Console.WriteLine($"Result of operator &: {x & y}"); // 12 -> 00001100
      Console.WriteLine($"Result of operator |: {x | y}"); // 61 -> 00111101
      Console.WriteLine($"Result of operator <<: { x << 2 }"); // 240 -> 11110000
      Console.WriteLine($"Result of operator >>: { x >> 2 }"); // 15 -> 00001111
    }
  }
}

/*
  Result of operator &: 12
  Result of operator |: 61
  Result of operator <<: 240
  Result of operator >>: 15
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/JMpv0Yt32AA" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/JMpv0Yt32AA){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/operadores-bit-e-bit-em-csharp/){:target="\_blank"}.

### _Happy coding!_
