---
layout: post
excerpt: Blog
title: 'Switch in C#'
description: 'Discover how to work with switch in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, switch, conditions, condition, post'
date: 2021-11-23
categories: [C#]
---

In this post, you will learn how to work with switch so that you can use that same knowledge and thus evolve.

- the switch is another way of working with decisions and can only check an equality relationship, that is, it cannot use comparison operators;
- the case compares what was defined in itself with the content of the argument that was defined in the switch;
- default is executed when the content of the argument that was defined in the switch is not found in any case.

```csharp
using System;

namespace Base {
  class Switch {
    public void Run() {
      char _case = 'D';

      switch (_case) {
        case 'A':
          Console.WriteLine("The case A exists.");
          break;
        case 'B':
          Console.WriteLine("The case B exists.");
          break;
        case 'C':
          Console.WriteLine("The case C exists.");
          break;
        default:
          Console.WriteLine($"The case {_case} does not exist.");
          break;
      }
    }
  }
}

// The case D does not exist.
```

Don't forget to [watch the video](https://youtu.be/vqC8km6r22k){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211123/switch-em-csharp/){:target="\_blank"}.

### _Happy coding!_
