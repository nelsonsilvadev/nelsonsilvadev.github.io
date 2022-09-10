---
layout: post
excerpt: Blog
title: 'Constructors in Java'
description: 'Discover how to work with constructors in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, constructors, construtor, post'
date: 2022-03-16
categories: [Java]
---

In this post, you will learn how to work with constructors so that you can use that same knowledge and thus evolve.

- the constructors have as function to initialize everything that is necessary when creating a certain object;
- you can create several constructors in a class.

```java
package com.caffeinealgorithm.programminginjava;

public class Main {
  public static void main(String[] args) {
    var person1 = new Constructors("Nelson", "Silva", 25);
    var person2 = new Constructors("Larissa", "Fernandes", 17);

    person1.information();
    person1.checkEntrance();

    /*
      Name: Nelson Silva
      Age: 25
      This person can enter the site because he is over 18 years old.
    */

    person2.information();
    person2.checkEntrance();

    /*
      Name: Larissa Fernandes
      Age: 17
      This person cannot enter the site because he is under 18 years of age.
    */
  }
}
```

```java
package com.caffeinealgorithm.programminginjava;

public class Constructors {
  String firstName = null, lastName = null;
  int age = 0;

  public Constructors(String firstName, String lastName, int age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public void information() {
    System.out.printf("Name: %s %s\n", firstName, lastName);
    System.out.printf("Age: %d\n", age);
  }

  public void checkEntrance() {
    if (age >= 18)
      System.out.println("This person can enter the site because he is over 18 years old.");
    else
      System.out.println("This person cannot enter the site because he is under 18 years of age.");
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/vZjw1DbKVsY" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/vZjw1DbKVsY){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/construtores-em-java/){:target="\_blank"}.

### _Happy coding!_
