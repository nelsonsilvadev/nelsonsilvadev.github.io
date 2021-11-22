---
layout: post
excerpt: Blog
title: 'Ternary Operator in C#'
description: 'Discover how to work with the ternary operator in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, ternary operator, ternary, operator, post'
date: 2021-11-22
categories: [C#]
---

In this post, you will learn how to work with the ternary operator so that you can use that same knowledge and thus evolve.

- the ternary operator (`?:`) serves to simplify a decision without having to use if or else.

```csharp
using System;

namespace Base {
  class TernaryOperator {
    // (condition) ? condition is true : condition is false

    public void Run() {
      int age = 25;
      bool isOfLegalAge;

      /*
        if (age >= 18) {
          isOfLegalAge = true;
        }
        else {
          isOfLegalAge = false;
        }
      */

      isOfLegalAge = (age >= 18) ? true : false;

      Console.WriteLine($"Is of legal age: {isOfLegalAge}");
    }
  }
}

// É maior de idade: True
```

Don't forget to [watch the video](https://youtu.be/KMHQmYq6Kms){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211122/operador-ternario-em-csharp/){:target="\_blank"}.

### _Happy coding!_
