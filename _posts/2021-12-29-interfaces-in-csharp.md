---
layout: post
excerpt: Blog
title: 'Interfaces in C#'
description: 'Discover how to work with interfaces in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, interfaces, interface, post'
date: 2021-12-29
categories: [C#]
---

In this post, you will learn how to work with interfaces so that you can use that same knowledge and thus evolve.

- an interface contains definitions for a group of related features that a class or structure (we'll talk about structs in the next video) can implement;
- in short, an interface is like a contract and any class or structure that implements a given interface must implement all its members;
- it is also important to know that a class or a structure can implement several interfaces.

```csharp
using System;

namespace Base {
  class Interfaces {
    public void Run() {
      var car = new Car("Nissan", "Juke", "Forward", "Manual", "Diesel", 1461, 175, 110, 25070);
      car.Information();

      /*
        Brand: Nissan
        Model: Juke
        Engine location: Forward
        Transmission: Manual
        Fuel: Diesel
        Displacement: 1461 cc
        Maximum speed: 175 km/h
        Maximum power: 110 cv
        Price: 25070 euros
      */
    }
  }

  class Car : ICar {
    private string brand, model, engineLocation, transmission, fuel;
    private int displacement, maximumSpeed, maximumPower;
    private double price;

    public Car(string brand, string model, string engineLocation, string transmission, string fuel,
               int displacement, int maximumSpeed, int maximumPower, double price) {
      this.brand = brand;
      this.model = model;
      this.engineLocation = engineLocation;
      this.transmission = transmission;
      this.fuel = fuel;
      this.displacement = displacement;
      this.maximumSpeed = maximumSpeed;
      this.maximumPower = maximumPower;
      this.price = price;
    }

    public void Information() {
      Console.WriteLine($"Brand: {brand}");
      Console.WriteLine($"Model: {model}");
      Console.WriteLine($"Engine location: {engineLocation}");
      Console.WriteLine($"Transmission: {transmission}");
      Console.WriteLine($"Fuel: {fuel}");
      Console.WriteLine($"Displacement: {displacement} cc");
      Console.WriteLine($"Maximum speed: {maximumSpeed} km/h");
      Console.WriteLine($"Maximum power: {maximumPower} cv");
      Console.WriteLine($"Price: {price} euros");
    }
  }

  interface ICar {
    void Information();
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/mPUUj1xwe7U" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/mPUUj1xwe7U){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/interfaces-em-csharp/){:target="\_blank"}.

### _Happy coding!_
