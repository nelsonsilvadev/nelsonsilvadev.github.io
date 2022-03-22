---
layout: post
excerpt: Blog
title: 'Inheritance in Java'
description: 'Discover how to work with inheritance in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, inheritance, post'
date: 2022-03-22
categories: [Java]
---

In this post, you will learn how to work with inheritance so that you can use that same knowledge and thus evolve.

- inheritance is a mechanism by which a class (subclass) can extend another class (superclass) to take advantage of its possible variables (attributes) and its behavior (methods);
- a class can only inherit from only one class;
- protected boils down to the possibility of access only within the class itself or within a class derived from it.

```java
package com.caffeinealgorithm.programminginjava;

public class Inheritance {
  public void Run() {
    var person = new Son();
    person.information();
    person.favoriteFood();

    /*
      Name: Nelson Silva
      Age: 25
      My favorite food is seafood rice.
    */
  }
}

class Dad {
  protected String lastName = "Silva";

  public void favoriteFood() {
    System.out.println("My favorite food is seafood rice.");
  }
}

class Son extends Dad {
  private String firstName = "Nelson";
  private int age = 25;

  public void information() {
    System.out.printf("Name: %s %s\n", firstName, lastName);
    System.out.printf("Age: %d\n", age);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/wFJN_36mi9M" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/wFJN_36mi9M){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220322/heranca-em-java/){:target="\_blank"}.

### _Happy coding!_
