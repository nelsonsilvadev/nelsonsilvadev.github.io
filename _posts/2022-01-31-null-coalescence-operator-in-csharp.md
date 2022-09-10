---
layout: post
excerpt: Blog
title: 'Null Coalescence Operator in C#'
description: 'Discover how to work with the null coalescence operator in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, null coalescence operator, null coalescence, operator, null, coalescence, post'
date: 2022-01-31
categories: [C#]
---

In this post, you will learn how to work with the null coalescence operator so that you can use that same knowledge and thus evolve.

- the null coalescence operator (??) returns whatever is on the left if the content is not null (otherwise returns whatever is on the right).

```csharp
using System;

namespace Base {
  class NullCoalescenceOperator {
    private string name;

    public string Name {
      get {
        return name ?? "The content is simply null.";
      }

      set {
        name = value;
      }
    }

    public void Run() {
      Console.WriteLine(Name);

      Name = "Nelson Silva";
      Console.WriteLine($"Name: {Name}");

      Name = null;
      Console.WriteLine(Name);

      CheckSize(null);
      CheckSize("Null Coalescence");
    }

    private void CheckSize(string word) {
      if (word?.Length > 5)
        Console.WriteLine($"\"{word}\": This word has more than 5 characters.");
    }
  }
}

/*
  The content is simply null.
  Name: Nelson Silva
  The content is simply null.
  "Null Coalescence": This word has more than 5 characters.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/s-X26LwvxC0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/s-X26LwvxC0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/operador-de-coalescencia-nula-em-csharp/){:target="\_blank"}.

### _Happy coding!_
