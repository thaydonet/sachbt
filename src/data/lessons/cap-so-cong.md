## Định nghĩa

Dãy số $(u_n)$ là **cấp số cộng** nếu:

$$
u_{n+1} = u_n + d \quad \forall n \in \mathbb{N}^*
$$

với $d$ là **công sai**.

### Số hạng tổng quát

$$
u_n = u_1 + (n-1)d
$$

### Tính chất các số hạng

$u_k$ là trung bình cộng của $u_{k-1}$ và $u_{k+1}$:

$$
u_k = \frac{u_{k-1} + u_{k+1}}{2}
$$

### Tổng $n$ số hạng đầu

$$
S_n = u_1 + u_2 + \cdots + u_n = \frac{n(u_1 + u_n)}{2}
$$

Hay:

$$
S_n = \frac{n[2u_1 + (n-1)d]}{2}
$$

## Ví dụ

Cho CSC có $u_1 = 2$, $d = 3$. Tìm $u_{10}$ và $S_{10}$:

$$
u_{10} = 2 + (10-1) \cdot 3 = 29
$$

$$
S_{10} = \frac{10(2 + 29)}{2} = 155
$$
