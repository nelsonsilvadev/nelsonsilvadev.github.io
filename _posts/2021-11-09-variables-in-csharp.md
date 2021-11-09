---
layout: post
excerpt: Blog
title: 'Variables in C#'
description: 'Discover how to work with integer, decimal (double), string, char and boolean variables in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, variables, variable, integer, decimal, double, string, char, boolean, post'
date: 2021-11-09
categories: [C#]
---

In this post, you will learn how to work with integer, decimal (double), string, char and boolean variables so that you can use that same knowledge and thus evolve.

- a variable is an object (a position located in memory) that represents a value or an expression;
- in some of the existing programming languages it is not necessary to define the variable type but in C# it is;
- variable types: integer, decimal (double), string, char, boolean, arrays, lists, dictionaries and more;
- it should be noted that we are going to talk about arrays, lists and dictionaries in future publications.

```csharp
using System;

namespace Base {
  class Variables {
    public void Run() {
      int integer = 10;
      double _double = 10.5;
      string _string = "I am a string.";
      char character = 'c';
      bool boolean = true;

      Console.WriteLine("integer: " + integer); // integer: 10
      Console.WriteLine("double: " + _double); // double: 10,5
      Console.WriteLine("string: " + _string); // string: I am a string.
      Console.WriteLine("character: " + character); // character: c
      Console.WriteLine("boolean: " + boolean); // boolean: True
    }
  }
}
```

Don't forget to [watch the video](https://youtu.be/H1D_3_XgI9E){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211109/variaveis-em-csharp/){:target="\_blank"}.

### _Happy coding!_
