## Xác suất

### Định nghĩa cổ điển

Cho phép thử có không gian mẫu $\Omega$ gồm $n(\Omega)$ phần tử đồng khả năng. Xác suất của biến cố $A$:

$$
P(A) = \frac{n(A)}{n(\Omega)}
$$

Tính chất:

- $0 \leq P(A) \leq 1$
- $P(\Omega) = 1$, $P(\varnothing) = 0$

### Công thức cộng

Nếu $A$ và $B$ **xung khắc** ($A \cap B = \varnothing$):

$$
P(A \cup B) = P(A) + P(B)
$$

Tổng quát:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

### Xác suất có điều kiện

$$
P(A|B) = \frac{P(A \cap B)}{P(B)} \quad (P(B) > 0)
$$

### Công thức nhân

Nếu $A$ và $B$ **độc lập**:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

Tổng quát:

$$
P(A \cap B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)
$$

### Biến ngẫu nhiên rời rạc

Kỳ vọng: $E(X) = \sum_{i=1}^n x_i \cdot p_i$

Phương sai: $V(X) = \sum_{i=1}^n (x_i - \mu)^2 \cdot p_i$

Độ lệch chuẩn: $\sigma(X) = \sqrt{V(X)}$
