## Dãy số

Mỗi hàm số $u$ xác định trên tập các số nguyên dương $\mathbb{N}^*$ được gọi là một **dãy số vô hạn**. Ký hiệu là $(u_n)$.
- $u_1$ là số hạng đầu, $u_n$ là số hạng tổng quát (hay số hạng thứ $n$).
- Nếu tập xác định là $\{1, 2, \dots, m\}$ thì dãy số gọi là dãy số hữu hạn.

---

### Cách cho một dãy số
1. Cho công thức của số hạng tổng quát $u_n$.
2. Cho bằng phương pháp truy hồi (cho số hạng đầu và hệ thức tính số hạng sau qua số hạng trước).
3. Mô tả bằng lời cách xác định các số hạng.

---

### Dãy số đơn điệu và bị chặn

#### 1. Dãy số tăng, dãy số giảm
- Dãy số $(u_n)$ được gọi là **tăng** nếu:

$$u_{n+1} > u_n \quad \forall n \in \mathbb{N}^*$$

- Dãy số $(u_n)$ được gọi là **giảm** nếu:

$$u_{n+1} < u_n \quad \forall n \in \mathbb{N}^*$$

#### 2. Dãy số bị chặn
- $(u_n)$ bị chặn trên nếu $\exists M \in \mathbb{R}$ sao cho $u_n \le M, \forall n \in \mathbb{N}^*$.
- $(u_n)$ bị chặn dưới nếu $\exists m \in \mathbb{R}$ sao cho $u_n \ge m, \forall n \in \mathbb{N}^*$.
- $(u_n)$ bị chặn nếu nó vừa bị chặn trên vừa bị chặn dưới.


### Ví dụ minh họa
**Bài tập:** Cho dãy số $(u_n)$ biết $u_n = \frac{2n - 1}{n + 1}$. Xét tính tăng, giảm của dãy số.
**Lời giải:**
Xét hiệu $u_{n+1} - u_n$:
$\begin{aligned} u_{n+1} - u_n &= \frac{2(n+1) - 1}{(n+1) + 1} - \frac{2n - 1}{n + 1} \\ &= \frac{2n + 1}{n + 2} - \frac{2n - 1}{n + 1} \\ &= \frac{(2n+1)(n+1) - (2n-1)(n+2)}{(n+2)(n+1)} \\ &= \frac{2n^2 + 3n + 1 - (2n^2 + 3n - 2)}{(n+2)(n+1)} = \frac{3}{(n+2)(n+1)} > 0 \quad \forall n \ge 1. \end{aligned}$
Do đó $u_{n+1} > u_n \, \forall n \ge 1$. Dãy số $(u_n)$ là dãy số tăng.
