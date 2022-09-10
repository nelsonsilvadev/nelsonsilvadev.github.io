---
layout: post
excerpt: Blog
title: 'More about Variables in C#'
description: 'Discover how to work with more about variables in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, variáveis, variável, post'
date: 2021-12-16
categories: [C#]
---

In this post, you will learn how to work with more about variables so that you can use that same knowledge and thus evolve.

- it should be remembered that the various types of variables we have talked about so far are not the only ones that exist and that we have a lot to choose from;
- the object can be said to be the type of variable and not a type because it is the base class of for all derived classes (its variable type is automatically detected and that same type can be changed at any time);
- dynamic corresponds to a type of dynamic variable, that is, it can be of any type and can also be changed at any time like object;
- var is an implicit variable type and this same type is determined according to the variable content (there is a need for the variable to be initialized to use var and its type cannot be changed after this same initialization);
- var is undoubtedly the best choice and does not penalize performance, object and dynamic have the disadvantage that performance ends up being lower and time is wasted while the compiler checks our code (but this is only noticed in apps with a considerable size).

```csharp
using System;

namespace Base {
  class MoreAboutVariables {
    public void Run() {
      /*
        byte _byte = 255;
        sbyte _sbyte = 127;
        decimal _decimal = 10.0M;
        float _float = 10.0F;
        uint _uint = 4000000000;
        long _long = 9000000000000000000;
        ulong _ulong = 18000000000000000000;
        short _short = 32000;
        ushort _ushort = 65000;
      */

      var variavel = "I am a string.";
      Console.WriteLine($"Initial content: {variavel}");
      Console.WriteLine($"Final content: {variavel}");
    }
  }
}

/*
  Initial content: I am a string.
  Final content: I am a string.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/uMbksPhe4m0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/uMbksPhe4m0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/mais-sobre-as-variaveis-em-csharp/){:target="\_blank"}.

### _Happy coding!_
