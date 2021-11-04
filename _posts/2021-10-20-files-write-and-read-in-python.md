---
layout: post
excerpt: Blog
title: 'Files (Write and Read) in Python'
description: 'Discover how to work with files (write and read) in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, files, write files, read files, write and read, write, read, post'
date: 2021-10-20
categories: [Python]
---

In this post, you will learn how to work with files (write and read) so that you can use that same knowledge and thus evolve.

`open(file, mode)` | Open the file
`write(text)` | Write on file
`read()` | Read the file content
`close(file)` | Close the file
`'w'` | Write mode
`'r'` | Read mode

- it is necessary to always close the file.

```python
writeFile = open('File-Write-and-Read.txt', 'w')
writeFile.write('I\'m writing on the first line of this file.\n')
writeFile.write('Now I\'m writing on the second line.')
writefile.close()

readFile = open('File-Write-and-Read.txt', 'r')
print(readFile.read())

'''
  I'm writing on the first line of this file.
  Now I'm writing on the second line.
'''

readFile.close()
```

Don't forget to [watch the video](https://youtu.be/Hh8eV7n5ieg){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211020/ficheiros-escrever-e-ler-em-python/){:target="\_blank"}.

### _Happy coding!_
