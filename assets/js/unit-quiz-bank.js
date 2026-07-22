/* ===== py — per-unit pre/post test question bank + comprehensive final exam =====
   Dedicated home for the 10-question pre-test and post-test sets used by
   quiz.html (?unit=N&type=pre|post), plus a 60-question cumulative final
   exam (?type=final) drawn from lesson content across all 5 units and
   required to pass before results.html unlocks.
   Shape: { q: "...", options: ["...","...","...","..."], ans: 0-3 }. */
const unitTests = {
    1: {
        pre: [
      { q: "Python เป็นภาษาประเภทใด?", options: ["ภาษาระดับสูง (High-Level)", "ภาษาเครื่อง (Machine Language)", "ภาษา Assembly", "ไม่ใช่ภาษาโปรแกรม"], ans: 0 },
      { q: "ฟังก์ชันใดใช้แสดงผลออกทางหน้าจอ?", options: ["input()", "print()", "show()", "display()"], ans: 1 },
      { q: "เครื่องหมายใดใช้เขียนคอมเมนต์ (comment) บรรทัดเดียวใน Python?", options: ["//", "#", "--", "/* */"], ans: 1 },
      { q: "Python แยกความแตกต่างระหว่างตัวพิมพ์เล็กและใหญ่หรือไม่ (case-sensitive)?", options: ["แยก name กับ Name ถือเป็นคนละตัวแปร", "ไม่แยก ถือว่าเหมือนกัน", "แยกเฉพาะชื่อฟังก์ชันเท่านั้น", "ขึ้นอยู่กับระบบปฏิบัติการ"], ans: 0 },
      { q: "ฟังก์ชัน type() มีไว้ทำอะไร?", options: ["แปลงชนิดข้อมูล", "ตรวจสอบชนิดข้อมูลของค่า", "สร้างตัวแปรใหม่", "ลบตัวแปร"], ans: 1 },
      { q: "ผลลัพธ์ของ 10 / 3 ใน Python 3 เป็นชนิดข้อมูลใด?", options: ["int", "float", "str", "bool"], ans: 1 },
      { q: "เครื่องหมายใดใช้สำหรับยกกำลัง?", options: ["^", "**", "%%", "++"], ans: 1 },
      { q: "and จะให้ผลลัพธ์เป็น True เมื่อใด?", options: ["อย่างน้อยฝั่งใดฝั่งหนึ่งเป็น True", "ทั้งสองฝั่งต้องเป็น True", "ทั้งสองฝั่งต้องเป็น False", "ไม่ขึ้นกับค่าใด ๆ"], ans: 1 },
      { q: "การเขียน f-string ต้องใส่ตัวอักษรใดไว้ข้างหน้าเครื่องหมายคำพูด?", options: ["s", "f", "r", "b"], ans: 1 },
      { q: "ค่าที่ได้จาก input() ต้องแปลงด้วยฟังก์ชันใดถ้าต้องการนำไปคำนวณทางคณิตศาสตร์?", options: ["str()", "int() หรือ float()", "bool()", "print()"], ans: 1 }
        ],
        post: [
      { q: "type(3.14) ให้ผลลัพธ์เป็นชนิดข้อมูลใด?", options: ["int", "str", "float", "bool"], ans: 2 },
      { q: "ผลลัพธ์ของ True and False คืออะไร?", options: ["True", "False", "None", "Error"], ans: 1 },
      { q: "โค้ด: a = 7; b = 2; print(a % b) ผลลัพธ์คือ?", options: ["3", "3.5", "1", "0"], ans: 2 },
      { q: "โค้ด: print(\"Py\" + \"thon\") ผลลัพธ์คือ?", options: ["Py thon", "PyThon", "Python", "Error"], ans: 2 },
      { q: "โค้ด: print(10 == 10.0) ผลลัพธ์คือ?", options: ["True", "False", "Error", "1.0"], ans: 0 },
      { q: "โค้ด: print(bool(\"False\")) ผลลัพธ์คือ?", options: ["True", "False", "Error", "None"], ans: 0 },
      { q: "ชื่อตัวแปรใดต่อไปนี้ผิดกฎการตั้งชื่อของ Python?", options: ["total_1", "_hidden", "3rd_place", "average"], ans: 2 },
      { q: "โค้ด: print(not (5 > 3)) ผลลัพธ์คือ?", options: ["True", "False", "5", "3"], ans: 1 },
      { q: "โค้ด: x=5; y=2; print(x/y) ผลลัพธ์คือ?", options: ["2", "2.5", "2.0", "3"], ans: 1 },
      { q: "โค้ด: is_valid=True; print(not is_valid) ผลลัพธ์คือ?", options: ["True", "False", "None", "Error"], ans: 1 }
        ]
    },
    2: {
        pre: [
      { q: "คำสั่งใดใช้ตรวจสอบเงื่อนไขในภาษาโปรแกรมทั่วไป?", options: ["if", "sum", "print", "class"], ans: 0 },
      { q: "คำสั่งใดใช้ออกจากลูปทันทีก่อนครบรอบ?", options: ["continue", "pass", "break", "return"], ans: 2 },
      { q: "Python ใช้อะไรกำหนดขอบเขตของบล็อกโค้ด (แทนวงเล็บปีกกา)?", options: ["เว้นวรรค/ย่อหน้า (indentation)", "เครื่องหมาย ;", "คำว่า end", "วงเล็บ ()"], ans: 0 },
      { q: "ลูป for เหมาะกับงานลักษณะใดที่สุด?", options: ["ทำซ้ำเมื่อรู้จำนวนรอบหรือมีลำดับให้วน", "ทำซ้ำแบบไม่รู้จำนวนรอบเลย", "ใช้แทน if เท่านั้น", "ใช้สร้างฟังก์ชัน"], ans: 0 },
      { q: "range(2, 8) ตัวเลขตัวสุดท้ายที่ได้คือเท่าไร?", options: ["8", "7", "9", "6"], ans: 1 },
      { q: "ถ้าลืมเปลี่ยนค่าตัวแปรในเงื่อนไขของ while จะเกิดปัญหาใด?", options: ["โปรแกรมหยุดทันที", "เกิด infinite loop (ลูปไม่สิ้นสุด)", "เกิด syntax error", "ไม่มีผลกระทบใด ๆ"], ans: 1 },
      { q: "คำสั่ง pass มีไว้ทำอะไร?", options: ["หยุดลูปทันที", "เป็น placeholder ที่ไม่ทำอะไรเลย", "ข้ามไปรอบถัดไป", "จบโปรแกรม"], ans: 1 },
      { q: "เครื่องหมายที่ต้องมีท้ายบรรทัด for และ while คือ?", options: [";", ":", "{}", "->"], ans: 1 },
      { q: "เงื่อนไขใน if ต้องให้ผลลัพธ์เป็นชนิดข้อมูลใด (หรือแปลงเป็นได้)?", options: ["str", "bool", "list", "dict"], ans: 1 },
      { q: "การเขียน if ซ้อน if เรียกว่าอะไร?", options: ["Nested if", "Double if", "Loop if", "Chain if"], ans: 0 }
        ],
        post: [
      { q: "หาก score = 65 โค้ด if score>=80: A elif score>=70: B elif score>=60: C else: F จะได้ผลอะไร?", options: ["A", "B", "C", "F"], ans: 2 },
      { q: "ถ้า outer loop วน 3 รอบ inner loop วน 5 รอบ inner loop ทำงานรวมกี่ครั้ง?", options: ["8 ครั้ง", "5 ครั้ง", "15 ครั้ง", "3 ครั้ง"], ans: 2 },
      { q: "โค้ด: for i in range(0,10,3): print(i) ผลลัพธ์คือ?", options: ["0 3 6 9", "0 3 6 9 10", "3 6 9", "0 2 4 6 8"], ans: 0 },
      { q: "โค้ด: for i in range(5): if i%2==0: continue; print(i) ผลลัพธ์คือ?", options: ["0 2 4", "1 3", "0 1 2 3 4", "2 4"], ans: 1 },
      { q: "โค้ดนี้จะเกิดอะไรขึ้น: x=1; while x>0: print(x)", options: ["พิมพ์ 1 ครั้งแล้วจบ", "เกิด infinite loop เพราะ x ไม่เปลี่ยนค่า", "เกิด error ทันที", "พิมพ์ 0 ครั้ง"], ans: 1 },
      { q: "โค้ด: for i in range(3): pass; print(\"done\") — ผลลัพธ์คือ?", options: ["done พิมพ์ 3 ครั้ง", "done พิมพ์ 1 ครั้งหลังลูปจบ", "เกิด error เพราะ pass ใช้ผิด", "ไม่พิมพ์อะไรเลย"], ans: 1 },
      { q: "โค้ด: for i in range(4): if i==2: print(\"found\"); break — ก่อนหน้านั้นพิมพ์ i ทุกรอบ — ลำดับผลลัพธ์คือ?", options: ["0 1 found", "0 1 2 3", "found", "0 1"], ans: 0 },
      { q: "โค้ด: x=5; if x>10: print(\"A\") elif x>3: print(\"B\") elif x>0: print(\"C\") — ผลลัพธ์คือ?", options: ["A", "B", "C", "ไม่พิมพ์อะไรเลย"], ans: 1 },
      { q: "โค้ด: for i in range(3): print(\"*\"*i) — บรรทัดที่ 2 (เมื่อ i=1) พิมพ์อะไร?", options: ["ไม่มีอะไรเลย", "*", "**", "***"], ans: 1 },
      { q: "โค้ด: for i in range(3): if i==1: pass else: print(i) — ผลลัพธ์คือ?", options: ["0 2", "0 1 2", "1", "ไม่พิมพ์อะไรเลย"], ans: 0 }
        ]
    },
    3: {
        pre: [
      { q: "ข้อใดคือโครงสร้างข้อมูลที่เก็บค่าหลายค่าไว้ในตัวแปรเดียว?", options: ["int", "List", "bool", "print"], ans: 1 },
      { q: "Dictionary เก็บข้อมูลในรูปแบบใด?", options: ["ลำดับตัวเลข", "คู่ key:value", "ตัวอักษรเรียงกัน", "ไม่ซ้ำกันเท่านั้น"], ans: 1 },
      { q: "list[-1] หมายถึงสมาชิกตัวใด?", options: ["ตัวแรก", "ตัวสุดท้าย", "ตัวที่ 2", "ไม่มีความหมาย"], ans: 1 },
      { q: "List เป็นชนิดข้อมูลที่แก้ไขค่าได้ (mutable) หรือไม่?", options: ["แก้ไขได้", "แก้ไขไม่ได้", "แล้วแต่ขนาด", "แล้วแต่ชนิดสมาชิก"], ans: 0 },
      { q: "Set มีคุณสมบัติพิเศษคืออะไร?", options: ["เก็บข้อมูลซ้ำได้ไม่จำกัด", "สมาชิกไม่ซ้ำกันและไม่มีลำดับ", "ต้องเรียงลำดับเสมอ", "แก้ไขค่าไม่ได้เลย"], ans: 1 },
      { q: "Dictionary สร้างด้วยเครื่องหมายใด?", options: ["[]", "()", "{}", "<>"], ans: 2 },
      { q: "String ใน Python เป็นชนิดข้อมูลที่แก้ไขค่าได้ (mutable) หรือไม่?", options: ["แก้ไขได้", "แก้ไขไม่ได้ (immutable)", "แก้ไขได้เฉพาะตัวอักษรภาษาอังกฤษ", "แล้วแต่ความยาว"], ans: 1 },
      { q: "เมธอด .split() ของ string มีไว้ทำอะไร?", options: ["รวมหลายข้อความเป็นหนึ่งเดียว", "แยกข้อความออกเป็น List ตามตัวคั่น", "ลบช่องว่าง", "นับความยาวข้อความ"], ans: 1 },
      { q: "การเข้าถึงสมาชิกหลายตัวพร้อมกันใน List เรียกว่าอะไร?", options: ["Indexing", "Slicing", "Looping", "Mapping"], ans: 1 },
      { q: "เมธอด .sort() ของ List มีไว้ทำอะไร?", options: ["เรียงลำดับสมาชิกในลิสต์", "สุ่มลำดับสมาชิก", "ลบสมาชิกที่ซ้ำกัน", "นับจำนวนสมาชิก"], ans: 0 }
        ],
        post: [
      { q: "list[-1] หมายถึงสมาชิกตัวใด?", options: ["ตัวแรก", "ตัวสุดท้าย", "ความยาวของ list", "Error"], ans: 1 },
      { q: "'hello world'.title() คืนค่าอะไร?", options: ["HELLO WORLD", "hello world", "Hello World", "Hello world"], ans: 2 },
      { q: "โค้ด: nums=[1,2,3]; print(nums[-1]) ผลลัพธ์คือ?", options: ["1", "2", "3", "Error"], ans: 2 },
      { q: "โค้ด: d={\"name\":\"Somsak\",\"age\":18}; print(d[\"name\"]) ผลลัพธ์คือ?", options: ["name", "Somsak", "18", "Error"], ans: 1 },
      { q: "โค้ด: text=\"  Hello  \"; print(text.strip()) ผลลัพธ์คือ?", options: ["\"  Hello  \"", "\"Hello\"", "\"  Hello\"", "Error"], ans: 1 },
      { q: "โค้ด: nums=[1,2,3,4,5]; squares=[n**2 for n in nums]; print(squares) ผลลัพธ์คือ?", options: ["[1,2,3,4,5]", "[1,4,9,16,25]", "[2,4,6,8,10]", "Error"], ans: 1 },
      { q: "โค้ด: a=[1,2]; b=a; b.append(3); print(a) ผลลัพธ์คือ?", options: ["[1,2]", "[1,2,3]", "Error", "[3]"], ans: 1 },
      { q: "โค้ด: nums=[5,3,8,1]; print(max(nums)) ผลลัพธ์คือ?", options: ["1", "5", "8", "Error"], ans: 2 },
      { q: "โค้ด: a={1,2,3}; b={2,3,4}; print(a & b) ผลลัพธ์คือ?", options: ["{1,2,3,4}", "{2,3}", "{1}", "{4}"], ans: 1 },
      { q: "โค้ด: nums=[1,2,3]; nums.remove(2); print(nums) ผลลัพธ์คือ?", options: ["[1,3]", "[1,2]", "[2,3]", "Error"], ans: 0 }
        ]
    },
    4: {
        pre: [
      { q: "คำสั่งใดใช้สร้างฟังก์ชันใน Python?", options: ["func", "function", "def", "lambda"], ans: 2 },
      { q: "โครงสร้างใดใช้ดักจับข้อผิดพลาดขณะโปรแกรมทำงาน?", options: ["if/else", "for/while", "try/except", "def/return"], ans: 2 },
      { q: "ค่าที่ส่งเข้าไปในฟังก์ชันตอนเรียกใช้งานจริงเรียกว่าอะไร?", options: ["Parameter", "Argument", "Return", "Scope"], ans: 1 },
      { q: "ถ้าฟังก์ชันไม่มีคำสั่ง return จะคืนค่าอะไรออกมา?", options: ["0", "\"\"", "None", "Error เสมอ"], ans: 2 },
      { q: "**kwargs ใน Python ใช้รวบรวม keyword arguments ไว้เป็นชนิดข้อมูลใด?", options: ["List", "Tuple", "Dictionary", "Set"], ans: 2 },
      { q: "คำสั่งใดใช้บอกว่าจะแก้ไขตัวแปร global จากภายในฟังก์ชัน?", options: ["local", "global", "static", "public"], ans: 1 },
      { q: "โค้ดในบล็อก try จะถูกทำงานอย่างไร?", options: ["ทดลองรัน ถ้าเกิด error จะกระโดดไปทำ except แทน", "รันเสมอโดยไม่สนใจ error", "ไม่รันเลย", "รันได้ครั้งเดียวเท่านั้น"], ans: 0 },
      { q: "Keyword Argument คือการเรียกฟังก์ชันแบบใด?", options: ["ระบุชื่อพารามิเตอร์ตอนเรียกใช้ เช่น func(name=\"A\")", "ส่งค่าตามลำดับเท่านั้น", "ห้ามระบุชื่อพารามิเตอร์", "ใช้ได้กับตัวเลขเท่านั้น"], ans: 0 },
      { q: "LEGB Rule ใน Python เกี่ยวข้องกับเรื่องใด?", options: ["ลำดับการค้นหาตัวแปรตาม Scope", "ลำดับการเรียงข้อมูลใน List", "ชนิดข้อมูลทั้งหมด", "การจัดการ error"], ans: 0 },
      { q: "พารามิเตอร์ที่มีค่า default ต้องเขียนไว้ตำแหน่งใดของรายการพารามิเตอร์?", options: ["ตำแหน่งแรกสุดเสมอ", "ตำแหน่งท้ายสุด (หลังพารามิเตอร์ที่ไม่มี default)", "ตรงไหนก็ได้", "ห้ามใช้ร่วมกับพารามิเตอร์อื่น"], ans: 1 }
        ],
        post: [
      { q: "ถ้าฟังก์ชันไม่มีคำสั่ง return จะคืนค่าอะไร?", options: ["0", "False", "None", "Error"], ans: 2 },
      { q: "finally block ทำงานเมื่อใด?", options: ["เมื่อเกิด Exception เท่านั้น", "เมื่อไม่เกิด Exception เท่านั้น", "ทำงานเสมอไม่ว่าจะเกิด Exception หรือไม่", "ไม่ทำงาน"], ans: 2 },
      { q: "โค้ด: def power(base, exp=2): return base**exp — print(power(3)) ผลลัพธ์คือ?", options: ["3", "6", "9", "Error"], ans: 2 },
      { q: "โค้ด: x=10<br>def show(): x=20; print(x)<br>show(); print(x) — ผลลัพธ์ 2 บรรทัดคือ?", options: ["20 แล้ว 20", "20 แล้ว 10", "10 แล้ว 10", "Error"], ans: 1 },
      { q: "โค้ด: try: x=int(\"abc\")<br>except ValueError: print(\"แปลงไม่ได้\") — ผลลัพธ์คือ?", options: ["Error หยุดโปรแกรม", "แปลงไม่ได้", "abc", "None"], ans: 1 },
      { q: "โค้ด: def min_max(nums): return min(nums), max(nums) — lo,hi=min_max([3,1,4,1,5]); print(lo,hi) ผลลัพธ์คือ?", options: ["1 5", "5 1", "3 1", "Error"], ans: 0 },
      { q: "เพราะเหตุใดโค้ดนี้จึง Error: def f(a, b=1, c): return a+b+c", options: ["เพราะพารามิเตอร์ที่ไม่มี default (c) ต้องไม่อยู่หลังพารามิเตอร์ที่มี default", "เพราะชื่อฟังก์ชันผิด", "เพราะ return ผิดตำแหน่ง", "จริง ๆ แล้วไม่ error"], ans: 0 },
      { q: "โค้ด: try: x=5<br>except: print(\"error\")<br>else: print(\"ok\") — ผลลัพธ์คือ?", options: ["ok", "error", "ไม่พิมพ์อะไรเลย", "Error"], ans: 0 },
      { q: "โค้ด: def f(x): x.append(99); return x — L=[1,2]; f(L); print(L) ผลลัพธ์คือ?", options: ["[1,2]", "[1,2,99]", "[]", "Error"], ans: 1 },
      { q: "โค้ด: def f(a,*args,**kwargs): print(a,args,kwargs) — f(1,2,3,x=4) ผลลัพธ์คือ?", options: ["1 (2,3) {'x':4}", "1 [2,3] {'x':4}", "1 2 3 4", "Error"], ans: 0 }
        ]
    },
    5: {
        pre: [
      { q: "OOP ย่อมาจากอะไร?", options: ["Object-Oriented Programming", "Open Operation Protocol", "Ordered Output Process", "Object Output Program"], ans: 0 },
      { q: "การซ่อนข้อมูลภายใน Object ไม่ให้เข้าถึงจากภายนอกโดยตรง เรียกว่าอะไร?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], ans: 2 },
      { q: "Object (หรือ Instance) คือสิ่งใด?", options: ["แบบแปลนของ Class", "วัตถุจริงที่สร้างขึ้นจาก Class", "ชื่อของ Class", "เมธอดภายใน Class"], ans: 1 },
      { q: "__init__ ถูกเรียกใช้งานโดยอัตโนมัติเมื่อใด?", options: ["เมื่อลบ Object", "เมื่อสร้าง Object ใหม่", "เมื่อเรียก method ใดก็ได้", "เมื่อ import ไฟล์"], ans: 1 },
      { q: "Instance Attribute คือ attribute ประเภทใด?", options: ["ตัวแปรที่ทุก Object ของ Class ใช้ร่วมกัน", "ตัวแปรที่แต่ละ Object มีค่าของตัวเองแยกกัน", "ฟังก์ชันภายใน Class", "ชื่อของ Class"], ans: 1 },
      { q: "Parent Class เรียกอีกชื่อหนึ่งว่าอะไร?", options: ["Child Class", "Superclass", "Subclass", "Instance"], ans: 1 },
      { q: "การเขียนเมธอดใน Child Class ที่มีชื่อซ้ำกับใน Parent Class เพื่อเปลี่ยนพฤติกรรมใหม่ เรียกว่าอะไร?", options: ["Overloading", "Overriding", "Inheriting", "Encapsulating"], ans: 1 },
      { q: "ตัวแปรที่ขึ้นต้นด้วย underscore คู่ (__name) จะถูก Python จัดการอย่างไร?", options: ["ไม่มีการเปลี่ยนแปลงใด ๆ", "เกิด Name Mangling ทำให้เข้าถึงจากภายนอกตรง ๆ ไม่ได้ง่าย", "ถูกลบทิ้งอัตโนมัติ", "กลายเป็น Class Attribute"], ans: 1 },
      { q: "เมธอดพิเศษ __str__ มีไว้ทำอะไร?", options: ["กำหนดว่าจะแสดงผล Object อย่างไรเมื่อใช้ print()", "ลบ Object", "สร้าง Object ใหม่", "เปรียบเทียบ Object"], ans: 0 },
      { q: "การสร้าง Object จาก Class ทำได้โดยวิธีใด?", options: ["เขียนชื่อ Class ตามด้วยวงเล็บ เช่น MyClass()", "เขียน new MyClass", "เขียน create MyClass", "ไม่สามารถสร้างได้โดยตรง"], ans: 0 }
        ],
        post: [
      { q: "__init__ ถูกเรียกอัตโนมัติเมื่อใด?", options: ["เมื่อเรียก method ใดก็ตาม", "เมื่อสร้าง Object ใหม่", "เมื่อลบ Object", "เมื่อ import class"], ans: 1 },
      { q: "self ใน method ของ class หมายถึงอะไร?", options: ["ชื่อ class เสมอ", "ตัว Object เองที่กำลังถูกเรียกใช้", "ค่าคงที่", "Parent class"], ans: 1 },
      { q: "โค้ด: class Student:<br>&nbsp;&nbsp;def __init__(self,name): self.name=name<br>s=Student(\"Somsak\"); print(s.name) ผลลัพธ์คือ?", options: ["Somsak", "self.name", "Error", "None"], ans: 0 },
      { q: "จากโค้ดข้อก่อนหน้า: print(d.name) ผลลัพธ์คือ?", options: ["Rex", "...", "Error", "None"], ans: 0 },
      { q: "โค้ด: class Shape:<br>&nbsp;&nbsp;def area(self): return 0<br>class Square(Shape):<br>&nbsp;&nbsp;def __init__(self,side): self.side=side<br>&nbsp;&nbsp;def area(self): return self.side**2<br>s=Square(4); print(s.area()) ผลลัพธ์คือ?", options: ["0", "4", "16", "Error"], ans: 2 },
      { q: "โค้ด: class Cat(Animal): pass<br>c=Cat(\"Miu\"); print(isinstance(c, Animal)) ผลลัพธ์คือ?", options: ["True", "False", "Error", "None"], ans: 0 },
      { q: "โค้ด: class A:<br>&nbsp;&nbsp;def greet(self): print(\"A\")<br>class B(A):<br>&nbsp;&nbsp;def greet(self): print(\"B\"); super().greet()<br>b=B(); b.greet() ผลลัพธ์คือ?", options: ["A", "B", "B แล้ว A (สองบรรทัด)", "A แล้ว B"], ans: 2 },
      { q: "โค้ด: class Vehicle: wheels=4<br>class Car(Vehicle): pass<br>class Motorcycle(Vehicle): wheels=2<br>print(Car.wheels, Motorcycle.wheels) ผลลัพธ์คือ?", options: ["4 4", "2 2", "4 2", "Error"], ans: 2 },
      { q: "ถ้า Child Class ไม่เขียน __init__ ของตัวเองเลย จะเกิดอะไรขึ้นเมื่อสร้าง Object?", options: ["เกิด Error ทันที", "ใช้ __init__ ของ Parent Class แทนโดยอัตโนมัติ", "Object ไม่มี attribute ใดเลย", "ต้องเขียน __init__ เปล่าเสมอ"], ans: 1 },
      { q: "โค้ด: class Stack:<br>&nbsp;&nbsp;def __init__(self): self.items=[]<br>&nbsp;&nbsp;def push(self,x): self.items.append(x)<br>&nbsp;&nbsp;def pop(self): return self.items.pop()<br>s=Stack(); s.push(1); s.push(2); print(s.pop()) ผลลัพธ์คือ?", options: ["1", "2", "Error", "None"], ans: 1 }
        ]
    }
};

/* 60-question cumulative final exam — 12 questions per unit (6 drawn from that
   unit's original pre-test pool, 6 from its post-test pool), covering every unit
   proportionally. Required to pass at >=70% before results.html unlocks. */
const finalExam = [
      { q: "เครื่องหมายใดใช้กำหนดค่าให้ตัวแปรใน Python?", options: ["==", "=", ":=", "->"], ans: 1 },
      { q: "ไฟล์ต้นฉบับของโปรแกรม Python ใช้นามสกุลใด?", options: [".py", ".python", ".pt", ".pyt"], ans: 0 },
      { q: "ข้อใดคือชนิดข้อมูลตัวเลขทศนิยม?", options: ["int", "float", "str", "bool"], ans: 1 },
      { q: "ผลลัพธ์ของ 10 // 3 คือเท่าไร?", options: ["3.33", "3", "4", "1"], ans: 1 },
      { q: "เครื่องหมาย != มีความหมายว่าอย่างไร?", options: ["เท่ากับ", "มากกว่า", "ไม่เท่ากับ", "น้อยกว่าหรือเท่ากับ"], ans: 2 },
      { q: "ฟังก์ชัน print() มีหน้าที่หลักคืออะไร?", options: ["รับค่าจากผู้ใช้", "แสดงผลลัพธ์ออกทางหน้าจอ", "แปลงชนิดข้อมูล", "ปัดเศษตัวเลข"], ans: 1 },
      { q: "input() คืนค่าเป็นชนิดข้อมูลใดเสมอ ไม่ว่าจะพิมพ์อะไรเข้าไป?", options: ["int", "float", "str", "bool"], ans: 2 },
      { q: "โค้ด: print(2 + 3 * 4) ผลลัพธ์คือ?", options: ["20", "14", "24", "9"], ans: 1 },
      { q: "โค้ด: print(\"3\" + \"4\") ผลลัพธ์คือ?", options: ["7", "\"34\"", "12", "Error"], ans: 1 },
      { q: "โค้ด: age=20; print(age>=18 and age<65) ผลลัพธ์คือ?", options: ["True", "False", "20", "Error"], ans: 0 },
      { q: "โค้ด: price=99.999; print(f\"{price:.1f}\") ผลลัพธ์คือ?", options: ["99.9", "100.0", "99.99", "100"], ans: 1 },
      { q: "โค้ด: x=1; y=2; z=3; print(x,y,z) ผลลัพธ์คือ?", options: ["1 2 3", "\"123\"", "x y z", "Error"], ans: 0 },
      { q: "ลูป (loop) ใช้ทำสิ่งใด?", options: ["เก็บข้อมูลหลายค่า", "ทำงานซ้ำตามเงื่อนไขหรือจำนวนรอบ", "สร้างฟังก์ชันใหม่", "แปลงชนิดข้อมูล"], ans: 1 },
      { q: "หลัง if ต้องปิดท้ายบรรทัดด้วยเครื่องหมายใด?", options: [";", ":", "{}", "()"], ans: 1 },
      { q: "range(5) ให้ค่าตัวเลขเริ่มจากเลขใด?", options: ["1", "0", "5", "-1"], ans: 1 },
      { q: "คำสั่งใดใช้ออกจากลูปทันทีก่อนจะครบทุกรอบ?", options: ["continue", "pass", "break", "return"], ans: 2 },
      { q: "ถ้า outer loop วน 3 รอบ และ inner loop วน 4 รอบ inner loop จะทำงานรวมกี่ครั้ง?", options: ["3 ครั้ง", "4 ครั้ง", "7 ครั้ง", "12 ครั้ง"], ans: 3 },
      { q: "while True: มักใช้ร่วมกับคำสั่งใดเพื่อไม่ให้ลูปวนตลอดไป?", options: ["continue", "break", "pass", "else"], ans: 1 },
      { q: "range(2, 10, 3) ให้ตัวเลขชุดใด?", options: ["2, 5, 8", "2, 3, 4, 5, 6, 7, 8, 9", "3, 6, 9", "2, 4, 6, 8"], ans: 0 },
      { q: "โค้ด: for i in range(1,4): print(i) ผลลัพธ์คือ?", options: ["1 2 3", "1 2 3 4", "0 1 2 3", "2 3 4"], ans: 0 },
      { q: "โค้ด: x=0; while x<3: print(x); x+=1 ผลลัพธ์คือ?", options: ["0 1 2", "0 1 2 3", "1 2 3", "ลูปไม่สิ้นสุด"], ans: 0 },
      { q: "ข้อใดคือความแตกต่างหลักระหว่าง break กับ continue?", options: ["break ออกจากลูปทันที ส่วน continue แค่ข้ามไปรอบถัดไป", "break กับ continue ทำงานเหมือนกันทุกประการ", "break ใช้กับ while เท่านั้น", "continue ใช้กับ for เท่านั้น"], ans: 0 },
      { q: "โค้ด: for i in range(3): for j in range(2): if j==1: continue; print(i,j) — พิมพ์ทั้งหมดกี่บรรทัด?", options: ["6", "3", "2", "4"], ans: 1 },
      { q: "เหตุใดโค้ดนี้จึงเป็น infinite loop: i=0; while i<5: print(i)", options: ["เพราะเงื่อนไขผิด", "เพราะไม่มีการเพิ่มค่า i ในลูป", "เพราะ print ผิดตำแหน่ง", "ไม่ได้เป็น infinite loop"], ans: 1 },
      { q: "List ใน Python สร้างด้วยเครื่องหมายใด?", options: ["{}", "()", "[]", "<>"], ans: 2 },
      { q: "Index ตัวแรกของ List เริ่มนับจากเลขใด?", options: ["1", "0", "-1", "ไม่แน่นอน"], ans: 1 },
      { q: "Tuple สร้างด้วยเครื่องหมายใด?", options: ["[]", "{}", "()", "<>"], ans: 2 },
      { q: "เมธอด .get() ของ Dictionary มีข้อดีอย่างไรเมื่อเทียบกับ dict[key]?", options: ["เร็วกว่าเสมอ", "คืนค่า None แทนที่จะ error เมื่อไม่เจอ key", "ลบ key ออกโดยอัตโนมัติ", "เปลี่ยนชนิดข้อมูลอัตโนมัติ"], ans: 1 },
      { q: "เมธอด .strip() ของ string มีไว้ทำอะไร?", options: ["แปลงตัวพิมพ์", "ลบช่องว่างหน้า-หลังข้อความ", "แยกข้อความเป็นลิสต์", "รวมข้อความ"], ans: 1 },
      { q: "ฟังก์ชัน len() ใช้กับ List เพื่อทำอะไร?", options: ["เรียงลำดับสมาชิก", "นับจำนวนสมาชิก", "ลบสมาชิกตัวแรก", "แปลงเป็น string"], ans: 1 },
      { q: "อะไรคือความแตกต่างหลักระหว่าง List และ Tuple?", options: ["List เร็วกว่า Tuple", "Tuple แก้ไขไม่ได้หลังสร้าง", "List ไม่มีลำดับ", "ไม่มีความต่าง"], ans: 1 },
      { q: "โค้ด: nums=[1,2,3,4,5]; print(nums[1:3]) ผลลัพธ์คือ?", options: ["[1,2]", "[2,3]", "[1,2,3]", "[2,3,4]"], ans: 1 },
      { q: "โค้ด: d={\"a\":1}; print(d.get(\"b\", \"ไม่พบ\")) ผลลัพธ์คือ?", options: ["None", "Error", "ไม่พบ", "1"], ans: 2 },
      { q: "โค้ด: evens=[n for n in range(10) if n%2==0]; print(evens) ผลลัพธ์คือ?", options: ["[0,2,4,6,8]", "[1,3,5,7,9]", "[0,1,2,...,9]", "[]"], ans: 0 },
      { q: "โค้ด: word=\"Hello World\"; print(word.lower()) ผลลัพธ์คือ?", options: ["HELLO WORLD", "hello world", "Hello World", "Error"], ans: 1 },
      { q: "โค้ด: name=\"python\"; print(name[0], name[-1]) ผลลัพธ์คือ?", options: ["p n", "n p", "python python", "Error"], ans: 0 },
      { q: "ค่าที่ส่งเข้าไปในฟังก์ชันตอนเรียกใช้เรียกว่าอะไร?", options: ["Parameter", "Argument", "Return", "Scope"], ans: 1 },
      { q: "ทำไมจึงควรเขียนฟังก์ชันแทนการเขียนโค้ดซ้ำ ๆ?", options: ["เพื่อให้โค้ดยาวขึ้น", "เพื่อให้เรียกใช้ซ้ำได้และโค้ดเป็นระเบียบ (DRY)", "เพราะ Python บังคับให้ใช้ฟังก์ชันเท่านั้น", "ไม่มีเหตุผลพิเศษ"], ans: 1 },
      { q: "Default Parameter คืออะไร?", options: ["พารามิเตอร์ที่ต้องใส่ค่าเสมอ", "พารามิเตอร์ที่มีค่าเริ่มต้นไว้ล่วงหน้าถ้าไม่ส่งค่ามา", "พารามิเตอร์ที่ลบไม่ได้", "ไม่มีสิ่งนี้ใน Python"], ans: 1 },
      { q: "Exception คือเหตุการณ์ประเภทใด?", options: ["เหตุการณ์ปกติที่เกิดทุกครั้ง", "ข้อผิดพลาดที่เกิดระหว่างโปรแกรมทำงาน", "ฟังก์ชันพิเศษของ Python", "ชนิดข้อมูลตัวหนึ่ง"], ans: 1 },
      { q: "คำสั่ง raise มีไว้ทำอะไร?", options: ["ดักจับ error", "สร้าง Exception ขึ้นมาเอง", "จบโปรแกรมทันที", "ปิดฟังก์ชัน"], ans: 1 },
      { q: "except สามารถระบุดักจับ Exception เฉพาะชนิดได้หรือไม่ (เช่น ValueError)?", options: ["ได้", "ไม่ได้ ต้องดักทุกชนิดเท่านั้น", "ได้เฉพาะ TypeError เท่านั้น", "ไม่มี Exception ชนิดต่าง ๆ ใน Python"], ans: 0 },
      { q: "*args ใน Python รวบรวม arguments เป็นชนิดข้อมูลใด?", options: ["List", "Tuple", "Dictionary", "Set"], ans: 1 },
      { q: "โค้ด: def greet(): print(\"Hi\") — x=greet(); print(x) ผลลัพธ์คือ?", options: ["Hi", "Hi แล้ว None บรรทัดถัดมา", "Error", "\"\""], ans: 1 },
      { q: "โค้ด: count=0<br>def inc(): global count; count+=1<br>inc(); inc(); print(count) — ผลลัพธ์คือ?", options: ["0", "1", "2", "Error"], ans: 2 },
      { q: "โค้ด: def f(a,b,c=3): return a+b+c — print(f(1,2)) ผลลัพธ์คือ?", options: ["3", "6", "Error เพราะขาด c", "None"], ans: 1 },
      { q: "โค้ด: try: x=1/0<br>except: print(\"error\")<br>else: print(\"ok\") — ผลลัพธ์คือ?", options: ["ok", "error", "error แล้ว ok", "ok แล้ว error"], ans: 1 },
      { q: "โค้ด: try: 1/0<br>except ZeroDivisionError: print(\"A\")<br>except Exception: print(\"B\") — ผลลัพธ์คือ?", options: ["A", "B", "A แล้ว B", "Error"], ans: 0 },
      { q: "Class เปรียบได้กับอะไร?", options: ["วัตถุจริง", "พิมพ์เขียว/แบบแปลน", "ตัวแปร", "ฟังก์ชัน"], ans: 1 },
      { q: "Class เปรียบได้กับสิ่งใด?", options: ["วัตถุจริงที่จับต้องได้", "พิมพ์เขียวหรือแบบแปลนสำหรับสร้างวัตถุ", "ตัวแปรชนิดหนึ่ง", "ฟังก์ชันธรรมดา"], ans: 1 },
      { q: "self ในเมธอดของ Class หมายถึงอะไร?", options: ["ชื่อของ Class เสมอ", "ตัว Object เองที่กำลังถูกเรียกใช้งานอยู่", "ค่าคงที่พิเศษ", "Parent class"], ans: 1 },
      { q: "Child Class เรียกอีกชื่อหนึ่งว่าอะไร?", options: ["Superclass", "Base Class", "Subclass", "Parent"], ans: 2 },
      { q: "ตัวแปรที่ขึ้นต้นด้วย underscore เดี่ยว (_name) ตามธรรมเนียม Python หมายถึงอะไร?", options: ["Public ใช้ได้อิสระ", "Protected ไม่ควรเข้าถึงจากภายนอกแต่ทำได้", "Private เข้าถึงไม่ได้เด็ดขาด", "ค่าคงที่"], ans: 1 },
      { q: "เมธอดที่ทำงานเหมือนฟังก์ชันธรรมดาแต่อยู่ภายใน Class เรียกว่าอะไร?", options: ["Method", "Argument", "Parameter", "Import"], ans: 0 },
      { q: "super().__init__() ใน Child class ทำหน้าที่อะไร?", options: ["สร้าง Child class ใหม่", "เรียก __init__ ของ Parent class", "ลบ Parent class", "Copy attribute จาก Child ไป Parent"], ans: 1 },
      { q: "โค้ด: class A: pass<br>x=A(); print(type(x)) ผลลัพธ์คือ?", options: ["<class 'A'>", "<class '__main__.A'>", "Error", "None"], ans: 1 },
      { q: "เมื่อ Cat สืบทอดจาก Animal ผ่าน class Cat(Animal): แล้ว Cat จะมีเมธอดของ Animal ด้วยหรือไม่?", options: ["ไม่มี ต้องเขียนใหม่ทั้งหมด", "มี เพราะสืบทอดมาโดยอัตโนมัติ", "มีเฉพาะ __init__ เท่านั้น", "ขึ้นอยู่กับชื่อเมธอด"], ans: 1 },
      { q: "จากโค้ดข้อก่อนหน้า: print(isinstance(c, Cat)) ผลลัพธ์คือ?", options: ["True", "False", "Error", "None"], ans: 0 },
      { q: "เพราะเหตุใด acc.__balance (double underscore) จากภายนอก Class จึงมักเข้าถึงไม่ได้ตรง ๆ?", options: ["เพราะ Python ลบ attribute นั้นทิ้งอัตโนมัติ", "เพราะเกิด Name Mangling ทำให้ชื่อจริงถูกเปลี่ยนไป", "เพราะเป็น syntax error", "เพราะไม่มีการสร้าง attribute นี้จริง"], ans: 1 },
      { q: "เหตุใดการใช้ @property จึงปลอดภัยกว่าการปล่อยให้เข้าถึง attribute ตรง ๆ?", options: ["เพราะเร็วกว่าเสมอ", "เพราะสามารถใส่การตรวจสอบค่าก่อนอนุญาตให้อ่าน/แก้ไขได้", "เพราะ Python บังคับให้ใช้เสมอ", "ไม่มีข้อดีใด ๆ"], ans: 1 }
];
