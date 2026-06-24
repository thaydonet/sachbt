## Định nghĩa đạo hàm

Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và $x_0 \in (a; b)$. Giới hạn hữu hạn (nếu có):

$$
\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
$$

được gọi là **đạo hàm** của hàm số tại điểm $x_0$, ký hiệu $f'(x_0)$.

Hay:

$$
f'(x_0) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
$$

## Công thức đạo hàm cơ bản

| Hàm số | Đạo hàm |
|--------|---------|
| $c$ (hằng số) | $0$ |
| $x^n$ | $n \cdot x^{n-1}$ |
| $\sqrt{x}$ | $\frac{1}{2\sqrt{x}}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\frac{1}{\cos^2 x}$ |
| $\cot x$ | $-\frac{1}{\sin^2 x}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \cdot \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x \cdot \ln a}$ |

## Quy tắc tính

- $(u \pm v)' = u' \pm v'$
- $(u \cdot v)' = u' \cdot v + u \cdot v'$
- $\left(\frac{u}{v}\right)' = \frac{u' \cdot v - u \cdot v'}{v^2}$
- Hàm hợp: $[f(g(x))]' = f'(g(x)) \cdot g'(x)$

## Ý nghĩa hình học

Đạo hàm $f'(x_0)$ là **hệ số góc** của tiếp tuyến với đồ thị $y = f(x)$ tại điểm $M_0(x_0; f(x_0))$.

Phương trình tiếp tuyến:

$$
y - y_0 = f'(x_0)(x - x_0)
$$
