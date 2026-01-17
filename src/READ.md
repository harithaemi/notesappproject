# 📝 Notes App (React)

A simple and user-friendly **Notes Application** built with **React**.  
Users can create, edit, archive, delete, restore notes, and all data is saved using **localStorage**.

🔗 Repository:  
https://github.com/harithaemi/notesappproject.git

---

##  Features

###  Notes Management
- Add new notes with title, description, and tag
- Edit existing notes
- Search notes by title or description

### Categories
- **Active** – Notes currently in use
- **Archived** – Notes saved for later
- **Trash** – Deleted notes (temporary storage)



## 🔄 Actions Based on Category

| Category | Available Actions |

| Active | Edit · Archive · Move to Trash |
| Archived | Edit · Restore |
| Trash | Restore · Delete Permanently |

> Buttons automatically change based on the note’s status for better UX.

---

## 💾 Data Persistence
- Notes are stored in **localStorage**
- Data remains even after page refresh or browser restart

---

## 🛠️ Built With
- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript**
- **localStorage**

---

##  Installation & Setup

1️⃣ Clone the repository
```bash
git clone https://github.com/harithaemi/notesappproject.git

2️⃣ Navigate into the project folder
cd notesappproject

Install dependencies
npm install

Start the development server

npm run dev