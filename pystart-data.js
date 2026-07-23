const courseData = {
    title: "Python Programming",
    themeColor: "#2dd4bf",
    lessons: [

        // ═══════════════════════════════════════════
        // หน่วยที่ 1 — พื้นฐาน Python (บท 1-6)
        // ═══════════════════════════════════════════

        {
            id: 1,
            title: "Python คืออะไร?",
            desc: "ทำความรู้จักภาษา Python และเหตุผลที่ต้องเรียน",
            content: {
                th: {
                    title: "Python คืออะไร และทำไมต้องเรียน?",
                    blocks: [
                        { type: "text", text: "Python เป็นภาษาโปรแกรมระดับสูง (High-Level Programming Language) ที่ถูกสร้างขึ้นโดย Guido van Rossum และเผยแพร่ครั้งแรกในปี ค.ศ. 1991 Python ได้รับการออกแบบให้มีไวยากรณ์ที่อ่านง่ายเหมือนภาษาอังกฤษ ทำให้ผู้เริ่มต้นเรียนรู้ได้รวดเร็ว" },
                        { type: "text", text: "จุดเด่นของ Python มีหลายประการ ได้แก่ โค้ดสั้นกระชับ อ่านง่าย ทำงานได้หลายแพลตฟอร์ม มี Library สำเร็จรูปมากมาย และมีชุมชนนักพัฒนาขนาดใหญ่ที่พร้อมช่วยเหลือ" },
                        { type: "text", text: "Python ถูกนำไปใช้งานในหลายสาขา เช่น การพัฒนาเว็บไซต์ (Web Development) ด้วย Django และ Flask, การวิเคราะห์ข้อมูล (Data Science) ด้วย Pandas และ NumPy, ปัญญาประดิษฐ์และ Machine Learning ด้วย TensorFlow และ PyTorch, ระบบอัตโนมัติ (Automation) และการเขียนสคริปต์ต่างๆ" },
                        { type: "text", text: "โปรแกรม Python แรกที่นักพัฒนาทุกคนเขียนคือการแสดงข้อความ \"Hello, World!\" ออกทางหน้าจอ ซึ่งใน Python ทำได้ด้วยคำสั่งเพียงบรรทัดเดียว ต่างจากภาษาอื่นเช่น Java หรือ C++ ที่ต้องเขียนโค้ดหลายบรรทัด ลองแก้ไขและกดรันโค้ดด้านล่างดูได้เลย:" },
                        { type: "code", filename: "hello.py", source:
`# โปรแกรมแรกของคุณ — Hello World!
print("Hello, World!")
print("สวัสดีโลก!")
print("ยินดีต้อนรับสู่ Python")` },
                        { type: "tip", kind: "note", text: "เครื่องหมาย # ใช้เขียน comment (คำอธิบายในโค้ด) — บรรทัดที่ขึ้นต้นด้วย # จะไม่ถูกรันเป็นคำสั่ง ใช้จดบันทึกไว้อ่านทีหลังหรืออธิบายให้คนอื่นเข้าใจโค้ดของเราได้ง่ายขึ้น" },
                        { type: "text", text: "print() ไม่ได้ใช้แสดงแค่ข้อความเท่านั้น แต่แสดงตัวเลขได้ด้วยเช่นกัน โดยไม่ต้องใส่เครื่องหมายคำพูดครอบ:" },
                        { type: "code", filename: "numbers.py", source:
`# print() แสดงตัวเลขได้เช่นกัน ไม่ต้องใส่เครื่องหมายคำพูด
print(2024)
print(3.14)

# ลองสลับลำดับ หรือเพิ่มบรรทัดของคุณเองดูได้เลย!` }
                    ]
                }
            },
            takeaways: [
                "Python เป็นภาษาระดับสูงที่สร้างโดย Guido van Rossum เน้นไวยากรณ์อ่านง่ายเหมือนภาษาอังกฤษ",
                "ใช้งานได้หลากหลาย ตั้งแต่เว็บ ข้อมูล AI ไปจนถึงการเขียนสคริปต์อัตโนมัติ",
                "print() ใช้แสดงข้อความหรือตัวเลขก็ได้ ส่วน # ใช้เขียน comment ที่ไม่ถูกรัน"
            ]
        },

        {
            id: 2,
            title: "ตัวแปรและการตั้งชื่อ",
            desc: "เรียนรู้การสร้างและตั้งชื่อตัวแปรอย่างถูกต้อง",
            content: {
                th: {
                    title: "ตัวแปร (Variables) และกฎการตั้งชื่อ",
                    desc: `ตัวแปร (Variable) คือกล่องหรือภาชนะสำหรับเก็บข้อมูลในโปรแกรม เปรียบเหมือนกล่องที่มีป้ายชื่อ เราสามารถใส่ข้อมูลลงไป เปลี่ยนแปลง หรือนำมาใช้ได้ทุกเมื่อ ใน Python ใช้เครื่องหมาย = ในการกำหนดค่าให้ตัวแปร

กฎการตั้งชื่อตัวแปรใน Python มีดังนี้
1. ต้องขึ้นต้นด้วยตัวอักษรหรือเครื่องหมาย _ (underscore) เท่านั้น ไม่สามารถขึ้นต้นด้วยตัวเลขได้
2. ประกอบด้วยตัวอักษร ตัวเลข และ _ ได้เท่านั้น ไม่มีช่องว่างหรืออักขระพิเศษ
3. Python แยกความแตกต่างระหว่างตัวพิมพ์เล็กและใหญ่ (Case Sensitive) เช่น name และ Name เป็นคนละตัวแปร
4. ไม่ควรใช้คำสงวน (Keywords) เช่น if, for, while, class เป็นชื่อตัวแปร

แนวทางการตั้งชื่อที่ดี ควรใช้ชื่อที่สื่อความหมาย เช่น student_name แทน n, และใช้รูปแบบ snake_case (ตัวเล็กทั้งหมด คั่นด้วย underscore) สำหรับตัวแปรทั่วไป`,
                    code:
`# การสร้างตัวแปรใน Python
name = "Zenith"          # เก็บข้อความ
age = 18                  # เก็บตัวเลขจำนวนเต็ม
height = 175.5            # เก็บทศนิยม
is_student = True         # เก็บค่าจริง/เท็จ

# แสดงค่าตัวแปร
print(name)
print(age)
print(height)
print(is_student)

# เปลี่ยนค่าตัวแปรได้
age = 19
print("อายุใหม่:", age)

# กำหนดหลายตัวแปรพร้อมกัน
x, y, z = 1, 2, 3
print(x, y, z)

# ตัวแปรชื่อที่ดี vs ไม่ดี
student_name = "Somchai"   # ดี — อ่านออกว่าคืออะไร
n = "Somchai"              # ไม่ดี — ไม่รู้ว่า n คืออะไร`
                }
            },
            takeaways: [
                "ตัวแปรคือกล่องเก็บข้อมูล กำหนดค่าด้วยเครื่องหมาย =",
                "ชื่อตัวแปรต้องขึ้นต้นด้วยตัวอักษรหรือ _ ห้ามมีช่องว่าง และต้องไม่ใช่คำสงวนของ Python",
                "Python สนใจตัวพิมพ์เล็ก-ใหญ่ (Case Sensitive) และนิยมตั้งชื่อแบบ snake_case ที่สื่อความหมาย"
            ]
        },

        {
            id: 3,
            title: "ชนิดข้อมูลพื้นฐาน",
            desc: "ทำความเข้าใจ String, Integer, Float, Boolean",
            content: {
                th: {
                    title: "ชนิดข้อมูลพื้นฐาน (Data Types)",
                    desc: `Python มีชนิดข้อมูลพื้นฐาน 4 ประเภทหลักที่ใช้งานบ่อยที่สุด

1. String (str) — ข้อความ ใส่ในเครื่องหมายคำพูดเดี่ยว ' ' หรือคู่ " " เช่น "Hello", 'Python' ใช้เก็บชื่อ ที่อยู่ หรือข้อความทั่วไป

2. Integer (int) — จำนวนเต็ม ไม่มีทศนิยม เช่น 1, 100, -5, 0 ใช้นับจำนวน อายุ หรือค่าที่เป็นจำนวนเต็ม

3. Float (float) — จำนวนทศนิยม เช่น 3.14, 99.99, -2.5 ใช้กับราคา น้ำหนัก ส่วนสูง หรือค่าที่ต้องการความแม่นยำ

4. Boolean (bool) — ค่าความจริง มีเพียง 2 ค่าคือ True และ False (ต้องพิมพ์ตัวใหญ่ขึ้นต้น) ใช้ในการตรวจสอบเงื่อนไขต่างๆ

เราสามารถตรวจสอบชนิดข้อมูลด้วยฟังก์ชัน type() และแปลงชนิดข้อมูลด้วยฟังก์ชัน int(), float(), str(), bool()`,
                    code:
`# String — ข้อความ
name = "Zenith Academy"
city = 'ลำพูน'
print(type(name))          # <class 'str'>

# Integer — จำนวนเต็ม
age = 18
score = 100
temperature = -5
print(type(age))           # <class 'int'>

# Float — ทศนิยม
price = 299.99
pi = 3.14159
height = 175.5
print(type(price))         # <class 'float'>

# Boolean — จริง/เท็จ
is_student = True
has_paid = False
print(type(is_student))    # <class 'bool'>

# แปลงชนิดข้อมูล
num_str = "42"
num_int = int(num_str)     # "42" → 42
num_float = float(num_str) # "42" → 42.0
print(num_int + 8)         # 50`
                }
            },
            takeaways: [
                "Python มีชนิดข้อมูลหลัก 4 แบบ: str (ข้อความ), int (จำนวนเต็ม), float (ทศนิยม), bool (True/False)",
                "ใช้ type() ตรวจสอบชนิดข้อมูล และ int()/float()/str()/bool() แปลงชนิดข้อมูล",
                "ค่า Boolean ต้องพิมพ์ True/False ขึ้นต้นด้วยตัวใหญ่เท่านั้น"
            ]
        },

        {
            id: 4,
            title: "รับค่าและแสดงผล",
            desc: "input(), print() และ f-string",
            content: {
                th: {
                    title: "การรับค่าและแสดงผล (Input & Output)",
                    desc: `การรับข้อมูลจากผู้ใช้และแสดงผลออกทางหน้าจอเป็นสิ่งสำคัญมากในการเขียนโปรแกรม

ฟังก์ชัน input() ใช้รับข้อมูลจากแป้นพิมพ์ โดยโปรแกรมจะหยุดรอให้ผู้ใช้กรอกข้อมูลและกด Enter ข้อควรระวังคือ input() จะคืนค่าเป็น String เสมอ ถ้าต้องการตัวเลขต้องแปลงด้วย int() หรือ float()

ฟังก์ชัน print() ใช้แสดงผลออกทางหน้าจอ สามารถแสดงได้หลายค่าพร้อมกันโดยคั่นด้วยจุลภาค (,) และมี parameter พิเศษ เช่น sep กำหนดตัวคั่น และ end กำหนดอักขระท้ายบรรทัด

f-string (Formatted String Literals) คือวิธีการใส่ตัวแปรลงในข้อความที่สะดวกที่สุด ใช้โดยใส่ f หน้าเครื่องหมายคำพูด แล้วใส่ชื่อตัวแปรในวงเล็บปีกกา {} นอกจากนี้ยังสามารถทำการคำนวณหรือจัดรูปแบบตัวเลขได้ภายใน {}`,
                    code:
`# รับข้อมูลจากผู้ใช้
name = input("คุณชื่ออะไร: ")
age = int(input("อายุเท่าไหร่: "))
height = float(input("ส่วนสูง (ซม.): "))

# แสดงผลด้วย f-string
print(f"สวัสดีคุณ {name}!")
print(f"อายุ {age} ปี ส่วนสูง {height} ซม.")
print(f"ปีหน้าคุณจะอายุ {age + 1} ปี")

# จัดรูปแบบตัวเลข
price = 1999.9
print(f"ราคา: {price:.2f} บาท")  # ทศนิยม 2 ตำแหน่ง

# print() แบบต่างๆ
print("A", "B", "C")              # A B C
print("A", "B", "C", sep="-")     # A-B-C
print("บรรทัดนี้", end=" ")
print("ต่อกัน")                    # บรรทัดนี้ ต่อกัน`
                }
            },
            takeaways: [
                "input() รับค่าจากผู้ใช้เสมอในรูปแบบ String ต้องแปลงด้วย int()/float() หากต้องการตัวเลข",
                "f-string (f\"...{ตัวแปร}...\") คือวิธีแทรกตัวแปรลงข้อความที่กระชับและอ่านง่ายที่สุด",
                "print() ปรับแต่งได้ด้วย sep (ตัวคั่น) และ end (อักขระท้ายบรรทัด)"
            ]
        },

        {
            id: 5,
            title: "ตัวดำเนินการทางคณิตศาสตร์",
            desc: "บวก ลบ คูณ หาร และการดำเนินการพิเศษ",
            content: {
                th: {
                    title: "ตัวดำเนินการทางคณิตศาสตร์ (Arithmetic Operators)",
                    desc: `Python รองรับการดำเนินการทางคณิตศาสตร์ครบครัน ทั้งการบวก ลบ คูณ หาร และการดำเนินการพิเศษอีกหลายรูปแบบ

ตัวดำเนินการพื้นฐาน ได้แก่ + (บวก), - (ลบ), * (คูณ), / (หาร ได้ผลเป็น float) 

ตัวดำเนินการพิเศษที่น่าสนใจ ได้แก่ // (Floor Division หรือหารปัดทิ้งเศษ), % (Modulus หรือหาเศษ), ** (Exponentiation หรือยกกำลัง)

ลำดับการดำเนินการ (Order of Operations) ใน Python เป็นไปตามกฎ PEMDAS เหมือนคณิตศาสตร์ทั่วไป คือ วงเล็บ → ยกกำลัง → คูณ/หาร → บวก/ลบ

ตัวดำเนินการกำหนดค่าแบบย่อ เช่น += -= *= /= ช่วยให้เขียนโค้ดสั้นลง เช่น x += 1 คือ x = x + 1`,
                    code:
`a = 10
b = 3

# ตัวดำเนินการพื้นฐาน
print(f"{a} + {b} = {a + b}")    # 13
print(f"{a} - {b} = {a - b}")    # 7
print(f"{a} * {b} = {a * b}")    # 30
print(f"{a} / {b} = {a / b:.4f}") # 3.3333

# ตัวดำเนินการพิเศษ
print(f"{a} // {b} = {a // b}")  # 3 (หารปัดทิ้งเศษ)
print(f"{a} % {b} = {a % b}")    # 1 (เศษจากการหาร)
print(f"{a} ** {b} = {a ** b}")  # 1000 (10 ยกกำลัง 3)

# ลำดับการดำเนินการ
result = 2 + 3 * 4       # 14 ไม่ใช่ 20
result2 = (2 + 3) * 4    # 20

# ตัวดำเนินการกำหนดค่าแบบย่อ
x = 10
x += 5    # x = x + 5 = 15
x -= 3    # x = x - 3 = 12
x *= 2    # x = x * 2 = 24
print(x)  # 24`
                }
            },
            takeaways: [
                "นอกจาก + - * / แล้วยังมี // (หารปัดเศษทิ้ง) % (หาเศษ) และ ** (ยกกำลัง)",
                "ลำดับการคำนวณเป็นไปตามกฎ PEMDAS: วงเล็บ → ยกกำลัง → คูณ/หาร → บวก/ลบ",
                "ตัวดำเนินการย่อ เช่น += -= *= ช่วยเขียนโค้ดปรับค่าตัวแปรให้สั้นลง"
            ]
        },

        {
            id: 6,
            title: "ตัวดำเนินการเปรียบเทียบและตรรกะ",
            desc: "เปรียบเทียบค่าและเชื่อมเงื่อนไขหลายข้อ",
            content: {
                th: {
                    title: "ตัวดำเนินการเปรียบเทียบและตรรกะ",
                    desc: `ตัวดำเนินการเปรียบเทียบ (Comparison Operators) ใช้เปรียบเทียบค่าสองค่าและให้ผลเป็น Boolean (True หรือ False) เสมอ ได้แก่ == (เท่ากับ), != (ไม่เท่ากับ), > (มากกว่า), < (น้อยกว่า), >= (มากกว่าหรือเท่ากับ), <= (น้อยกว่าหรือเท่ากับ)

ข้อควรระวัง == ใช้เปรียบเทียบค่า ส่วน = ใช้กำหนดค่า อย่าสับสน!

ตัวดำเนินการตรรกะ (Logical Operators) ใช้เชื่อมเงื่อนไขหลายข้อเข้าด้วยกัน มี 3 ตัว ได้แก่ and (และ ต้องเป็นจริงทั้งคู่), or (หรือ เป็นจริงอย่างน้อยหนึ่งข้อ), not (ไม่ กลับค่า True เป็น False และ False เป็น True)

การเข้าใจตัวดำเนินการเหล่านี้เป็นพื้นฐานสำคัญในการเขียนเงื่อนไข if และการควบคุมการทำงานของโปรแกรม`,
                    code:
`# ตัวดำเนินการเปรียบเทียบ
x = 10
y = 20

print(x == y)    # False (เท่ากัน?)
print(x != y)    # True  (ไม่เท่ากัน?)
print(x > y)     # False (มากกว่า?)
print(x < y)     # True  (น้อยกว่า?)
print(x >= 10)   # True  (มากกว่าหรือเท่ากับ?)
print(x <= 10)   # True  (น้อยกว่าหรือเท่ากับ?)

# ตัวดำเนินการตรรกะ
age = 20
has_id = True

# and — ทั้งสองต้องจริง
print(age >= 18 and has_id)    # True

# or — อย่างน้อยหนึ่งต้องจริง
is_member = False
print(age >= 18 or is_member)  # True

# not — กลับค่า
print(not is_member)           # True

# ผสมกัน
score = 75
print(score >= 60 and score < 80)  # True (เกรด C)`
                }
            },
            takeaways: [
                "ตัวดำเนินการเปรียบเทียบ (==, !=, >, <, >=, <=) ให้ผลเป็น Boolean เสมอ — อย่าสับสน == กับ =",
                "and ต้องจริงทั้งคู่, or จริงแค่ข้อเดียวก็พอ, not ใช้กลับค่าความจริง",
                "ตัวดำเนินการเหล่านี้คือพื้นฐานของการเขียนเงื่อนไข if ในบทถัดไป"
            ]
        },

        // ═══════════════════════════════════════════
        // หน่วยที่ 2 — ควบคุมทิศทาง (บท 7-11)
        // ═══════════════════════════════════════════

        {
            id: 7,
            title: "เงื่อนไข if / elif / else",
            desc: "ให้โปรแกรมตัดสินใจตามเงื่อนไข",
            content: {
                th: {
                    title: "การตัดสินใจด้วย if / elif / else",
                    desc: `คำสั่ง if ใช้ให้โปรแกรมตัดสินใจตามเงื่อนไข หากเงื่อนไขเป็น True จะทำงานในบล็อกนั้น หากเป็น False จะข้ามไป สิ่งสำคัญมากใน Python คือการย่อหน้า (Indentation) ด้วย Spacebar 4 ครั้ง เพื่อบอกว่าโค้ดบรรทัดไหนอยู่ภายใน if

elif (ย่อจาก else if) ใช้เพิ่มเงื่อนไขทางเลือก Python จะตรวจสอบเงื่อนไขตามลำดับจากบนลงล่าง หากพบเงื่อนไขที่เป็นจริงก็จะทำงานและข้ามเงื่อนไขที่เหลือ

else คือบล็อกสุดท้ายที่จะทำงานเมื่อไม่มีเงื่อนไขใดเป็นจริงเลย ไม่จำเป็นต้องมีเสมอ แต่มักใช้เพื่อรองรับกรณีที่ไม่ได้คาดไว้

Nested if คือ if ซ้อนภายใน if อีกทีหนึ่ง ใช้เมื่อต้องการตรวจสอบเงื่อนไขย่อยภายในเงื่อนไขหลัก`,
                    code:
`# if พื้นฐาน
score = 75

if score >= 80:
    print("เกรด A — ยอดเยี่ยม!")
elif score >= 70:
    print("เกรด B — ดีมาก")
elif score >= 60:
    print("เกรด C — ผ่าน")
elif score >= 50:
    print("เกรด D — อ่อน")
else:
    print("เกรด F — ตก")

# ตัวอย่างจริง: ตรวจสอบอายุ
age = 20
if age >= 18:
    if age >= 60:
        print("ผู้สูงอายุ")
    else:
        print("ผู้ใหญ่")
else:
    print("ยังไม่บรรลุนิติภาวะ")

# Ternary Operator (if แบบสั้น)
status = "ผ่าน" if score >= 60 else "ไม่ผ่าน"
print(f"สถานะ: {status}")`
                }
            },
            takeaways: [
                "if ตรวจสอบเงื่อนไข ถ้าจริงจึงทำงานในบล็อกที่ย่อหน้าไว้ (Indentation สำคัญมาก)",
                "elif ใช้เพิ่มเงื่อนไขทางเลือก โดย Python ตรวจสอบตามลำดับจากบนลงล่างแล้วหยุดที่ข้อแรกที่จริง",
                "else ทำงานเมื่อไม่มีเงื่อนไขใดเป็นจริงเลย ส่วน ternary (a if cond else b) คือ if แบบย่อในบรรทัดเดียว"
            ]
        },

        {
            id: 8,
            title: "for loop + range()",
            desc: "วนทำงานซ้ำด้วยลูป for",
            content: {
                th: {
                    title: "สั่งให้ Python ทำซ้ำด้วยลูป for",
                    intro: "แทนที่จะเขียน print() ซ้ำหลายสิบบรรทัด — ลูป for ทำให้คุณเขียนแค่ 2 บรรทัดแล้วปล่อยให้ Python จัดการวนซ้ำเองได้เลย",
                    goals: ["ใช้ for + range() ได้", "วนผ่าน string/list ได้", "ใช้ enumerate() ได้"],
                    blocks: [
                        { type: "section", num: "01", label: "แนวคิด", title: "ทำไมต้องมีลูป?" },
                        { type: "text", text: "สมมติว่าต้องพิมพ์ข้อความเดิม 5 ครั้ง — จะเขียน print() ซ้ำ 5 บรรทัดไหม? ถ้าต้องพิมพ์ 1,000 ครั้งล่ะ?" },
                        { type: "text", text: "ลูป for คือคำสั่งที่บอกให้ Python \"ทำสิ่งนี้ซ้ำตามจำนวนที่กำหนด\" — เขียนแค่ครั้งเดียว Python จัดการนับและวนให้เองทั้งหมด" },
                        { type: "code", filename: "why_loop.py", source:
`# แบบไม่ใช้ลูป (ยาวและซ้ำซ้อน)
print("สวัสดี")
print("สวัสดี")
print("สวัสดี")

# แบบใช้ลูป (สั้นกว่ามาก และขยายจำนวนรอบได้ง่าย)
for i in range(3):
    print("สวัสดี")` },
                        { type: "tip", kind: "note", text: "โค้ดสองแบบด้านบนให้ผลลัพธ์เหมือนกันทุกประการ แต่แบบใช้ลูปจะยิ่งสั้นกว่ามากเมื่อจำนวนรอบเพิ่มขึ้น — ถ้าต้องวน 1,000 รอบ แค่เปลี่ยน 3 เป็น 1000 เท่านั้น" },

                        { type: "section", num: "02", label: "range()", title: "range() มี 3 รูปแบบ" },
                        { type: "text", text: "range() ใช้สร้างลำดับตัวเลขให้ลูปวนผ่าน แต่ละรูปแบบเหมาะกับสถานการณ์ต่างกัน:" },
                        { type: "concept-grid", items: [
                            { icon: "🔢", title: "range(n)", desc: "เริ่มที่ 0 เสมอ วนถึง n-1 — เหมาะเมื่อแค่ต้องการวน n รอบ" },
                            { icon: "➡️", title: "range(start, stop)", desc: "กำหนดจุดเริ่มต้นได้ และไม่รวมตัว stop" },
                            { icon: "⏭️", title: "range(start, stop, step)", desc: "ข้ามทีละ step ตัว เช่น เอาแต่เลขคู่" },
                            { icon: "↵", title: "Indentation", desc: "โค้ดที่เว้น 4 ช่องข้างใน คือสิ่งที่รันซ้ำทุกรอบ — ขาดไม่ได้" }
                        ] },
                        { type: "code", filename: "range_forms.py", source:
`# range(n) — 0 ถึง n-1
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4

# range(start, stop) — ไม่รวม stop
for i in range(1, 6):
    print(i, end=" ")  # 1 2 3 4 5

# range(start, stop, step)
for i in range(0, 11, 2):
    print(i, end=" ")  # 0 2 4 6 8 10` },
                        { type: "tip", kind: "warn", text: "จำให้ขึ้นใจ: range(1, 6) จะให้ค่า 1 ถึง 5 เท่านั้น — ตัวเลขที่เป็น \"จุดจบ\" จะไม่ถูกรวมเสมอ นี่คือสิ่งที่มือใหม่พลาดบ่อยที่สุด" },

                        { type: "section", num: "03", label: "วนผ่านข้อมูล", title: "ลูป for วนผ่าน String และ List ได้โดยตรง" },
                        { type: "text", text: "ไม่ต้องใช้ range() เสมอไป — for loop วนผ่านตัวอักษรใน string หรือสมาชิกใน list ได้ตรง ๆ เลย:" },
                        { type: "code", filename: "iterate.py", source:
`# วนผ่านตัวอักษรใน String
for char in "Python":
    print(char, end="-")  # P-y-t-h-o-n-

print()  # ขึ้นบรรทัดใหม่

# วนผ่านสมาชิกใน List
fruits = ["แอปเปิล", "กล้วย", "ส้ม"]
for fruit in fruits:
    print(f"ผลไม้: {fruit}")` },

                        { type: "section", num: "04", label: "enumerate()", title: "อยากได้ทั้งลำดับและค่า ใช้ enumerate()" },
                        { type: "text", text: "ถ้าต้องการทั้งเลขลำดับ (index) และค่าของสมาชิกไปพร้อมกันในแต่ละรอบ ใช้ enumerate() ห่อ list ไว้:" },
                        { type: "code", filename: "enumerate_ex.py", source:
`fruits = ["แอปเปิล", "กล้วย", "ส้ม"]

# enumerate(fruits, 1) เริ่มนับลำดับที่ 1 แทนที่จะเริ่มที่ 0
for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit}")` },

                        { type: "section", num: "05", label: "ใช้งานจริง", title: "ตัวอย่างการใช้ลูปคำนวณผลรวม" },
                        { type: "text", text: "ลูปมักถูกใช้สะสมค่าในตัวแปรระหว่างวน เช่น การหาผลรวมของตัวเลขทั้งหมดตั้งแต่ 1 ถึง 100 — ลองแก้ไขและกดรันโค้ดด้านล่างดูได้เลย:" },
                        { type: "code", filename: "sum_range.py", source:
`total = 0
for num in range(1, 101):
    total += num
print(f"ผลรวม 1-100 = {total}")  # 5050` }
                    ]
                }
            },
            takeaways: [
                "for loop ใช้ทำงานซ้ำโดยไม่ต้องเขียนคำสั่งเดิมหลายบรรทัด",
                "range(n) เริ่มที่ 0 ถึง n-1, range(start, stop) ไม่รวมค่า stop, range(start, stop, step) ข้ามทีละ step",
                "for วนผ่าน string หรือ list ได้โดยตรง และ enumerate() ให้ทั้ง index และค่าพร้อมกัน"
            ]
        },

        {
            id: 9,
            title: "while loop",
            desc: "วนซ้ำตามเงื่อนไข",
            content: {
                th: {
                    title: "การวนซ้ำด้วย while loop",
                    desc: `while loop จะทำงานซ้ำตราบใดที่เงื่อนไขยังคงเป็น True เหมาะเมื่อไม่รู้จำนวนรอบล่วงหน้า เช่น รอรับข้อมูลจากผู้ใช้จนกว่าจะถูกต้อง

ข้อควรระวังสำคัญมากคือ Infinite Loop (ลูปไม่มีที่สิ้นสุด) เกิดขึ้นเมื่อเงื่อนไขเป็น True ตลอดไปโดยไม่มีการเปลี่ยนแปลง ต้องแน่ใจว่าภายในลูปมีการเปลี่ยนแปลงค่าที่ทำให้เงื่อนไขเป็น False ในที่สุด

do-while ใน Python ไม่มีคำสั่ง do-while ตรงๆ แต่เราจำลองได้ด้วย while True: ร่วมกับ break

while loop ใช้บ่อยมากในการทำ input validation (ตรวจสอบข้อมูลที่รับเข้ามา) และการทำเมนูโปรแกรม`,
                    code:
`# while พื้นฐาน
count = 1
while count <= 5:
    print(f"รอบที่ {count}")
    count += 1    # สำคัญ! ต้องเพิ่มไม่งั้น infinite loop

# นับถอยหลัง
n = 10
while n > 0:
    print(n, end=" ")
    n -= 1
print("Go!")

# Input Validation — รับจนกว่าจะถูก
while True:
    age = int(input("ใส่อายุ (1-120): "))
    if 1 <= age <= 120:
        print(f"อายุ {age} ปี รับแล้ว!")
        break
    print("อายุไม่ถูกต้อง ลองใหม่")

# เมนูโปรแกรม
while True:
    print("\\n1. เพิ่มข้อมูล")
    print("2. ดูข้อมูล")
    print("0. ออก")
    choice = input("เลือก: ")
    if choice == "0":
        print("ขอบคุณ!")
        break
    elif choice == "1":
        print("เพิ่มข้อมูล...")`
                }
            },
            takeaways: [
                "while ทำงานซ้ำตราบใดที่เงื่อนไขยังเป็น True เหมาะกับกรณีที่ไม่รู้จำนวนรอบล่วงหน้า",
                "ต้องมีการเปลี่ยนค่าที่ทำให้เงื่อนไขเป็น False ในสักวัน ไม่งั้นจะเกิด infinite loop",
                "while True: ร่วมกับ break มักใช้ทำ input validation หรือเมนูโปรแกรมที่วนจนกว่าผู้ใช้จะเลือกออก"
            ]
        },

        {
            id: 10,
            title: "break, continue, pass",
            desc: "ควบคุมการทำงานของลูป",
            content: {
                th: {
                    title: "คำสั่งควบคุมลูป: break, continue, pass",
                    desc: `Python มีคำสั่งพิเศษ 3 ตัวสำหรับควบคุมการทำงานของลูป

break — หยุดลูปทันทีและออกจากลูป แม้ยังไม่ครบจำนวนรอบ ใช้เมื่อหาสิ่งที่ต้องการพบแล้ว หรือเจอเงื่อนไขที่ต้องหยุด

continue — ข้ามการทำงานในรอบปัจจุบันและไปเริ่มรอบถัดไปทันที โดยไม่หยุดลูป ใช้เมื่อต้องการข้ามค่าบางค่าในลูป

pass — ไม่ทำอะไรเลย ใช้เป็น placeholder เมื่อ Python ต้องการโค้ดอย่างน้อย 1 บรรทัดในบล็อก แต่เราไม่อยากทำอะไรในตอนนี้ เช่น ฟังก์ชันหรือ if ที่ยังไม่ได้เขียน

for-else และ while-else คือ feature พิเศษของ Python โดย else จะทำงานเมื่อลูปจบตามปกติ (ไม่ได้จบด้วย break)`,
                    code:
`# break — หยุดลูป
print("หา 7 ใน 1-10:")
for i in range(1, 11):
    if i == 7:
        print(f"เจอ {i} แล้ว!")
        break
    print(i, end=" ")

# continue — ข้ามรอบ
print("\\nเลขคู่ใน 1-10:")
for i in range(1, 11):
    if i % 2 != 0:
        continue    # ข้ามเลขคี่
    print(i, end=" ")

# pass — ไม่ทำอะไร (placeholder)
for i in range(5):
    if i == 3:
        pass        # TODO: ทำอะไรบางอย่างทีหลัง
    else:
        print(i, end=" ")

# for-else
numbers = [1, 3, 5, 7, 9]
target = 6
for num in numbers:
    if num == target:
        print(f"เจอ {target}")
        break
else:
    print(f"ไม่เจอ {target} ในลิสต์")`
                }
            },
            takeaways: [
                "break หยุดลูปทันทีแม้ยังไม่ครบรอบ ส่วน continue ข้ามไปทำรอบถัดไปโดยไม่ออกจากลูป",
                "pass ใช้เป็น placeholder เมื่อ Python ต้องการโค้ดอย่างน้อย 1 บรรทัดแต่ยังไม่อยากเขียนอะไร",
                "for-else / while-else จะรัน else ก็ต่อเมื่อลูปจบตามปกติ ไม่ได้จบด้วย break"
            ]
        },

        {
            id: 11,
            title: "Nested Loop",
            desc: "ลูปซ้อนลูป",
            content: {
                th: {
                    title: "ลูปซ้อนกัน (Nested Loop)",
                    desc: `Nested Loop คือลูปที่อยู่ภายในลูปอีกชั้นหนึ่ง ลูปด้านนอกเรียกว่า outer loop และลูปด้านในเรียกว่า inner loop

การทำงาน: ในแต่ละรอบของ outer loop, inner loop จะวนครบทั้งหมดก่อน แล้วจึงไปรอบถัดไปของ outer loop ถ้า outer loop วน 3 รอบ และ inner loop วน 4 รอบ โค้ดใน inner loop จะถูกรัน 3 × 4 = 12 ครั้ง

Nested loop ใช้งานบ่อยในการสร้าง pattern รูปแบบต่างๆ, ประมวลผลตาราง 2 มิติ (matrix), และการเปรียบเทียบข้อมูลหลายชุด

ควรระวัง: Nested loop ที่ลึกหลายชั้นอาจทำให้โปรแกรมช้าลง และโค้ดอ่านยากขึ้น ควรใช้เมื่อจำเป็นจริงๆ`,
                    code:
`# สร้างตาราง 3x3
for i in range(1, 4):           # outer loop
    for j in range(1, 4):       # inner loop
        print(f"{i}x{j}={i*j}", end="  ")
    print()  # ขึ้นบรรทัดใหม่

# สร้างรูปสามเหลี่ยมดาว
rows = 5
for i in range(1, rows + 1):
    for j in range(i):
        print("*", end="")
    print()
# *
# **
# ***
# ****
# *****

# ตารางสูตรคูณ
for i in range(1, 4):
    for j in range(1, 11):
        print(f"{i}x{j:2d}={i*j:3d}", end="  ")
    print()

# ค้นหาในตาราง 2 มิติ
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for row in matrix:
    for num in row:
        print(num, end=" ")
    print()`
                }
            },
            takeaways: [
                "Nested loop คือลูปซ้อนลูป โดย inner loop จะวนจบทั้งหมดก่อนที่ outer loop จะขยับไปรอบถัดไป",
                "ถ้า outer วน m รอบ และ inner วน n รอบ โค้ดใน inner loop จะถูกรันรวม m×n ครั้ง",
                "ใช้บ่อยกับการสร้างลวดลาย ตารางสูตรคูณ และการประมวลผลข้อมูล 2 มิติ (matrix)"
            ]
        },

        // ═══════════════════════════════════════════
        // หน่วยที่ 3 — โครงสร้างข้อมูล (บท 12-16)
        // ═══════════════════════════════════════════

        {
            id: 12,
            title: "List",
            desc: "เก็บข้อมูลหลายค่าด้วย List",
            content: {
                th: {
                    title: "List — โครงสร้างข้อมูลที่ยืดหยุ่นที่สุด",
                    desc: `List คือโครงสร้างข้อมูลที่เก็บค่าหลายค่าในตัวแปรเดียว เป็น ordered (มีลำดับ) และ mutable (แก้ไขได้) สร้างด้วยวงเล็บเหลี่ยม [] โดย index เริ่มจาก 0

การเข้าถึงสมาชิก ใช้ index เช่น list[0] คือสมาชิกตัวแรก index ติดลบหมายถึงนับจากท้าย list[-1] คือตัวสุดท้าย

Slicing ใช้ดึงสมาชิกหลายตัวพร้อมกัน รูปแบบ list[start:stop:step] เช่น list[1:4] ดึงตำแหน่ง 1,2,3

เมธอดสำคัญของ List ได้แก่ append() เพิ่มท้าย, insert() แทรก, remove() ลบตามค่า, pop() ลบตาม index, sort() เรียงลำดับ, reverse() กลับลำดับ, len() นับจำนวน, count() นับค่าซ้ำ, index() หาตำแหน่ง`,
                    code:
`# สร้าง List
fruits = ["แอปเปิล", "กล้วย", "ส้ม", "มะม่วง"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]  # รวมหลายชนิด

# เข้าถึงสมาชิก
print(fruits[0])     # แอปเปิล (ตัวแรก)
print(fruits[-1])    # มะม่วง (ตัวสุดท้าย)
print(fruits[1:3])   # ['กล้วย', 'ส้ม']

# แก้ไขค่า
fruits[0] = "ชมพู่"
print(fruits)

# เมธอดสำคัญ
fruits.append("องุ่น")      # เพิ่มท้าย
fruits.insert(1, "ลิ้นจี่") # แทรกตำแหน่ง 1
fruits.remove("กล้วย")      # ลบตามค่า
popped = fruits.pop()        # ลบและคืนค่าตัวสุดท้าย

print(len(fruits))           # จำนวนสมาชิก
numbers.sort()               # เรียงน้อยไปมาก
numbers.sort(reverse=True)   # เรียงมากไปน้อย

# ตรวจสอบสมาชิก
print("ส้ม" in fruits)       # True/False`
                }
            },
            takeaways: [
                "List เก็บค่าหลายค่าในตัวแปรเดียว มีลำดับ (ordered) และแก้ไขได้ (mutable) สร้างด้วย []",
                "เข้าถึงสมาชิกด้วย index โดย index ติดลบนับจากท้าย list เช่น list[-1] คือตัวสุดท้าย",
                "เมธอดสำคัญ: append() เพิ่มท้าย, insert() แทรก, remove()/pop() ลบ, sort() เรียงลำดับ"
            ]
        },

        {
            id: 13,
            title: "Tuple และ Set",
            desc: "โครงสร้างข้อมูลที่ไม่เปลี่ยนแปลงและไม่ซ้ำ",
            content: {
                th: {
                    title: "Tuple และ Set",
                    desc: `Tuple คล้าย List แต่ immutable (แก้ไขไม่ได้หลังสร้าง) สร้างด้วยวงเล็บ () หรือไม่ใส่วงเล็บก็ได้ ใช้เก็บข้อมูลที่ไม่ต้องการให้เปลี่ยน เช่น พิกัด RGB สี วันเกิด ข้อดีคือรวดเร็วกว่า List และป้องกันการแก้ไขผิดพลาด

Set คือกลุ่มข้อมูลที่ไม่มีลำดับ (unordered) และไม่มีสมาชิกซ้ำ สร้างด้วยวงเล็บปีกกา {} หรือ set() Set ใช้งานได้ดีมากสำหรับการกรองค่าซ้ำออก และการดำเนินการเซต เช่น union (รวม) intersection (ร่วม) difference (ต่าง)

ข้อควรสังเกต set() ใช้สร้าง Set ว่าง ไม่ใช้ {} เพราะ {} จะสร้าง Dictionary ว่างแทน`,
                    code:
`# Tuple — ข้อมูลที่แก้ไขไม่ได้
point = (10, 20)
rgb = (255, 128, 0)
person = ("Zenith", 18, "ลำพูน")

print(point[0])      # 10
print(rgb[-1])       # 0
x, y = point         # Unpacking

# ไม่สามารถแก้ไข Tuple ได้
# point[0] = 5  # Error!

# Tuple ที่มีสมาชิกตัวเดียว ต้องมี ,
single = (42,)
print(type(single))  # <class 'tuple'>

# Set — ไม่ซ้ำ ไม่มีลำดับ
fruits = {"แอปเปิล", "กล้วย", "ส้ม", "แอปเปิล"}
print(fruits)  # แอปเปิลจะมีแค่ตัวเดียว

# กรองค่าซ้ำจาก List
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4]

# การดำเนินการเซต
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a | b)   # Union: {1,2,3,4,5,6}
print(a & b)   # Intersection: {3,4}
print(a - b)   # Difference: {1,2}`
                }
            },
            takeaways: [
                "Tuple คล้าย List แต่แก้ไขไม่ได้หลังสร้าง (immutable) เหมาะกับข้อมูลที่ไม่ต้องการให้เปลี่ยน",
                "Set เก็บค่าที่ไม่ซ้ำกันและไม่มีลำดับ สร้างด้วย {} หรือ set() (ห้ามใช้ {} ว่างเพราะจะได้ dict แทน)",
                "Set รองรับการดำเนินการเซต เช่น | (union) & (intersection) - (difference)"
            ]
        },

        {
            id: 14,
            title: "Dictionary",
            desc: "เก็บข้อมูลแบบ key-value pairs",
            content: {
                th: {
                    title: "Dictionary — ข้อมูลแบบ Key-Value",
                    desc: `Dictionary เก็บข้อมูลเป็นคู่ key:value สร้างด้วยวงเล็บปีกกา {} โดย key ต้องไม่ซ้ำกันและต้องเป็นชนิดข้อมูลที่ hashable เช่น string หรือ number ส่วน value เป็นอะไรก็ได้

เข้าถึงค่าด้วย dict[key] หรือ dict.get(key) ซึ่งปลอดภัยกว่าเพราะคืน None แทน error เมื่อไม่เจอ key

เมธอดสำคัญ: keys() คืน key ทั้งหมด, values() คืน value ทั้งหมด, items() คืนคู่ (key, value) ทั้งหมด, update() อัพเดตหลาย key พร้อมกัน, pop() ลบ key

Dictionary ใช้งานมากในการเก็บข้อมูล JSON, การนับความถี่ และการ mapping ข้อมูล`,
                    code:
`# สร้าง Dictionary
student = {
    "name": "Zenith",
    "age": 18,
    "score": 92.5,
    "city": "ลำพูน",
    "passed": True
}

# เข้าถึงค่า
print(student["name"])          # Zenith
print(student.get("phone"))     # None (ไม่ error)
print(student.get("phone", "ไม่มีเบอร์"))

# แก้ไขและเพิ่ม
student["age"] = 19
student["email"] = "zen@mail.com"

# ลบ
del student["city"]
removed = student.pop("passed")

# วนลูปผ่าน Dictionary
for key in student:
    print(f"{key}: {student[key]}")

for key, value in student.items():
    print(f"  {key} = {value}")

# นับความถี่ของตัวอักษร
word = "programming"
freq = {}
for char in word:
    freq[char] = freq.get(char, 0) + 1
print(freq)`
                }
            },
            takeaways: [
                "Dictionary เก็บข้อมูลเป็นคู่ key:value โดย key ห้ามซ้ำกัน สร้างด้วย {}",
                "dict.get(key) ปลอดภัยกว่า dict[key] เพราะคืน None แทนการเกิด error เมื่อไม่เจอ key",
                "keys(), values(), items() ใช้ดึงข้อมูลออกมาวนลูปหรือประมวลผลต่อได้"
            ]
        },

        {
            id: 15,
            title: "String Methods",
            desc: "เมธอดจัดการข้อความที่ใช้บ่อย",
            content: {
                th: {
                    title: "String Methods — เครื่องมือจัดการข้อความ",
                    desc: `String ใน Python มีเมธอดในตัวมากมายสำหรับจัดการข้อความ String เป็น immutable ดังนั้นเมธอดทุกตัวจะคืน String ใหม่ ไม่ได้แก้ไข String เดิม

เมธอดที่ใช้บ่อยที่สุด: upper() แปลงเป็นตัวใหญ่, lower() ตัวเล็ก, strip() ลบช่องว่างหน้าหลัง, split() แยกเป็น List, join() รวม List เป็น String, replace() แทนที่, find() หาตำแหน่ง, startswith() และ endswith() ตรวจสอบต้นและท้าย

String formatting มีหลายวิธี แต่ f-string เป็นวิธีที่แนะนำมากที่สุดในปัจจุบัน เพราะอ่านง่ายและรวดเร็ว`,
                    code:
`text = "  Hello, Python World!  "

# จัดรูปแบบพื้นฐาน
print(text.strip())          # ลบช่องว่างหน้าหลัง
print(text.upper())          # ตัวใหญ่ทั้งหมด
print(text.lower())          # ตัวเล็กทั้งหมด
print(text.title())          # ตัวใหญ่ต้นคำ

# ค้นหาและแทนที่
msg = "Python is great. Python is fun."
print(msg.count("Python"))          # 2
print(msg.find("great"))            # ตำแหน่ง
print(msg.replace("Python", "Java")) # แทนที่

# แยกและรวม
csv = "แอปเปิล,กล้วย,ส้ม,มะม่วง"
fruits = csv.split(",")
print(fruits)  # ['แอปเปิล', 'กล้วย', 'ส้ม', 'มะม่วง']

rejoined = " | ".join(fruits)
print(rejoined)  # แอปเปิล | กล้วย | ส้ม | มะม่วง

# ตรวจสอบ
email = "user@example.com"
print(email.endswith(".com"))    # True
print("123".isdigit())           # True
print("abc".isalpha())           # True

# f-string ขั้นสูง
pi = 3.14159
print(f"Pi = {pi:.2f}")         # 3.14
print(f"{'กลาง':^20}")          # จัดกึ่งกลาง`
                }
            },
            takeaways: [
                "String เป็น immutable เมธอดจัดข้อความทุกตัว (upper, lower, strip ฯลฯ) จะคืนค่าใหม่เสมอ ไม่แก้ของเดิม",
                "split() แยกข้อความเป็น list และ join() รวม list กลับเป็นข้อความ",
                "replace(), find(), startswith()/endswith() ช่วยค้นหาและแก้ไขข้อความได้สะดวก"
            ]
        },

        {
            id: 16,
            title: "List Comprehension",
            desc: "สร้าง List ด้วยไวยากรณ์กระชับ",
            content: {
                th: {
                    title: "List Comprehension — Python Style",
                    desc: `List Comprehension คือวิธีการสร้าง List แบบกระชับและ Pythonic โดยรวม for loop และเงื่อนไขไว้ในบรรทัดเดียว ทำงานได้เร็วกว่าการใช้ for loop ธรรมดา และโค้ดสั้นกว่ามาก

รูปแบบพื้นฐาน: [expression for item in iterable]
รูปแบบกับเงื่อนไข: [expression for item in iterable if condition]

นอกจาก List Comprehension ยังมี Dictionary Comprehension และ Set Comprehension ที่ใช้รูปแบบเดียวกัน

Generator Expression คล้ายกันแต่ใช้วงเล็บ () แทน [] จะไม่สร้าง List ทันที แต่สร้างค่าทีละตัวเมื่อต้องการ ประหยัดหน่วยความจำมากกว่า`,
                    code:
`# for loop ธรรมดา
squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(squares)  # [1, 4, 9, 16, 25]

# List Comprehension — กระชับกว่า!
squares = [i ** 2 for i in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# เพิ่มเงื่อนไข
evens = [i for i in range(1, 11) if i % 2 == 0]
print(evens)    # [2, 4, 6, 8, 10]

# แปลงข้อมูล
names = ["zenith", "python", "code"]
upper_names = [name.upper() for name in names]
print(upper_names)  # ['ZENITH', 'PYTHON', 'CODE']

# กรองและแปลง
scores = [85, 42, 91, 38, 76, 55, 88]
passing = [s for s in scores if s >= 60]
print(passing)  # [85, 91, 76, 55, 88]

# Dictionary Comprehension
words = ["apple", "cat", "elephant"]
lengths = {w: len(w) for w in words}
print(lengths)  # {'apple': 5, 'cat': 3, 'elephant': 8}`
                }
            },
            takeaways: [
                "List Comprehension คือวิธีสร้าง list แบบกระชับในบรรทัดเดียว รูปแบบ [expression for item in iterable]",
                "ใส่เงื่อนไขกรองได้ด้วย if ต่อท้าย เช่น [x for x in range(10) if x % 2 == 0]",
                "หลักการเดียวกันนี้ใช้สร้าง Dictionary Comprehension ได้ด้วย"
            ]
        },

        // ═══════════════════════════════════════════
        // หน่วยที่ 4 — ฟังก์ชัน (บท 17-20)
        // ═══════════════════════════════════════════

        {
            id: 17,
            title: "สร้างฟังก์ชัน",
            desc: "def, parameters, return values",
            content: {
                th: {
                    title: "การสร้างและเรียกใช้ฟังก์ชัน",
                    desc: `ฟังก์ชัน (Function) คือกลุ่มโค้ดที่รวมไว้ด้วยกันเพื่อทำงานเฉพาะอย่าง สามารถเรียกใช้ซ้ำได้ ทำให้โค้ดเป็นระเบียบ อ่านง่าย และไม่ต้องเขียนซ้ำ

หลักการ DRY (Don't Repeat Yourself) คือหัวใจของการเขียนฟังก์ชัน ถ้ามีโค้ดที่ต้องใช้ซ้ำ ให้แยกเป็นฟังก์ชัน

Parameters คือตัวแปรที่รับค่าเข้ามา Arguments คือค่าที่ส่งให้ฟังก์ชันตอนเรียกใช้

return ส่งค่ากลับจากฟังก์ชัน ถ้าไม่มี return ฟังก์ชันคืน None ฟังก์ชันสามารถ return หลายค่าพร้อมกันได้ในรูปแบบ Tuple

Docstring คือ comment พิเศษที่อธิบายฟังก์ชัน เขียนด้วย triple quotes """ ทันทีหลังบรรทัด def`,
                    code:
`# ฟังก์ชันพื้นฐาน
def greet():
    print("สวัสดี!")

greet()    # เรียกใช้

# ฟังก์ชันรับ Parameters
def greet_person(name, lang="ไทย"):
    """ทักทายบุคคลตามภาษาที่กำหนด"""
    if lang == "ไทย":
        print(f"สวัสดีคุณ {name}!")
    else:
        print(f"Hello {name}!")

greet_person("Zenith")           # ค่า default
greet_person("Bob", "อังกฤษ")    # ระบุ lang

# ฟังก์ชันคืนค่า
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")

# คืนหลายค่า
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5, 9, 2])
print(f"Min: {lo}, Max: {hi}")

# ฟังก์ชันคำนวณเกรด
def get_grade(score):
    if score >= 80: return "A"
    elif score >= 70: return "B"
    elif score >= 60: return "C"
    else: return "F"

print(get_grade(75))   # B`
                }
            },
            takeaways: [
                "ฟังก์ชันรวมโค้ดที่ใช้ซ้ำไว้ในที่เดียวตามหลัก DRY (Don't Repeat Yourself)",
                "parameter คือตัวแปรที่ฟังก์ชันรับเข้ามา ส่วน return ส่งค่ากลับ — ถ้าไม่มี return จะได้ None",
                "กำหนดค่า default ให้ parameter ได้ และฟังก์ชันสามารถ return หลายค่าพร้อมกันแบบ tuple"
            ]
        },

        {
            id: 18,
            title: "Arguments พิเศษ",
            desc: "*args, **kwargs และ Default Parameters",
            content: {
                th: {
                    title: "Arguments พิเศษ: *args และ **kwargs",
                    desc: `Python มี parameter พิเศษที่ทำให้ฟังก์ชันรับค่าได้หลากหลายและยืดหยุ่น

Default Parameters คือการกำหนดค่าเริ่มต้นให้ parameter ถ้าไม่ส่งค่ามา ฟังก์ชันจะใช้ค่า default แทน ต้องเขียน parameter ที่มี default ไว้ท้ายเสมอ

*args (Arbitrary Arguments) ใช้รับ arguments ที่ไม่กำหนดจำนวนในรูปแบบ positional Python จะรวบรวมทั้งหมดเป็น Tuple

**kwargs (Keyword Arguments) ใช้รับ arguments ที่ไม่กำหนดจำนวนในรูปแบบ keyword Python จะรวบรวมทั้งหมดเป็น Dictionary

Keyword Arguments ในการเรียกฟังก์ชัน คือการระบุชื่อ parameter เมื่อเรียกใช้ ทำให้เปลี่ยนลำดับได้และอ่านโค้ดชัดขึ้น`,
                    code:
`# Default Parameters
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9  (3^2)
print(power(3, 3))   # 27 (3^3)

# *args — รับหลาย arguments
def add_all(*numbers):
    print(f"ประเภท: {type(numbers)}")  # tuple
    return sum(numbers)

print(add_all(1, 2))           # 3
print(add_all(1, 2, 3, 4, 5))  # 15

# **kwargs — รับ keyword arguments
def show_info(**info):
    print(f"ประเภท: {type(info)}")  # dict
    for key, value in info.items():
        print(f"  {key}: {value}")

show_info(name="Zenith", age=18, city="ลำพูน")

# รวมกันทั้งหมด
def full_func(required, *args, default=10, **kwargs):
    print(f"required: {required}")
    print(f"args: {args}")
    print(f"default: {default}")
    print(f"kwargs: {kwargs}")

full_func("A", 1, 2, 3, default=20, x=4, y=5)`
                }
            },
            takeaways: [
                "Default parameter ต้องเขียนไว้ท้ายสุดเสมอ เพื่อให้ Python รู้ว่าตัวไหนมีค่าเริ่มต้น",
                "*args รวบรวม argument ที่ไม่จำกัดจำนวนเป็น tuple ส่วน **kwargs รวบรวมเป็น dictionary",
                "การระบุชื่อ parameter ตอนเรียกใช้ฟังก์ชัน (keyword arguments) ช่วยให้สลับลำดับได้และอ่านง่ายขึ้น"
            ]
        },

        {
            id: 19,
            title: "Scope และ Global/Local",
            desc: "ขอบเขตของตัวแปรในฟังก์ชัน",
            content: {
                th: {
                    title: "ขอบเขตของตัวแปร (Variable Scope)",
                    desc: `Scope คือขอบเขตที่ตัวแปรสามารถเข้าถึงได้ Python ใช้กฎ LEGB Rule ในการค้นหาตัวแปร

L — Local Scope: ตัวแปรที่สร้างในฟังก์ชัน ใช้ได้เฉพาะในฟังก์ชันนั้น

E — Enclosing Scope: ตัวแปรในฟังก์ชันที่ครอบ (สำหรับ nested function)

G — Global Scope: ตัวแปรที่สร้างนอกฟังก์ชัน ใช้ได้ทุกที่ในไฟล์

B — Built-in Scope: ชื่อที่ Python จองไว้เช่น print, len, range

การใช้ global keyword ช่วยให้แก้ไขตัวแปร global ได้จากในฟังก์ชัน แต่ควรใช้อย่างระมัดระวัง เพราะทำให้โค้ดตามยากและ debug ยาก หลักการที่ดีคือส่งค่าผ่าน parameter และรับค่ากลับผ่าน return`,
                    code:
`# Global vs Local
x = 10   # Global variable

def show():
    x = 20   # Local variable (คนละตัวกับ global)
    print(f"ใน function: x = {x}")   # 20

show()
print(f"นอก function: x = {x}")     # 10

# ใช้ global keyword
count = 0

def increment():
    global count     # บอกว่าจะแก้ global
    count += 1

increment()
increment()
print(f"count = {count}")  # 2

# Nested function (Enclosing scope)
def outer():
    msg = "Hello"
    def inner():
        print(msg)   # เข้าถึง enclosing scope ได้
    inner()

outer()

# Best Practice — ใช้ return แทน global
def add_to(value, amount):
    return value + amount   # ดีกว่าการใช้ global

total = 0
total = add_to(total, 5)
total = add_to(total, 3)
print(total)  # 8`
                }
            },
            takeaways: [
                "LEGB Rule คือลำดับที่ Python ค้นหาตัวแปร: Local → Enclosing → Global → Built-in",
                "ตัวแปรที่สร้างในฟังก์ชันเป็น local ใช้ได้แค่ในฟังก์ชันนั้น แม้ชื่อซ้ำกับตัวแปร global ก็เป็นคนละตัวกัน",
                "ควรใช้ return ส่งค่ากลับแทนการใช้ global keyword แก้ไขตัวแปรนอกฟังก์ชัน เพราะโค้ดจะตามรอยยากกว่า"
            ]
        },

        {
            id: 20,
            title: "จัดการข้อผิดพลาด",
            desc: "try, except, finally",
            content: {
                th: {
                    title: "การจัดการข้อผิดพลาด (Exception Handling)",
                    desc: `Exception คือเหตุการณ์ที่เกิดขึ้นระหว่างรันโปรแกรมและทำให้โปรแกรมหยุดทำงานโดยผิดปกติ เช่น หารด้วยศูนย์ เรียก index เกิน list หรือเปิดไฟล์ที่ไม่มี

try-except ใช้ดักจับและจัดการ Exception โค้ดใน try จะถูกทดลองรัน ถ้าเกิด Exception จะไปทำใน except แทน ทำให้โปรแกรมไม่หยุดและสามารถรองรับข้อผิดพลาดได้อย่างสวยงาม

except สามารถดักจับ Exception หลายชนิดต่างๆ กัน หรือใช้ Exception เป็น base class เพื่อดักทุกชนิด

finally ทำงานเสมอไม่ว่าจะเกิด Exception หรือไม่ ใช้สำหรับทำความสะอาด เช่น ปิดไฟล์หรือ connection

raise ใช้สร้าง Exception เองเมื่อต้องการ`,
                    code:
`# try-except พื้นฐาน
try:
    num = int(input("ใส่ตัวเลข: "))
    result = 100 / num
    print(f"100 / {num} = {result}")
except ValueError:
    print("กรุณาใส่ตัวเลขเท่านั้น!")
except ZeroDivisionError:
    print("หารด้วยศูนย์ไม่ได้!")
except Exception as e:
    print(f"เกิดข้อผิดพลาด: {e}")
else:
    print("คำนวณสำเร็จ!")    # รันเมื่อไม่เกิด error
finally:
    print("จบการทำงาน")       # รันเสมอ

# ดักจับหลายชนิดพร้อมกัน
try:
    data = [1, 2, 3]
    print(data[10])
except (IndexError, KeyError) as e:
    print(f"Index/Key ผิดพลาด: {e}")

# raise — สร้าง Exception เอง
def set_age(age):
    if age < 0 or age > 150:
        raise ValueError(f"อายุ {age} ไม่สมเหตุสมผล")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(e)`
                }
            },
            takeaways: [
                "try-except ดักจับ Exception ไม่ให้โปรแกรมหยุดทำงานกะทันหันเมื่อเกิดข้อผิดพลาด",
                "ระบุชนิด Exception ที่ต้องการดักได้เจาะจง เช่น ValueError, ZeroDivisionError เพื่อจัดการแต่ละกรณีต่างกัน",
                "finally ทำงานเสมอไม่ว่าจะเกิด Exception หรือไม่ เหมาะสำหรับปิดไฟล์หรือ connection"
            ]
        },

        // ═══════════════════════════════════════════
        // หน่วยที่ 5 — OOP (บท 21-24)
        // ═══════════════════════════════════════════

        {
            id: 21,
            title: "OOP: Class และ Object",
            desc: "แนวคิดการเขียนโปรแกรมเชิงวัตถุ",
            content: {
                th: {
                    title: "การเขียนโปรแกรมเชิงวัตถุ (OOP)",
                    desc: `OOP (Object-Oriented Programming) คือแนวคิดการเขียนโปรแกรมที่มองทุกสิ่งเป็นวัตถุ (Object) ที่มีคุณสมบัติและความสามารถ เป็นวิธีที่นักพัฒนาซอฟต์แวร์มืออาชีพใช้ในการสร้างโปรแกรมขนาดใหญ่

หลักการสำคัญ 4 ประการของ OOP: Encapsulation (การซ่อนข้อมูล), Inheritance (การสืบทอด), Polymorphism (การมีหลายรูป), Abstraction (การซ่อนความซับซ้อน)

Class คือพิมพ์เขียว (Blueprint) หรือแม่แบบที่กำหนดว่าวัตถุจะมีคุณสมบัติและความสามารถอะไร เปรียบเหมือนแบบแปลนบ้าน

Object (Instance) คือวัตถุจริงที่สร้างจาก Class เปรียบเหมือนบ้านจริงที่สร้างจากแบบแปลน จาก Class เดียวสร้าง Object ได้หลายตัว`,
                    code:
`# สร้าง Class
class Dog:
    # Class Attribute (ร่วมกันทุก instance)
    species = "Canis familiaris"
    
    def bark(self):
        print("โฮ่ง โฮ่ง!")
    
    def sleep(self):
        print("กำลังนอนหลับ...")

# สร้าง Object จาก Class
dog1 = Dog()    # สร้าง instance ที่ 1
dog2 = Dog()    # สร้าง instance ที่ 2

# เรียกใช้ method
dog1.bark()
dog2.sleep()

# ตรวจสอบ
print(type(dog1))              # <class '__main__.Dog'>
print(isinstance(dog1, Dog))   # True
print(dog1.species)            # Canis familiaris

# Class กับข้อมูลจริง
class Car:
    wheels = 4
    
    def start(self):
        print("วรรรมม! รถสตาร์ทแล้ว")
    
    def honk(self):
        print("บี๊บ บี๊บ!")

my_car = Car()
my_car.start()
my_car.honk()
print(f"มีล้อ {my_car.wheels} ล้อ")`
                }
            },
            takeaways: [
                "Class คือพิมพ์เขียวที่กำหนดคุณสมบัติและความสามารถ ส่วน Object คือวัตถุจริงที่สร้างจาก Class นั้น",
                "หลักการหลักของ OOP มี 4 ข้อ: Encapsulation, Inheritance, Polymorphism, Abstraction",
                "จาก Class เดียวสามารถสร้าง Object ได้หลายตัว แต่ละตัวเป็นอิสระจากกัน"
            ]
        },

        {
            id: 22,
            title: "Attributes และ Methods",
            desc: "__init__, self, instance attributes",
            content: {
                th: {
                    title: "Attributes, Methods และ __init__",
                    desc: `__init__ (Constructor) คือ method พิเศษที่ Python เรียกอัตโนมัติทุกครั้งที่สร้าง Object ใหม่ ใช้กำหนดค่าเริ่มต้นให้ attributes

self คือ parameter ตัวแรกของทุก method ใน class หมายถึงตัว Object เองที่กำลังถูกเรียกใช้ ต้องใส่เสมอแม้ไม่ได้ใช้ Python จะส่งค่านี้ให้อัตโนมัติตอนเรียกใช้ method

Instance Attributes คือ attributes ที่แต่ละ Object มีแยกกัน สร้างใน __init__ ด้วย self.attribute_name

Class Attributes คือ attributes ที่ทุก Object ของ class แบ่งกัน สร้างนอก __init__

Class Methods (@classmethod) และ Static Methods (@staticmethod) คือ method พิเศษที่มีพฤติกรรมต่างจาก instance method ปกติ`,
                    code:
`class Student:
    # Class Attribute
    school = "วิทยาลัยเทคนิคลำพูน"
    student_count = 0
    
    def __init__(self, name, age, grade):
        # Instance Attributes
        self.name = name
        self.age = age
        self.grade = grade
        self.scores = []
        Student.student_count += 1
    
    def introduce(self):
        print(f"สวัสดี ผม/หนู {self.name}")
        print(f"อายุ {self.age} ปี ชั้น {self.grade}")
    
    def add_score(self, subject, score):
        self.scores.append({"subject": subject, "score": score})
    
    def average_score(self):
        if not self.scores:
            return 0
        total = sum(s["score"] for s in self.scores)
        return total / len(self.scores)
    
    def __str__(self):   # method พิเศษสำหรับ print()
        return f"Student({self.name}, {self.grade})"

# ใช้งาน
s1 = Student("Zenith", 18, "ปวส.2")
s2 = Student("Somchai", 19, "ปวส.2")

s1.introduce()
s1.add_score("Python", 92)
s1.add_score("Math", 85)
print(f"คะแนนเฉลี่ย: {s1.average_score():.1f}")
print(s1)    # Student(Zenith, ปวส.2)
print(f"นักศึกษาทั้งหมด: {Student.student_count}")`
                }
            },
            takeaways: [
                "__init__ ถูกเรียกอัตโนมัติทุกครั้งที่สร้าง Object ใหม่ ใช้กำหนดค่าเริ่มต้นให้ attributes",
                "self คือตัว Object เอง ต้องใส่เป็น parameter แรกของทุก method เสมอ",
                "Instance attribute เป็นของเฉพาะแต่ละ Object ส่วน Class attribute ใช้ร่วมกันทุก Object"
            ]
        },

        {
            id: 23,
            title: "Inheritance",
            desc: "การสืบทอดคุณสมบัติระหว่าง Class",
            content: {
                th: {
                    title: "Inheritance — การสืบทอด",
                    desc: `Inheritance คือกลไกที่ให้ Child Class (Subclass) สืบทอด attributes และ methods ทั้งหมดจาก Parent Class (Superclass) ช่วยลดการเขียนโค้ดซ้ำและสร้างลำดับชั้นของ class ที่มีความสัมพันธ์กัน

Child Class เข้าถึง method ของ Parent ได้ทันที และสามารถ Override (เขียนทับ) method ที่ต้องการพฤติกรรมต่างออกไปได้

super() ใช้เรียก method ของ Parent class จาก Child class มักใช้ใน __init__ ของ Child เพื่อเรียก __init__ ของ Parent ก่อน แล้วค่อยเพิ่ม attributes เพิ่มเติม

Multiple Inheritance Python รองรับการสืบทอดจากหลาย Parent class ซึ่งต่างจากภาษาอย่าง Java ที่รองรับ single inheritance เท่านั้น`,
                    code:
`# Parent Class
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        print(f"{self.name} พูดว่า: {self.sound}")
    
    def eat(self):
        print(f"{self.name} กำลังกิน")
    
    def __str__(self):
        return f"{type(self).__name__}({self.name})"

# Child Class — สืบทอดจาก Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "โฮ่ง!")  # เรียก Parent __init__
        self.breed = breed
    
    def fetch(self):   # method เพิ่มเติมของ Dog
        print(f"{self.name} วิ่งไปเอาของ!")

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "เหมียว!")
    
    def speak(self):   # Override method
        print(f"{self.name} พูดเบาๆ ว่า: เหมียว~")

# ใช้งาน
dog = Dog("บั๊ดดี้", "Golden Retriever")
cat = Cat("มะลิ")

dog.speak()     # โฮ่ง! (จาก Parent)
dog.eat()       # จาก Parent
dog.fetch()     # ของ Dog เอง
cat.speak()     # เหมียว~ (Override)

print(isinstance(dog, Animal))  # True
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Cat))     # False`
                }
            },
            takeaways: [
                "Inheritance ให้ Child class สืบทอด attribute และ method ทั้งหมดจาก Parent class ได้ทันที",
                "super().__init__() ใช้เรียก constructor ของ Parent ก่อน แล้วค่อยเพิ่ม attribute ของ Child เอง",
                "Child class override method ของ Parent เพื่อเปลี่ยนพฤติกรรมเฉพาะของตัวเองได้"
            ]
        },

        {
            id: 24,
            title: "Encapsulation",
            desc: "การซ่อนข้อมูลและ Property",
            content: {
                th: {
                    title: "Encapsulation — การซ่อนข้อมูล",
                    desc: `Encapsulation คือการปกป้องข้อมูลภายใน Object ไม่ให้ถูกเข้าถึงหรือแก้ไขจากภายนอกโดยตรง และควบคุมการเข้าถึงผ่าน method พิเศษ

ใน Python ใช้ convention ดังนี้: _name (single underscore) หมายถึง protected ไม่ควรเข้าถึงจากภายนอก แต่ทำได้, __name (double underscore) หมายถึง private Python จะทำ name mangling ทำให้เข้าถึงตรงๆ ไม่ได้

@property decorator ทำให้ method เหมือน attribute เมื่อเรียกใช้ ไม่ต้องใส่วงเล็บ ใช้สร้าง getter ที่อ่านได้แต่มีการตรวจสอบ

@property.setter ทำให้กำหนดค่าได้พร้อมตรวจสอบความถูกต้อง Encapsulation ช่วยให้ข้อมูลภายใน Object ถูกต้องและสอดคล้องกันเสมอ`,
                    code:
`class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self.__balance = initial_balance  # private
        self.__transactions = []
    
    @property
    def balance(self):    # getter
        return self.__balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("ฝากเงินต้องมากกว่า 0")
        self.__balance += amount
        self.__transactions.append(f"+{amount}")
        print(f"ฝาก {amount:,} บาท ยอดรวม: {self.__balance:,} บาท")
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("ถอนเงินต้องมากกว่า 0")
        if amount > self.__balance:
            raise ValueError("ยอดเงินไม่พอ")
        self.__balance -= amount
        self.__transactions.append(f"-{amount}")
        print(f"ถอน {amount:,} บาท ยอดคงเหลือ: {self.__balance:,} บาท")
    
    def show_statement(self):
        print(f"\\n=== Statement ของ {self.owner} ===")
        for t in self.__transactions:
            print(f"  {t}")
        print(f"  ยอดปัจจุบัน: {self.__balance:,} บาท")

# ใช้งาน
acc = BankAccount("Zenith", 1000)
acc.deposit(500)
acc.withdraw(200)
print(f"ยอดเงิน: {acc.balance:,} บาท")  # ผ่าน property
acc.show_statement()

# ไม่สามารถเข้าถึง __balance ตรงๆ ได้
# print(acc.__balance)  # AttributeError!`
                }
            },
            takeaways: [
                "Encapsulation ปกป้องข้อมูลภายใน Object ไม่ให้ถูกแก้ไขจากภายนอกโดยตรง",
                "_name หมายถึง protected (เข้าถึงได้แต่ไม่ควร), __name หมายถึง private (เข้าถึงตรงๆ จากภายนอกไม่ได้)",
                "@property ทำให้เรียก method ได้เหมือน attribute พร้อมตรวจสอบความถูกต้องของค่าก่อนกำหนด (setter)"
            ]
        }

    ]
};

