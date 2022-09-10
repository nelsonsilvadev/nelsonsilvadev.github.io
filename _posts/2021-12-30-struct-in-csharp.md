---
layout: post
excerpt: Blog
title: 'struct in C#'
description: 'Discover how to work with struct in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, struct, post'
date: 2021-12-30
categories: [C#]
---

In this post, you will learn how to work with struct so that you can use that same knowledge and thus evolve.

- the structs (structures) are almost the same as the classes, however, they are much more limited;
- the differences are that:
  - when we are talking about structures, fields (attributes) cannot be initialized without these being declared as const or static;
  - a structure cannot declare a default constructor (a parameterless constructor);
  - when a structure is assigned to a new variable, all data is copied and any modification in the new copy is not reflected in the original structure;
  - structures are of type value and classes are of type reference;
  - structures can be instantiated without using new;
  - structures can declare parameterized constructors;
  - a structure cannot inherit another structure or class and cannot be the basis of a class;
  - a structure can implement interfaces;
  - a structure can take the value of a null value (null).

```csharp
using System;

namespace Base {
  class Struct {
    public void Run() {
      var struct = new _Struct();
      struct.Number = 200;

      // The number needs to be >= 0 and <= 100.
    }
  }

  struct _Struct : INumber {
    private int number;

    public int Struct {
      set {
        if (value >= 0 && value <= 100) {
          number = value;
          PrintNumber();
        }
        else
          Console.WriteLine("The number needs to be >= 0 and <= 100.");
      }
    }

    public void PrintNumber() {
      Console.WriteLine($"Number: {number}");
    }
  }

  interface INumber {
    void PrintNumber();
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/tyvCf7CUEfg" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/tyvCf7CUEfg){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/struct-em-csharp/){:target="\_blank"}.

### _Happy coding!_
