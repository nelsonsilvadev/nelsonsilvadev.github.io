---
layout: post
excerpt: Blog
title: 'Random Class in C#'
description: 'Discover how to work with the Random class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, random class, random, class, post'
date: 2022-01-10
categories: [C#]
---

In this post, you will learn how to work with the Random class so that you can use that same knowledge and thus evolve.

- this class represents a pseudorandom number generator and it produces a sequence of numbers that meet certain statistical requirements of randomness.

`Random (object).Next()` | Returns a random number and, depending on your signature, is also able to return a random number within a specified range

```csharp
using System;

namespace Base {
  class RandomClass {
    private Random random = new Random();

    public void Run() {
      Console.WriteLine($"Random number up to 20: {random.Next(21)}");
      Console.WriteLine($"Random number between 20 and 40: {random.Next(20, 41)}");

      for (int index = 1; index <= 10; index++)
        Console.WriteLine($"Random number #{index}: {random.Next()}");
    }
  }
}

/*
  Random number up to 20: 8
  Random number between 20 and 40: 39
  Random number #1: 1992885730
  Random number #2: 1283322657
  Random number #3: 226863787
  Random number #4: 710252620
  Random number #5: 1546596848
  Random number #6: 1967725250
  Random number #7: 1848910215
  Random number #8: 1504322913
  Random number #9: 1207920689
  Random number #10: 571352235
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/8NxhJZz7UmU" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/8NxhJZz7UmU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220110/classe-random-em-csharp/){:target="\_blank"}.

### _Happy coding!_
