## Định nghĩa

Dãy số $(u_n)$ là **cấp số nhân** nếu:

$$
u_{n+1} = u_n \cdot q \quad \forall n \in \mathbb{N}^*
$$

với $q$ là **công bội**.

### Số hạng tổng quát

$$
u_n = u_1 \cdot q^{n-1}
$$

### Tính chất các số hạng

$u_k$ là trung bình nhân của $u_{k-1}$ và $u_{k+1}$:

$$
u_k^2 = u_{k-1} \cdot u_{k+1}
$$

### Tổng $n$ số hạng đầu

Nếu $q \neq 1$:

$$
S_n = u_1 + u_2 + \cdots + u_n = \frac{u_1(1 - q^n)}{1 - q}
$$

Nếu $q = 1$:

$$
S_n = n \cdot u_1
$$

### Tổng cấp số nhân lùi vô hạn

Nếu $|q| < 1$:

$$
S = u_1 + u_1q + u_1q^2 + \cdots = \frac{u_1}{1 - q}
$$

## Ví dụ

Cho CSN có $u_1 = 2$, $q = 3$. Tìm $u_5$ và $S_5$:

$$
u_5 = 2 \cdot 3^{4} = 162
$$

$$
S_5 = \frac{2(1 - 3^5)}{1 - 3} = \frac{2(1 - 243)}{-2} = 242
$$
