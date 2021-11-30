---
layout: post
excerpt: Blog
title: 'Functions in C#'
description: 'Discover how to work with functions in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, functions, function, methods, method, post'
date: 2021-11-30
categories: [C#]
---

In this post, you will learn how to work with functions so that you can use that same knowledge and thus evolve.

- a function is an organized and reusable piece of code that is used to perform a single related action;
- functions provide better modularity and a high degree of code reuse;
- it is not possible to create a role inside another role.

```csharp
using System;

namespace Base {
  class Functions {
    public void Run() {
      PersonalData();
      PersonalData();
      PersonalData();
    }

    public void PersonalData() {
      Console.WriteLine("Name: Nelson Silva");
      Console.WriteLine("Age: 25");
      Console.WriteLine("Nationality: Portuguese");
    }
  }
}

/*
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguesa
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguesa
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguesa
*/
```

Don't forget to [watch the video](https://youtu.be/61T_m11jCWs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211130/funcoes-em-csharp/){:target="\_blank"}.

### _Happy coding!_
