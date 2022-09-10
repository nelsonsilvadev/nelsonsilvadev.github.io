---
layout: post
excerpt: Blog
title: 'Interfaces in Java'
description: 'Discover how to work with interfaces in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, interfaces, interface, post'
date: 2022-03-24
categories: [Java]
---

In this post, you will learn how to work with interfaces so that you can use that same knowledge and thus evolve.

- an interface contains definitions for a group of related features that a class can implement;
- in short, an interface is like a contract and any class that implements a given interface must implement all its members;
- it is also important to know that a class can implement multiple interfaces.

```java
package com.caffeinealgorithm.programminginjava;

public class Interfaces {
  public void Run() {
    var car = new Car("Nissan", "Juke", "Forward", "Manual", "Diesel", 1461, 175, 110, 25070);
    car.information();

    /*
      Brand: Nissan
      Model: Juke
      Engine location: Forward
      Transmission: Manual
      Fuel: Diesel
      Displacement: 1461 cc
      Maximum speed: 175 km/h
      Maximum power: 110 cv
      Price: 25070.00 euros
    */
  }
}

class Car implements ICar {
  private String brand, model, engineLocation, transmission, fuel;
  private int displacement, maximumSpeed, maximumPower;
  private double price;

  public Car(String brand, String model, String engineLocation, String transmission, String fuel,
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

  public void information() {
    System.out.printf("Brand: %s\n", brand);
    System.out.printf("Model: %s\n", model);
    System.out.printf("Engine location: %s\n", engineLocation);
    System.out.printf("Transmission: %s\n", transmission);
    System.out.printf("Fuel: %s\n",fuel);
    System.out.printf("Displacement: %d cc\n", displacement);
    System.out.printf("Maximum speed: %d km/h\n", maximumSpeed);
    System.out.printf("Maximum power: %d cv\n", maximumPower);
    System.out.printf("Price: %.2f euros", price);
  }
}

interface ICar {
  void information();
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/0I7MyvAkBK0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/0I7MyvAkBK0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/interfaces-em-java/){:target="\_blank"}.

### _Happy coding!_
