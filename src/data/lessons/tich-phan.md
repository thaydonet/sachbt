## Tích phân

Cho $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn $[a; b]$. **Tích phân** từ $a$ đến $b$ của $f(x)$ là:

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

Trong đó $a$ là cận dưới, $b$ là cận trên.

## Tính chất

- $\int_a^b k \cdot f(x) \, dx = k \cdot \int_a^b f(x) \, dx$
- $\int_a^b [f(x) \pm g(x)] \, dx = \int_a^b f(x) \, dx \pm \int_a^b g(x) \, dx$
- $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$
- $\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$

## Phương pháp tính

### Đổi biến số

Đặt $x = \varphi(t)$, $dx = \varphi'(t) \, dt$:

$$
\int_a^b f(x) \, dx = \int_{\alpha}^{\beta} f(\varphi(t)) \cdot \varphi'(t) \, dt
$$

### Tích phân từng phần

$$
\int_a^b u \, dv = u \cdot v \Big|_a^b - \int_a^b v \, du
$$

Thường dùng cho dạng $\int P(x) \cdot e^x \, dx$, $\int P(x) \cdot \sin x \, dx$, $\int P(x) \cdot \ln x \, dx$.
