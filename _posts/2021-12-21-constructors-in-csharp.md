---
layout: post
excerpt: Blog
title: 'Constructors in C#'
description: 'Discover how to work with constructors in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, constructors, construtor, post'
date: 2021-12-21
categories: [C#]
---

In this post, you will learn how to work with constructors so that you can use that same knowledge and thus evolve.

- the constructors have as function to initialize everything that is necessary when creating a certain object;
- you can create several constructors in a class.

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var person1 = new Constructors("Nelson", "Silva", 25);
      var person2 = new Constructors("Larissa", "Fernandes", 17);

      person1.Information();
      person1.CheckEntrance();

      /*
        Name: Nelson Silva
        Age: 25
        This person can enter the site because he is over 18 years old.
      */

      person2.Information();
      person2.CheckEntrance();

      /*
        Name: Larissa Fernandes
        Age: 17
        This person cannot enter the site because he is under 18 years of age.
      */

      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class Constructors {
    string firstName = string.Empty, lastName = string.Empty;
    int age = 0;

    public Constructors(string firstName, string lastName, int age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    public void Information() {
      Console.WriteLine($"Name: {firstName} {lastName}");
      Console.WriteLine($"Age: {age}");
    }

    public void CheckEntrance() {
      if (age >= 18)
        Console.WriteLine("This person can enter the site because he is over 18 years old.");
      else
        Console.WriteLine("This person cannot enter the site because he is under 18 years of age.");
    }
  }
}
```

Don't forget to [watch the video](https://youtu.be/b65giOzFRYU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211221/construtores-em-csharp/){:target="\_blank"}.

### _Happy coding!_
