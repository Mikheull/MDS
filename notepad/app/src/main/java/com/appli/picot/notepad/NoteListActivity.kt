package com.appli.picot.notepad

import android.app.Activity
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.os.Parcelable
import android.support.design.widget.FloatingActionButton
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.View
import java.util.*

class NoteListActivity : AppCompatActivity(), View.OnClickListener {

    val notes = TreeMap<Int, Note>()

    val adapter = NoteAdapter(notes, this)

    val TAG = NoteListActivity::class.java.simpleName

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_note_list)

        readNotes(notes, this)

        Log.i(TAG, notes.toString())

        val listNote = findViewById<RecyclerView>(R.id.listNote)
        listNote.layoutManager = LinearLayoutManager(this)
        listNote.adapter = adapter

        val fab = findViewById<FloatingActionButton>(R.id.fab)
        fab.setOnClickListener {
            var id = 0
            try {
                id = notes.lastKey()+1
            } catch (e: NoSuchElementException) {}
            val note = Note("","", id)
            notes[id] = note
            launchDetailActivity(note)
        }
    }

    private fun launchDetailActivity(note: Note?){
        val intent = Intent(this, NoteDetailActivity::class.java)
        intent.putExtra(NoteDetailActivity.NOTE, note as Parcelable)
        startActivityForResult(intent, NoteDetailActivity.REQUEST)
    }

    override fun onClick(view: View?) {
        if ( view?.tag != null) {
            val id = view.tag as Int
            val note = notes[id]
            Log.i(TAG, note?.toString())
            launchDetailActivity(note)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if(resultCode != Activity.RESULT_OK || data == null){
            return
        }
        else {
            when(requestCode) {
                NoteDetailActivity.REQUEST -> updateNotes(data)
            }
        }
    }

    private fun updateNotes(data: Intent){
        val note = data.getParcelableExtra<Note>(NoteDetailActivity.NOTE)
        when(data.action){
            NoteDetailActivity.REQUEST_ADD -> {

                notes[note.id] = note
                writeNote(note, this)
            }
            NoteDetailActivity.REQUEST_DELETE -> {
                if (notes.containsKey(note.id)){
                    notes.remove(note.id)
                    removeNote(note, this)
                }
            }
        }
        adapter.notifyItemChanged(note.id)
    }
}
