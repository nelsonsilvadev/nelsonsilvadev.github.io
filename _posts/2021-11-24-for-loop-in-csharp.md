---
layout: post
excerpt: Blog
title: 'for Loop in C#'
description: 'Discover how to work with the for loop in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, for loop, for, loop, loops, post'
date: 2021-11-24
categories: [C#]
---

In this post, you will learn how to work with the for loop so that you can use that same knowledge and thus evolve.

- a cycle allows executing an instruction or a set of instructions several times;
- the for cycle goes around (iterates) according to a certain range.

```csharp
using System;

namespace Base {
  class ForLoop {
    public void Run() {
      string[] schoolSupplies = new string[6] {
        "Backpack", // 0
        "Case", // 1
        "Pencil", // 2
        "Eraser", // 3
        "Sharpen", // 4
        "Scissors" // 5
      };

      /*
        Console.WriteLine(schoolSupplies[0]);
        Console.WriteLine(schoolSupplies[1]);
      */

      for (int index = 0; index < schoolSupplies.Length; index++) {
        Console.WriteLine($"schoolSupplies[{index}]: {schoolSupplies[index]}");
      }
    }
  }
}

/*
  schoolSupplies[0]: Backpack
  schoolSupplies[1]: Case
  schoolSupplies[2]: Pencil
  schoolSupplies[3]: Eraser
  schoolSupplies[4]: Sharpen
  schoolSupplies[5]: Scissors
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/9h8vh0r3fwk" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/9h8vh0r3fwk){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/ciclo-for-em-csharp/){:target="\_blank"}.

### _Happy coding!_
