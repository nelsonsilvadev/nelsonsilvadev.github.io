---
layout: post
excerpt: Blog
title: 'Properties in C#'
description: 'Discover how to work with properties in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, properties, property, get, set, post'
date: 2021-12-24
categories: [C#]
---

In this post, you will learn how to work with properties so that you can use that same knowledge and thus evolve.

- properties (get and set) are members that provide a flexible mechanism for reading, writing or calculating the value of a particular field (in this case an attribute that is private - access modifier);
- these same allow the data to be easily accessed and also help to promote the security and flexibility of the methods;
- it is also important to know that properties allow a class to expose a public way of getting and setting value, hiding the implementation or verification code;
- properties that do not implement a set are read-only.

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var person = new Propriedades();

      person.FirstName = "Nelson";
      person.LastName = "Silva";
      person.Information();
      Console.WriteLine($"Age: {person.age}");

      /*
        Name: Nelson Silva
        Age: 25
      */

      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class Properties {
    private string firstName = string.Empty, lastName = string.Empty;
    private int age = 25;
    // public int variable { get; set; }

    public string FirstName {
      set {
        if (value != string.Empty)
          firstName = value;
        else
          Console.WriteLine("The string referring to the first name cannot be empty.");
      }
    }

    public string LastName {
      set {
        if (value != string.Empty)
          lastName = value;
        else
          Console.WriteLine("The string referring to the last name cannot be empty.");
      }
    }

    public int Age { get => age; }

    public void Information() {
      Console.WriteLine($"Name: {firstName} {lastName}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/QjvCyY5a2BM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/QjvCyY5a2BM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/propriedades-em-csharp/){:target="\_blank"}.

### _Happy coding!_
