---
layout: post
excerpt: Blog
title: 'Classes and Objects in C#'
description: 'Discover how to work with classes and objects in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, classes and objects, classes, objects, class, object, post'
date: 2021-12-20
categories: [C#]
---

In this post, you will learn how to work with classes and objects so that you can use that same knowledge and thus evolve.

- a class represents a set of objects, and defines their behavior through methods and which states it is able to maintain through its attributes;
- an object is an instance of a class and is capable of storing states through its attributes and reacting to messages sent to it.

```csharp
using System;

namespace Base {
  class Program {
    static void Main(string[] args) {
      var enemy1 = new ClassesAndObjects();
      var enemy2 = new ClassesAndObjects();

      enemy1.Attack(); // I was attacked and lost a live.
      enemy1.Attack(); // I was attacked and lost a live.
      enemy1.Attack(); // I was attacked and lost a live.
      enemy1.CheckLife(); // I am still in combat and have 2 lives.
      enemy2.CheckLife(); // I'm still in combat and have 5 lives.

      Console.ReadKey();
    }
  }
}
```

```csharp
using System;

namespace Base {
  class ClassesAndObjects {
    int lives = 5;

    public void Attack() {
      Console.WriteLine("I was attacked and lost a live.");
      lives -= 1;
    }

    public void CheckLife() {
      if (lives <= 0)
        Console.WriteLine("I am dead because I don't have any more lives.");
      else
        Console.WriteLine($"I am still in combat and have {lives} lives.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/9FNQUgfBUz8" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/9FNQUgfBUz8){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classes-e-objetos-em-csharp/){:target="\_blank"}.

### _Happy coding!_
