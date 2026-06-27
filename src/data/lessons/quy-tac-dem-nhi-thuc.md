## Quy tắc đếm

### 1. Quy tắc cộng
Một công việc được hoàn thành bởi một trong hai hành động:
- Hành động thứ nhất có $m$ cách thực hiện.
- Hành động thứ hai có $n$ cách thực hiện không trùng với các cách thực hiện của hành động thứ nhất.
Khi đó, công việc có:

$$m + n \quad \text{cách hoàn thành.}$$

---

### 2. Quy tắc nhân
Một công việc được chia làm hai công đoạn liên tiếp:
- Công đoạn thứ nhất có $m$ cách thực hiện.
- Công đoạn thứ hai có $n$ cách thực hiện ứng với mỗi cách của công đoạn thứ nhất.
Khi đó, công việc có:

$$m \times n \quad \text{cách hoàn thành.}$$

---

## Nhị thức Newton

Công thức khai triển nhị thức Newton đối với $(a+b)^n$ với $n$ nhỏ ($n = 4, 5$):

### Với $n = 4$:
$$(a+b)^4 = C_4^0 a^4 + C_4^1 a^3b + C_4^2 a^2b^2 + C_4^3 ab^3 + C_4^4 b^4$$

$$= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$

### Với $n = 5$:
$$(a+b)^5 = C_5^0 a^5 + C_5^1 a^4b + C_5^2 a^3b^2 + C_5^3 a^2b^3 + C_5^4 ab^4 + C_5^5 b^5$$

$$= a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$


### Ví dụ minh họa
**Bài tập:** Có bao nhiêu số tự nhiên gồm 3 chữ số đôi một khác nhau được lập từ tập $A = \{1, 2, 3, 4, 5\}$?
**Lời giải:**
Việc lập số gồm 3 chữ số khác nhau có thể thực hiện theo quy tắc nhân:
- Chọn chữ số hàng trăm: Có 5 cách chọn.
- Chọn chữ số hàng chục: Có 4 cách chọn (khác chữ số hàng trăm).
- Chọn chữ số hàng đơn vị: Có 3 cách chọn (khác 2 chữ số trước).
Số lượng số tự nhiên tạo thành là: $5 \times 4 \times 3 = 60$ số.
