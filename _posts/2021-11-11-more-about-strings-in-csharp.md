---
layout: post
excerpt: Blog
title: 'More about Strings in C#'
description: 'Discover how to work with something more about strings in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, strings, string, post'
date: 2021-11-11
categories: [C#]
---

In this post, you will learn how to work with something more about strings so that you can use that same knowledge and thus evolve.

`\n` | New line
`\t` | New tab (indentation)
`variable.Length` | Returns the number of characters (in case of a string)
`variable.ToUpper()` | Turns all letters present in the string into uppercase letters
`variable.ToLower()` | Turns all letters present in the string into lowercase letters

```csharp
using System;

namespace Base {
  class MoreAboutStrings {
    public void Run() {
      string firstName = "Nelson";
      string lastName = "Silva";
      int age = 25;

      Console.WriteLine($"Name: {firstName} {lastName}\nAge: {age}");

      /*
        Name: Nelson Silva
        Age: 25
      */
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/pKGz-CCpye8" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/pKGz-CCpye8){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211111/mais-sobre-as-strings-em-csharp/){:target="\_blank"}.

### _Happy coding!_
