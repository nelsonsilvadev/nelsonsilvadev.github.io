---
layout: post
excerpt: Blog
title: 'Multidimensional Arrays in Java'
description: 'Discover how to work with multidimensional arrays in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, multidimensional arrays, arrays, multidimensional, array, post'
date: 2022-03-10
categories: [Java]
---

In this post, you will learn how to work with multidimensional arrays so that you can use that same knowledge and thus evolve.

- a multidimensional array (array) is basically a table with rows and columns or it can be much more than a table (depending on the number of values that make up the multidimensional array);
- has a fixed size and is used to store a set of data in a sequential way;
- it is important to remember that it is more useful to think of an array as a set of variables of the same type in which they are placed adjacently in memory;
- these variables are called elements and each of these is identified by an index, whereby we have an index to identify the given column and another index to identify the given row.

```java
package com.caffeinealgorithm.programminginjava;

public class MultidimensionalArrays {
  public void Run() {
    // [number of rows, number of columns]
    int[][] multidimensionalArray = new int[][] {
        { 1, 2, 3, 4 },
        { 1, 1, 1, 1 },
        { 2, 2, 2, 2 },
        { 3, 3, 3, 3 },
        { 4, 4, 4, 4 }
    };

    for (int row = 0; row < 5; row++) {
      for (int column = 0; column < 4; column++) {
        System.out.printf("%d\t", multidimensionalArray[row][column]);
      }

      System.out.println();
    }
  }
}

/*
  1  2  3  4
  1  1  1  1
  2  2  2  2
  3  3  3  3
  4  4  4  4
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/tF6U5grcYCE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/tF6U5grcYCE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220310/arrays-multidimensionais-em-java/){:target="\_blank"}.

### _Happy coding!_
