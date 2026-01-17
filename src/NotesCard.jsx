import edit from "./assets/edit.png"
import archive from "./assets/archive.png"
import Delete from "./assets/delete.png"
import restore from "./assets/restore.png"
const NotesCard = ({ title,description, status, onArchive, onDelete, onEdit,onRestore}) => {
  return (
    <div className="p-3 flex bg-orange-200 rounded-md shadow-xl items-center shadow-black/20">
      <div className="w-46 h-24 overflow-hidden">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm mt-1">{description}</p>
      </div>

      <div className="flex gap-2 p-4">
       
        {status === "active" && (
          <>
            <img src={edit} className="w-7 h-7 cursor-pointer" onClick={onEdit} />
            <img src={archive} className="w-7 h-7 cursor-pointer" onClick={onArchive} />
            <img src={Delete} className="w-6 h-6 cursor-pointer" onClick={onDelete} />
          </>
        )}

        
        {status === "archived" && (
          <>
            <img src={edit} className="w-7 h-7 cursor-pointer" onClick={onEdit} />
              <img src={restore} className="w-7 h-7 cursor-pointer" onClick={onRestore} />
            <img src={Delete} className="w-6 h-6 cursor-pointer" onClick={onDelete} />
          </>
        )}

        
        {status === "trash" && (
          <>
            <img src={restore} className="w-7 h-7 cursor-pointer" onClick={onRestore} />
            <img src={Delete} className="w-6 h-6 cursor-pointer" onClick={onDelete} />
          </>
        )}
      </div>
    </div>
  )
}

export default NotesCard
