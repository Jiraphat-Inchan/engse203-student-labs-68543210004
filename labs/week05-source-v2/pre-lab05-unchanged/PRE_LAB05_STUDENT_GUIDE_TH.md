# ENGSE203 Pre-LAB05 — Route, Effect และ Storage Micro-demo

**Version:** v0.5.0  
**สถานะ:** Student-facing Release Candidate  
**เวลาเป้าหมาย:** 45 นาที (ทำก่อนคาบ)  
**โดเมนตัวอย่าง:** Study Task Board — ไม่ใช่เฉลย Campus Service Request

## 1. วัตถุประสงค์

Pre-LAB นี้ไม่ได้ให้สร้าง LAB05 ล่วงหน้า แต่ช่วยให้คุณ:

1. อ่าน hash URL แล้วจับคู่กับ Page ได้
2. เห็นความต่างระหว่าง static route และ dynamic route
3. สังเกต Effect ที่ synchronize `document.title`
4. ทดลองเก็บ demo preference ใน `localStorage`
5. เตรียมคำตอบสั้น ๆ ก่อนเริ่ม CP00

## 2. เตรียมเครื่องมือ

- Node.js `>=22.12.0`
- npm และ browser สมัยใหม่
- อ่าน Beginner Bridge ก่อน

เปิด terminal ในโฟลเดอร์ `pre-lab05/starter/` แล้วรัน:

```bash
npm ci
npm run dev
```

เปิด URL ที่ Vite แสดง ถ้าเปิดไม่ได้ให้บันทึก error และหยุดก่อนแก้ package versions เอง

## 3. Activity A — Predict URL (10 นาที)

ก่อนกด navigation ให้ทาย Page ที่ควรแสดง:

| URL | คำทำนายของฉัน | ผลที่สังเกต |
|---|---|---|
| `#/` | | |
| `#/tasks/TASK-101` | | |
| `#/tasks/TASK-999` | | |
| `#/about` | | |
| `#/unknown` | | |

สังเกตความต่าง:

- `TASK-999` จับคู่ route ได้ แต่ resource ไม่มี
- `/unknown` ไม่มี route ที่ตรง จึงเป็น invalid-route not found

## 4. Activity B — Trace responsibility (10 นาที)

เปิด `src/App.jsx` แล้วหาส่วนต่อไปนี้:

- `<HashRouter>` อยู่ที่ `main.jsx`
- `<Routes>` และ `<Route>` อยู่ที่ `App.jsx`
- `DemoLayout` มี `<Outlet />`
- `TaskDetailPage` อ่าน `taskId` ด้วย `useParams()`

ตอบ:

1. ถ้าเพิ่ม `#` ลงใน `path` ของ Route จะผิด mental model อย่างไร?
2. Layout ถูก render ซ้ำทุก navigation หรือเป็นกรอบร่วมของ child routes?
3. เพราะเหตุใด resource-not-found จึงไม่ควรใช้ Page เดียวกับ invalid-route not found?

## 5. Activity C — Render, Event, Effect (10 นาที)

ทดลอง:

1. เปิด Task Detail แล้วดู browser tab title
2. กลับ Dashboard แล้วดู title อีกครั้ง
3. เปลี่ยน demo preference ด้วยปุ่มในหน้า Dashboard

จัดประเภท:

| Logic | Render / Event / Effect | เหตุผล |
|---|---|---|
| ค้น task จาก `taskId` | | |
| กดเปลี่ยน preference | | |
| อัปเดต `document.title` เมื่อ Page เปลี่ยน | | |
| แสดงข้อความตาม preference | | |

คำใบ้: Effect ใช้เพราะ `document.title` เป็นระบบภายนอก React render tree

## 6. Activity D — Inspect Storage (10 นาที)

1. เปิด DevTools → Application/Storage → Local Storage
2. หาคีย์ `engse203-prelab05-preference`
3. เปลี่ยน preference แล้ว refresh
4. กด Reset Demo Preference แล้ว refresh อีกครั้ง

ตอบ:

- ค่าที่เห็นใน storage เป็น object หรือ string?
- refresh หลังบันทึกต่างจาก React state อย่างไร?
- ถ้า JSON เสีย application ควร crash หรือ fallback?
- ข้อมูลชนิดใดห้ามนำมาใช้ใน demo storage?

## 7. Exit Ticket (5 นาที)

เติมคำตอบใน `PRELAB_NOTES.md`:

- Route หนึ่งรายการและ Page ที่ตรงกัน
- Dynamic parameter ที่ทดลอง
- ตัวอย่าง Render/Event/Effect อย่างละหนึ่ง
- เหตุผลที่ต้อง safe parse
- หนึ่งคำถามที่ยังไม่มั่นใจก่อน LAB05

## 8. Definition of Done

- [ ] `npm ci` และ `npm run dev` ผ่าน
- [ ] ทดลอง URL ทั้ง 5 รายการ
- [ ] อธิบาย resource-not-found vs invalid-route ได้
- [ ] แยก Render/Event/Effect ได้อย่างละหนึ่งกรณี
- [ ] ตรวจ persistence และ reset ด้วยตนเอง
- [ ] เติม `PRELAB_NOTES.md` ครบ

Pre-LAB ไม่ใช้คะแนนจากความสวย และไม่ต้องแก้ starter ให้เหมือน LAB05

