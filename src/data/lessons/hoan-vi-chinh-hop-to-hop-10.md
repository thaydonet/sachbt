## Hoán vị, Chỉnh hợp và Tổ hợp

---

### 1. Hoán vị (Permutation)
Cho tập hợp $A$ gồm $n$ phần tử ($n \ge 1$). Mỗi cách sắp xếp thứ tự $n$ phần tử này gọi là một hoán vị của $n$ phần tử.
- Số lượng các hoán vị:

$$P_n = n! = n(n-1)\dots 2 \cdot 1$$

- Quy ước: $0! = 1$.

---

### 2. Chỉnh hợp (k-permutation of n)
Cho tập hợp $A$ gồm $n$ phần tử. Mỗi cách chọn ra $k$ phần tử ($1 \le k \le n$) và sắp xếp theo một thứ tự gọi là một chỉnh hợp chập $k$ của $n$ phần tử.
- Số lượng các chỉnh hợp:

$$A_n^k = \frac{n!}{(n-k)!} = n(n-1)\dots(n-k+1)$$

---

### 3. Tổ hợp (Combination)
Cho tập hợp $A$ gồm $n$ phần tử. Mỗi tập con gồm $k$ phần tử ($0 \le k \le n$) của tập $A$ gọi là một tổ hợp chập $k$ của $n$ phần tử.
- Số lượng các tổ hợp:

$$C_n^k = \frac{n!}{k!(n-k)!}$$

- **Tính chất**:
  - $C_n^k = C_n^{n-k}$
  - Công thức Pascal: $C_n^k = C_{n-1}^{k-1} + C_{n-1}^k$


### Ví dụ minh họa
**Bài tập:** Có 10 người, cần chọn ra một ban cán sự gồm 1 lớp trưởng, 1 lớp phó và 1 bí thư. Hỏi có bao nhiêu cách chọn?
**Lời giải:**
- Đây là bài toán chọn 3 người từ 10 người và CÓ sắp xếp thứ tự (lớp trưởng, lớp phó, bí thư).
- Số cách chọn chính là một chỉnh hợp chập 3 của 10 phần tử:
  $A_{10}^3 = \frac{10!}{(10 - 3)!} = 10 \times 9 \times 8 = 720$ cách.
