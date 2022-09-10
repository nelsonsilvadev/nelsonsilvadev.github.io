---
layout: post
excerpt: Blog
title: 'ReadLine() function in C#'
description: 'Discover how to work with the ReadLine() function in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, readline function, readline, function, post'
date: 2021-11-15
categories: [C#]
---

In this post, you will learn how to work with the `ReadLine()` function so that you can use that same knowledge and thus evolve.

- the function `ReadLine()` has as main objective to "extract" information given by the user;
- in short, this same function serves to increase interaction with it.

```csharp
using System;

namespace Base {
  class ReadLineFunction {
    public void Run() {
      string firstName, lastName;
      int age;

      Console.Write("Enter your first name: ");
      firstName = Console.ReadLine();

      Console.Write("Enter your last name: ");
      lastName = Console.ReadLine();

      Console.Write("Enter your age: ");
      age = int.Parse(Console.ReadLine());

      Console.WriteLine($"Name: {firstName} {lastName}\nAge: {age}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-C6_spcZYAs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/-C6_spcZYAs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/funcao-readline-em-csharp/){:target="\_blank"}.

### _Happy coding!_