/* Groups lessons into named units for courses.html and the
   Lesson v2.html sidebar. Kept separate from courseData so the lesson
   list above stays the single source of truth for content/order. */
const courseUnits = [
    { id: 1, title: "พื้นฐาน Python", desc: "ปูพื้นฐานภาษา ตัวแปร ชนิดข้อมูล และการรับ-แสดงผล", lessons: [1, 2, 3, 4, 5, 6] },
    { id: 2, title: "ควบคุมทิศทาง", desc: "เงื่อนไขและลูป สั่งให้โปรแกรมตัดสินใจและทำงานซ้ำ", lessons: [7, 8, 9, 10, 11] },
    { id: 3, title: "โครงสร้างข้อมูล", desc: "List, Tuple, Set, Dictionary และ String Methods", lessons: [12, 13, 14, 15, 16] },
    { id: 4, title: "ฟังก์ชัน", desc: "สร้างฟังก์ชัน จัดการ argument ขอบเขตตัวแปร และข้อผิดพลาด", lessons: [17, 18, 19, 20] },
    { id: 5, title: "เขียนโปรแกรมเชิงวัตถุ (OOP)", desc: "Class, Object, การสืบทอด และ Encapsulation", lessons: [21, 22, 23, 24] }
];

/* Pre/post test question banks (10 questions each) plus the 60-question
   cumulative final exam live in assets/js/unit-quiz-bank.js (loaded
   alongside this file wherever quiz.html's tests are needed) — kept
   separate so that file can grow without crowding the lesson content here. */

