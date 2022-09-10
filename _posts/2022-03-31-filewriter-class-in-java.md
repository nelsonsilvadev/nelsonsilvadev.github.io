---
layout: post
excerpt: Blog
title: 'FileWriter Class in Java'
description: 'Discover how to work with the FileWriter class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, filewriter class, filewriter, class, post'
date: 2022-03-31
categories: [Java]
---

In this post, you will learn how to work with the FileWriter class so that you can use that same knowledge and thus evolve.

- this class aims to implement a writing mode so that characters can be written in a stream (file) according to a specific encoding.

`FileWriter (object).write()` | Write all its contents to the file without breaking the line
`FileWriter (object).close()` | Terminate existing link with the given file

```java
package com.caffeinealgorithm.programminginjava;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FileWriterClass {
  private File file = new File("File.txt");
  private List<String> countries = new ArrayList<>();
  private FileWriter writeFile;

  public void Run() {
    countries.add("Portugal");
    countries.add("Brazil");
    countries.add("Spain");
    countries.add("France");
    countries.add("Italy");
    countries.add("Australia");
    countries.add("India");

    if (!file.exists()) {
      try {
        file.createNewFile();
        writeFile = new FileWriter(file);

        for (String country : countries)
          writeFile.write(country + '\n');

        writeFile.close();
      }
      catch (IOException exception) {
        System.out.println(exception);
      }
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/iohYifid7pM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/iohYifid7pM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-filewriter-em-java/){:target="\_blank"}.

### _Happy coding!_
