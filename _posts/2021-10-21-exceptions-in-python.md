---
layout: post
excerpt: Blog
title: 'Exceptions in Python'
description: 'Discover how to work with exceptions in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, exceptions, exception, post'
date: 2021-10-21
categories: [Python]
---

In this post, you will learn how to work with exceptions so that you can use that same knowledge and thus evolve.

- an exception is an event that occurs during the execution of a piece of code that interrupts its normal flow of instructions;
- in short, an exception represents an error.

`IOError` | When an error occurs related to file handling

```python
try:
   readFile = open('File-Write-and-Read.txt', 'r')
   print(readFile.read())
except IOError:
   print('The file does not exist and/or its contents cannot be read.')
else:
   print('The file was read successfully.')
   readFile.close()

print('I know there was an error, however, my content is still displayed on the command line.')
```

Don't forget to [watch the vídeo](https://youtu.be/4ULTUP1RWSM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211021/excecoes-em-python/){:target="\_blank"}.

### _Happy coding!_
