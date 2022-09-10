---
layout: post
excerpt: Blog
title: 'Scanner Class in Java'
description: 'Discover how to work with the Scanner class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, scanner class, scanner, class, post'
date: 2022-02-16
categories: [Java]
---

In this post, you will learn how to work with the Scanner class so that you can use that same knowledge and thus evolve.

- the Scanner class (belonging to the java.util library) has a method (nextLine()) whose main purpose is to "extract" information given by the user and the same that were to talk about today;
- in short, this same method serves to increase the interaction with the same user.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.Scanner;

public class ScannerClass {
  public void Run() {
    Scanner userInput = new Scanner(System.in);
    String firstName, lastName;
    int age;

    System.out.print("Enter your first name: ");
    firstName = userInput.nextLine();

    System.out.print("Enter your last name: ");
    lastName = userInput.nextLine();

    System.out.print("Enter your age: ");
    age = userInput.nextInt();

    System.out.printf("Name: %s %s\nAge: %d", firstName, lastName, age);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/d1Fp1_jjPsE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/d1Fp1_jjPsE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-scanner-em-java/){:target="\_blank"}.

### _Happy coding!_
