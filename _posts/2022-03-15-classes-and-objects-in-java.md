---
layout: post
excerpt: Blog
title: 'Classes and Objects in Java'
description: 'Discover how to work with classes and objects in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, classes and objects, classes, objects, class, object, post'
date: 2022-03-15
categories: [Java]
---

In this post, you will learn how to work with classes and objects so that you can use that same knowledge and thus evolve.

- a class represents a set of objects, and defines their behavior through methods and which states it is able to maintain through its attributes;
- an object is an instance of a class and is capable of storing states through its attributes and reacting to messages sent to it;
- var is an implicit variable type and this same type is determined according to the variable content (there is a need for the variable to be initialized to use var and you cannot change its type after this same initialization).

```java
package com.caffeinealgorithm.programminginjava;

public class Main {
  public static void main(String[] args) {
    var enemy1 = new ClassesAndObjects();
    var enemy2 = new ClassesAndObjects();

    enemy1.attack(); // I was attacked and lost a live.
    enemy1.attack(); // I was attacked and lost a live.
    enemy1.attack(); // I was attacked and lost a live.
    enemy1.checkLife(); // I am still in combat and have 2 lives.
    enemy2.checkLife(); // I am still in combat and have 5 lives.
  }
}
```

```java
package com.caffeinealgorithm.programminginjava;

public class ClassesAndObjects {
  int lives = 5;

  public void attack() {
    System.out.println("I was attacked and lost a live.");
    lives -= 1;
  }

  public void checkLife() {
    if (lives <= 0)
      System.out.println("I am dead because I don't have any more lives.");
    else
      System.out.printf("I am still in combat and have %d lives.\n", lives);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ktbsyAHPBv0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/ktbsyAHPBv0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classes-e-objetos-em-java/){:target="\_blank"}.

### _Happy coding!_
