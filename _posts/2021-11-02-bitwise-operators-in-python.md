---
layout: post
excerpt: Blog
title: 'Bitwise Operators in Python'
description: 'Discover how to work with bitwise operators in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, bitwise operators, bitwise, operators, post'
date: 2021-11-02
categories: [Python]
---

In this post, you will learn how to work with bitwise operators so that you can use that same knowledge and thus evolve.

- bitwise operators operate one bit at a time and having a sense of what the binary code is is important;

`1` | True
`0` | False
`&` | Only true when both numbers match 1 and 1
`|` | It is only false when both numbers match 0 and 0
`<<` | Shift bits according to given number to the left
`>>` | Shift bits according to given number to the right

- then we also have the operators `^` and `~`;
- such operators are mostly used in low-level applications for communication between networks and telecommunications.

```python
x = 60 # 00111100
y = 13 # 00001101

print('Result of operator &:', x & y) # Result of operator &: 12 (00001100)
print('Result of operator |:', x | y) # Result of operator |: 61 (00111101)
print('Result of operator <<:', x << 2) # Result of operator <<: 240 (11110000)
print('Result of operator >>:', x >> 2) # Result of operator >>: 15 (00001111)
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/gyBY7AcVPk4" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/gyBY7AcVPk4){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/operadores-bit-a-bit-em-python/){:target="\_blank"}.

### _Happy coding!_
