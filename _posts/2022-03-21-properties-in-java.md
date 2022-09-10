---
layout: post
excerpt: Blog
title: 'Properties in Java'
description: 'Discover how to work with properties in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, properties, property, get, set, post'
date: 2022-03-21
categories: [Java]
---

In this post, you will learn how to work with properties so that you can use that same knowledge and thus evolve.

- the properties (get and set) are members that provide a flexible mechanism for reading, writing or calculating the value of a particular field;
- they allow the data to be easily accessed and also help to promote the security and flexibility of the methods;
- it is also important to know that the properties allow a class to expose a public way to obtain and set the value by hiding the implementation code or verification;
- properties that do not implement a set are read-only.

```java
package com.caffeinealgorithm.programminginjava;

public class Main {
  public static void main(String[] args) {
    var person = new Properties();

    person.setFirstName("Nelson");
    person.setLastName("Silva");
    person.information();
    System.out.printf("Age: %d", person.getAge());

    /*
      Name: Nelson Silva
      Age: 25
    */
  }
}
```

```java
package com.caffeinealgorithm.programminginjava;

public class Properties {
  private String firstName = "", lastName = "";
  private int age = 25;

  public void setFirstName(String firstName) {
    if (firstName != "")
      this.firstName = firstName;
    else
      System.out.println("The string referring to the first name cannot be empty.");
  }

  public void setLastName(String lastName) {
    if (lastName != "")
      this.lastName = lastName;
    else
      System.out.println("The string referring to the last name cannot be empty.");
  }

  public int getAge() {
    return age;
  }

  public void information() {
    System.out.printf("Name: %s %s\n", firstName, lastName);
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/M9PXEZdgm48" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/M9PXEZdgm48){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/propriedades-em-java/){:target="\_blank"}.

### _Happy coding!_
