---
layout: post
excerpt: Blog
title: 'abstract in C#'
description: 'Discover how to work with abstract in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, abstract, post'
date: 2022-01-03
categories: [C#]
---

In this post, you will learn how to work with abstract so that you can use that same knowledge and thus evolve.

- the abstract is used to indicate that a given class cannot be instantiated;
- in short, abstract classes are considered "incomplete" classes;
- it is important to know that a class can inherit from an abstract class and that methods can only be abstract if the class is also;
- when static is applied to a certain member (attribute, method, etc), it is not necessary to instantiate such a class to have access to that member due to its being static.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class Abstract {
    public void Run() {
      // ClasseX.InformationX();
      var classe = new ClasseY();
      classe.InformationY();

      /*
        Country: Portugal
        Country: Brazil
        Country: Spain
        Country: France
        Country: Italy
        Country: Australia
        Country: India
      */
    }
  }

  abstract class ClasseX {
    public static string organization = "Caffeine Algorithm";
    public static List<string> countries = new List<string>() {
      "Portugal",
      "Brazil",
      "Spain",
      "France",
      "Italy",
      "Australia",
      "India"
    };

    public static void InformationX() {
      foreach (var character in organization)
        Console.WriteLine($"Character: {character}");
    }

    public abstract void InformationY();
  }

  class ClasseY : ClasseX {
    public override void InformationY() {
      foreach (var country in countries)
        Console.WriteLine($"Country: {country}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kic0anFXVUs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/kic0anFXVUs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220103/abstract-em-csharp/){:target="\_blank"}.

### _Happy coding!_
