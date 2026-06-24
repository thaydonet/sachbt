## Đường tiệm cận

### Tiệm cận đứng

Nếu $\lim_{x \to x_0^+} f(x) = \pm\infty$ hoặc $\lim_{x \to x_0^-} f(x) = \pm\infty$ thì $x = x_0$ là **tiệm cận đứng**.

### Tiệm cận ngang

Nếu $\lim_{x \to +\infty} f(x) = y_0$ hoặc $\lim_{x \to -\infty} f(x) = y_0$ thì $y = y_0$ là **tiệm cận ngang**.

### Tiệm cận xiên

Nếu $\lim_{x \to \pm\infty} [f(x) - (ax + b)] = 0$ thì $y = ax + b$ là **tiệm cận xiên**.

Cách tìm $a, b$:

$$
a = \lim_{x \to \pm\infty} \frac{f(x)}{x}, \quad b = \lim_{x \to \pm\infty} [f(x) - ax]
$$

## Ví dụ

Tìm tiệm cận của hàm số $y = \frac{2x + 1}{x - 1}$:

- Tập xác định: $D = \mathbb{R} \setminus \{1\}$
- $\lim_{x \to 1^+} \frac{2x + 1}{x - 1} = +\infty$ → $x = 1$ là TCĐ
- $\lim_{x \to \pm\infty} \frac{2x + 1}{x - 1} = 2$ → $y = 2$ là TCN
