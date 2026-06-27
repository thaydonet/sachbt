## Xác suất theo định nghĩa cổ điển

### 1. Phép thử và Không gian mẫu
- **Phép thử ngẫu nhiên** là phép thử mà ta không đoán trước được kết quả, tuy nhiên xác định được tập hợp tất cả các kết quả có thể xảy ra.
- **Không gian mẫu** ($\Omega$) là tập hợp tất cả các kết quả có thể xảy ra của phép thử. Số phần tử của không gian mẫu ký hiệu là $n(\Omega)$ hoặc $|\Omega|$.

---

### 2. Biến cố (Event)
Biến cố $A$ là tập con của không gian mẫu $\Omega$. Ký hiệu là $A \subset \Omega$.
- Số kết quả thuận lợi cho biến cố $A$ ký hiệu là $n(A)$ hoặc $|A|$.
- Biến cố chắc chắn: $\Omega$.
- Biến cố không thể: $\emptyset$.
- Biến cố đối của $A$ ký hiệu là $\overline{A} = \Omega \setminus A$.

---

### 3. Xác suất của biến cố
Định nghĩa xác suất của biến cố $A$ (với giả thiết các kết quả có khả năng xảy ra như nhau):

$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{|A|}{|\Omega|}$$

- **Tính chất**:
  - $0 \le P(A) \le 1$.
  - $P(\Omega) = 1$, $P(\emptyset) = 0$.
  - Công thức tính xác suất biến cố đối: $P(\overline{A}) = 1 - P(A)$.
  - Quy tắc cộng xác suất nếu $A \cap B = \emptyset$ (xung khắc): $P(A \cup B) = P(A) + P(B)$.


### Ví dụ minh họa
**Bài tập:** Gieo một con xúc xắc cân đối và đồng chất 1 lần. Tính xác suất để xuất hiện mặt có số chấm là số chẵn.
**Lời giải:**
- Không gian mẫu $\Omega = \{1, 2, 3, 4, 5, 6\} \Rightarrow n(\Omega) = 6$.
- Biến cố $A$: "Mặt xuất hiện có số chấm là số chẵn". Các kết quả thuận lợi cho $A$ là $\{2, 4, 6\} \Rightarrow n(A) = 3$.
- Xác suất của biến cố $A$ là: $P(A) = \frac{n(A)}{n(\Omega)} = \frac{3}{6} = 0.5$.
