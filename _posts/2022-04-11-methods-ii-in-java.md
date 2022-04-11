---
layout: post
excerpt: Blog
title: 'Methods II in Java'
description: 'Discover how to work with two specific methods (indexOf() and trim()) in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, indexof, trim, methods, method, functions, function, post'
date: 2022-04-11
categories: [Java]
---

In this post, you will learn how to work with two specific methods (`indexOf()` and `trim()`) so that you can use that same knowledge and thus evolve.

`indexOf()` | Returns a substring from the first occurrence of a character (or even a set of characters) to the end of the given string
`trim()` | Eliminates spaces present at the beginning and end of a string, that is, returns a modified copy of the original string

```java
package com.caffeinealgorithm.programminginjava;

import java.util.Scanner;

public class MethodsII {
  private String loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.";
  private Scanner userInput = new Scanner(System.in);

  public void Run() {
    // indexOf()
    var index = 0;

    while ((index = loremIpsum.indexOf('i', index)) != -1) {
      System.out.println(loremIpsum.substring(index));
      index++;
    }

    // trim()
    System.out.print("\nEnter your first name: ");
    var firstName = userInput.nextLine();

    System.out.print("Enter your last name: ");
    var lastName = userInput.nextLine();

    System.out.printf("\nName (without using the Trim() method): %s %s\n", firstName, lastName);
    System.out.printf("\nName (using the Trim() method): %s %s\n", firstName.trim(), lastName.trim());
  }
}

/*
  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.
  it amet, consectetur adipiscing elit. Vestibulum consectetur.
  ipiscing elit. Vestibulum consectetur.
  iscing elit. Vestibulum consectetur.
  ing elit. Vestibulum consectetur.
  it. Vestibulum consectetur.
  ibulum consectetur.
  Enter your first name:          Nelson
  Enter your last name:    Silva
  Name (without using the trim() method):          Nelson          Silva
  Name (using the trim() method): Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/qEVCtofREBM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/qEVCtofREBM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220411/metodos-ii-em-java/){:target="\_blank"}.

### _Happy coding!_
