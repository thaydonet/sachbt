## Giới hạn dãy số và giới hạn hàm số

---

### I. Giới hạn của dãy số (Limits of Sequences)

Ta nói dãy số $(u_n)$ có giới hạn là $0$ (ký hiệu $\lim u_n = 0$) khi $n$ dần tới vô cùng nếu khoảng cách từ $u_n$ đến $0$ có thể nhỏ hơn một số dương bé tùy ý, kể từ một số hạng nào đó trở đi.
- Tổng quát: $\lim u_n = L \Leftrightarrow \lim (u_n - L) = 0$.

#### Một số giới hạn đặc biệt:
- $\lim \frac{1}{n} = 0$, $\lim \frac{1}{n^k} = 0$ ($k > 0$).
- $\lim q^n = 0$ nếu $|q| < 1$.
- $\lim c = c$ (với $c$ là hằng số).

---

### II. Giới hạn của hàm số (Limits of Functions)

Cho hàm số $y=f(x)$ xác định trên khoảng $K$ (có thể chứa $x_0$). Ta nói hàm số $f(x)$ có giới hạn là số thực $L$ khi $x$ dần tới $x_0$ nếu với mọi dãy số $(x_n)$ thuộc $K \setminus \{x_0\}$ thỏa mãn $x_n \to x_0$ thì $f(x_n) \to L$.
- Ký hiệu:

$$\lim_{x \to x_0} f(x) = L$$

#### Giới hạn vô cực và giới hạn tại vô cực:
- $\lim_{x \to x_0} f(x) = +\infty$ hoặc $-\infty$.
- $\lim_{x \to \pm\infty} f(x) = L$.

#### Các phép toán giới hạn (Định lý về giới hạn hữu hạn):
Nếu $\lim f(x) = L$ và $\lim g(x) = M$ khi $x \to x_0$:
- $\lim [f(x) \pm g(x)] = L \pm M$
- $\lim [f(x) \cdot g(x)] = L \cdot M$
- $\lim \frac{f(x)}{g(x)} = \frac{L}{M}$ (nếu $M \neq 0$)


### Ví dụ minh họa
**Bài tập:** Tính giới hạn $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
**Lời giải:**
Khi $x \to 2$, biểu thức có dạng vô định $\frac{0}{0}$.
Ta phân tích tử thức thành nhân tử: $x^2 - 4 = (x - 2)(x + 2)$.
Khi đó:
$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4$.
