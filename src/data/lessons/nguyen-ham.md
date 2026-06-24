## Nguyên hàm

Cho hàm số $f(x)$ xác định trên $K$. Hàm số $F(x)$ được gọi là **nguyên hàm** của $f(x)$ trên $K$ nếu:

$$
F'(x) = f(x) \quad \forall x \in K
$$

Họ tất cả các nguyên hàm của $f(x)$ được ký hiệu:

$$
\int f(x) \, dx = F(x) + C
$$

## Công thức nguyên hàm cơ bản

### Nhóm đa thức - phân thức

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)
$$

$$
\int \frac{1}{x} \, dx = \ln|x| + C
$$

$$
\int \frac{1}{x^2} \, dx = -\frac{1}{x} + C
$$

### Nhóm lượng giác

$$
\int \sin x \, dx = -\cos x + C
$$

$$
\int \cos x \, dx = \sin x + C
$$

$$
\int \frac{1}{\cos^2 x} \, dx = \tan x + C
$$

$$
\int \frac{1}{\sin^2 x} \, dx = -\cot x + C
$$

### Nhóm mũ - logarit

$$
\int e^x \, dx = e^x + C
$$

$$
\int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a > 0, a \neq 1)
$$

## Tính chất

- $\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$
- $\int k \cdot f(x) \, dx = k \cdot \int f(x) \, dx$
