## Hệ bất phương trình bậc nhất hai ẩn

Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn $x, y$.

### Miền nghiệm của hệ
Miền nghiệm của hệ bất phương trình là **phần giao** các miền nghiệm của các bất phương trình trong hệ.

### Phương pháp xác định miền nghiệm
1. Trên cùng một mặt phẳng tọa độ $Oxy$, xác định miền nghiệm của mỗi bất phương trình trong hệ và gạch đi phần không thuộc miền nghiệm đó.
2. Phần không bị gạch (bao gồm cả các bờ nếu có dấu bằng) chính là miền nghiệm của hệ bất phương trình đã cho.

### Ứng dụng bài toán tối ưu (Quy hoạch tuyến tính)
Bài toán tìm giá trị lớn nhất ($F_{max}$) hoặc giá trị nhỏ nhất ($F_{min}$) của biểu thức:

$$F(x,y) = ax + by$$

trên một miền đa giác nghiệm $S$.
- **Định lý**: Giá trị lớn nhất hoặc nhỏ nhất của biểu thức $F(x,y) = ax + by$ trên một miền đa giác lồi $S$ luôn đạt được tại một trong các đỉnh của đa giác đó.
- **Quy trình giải**:
  1. Biểu diễn miền nghiệm $S$ của hệ ràng buộc dưới dạng đa giác.
  2. Tìm tọa độ các đỉnh của đa giác $S$.
  3. Tính giá trị $F(x, y)$ tại mỗi đỉnh.
  4. So sánh các giá trị tính được để chọn ra $F_{max}$ hoặc $F_{min}$.


### Ví dụ minh họa
**Bài tập:** Tìm miền nghiệm của hệ bất phương trình:
$\begin{cases} x \ge 0 \\ y \ge 0 \\ x + y \le 4 \end{cases}$
**Lời giải:**
1. Miền nghiệm của $x \ge 0$ và $y \ge 0$ là góc phần tư thứ nhất.
2. Vẽ đường thẳng $d: x + y = 4$ (qua $(4, 0)$ và $(0, 4)$). Miền $x + y \le 4$ là nửa mặt phẳng bờ $d$ chứa gốc $O(0, 0)$.
3. Giao của các miền trên là một tam giác vuông giới hạn bởi trục $Ox$, $Oy$ và đoạn thẳng nối $(4, 0)$ với $(0, 4)$. Các đỉnh của đa giác là $(0, 0)$, $(4, 0)$ và $(0, 4)$.
