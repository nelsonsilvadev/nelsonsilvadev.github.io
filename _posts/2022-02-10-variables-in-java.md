---
layout: post
excerpt: Blog
title: 'Variables in Java'
description: 'Discover how to work with integer, decimal (double), string, char and boolean variables in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, variables, variable, integer, decimal, double, string, char, boolean, post'
date: 2022-02-10
categories: [Java]
---

In this post, you will learn how to work with integer, decimal (double), string, char and boolean variables so that you can use that same knowledge and thus evolve.

- a variable is an object (a position located in memory) that represents a value or an expression;
- in some of the existing programming languages it is not necessary to define the variable type but in Java it is;
- types of variables: integer, decimal (double), string, char, boolean, arrays, lists, dictionaries, and some more;
- it should be mentioned that we are going to talk about arrays, lists and dictionaries in one of the next videos.

```java
package com.caffeinealgorithm.programminginjava;

public class Variables {
  public void Run() {
    int integer = 10;
    double _double = 10.5;
    String string = "I am a string.";
    char character = 'c';
    boolean _boolean = true;

    System.out.println("integer: " + integer); // integer: 10
    System.out.println("double: " + _double); // double: 10.5
    System.out.println("string: " + string); // string: Eu sou uma string.
    System.out.println("character: " + character); // character: c
    System.out.println("boolean: " + _boolean); // boolean: false
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Pw2Tsh8CAaE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Pw2Tsh8CAaE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220210/variaveis-em-java/){:target="\_blank"}.

### _Happy coding!_
