## Cực trị của hàm số

Cho hàm số $y = f(x)$ xác định và liên tục trên khoảng $(a; b)$. Điểm $x_0 \in (a; b)$ được gọi là:

- **Điểm cực đại** nếu tồn tại $h > 0$ sao cho $f(x) < f(x_0)$ với mọi $x \in (x_0 - h; x_0 + h) \setminus \{x_0\}$.
- **Điểm cực tiểu** nếu tồn tại $h > 0$ sao cho $f(x) > f(x_0)$ với mọi $x \in (x_0 - h; x_0 + h) \setminus \{x_0\}$.

## Quy tắc tìm cực trị

### Quy tắc 1

1. Tìm $f'(x)$
2. Giải $f'(x) = 0$, tìm các nghiệm $x_i$
3. Xét dấu $f'(x)$:
   - Nếu $f'(x)$ đổi dấu từ $+$ sang $-$ khi qua $x_i$ → $x_i$ là điểm **cực đại**
   - Nếu $f'(x)$ đổi dấu từ $-$ sang $+$ khi qua $x_i$ → $x_i$ là điểm **cực tiểu**

### Quy tắc 2

1. Tìm $f'(x)$, giải $f'(x) = 0$ tìm các nghiệm $x_i$
2. Tính $f''(x)$:
   - Nếu $f''(x_i) < 0$ → $x_i$ là điểm **cực đại**
   - Nếu $f''(x_i) > 0$ → $x_i$ là điểm **cực tiểu**

## Điều kiện để hàm số có cực trị

Hàm số $y = f(x)$ có cực trị tại $x_0$ khi:

$$
\begin{cases}
f'(x_0) = 0 \\
f'(x) \text{ đổi dấu khi qua } x_0
\end{cases}
$$

## Giá trị cực trị

- Giá trị cực đại: $f_{CĐ} = f(x_{CĐ})$
- Giá trị cực tiểu: $f_{CT} = f(x_{CT})$

**Chú ý:** $f_{CĐ}$ có thể nhỏ hơn $f_{CT}$ (cực đại chỉ mang tính địa phương).
