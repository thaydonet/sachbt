## Phép tính lũy thừa và lôgarit

---

### I. Phép tính lũy thừa

Cho số thực $a > 0$ và các số thực $r, s$:
- Số mũ nguyên dương: $a^n = \underbrace{a \cdot a \cdots a}_{n \text{ thừa số}}$.
- Số mũ nguyên âm: $a^{-n} = \frac{1}{a^n}$ ($a \neq 0$).
- Số mũ hữu tỉ: $a^{\frac{m}{n}} = \sqrt[n]{a^m}$ ($a > 0$).
- Số mũ thực: giới hạn của lũy thừa với số mũ hữu tỉ.

#### Các tính chất:
- $a^r \cdot a^s = a^{r+s}$
- $\frac{a^r}{a^s} = a^{r-s}$
- $(a^r)^s = a^{r \cdot s}$
- $(ab)^r = a^r \cdot b^r$
- $\left(\frac{a}{b}\right)^r = \frac{a^r}{b^r}$

---

### II. Phép tính lôgarit

Cho hai số thực dương $a, b$ với $a \neq 1$. Số thực $\alpha$ thỏa mãn đẳng thức $a^\alpha = b$ được gọi là **lôgarit cơ số $a$ của $b$**, ký hiệu là $\log_a b$.

$$\log_a b = \alpha \Leftrightarrow a^\alpha = b$$

#### Tính chất và công thức biến đổi:
- $\log_a 1 = 0$, $\log_a a = 1$.
- $a^{\log_a b} = b$, $\log_a(a^\alpha) = \alpha$.
- **Lôgarit của một tích**: $\log_a(xy) = \log_a x + \log_a y$ (với $x, y > 0$).
- **Lôgarit của một thương**: $\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$.
- **Lôgarit của một lũy thừa**: $\log_a(x^\alpha) = \alpha \log_a x$.
- **Công thức đổi cơ số**: $\log_a b = \frac{\log_c b}{\log_c a}$ (với $c > 0, c \neq 1$).
  - Đặc biệt: $\log_a b = \frac{1}{\log_b a}$.


### Ví dụ minh họa
**Bài tập:** Tính giá trị biểu thức $A = \log_2 8 + \log_3 \frac{1}{9}$.
**Lời giải:**
Áp dụng công thức lôgarit $\log_a (a^n) = n$:
- $\log_2 8 = \log_2 (2^3) = 3$.
- $\log_3 \frac{1}{9} = \log_3 (3^{-2}) = -2$.
Suy ra $A = 3 + (-2) = 1$.