/* ---------- shared progress/gating helpers ----------
   Single source of truth for "what's unlocked", used by courses.html,
   lesson.html, quiz.html and dashboard.html. A unit's lessons only start
   counting once its pre-test has been taken, and the *next* unit only
   opens once the current unit's lessons are all done AND its post-test
   is passed (>=70%).

   Pure functions — they take `completed` (array of lesson ids) and
   `unitScores` (per-unit {pre,post} map) as arguments instead of reading
   storage themselves, because progress now lives in Firestore per
   account (see assets/js/progress-store.js) and has to be fetched async
   before any of this can run. */
function pyUnitForLesson(lessonId){
    return courseUnits.find(function(u){ return u.lessons.indexOf(lessonId) > -1; });
}
function pyIsUnitPreDone(unitScores, unitId){
    return !!(unitScores[unitId] && unitScores[unitId].pre);
}
function pyIsUnitPostPassed(unitScores, unitId){
    return !!(unitScores[unitId] && unitScores[unitId].post && unitScores[unitId].post.pct >= 70);
}
// Highest lesson id currently reachable: walks units in order, stopping
// at the first not-yet-completed lesson, or — if a unit's lessons are
// all done but its post-test isn't passed yet — capping at that unit's
// last lesson so the next unit's lessons don't unlock early.
function pyComputeUnlockedLessonId(completed, unitScores){
    for(var i = 0; i < courseUnits.length; i++){
        var unit = courseUnits[i];
        for(var j = 0; j < unit.lessons.length; j++){
            if(completed.indexOf(unit.lessons[j]) === -1) return unit.lessons[j];
        }
        if(!pyIsUnitPostPassed(unitScores, unit.id)) return unit.lessons[unit.lessons.length - 1];
    }
    var last = courseUnits[courseUnits.length - 1];
    return last.lessons[last.lessons.length - 1];
}
// The 60-question cumulative final exam (?type=final in quiz.html) only
// opens once every unit's lessons are done and its post-test passed, and
// must itself score >=70% before the course counts as fully complete
// (this is what gates results.html / the certificate).
function pyIsFinalExamPassed(finalExam){
    return !!(finalExam && finalExam.pct >= 70);
}
function pyIsCourseFullyComplete(completed, unitScores, finalExam){
    var allUnitsDone = courseUnits.every(function(u){
        return u.lessons.every(function(id){ return completed.indexOf(id) > -1; }) && pyIsUnitPostPassed(unitScores, u.id);
    });
    return allUnitsDone && pyIsFinalExamPassed(finalExam);
}