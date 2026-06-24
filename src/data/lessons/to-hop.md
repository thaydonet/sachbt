## Quy tắc đếm

### Hoán vị

Số hoán vị của $n$ phần tử:

$$
P_n = n!
$$

### Chỉnh hợp

Số chỉnh hợp chập $k$ của $n$ ($k \leq n$):

$$
A_n^k = \frac{n!}{(n-k)!}
$$

### Tổ hợp

Số tổ hợp chập $k$ của $n$ ($k \leq n$):

$$
C_n^k = \binom{n}{k} = \frac{n!}{k!(n-k)!}
$$

## Tính chất của tổ hợp

- $C_n^k = C_n^{n-k}$
- $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$
- $C_n^0 + C_n^1 + C_n^2 + \cdots + C_n^n = 2^n$

## Nhị thức Newton

$$
(a + b)^n = \sum_{k=0}^n C_n^k \cdot a^{n-k} \cdot b^k
$$

Công thức số hạng tổng quát:

$$
T_{k+1} = C_n^k \cdot a^{n-k} \cdot b^k
$$
