---
layout: post
excerpt: Blog
title: 'File Class in Java'
description: 'Discover how to work with the File class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, file class, file, class, post'
date: 2022-03-30
categories: [Java]
---

In this post, you will learn how to work with the File class so that you can use that same knowledge and thus evolve.

- this class provides methods for creating, deleting, getting the absolute path, and checking for a single file at a time.

`File (object).createNewFile()` | Create a file in the specified path
`File (object).delete()` | Deletion of a certain file
`File (object).getAbsolutePath()` | Gets the absolute path of the file
`File (object).exists()` | Checks if the data file exists or not

```java
package com.caffeinealgorithm.programminginjava;

import java.io.File;
import java.io.IOException;

public class FileClass {
  private File file = new File("File.txt");

  public void Run() {
    /*
      try {
        file.createNewFile();
      }
      catch (IOException exception) {
        System.out.println(exception);
      }
    */

    file.delete();

    // System.out.println(file.getAbsolutePath());

    if (file.exists())
      System.out.println("The file \"File.txt\" exists.");
    else
      System.out.println("The file \"File.txt\" does not exist.");
  }
}

// The file "File.txt" does not exist.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/_d2WykDSZyM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/_d2WykDSZyM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-file-em-java/){:target="\_blank"}.

### _Happy coding!_
