---
layout: post
excerpt: Blog
title: 'Global and Local Variables in Java'
description: 'Discover how to work with global and local variables in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, global variables, local variables, variables, global, local, variable, post'
date: 2022-03-08
categories: [Java]
---

In this post, you will learn how to work with global and local variables so that you can use that same knowledge and thus evolve.

- global variables are all those that are defined outside a function (in the "root" of our code) and have a global scope;
- local variables are all those that are defined inside a function;
- in short, not all variables are accessible from all places in our code.

```java
package com.caffeinealgorithm.programminginjava;

public class GlobalAndLocalVariables {
  String access = "Global";

  public void Run() {
    changeAccess();
    System.out.printf("Access from outside the function: %s", access);
  }

  public void changeAccess() {
    String access = "Local";
    System.out.printf("Access inside the function: %s\n", access);
  }
}

/*
  Access inside the function: Local
  Access from outside the function: Global
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/hgVFRjqnSPM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/hgVFRjqnSPM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220308/variaveis-globais-e-locais-em-java/){:target="\_blank"}.

### _Happy coding!_
