---
layout: post
excerpt: Blog
title: 'More about Strings in Java'
description: 'Discover how to work with something more about strings in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, strings, string, post'
date: 2022-02-14
categories: [Java]
---

In this post, you will learn how to work with something more about strings so that you can use that same knowledge and thus evolve.

`\n` | New line
`\t` | New tab (indentation)
`variable.Length` | Returns the number of characters (in case of a string)
`variable.toUpperCase()` | Turns all letters present in the string into uppercase letters
`variable.toLowerCase()` | Turns all letters present in the string into lowercase letters

```java
package com.caffeinealgorithm.programminginjava;

public class MoreAboutStrings {
  public void Run() {
    String firstName = "Nelson";
    String lastName = "Silva";
    int age = 25;

    System.out.println("Name: " + firstName + ' ' + lastName + "\nAge: " + age);
    System.out.println(new StringBuilder().append("Name: ").append(firstName).append(' ').append(lastName).append("\nAge: ").append(age));
    System.out.printf("Name: %s %s\nAge: %d", firstName, lastName, age);
  }
}

/*
  Name: Nelson Silva
  Age: 25
  Name: Nelson Silva
  Age: 25
  Name: Nelson Silva
  Age: 25
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Vk0V-iw_LWo" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Vk0V-iw_LWo){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/mais-sobre-as-strings-em-java/){:target="\_blank"}.

### _Happy coding!_
