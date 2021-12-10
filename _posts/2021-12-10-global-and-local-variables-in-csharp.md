---
layout: post
excerpt: Blog
title: 'Global and Local Variables in C#'
description: 'Discover how to work with global and local variables in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, global variables, local variables, variables, global, local, variable, post'
date: 2021-12-10
categories: [C#]
---

In this post, you will learn how to work with global and local variables so that you can use that same knowledge and thus evolve.

- global variables are all those that are defined outside a function (in the "root" of our code) and have a global scope;
- local variables are all those that are defined inside a function;
- in short, not all variables are accessible from all places in our code.

```csharp
using System;

namespace Base {
  class GlobalAndLocalVariables {
    string access = "Global";

    public void Run() {
      ChangeAccess();
      Console.WriteLine($"Access from outside the function: {access}");
    }

    public void ChangeAccess() {
      string access = "Local";
      Console.WriteLine($"Access inside the function: {access}");
    }
  }
}

/*
  Access inside the function: Local
  Access from outside the function: Global
*/
```

Don't forget to [watch the video](https://youtu.be/nRnTx4JWWm4){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211210/variaveis-globais-e-locais-em-csharp/){:target="\_blank"}.

### _Happy coding!_
