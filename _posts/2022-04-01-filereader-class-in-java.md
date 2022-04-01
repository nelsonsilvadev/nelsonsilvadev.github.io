---
layout: post
excerpt: Blog
title: 'FileReader Class in Java'
description: 'Discover how to work with the FileReader class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, filereader class, filereader, class, post'
date: 2022-04-01
categories: [Java]
---

In this post, you will learn how to work with the FileReader class so that you can use that same knowledge and thus evolve.

- this class implements a reading mode so that one can read the characters present in a stream (file) according to a specific encoding.

`FileReader (object).read()` | Reads the entire content of the file to the end
`FileReader (object).close()` | Terminates existing link with the given file

```java
package com.caffeinealgorithm.programminginjava;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class FileReaderClass {
  private File file = new File("File.txt");
  private char[] characters = new char[100];
  private FileReader readFile;

  public void Run() {
    if (file.exists()) {
      try {
        readFile = new FileReader(file);
        readFile.read(characters);

        for (char character : characters)
          System.out.print(character);

        readFile.close();
      }
      catch (IOException exception) {
        System.out.println(exception);
      }
    }
  }
}

/*
  Portugal
  Brazil
  Spain
  France
  Italy
  Australia
  India
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/22Np9fJQv-E" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/22Np9fJQv-E){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220401/classe-filereader-em-java/){:target="\_blank"}.

### _Happy coding!_
