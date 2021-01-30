package com.appli.picot.notepad

import android.content.Context
import android.util.Log
import java.io.*
import java.util.*

val NOTE = "Note"
val EXT = ".txt"

val TAG = "storage"

private fun getFileName(id: Int): String{
    return NOTE + id.toString() + EXT
}

private fun getIdFile(file: File): Int{
    return file.name.replace(NOTE, "").replace(EXT, "").toInt()
}

fun readNotes(listNotes: TreeMap<Int, Note>, context: Context){
    val dir = context.filesDir
   for (file in dir.listFiles()) {
        if (file.isFile and (NOTE in file.name) and (EXT in file.name)) {
            val id = getIdFile(file)
            val out = ObjectInputStream(file.inputStream())
            val note = out.readObject() as Note
            listNotes[id] = note
        }
    }
}

fun writeNote(note: Note, context: Context){
    val dir = File(context.filesDir, getFileName(note.id)) // ex: "Note10.txt"
    val out = ObjectOutputStream(dir.outputStream())
    out.writeObject(note)
}

fun removeNote(note: Note, context: Context){
    context.deleteFile(getFileName(note.id))
}