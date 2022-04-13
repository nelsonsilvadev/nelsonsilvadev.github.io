---
layout: post
excerpt: Blog
title: 'Lambda in Java'
description: 'Discover how to work with lambda in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, lambda, post'
date: 2022-04-13
categories: [Java]
---

In this post, you will learn how to work with lambda so that you can use that same knowledge and thus evolve.

- lambda is used in the creation of anonymous functions and these are so called because they are not declared with the terms of creating a typical function;
- in short, lambda's main objective is to simplify certain and certain functions, and these often do not use the term "return" but rather an expression;

```java
package com.caffeinealgorithm.programminginjava;

import java.util.ArrayList;
import java.util.List;

public class Lambda {
  private List<String> people = new ArrayList<>();

  public void Run() {
    people.add("Nelson Silva");
    people.add("Larissa Fernandes");
    people.add("Pedro Henrique");
    people.add("Raquel Soares");

    // listPeople();

    people.forEach((person) -> System.out.printf("Name: %s\n", person));
  }

  private void listPeople() {
    for (String person : people)
      System.out.printf("Name: %s\n", person);
  }
}

/*
  Name: Nelson Silva
  Name: Larissa Fernandes
  Name: Pedro Henrique
  Name: Raquel Soares
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Xh95YJxeAnI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Xh95YJxeAnI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220413/lambda-em-java/){:target="\_blank"}.

### _Happy coding!_
