---
layout: post
excerpt: Blog
title: 'Arguments in C#'
description: 'Discover how to work with arguments in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, arguments, argument, post'
date: 2021-12-03
categories: [C#]
---

In this post, you will learn how to work with arguments so that you can use that same knowledge and thus evolve.

- arguments are like variables that receive their values (their content) when the function is called;
- these same arguments are considered to be local variables because they only exist inside the function;
- local variables are discarded when returning to the calling point.

```csharp
using System;

namespace Base {
  class Arguments {
    public void Run() {
      PersonalData("Nelson Silva", 25, "Portuguese");
      PersonalData("Larissa Fernandes", 37, "Brazilian");
    }

    public void PersonalData(string name, int age, string nationality) {
      Console.WriteLine($"Name: {name}");
      Console.WriteLine($"Idade: {age}");
      Console.WriteLine($"Nationality: {nationality}");
    }
  }
}

/*
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguese
  name: Larissa Fernandes
  Age: 37
  Nationality: Brazilian
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/mrbE0tQqbtQ" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/mrbE0tQqbtQ){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/argumentos-em-csharp/){:target="\_blank"}.

### _Happy coding!_
