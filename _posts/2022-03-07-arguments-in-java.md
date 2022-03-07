---
layout: post
excerpt: Blog
title: 'Arguments in Java'
description: 'Discover how to work with arguments in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, arguments, argument, post'
date: 2022-03-07
categories: [Java]
---

In this post, you will learn how to work with arguments so that you can use that same knowledge and thus evolve.

- arguments are like variables that receive their values (their content) when the function is called;
- these same arguments are considered to be local variables because they only exist inside the function;
- local variables are discarded when returning to the calling point.

```java
package com.caffeinealgorithm.programminginjava;

public class Arguments {
  public void Run() {
    personalData("Nelson Silva", 25, "Portuguese");
    personalData("Larissa Fernandes", 37, "Brazilian");
  }

  public void personalData(String name, int age, String nationality) {
    System.out.printf("Name: %s\n", name);
    System.out.printf("Age: %d\n", age);
    System.out.printf("Nationality: %s", nationality);
  }
}

/*
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguese
  Name: Larissa Fernandes
  Age: 37
  Nationality: Brazilian
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/k76K3UraNhU" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/k76K3UraNhU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220307/argumentos-em-java/){:target="\_blank"}.

### _Happy coding!_
