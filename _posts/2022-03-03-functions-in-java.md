---
layout: post
excerpt: Blog
title: 'Functions in Java'
description: 'Discover how to work with functions in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, functions, function, methods, method, post'
date: 2022-03-03
categories: [Java]
---

In this post, you will learn how to work with functions so that you can use that same knowledge and thus evolve.

- a function is an organized and reusable piece of code that is used to perform a single related action;
- functions provide better modularity and a high degree of code reuse;
- it is not possible to create a role inside another role.

```java
package com.caffeinealgorithm.programminginjava;

public class Functions {
  public void Run() {
    personalData();
    personalData();
    personalData();
  }

  public void personalData() {
    System.out.println("Name: Nelson Silva");
    System.out.println("Age: 25");
    System.out.println("Nationality: Portuguese");
  }
}

/*
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguese
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguese
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguese
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BI1mwKihlJI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/BI1mwKihlJI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220303/funcoes-em-java/){:target="\_blank"}.

### _Happy coding!_
