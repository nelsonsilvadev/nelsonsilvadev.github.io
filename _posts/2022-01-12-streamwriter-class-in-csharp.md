---
layout: post
excerpt: Blog
title: 'StreamWriter Class in C#'
description: 'Discover how to work with the StreamWriter class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, streamwriter class, streamwriter, class, post'
date: 2022-01-12
categories: [C#]
---

In this post, you will learn how to work with the StreamWriter class so that you can use that same knowledge and thus evolve.

- this class (belonging to System.IO library) aims to implement a writing mode so that characters can be written in a stream (file) according to a specific encoding.

`StreamWriter (object).Write()` | Write all its contents to the file without breaking the line
`StreamWriter (object).WriteLine()` | Write all your content to the file and change the line
`StreamWriter (object).Close()` | Terminate existing link with the given file

- using guarantees the correct use of the mechanism that frees resources that are not being managed/used.

```csharp
using System.Collections.Generic;
using System.IO;

namespace Base {
  class StreamWriterClass {
    private StreamWriter writeFile;
    private List<string> countries = new List<string>() {
      "Portugal",
      "Brazil",
      "Spain",
      "France",
      "Italy",
      "Australia",
      "India"
    };

    public void Run() {
      /*
        writeFile = new StreamWriter("File.txt");

        foreach (var country in countries)
          writeFile.WriteLine(country);

        writeFile.Close();
      */

      using (writeFile = new StreamWriter("File.txt")) {
        foreach (var country in countries)
          writeFile.WriteLine(country);
      }
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/7Hjm23B-quw" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/7Hjm23B-quw){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220112/classe-streamwriter-em-csharp/){:target="\_blank"}.

### _Happy coding!_
