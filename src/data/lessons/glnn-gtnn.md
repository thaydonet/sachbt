## Giá trị lớn nhất và nhỏ nhất của hàm số

Cho hàm số $y = f(x)$ xác định trên tập hợp $D$:
- Số $M$ được gọi là **giá trị lớn nhất** (GTLN) của $f(x)$ trên $D$ (ký hiệu $M = \max_D f(x)$) nếu:
  1. $f(x) \le M$ với mọi $x \in D$.
  2. Tồn tại điểm $x_0 \in D$ sao cho $f(x_0) = M$.
- Số $m$ được gọi là **giá trị nhỏ nhất** (GTNN) của $f(x)$ trên $D$ (ký hiệu $m = \min_D f(x)$) nếu:
  1. $f(x) \ge m$ với mọi $x \in D$.
  2. Tồn tại điểm $x_0 \in D$ sao cho $f(x_0) = m$.

---

## Phương pháp tìm GTLN, GTNN

### 1. Trên một khoảng hoặc một tập hợp bất kỳ
Lập bảng biến thiên của hàm số trên khoảng đó rồi kết luận giá trị cao nhất và thấp nhất.

---

### 2. Tìm GTLN, GTNN của hàm số liên tục trên một đoạn $[a; b]$

*Quy trình thực hiện nhanh không cần lập bảng biến thiên:*
1. Tính đạo hàm $f'(x)$.
2. Tìm các nghiệm $x_1, x_2, \dots, x_k$ của phương trình $f'(x) = 0$ và các điểm đạo hàm không xác định thuộc khoảng $(a;b)$.
3. Tính các giá trị $f(a), f(b), f(x_1), f(x_2), \dots, f(x_k)$.
4. So sánh các giá trị đã tính:
   - Số lớn nhất trong các giá trị đó là $\max_{[a;b]} f(x)$.
   - Số nhỏ nhất trong các giá trị đó là $\min_{[a;b]} f(x)$.


### Ví dụ minh họa
**Bài tập:** Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $f(x) = x^3 - 3x^2 + 2$ trên đoạn $[0; 3]$.
**Lời giải:**
- Tập xác định trên đoạn cần xét là $[0; 3]$.
- Tính đạo hàm: $f'(x) = 3x^2 - 6x$.
- Giải $f'(x) = 0 \Leftrightarrow 3x(x - 2) = 0 \Leftrightarrow x = 0$ hoặc $x = 2$.
- Cả hai nghiệm $x=0$ và $x=2$ đều thuộc đoạn $[0; 3]$.
- Ta tính giá trị của $f(x)$ tại các mút và các điểm tới hạn:
  $f(0) = 2$
  $f(2) = 2^3 - 3(2^2) + 2 = -2$
  $f(3) = 3^3 - 3(3^2) + 2 = 2$
- Kết luận:
  - $\max_{x \in [0; 3]} f(x) = 2$ (tại $x=0$ hoặc $x=3$).
  - $\min_{x \in [0; 3]} f(x) = -2$ (tại $x=2$).
