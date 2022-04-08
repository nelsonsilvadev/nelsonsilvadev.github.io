---
layout: post
excerpt: Blog
title: 'Methods I in Java'
description: 'Discover how to work with two specific methods (substring() and split()) in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, substring, split, methods, method, functions, function, post'
date: 2022-04-08
categories: [Java]
---

In this post, you will learn how to work with two specific methods (`substring()` and `split()`) so that you can use that same knowledge and thus evolve.

`substring()` | Returns a substring (a new string with characters from a certain range) according to the start index and the end index
`split()` | Divides a set of characters (according to the given parameter/argument) and returns it into subsets of characters, that is, returns an array of strings (Regex is referring to the use of regular expressions).

```java
package com.caffeinealgorithm.programminginjava;

public class MethodsI {
  private String oneTwoThree = "OneTwoThree", name = "Nelson Gomes da Silva";

  public void Run() {
    // substring()
    System.out.printf("1: %s\n", oneTwoThree.substring(0, 2));
    System.out.printf("2: %s\n", oneTwoThree.substring(2, 6));
    System.out.printf("3: %s\n", oneTwoThree.substring(6));

    // split()
    var words = name.split(" ");

    for (String word : words)
      System.out.printf("Word: %s\n", word);

    var _words = name.split(" Gomes da ");
    System.out.printf("Name: %s %s", _words[0], _words[1]);
  }
}

/*
  1: One
  2: Two
  3: Three
  Word: Nelson
  Word: Gomes
  Word: da
  Word: Silva
  Name: Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/TAKYXCKl4VE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/TAKYXCKl4VE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220408/metodos-i-em-java/){:target="\_blank"}.

### _Happy coding!_
