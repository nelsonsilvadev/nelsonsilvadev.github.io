---
layout: post
excerpt: Blog
title: 'WriteLine() function and Strings in C#'
description: 'Discover how to work with the WriteLine() function and with strings in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, writeline function, writeline, functions, strings, string, post'
date: 2021-11-05
categories: [C#]
---

In this post, you will learn how to work with the `WriteLine()` function and with strings so that you can use that same knowledge and thus evolve.

- the `Write()` function prints all its contents to the command line without breaking lines;
- the `WriteLine()` function prints its entire contents to the command line and changes lines;
- the `ReadKey()` function waits for a keyboard key to be pressed and then the rest of the code is executed;
- a string is a set of characters (letters, numbers and/or symbols);
- all strings are initialized and ended with quotes ("string").

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var video = new WriteLineFunctionAndStrings();
      video.Run();
      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class WriteLineFunctionAndStrings {
    public void Run() {
      Console.Write("We are using the Write() function and I am a string.");
      Console.WriteLine("We are using the WriteLine() function and I am still a string.");
      Console.WriteLine("We are using the WriteLine() function again and I am still a string.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/2-dIbl35A_w" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/2-dIbl35A_w){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211105/funcao-writeline-e-strings-em-csharp/){:target="\_blank"}.

### _Happy coding!_
