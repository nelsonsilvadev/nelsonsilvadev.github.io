---
layout: post
excerpt: Blog
title: 'More about Exceptions in C#'
description: 'Discover how to work with more about exceptions in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, exceptions, exception, post'
date: 2021-12-23
categories: [C#]
---

In this post, you will learn how to work with more about exceptions so that you can use that same knowledge and thus evolve.

- an exception is an event that occurs during the execution of a piece of code that interrupts its normal flow of instructions;
- in short, an exception represents an error;
- there is the possibility of creating your own exceptions and using them with throw;
- throw is used to signal the occurrence of the exception during program execution.

```csharp
using System;

namespace Base {
  class MoreAboutExceptions {
    private Exception emptyString = new Exception("You cannot check a string that is empty.");

    public void Run() {
      try {
        CheckString("Nelson Silva");
      }
      catch (Exception exception) {
        Console.WriteLine(exception);
      }
    }

    private void CheckString(string _string) {
      if (_string == string.Empty)
        throw emptyString;
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/06RgzwoqPDU" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/06RgzwoqPDU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211223/mais-sobre-as-excecoes-em-csharp/){:target="\_blank"}.

### _Happy coding!_
