package com.appli.picot.notepad

import android.app.Activity
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.os.Parcelable
import android.support.design.shape.ShapePath
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.widget.TextView

class NoteDetailActivity : AppCompatActivity() {

    val TAG = NoteDetailActivity::class.java.simpleName

    lateinit var note: Note

    lateinit var texte: TextView
    lateinit var titre: TextView

    companion object {
        val REQUEST = 1
        val NOTE = "note"

        val REQUEST_ADD = "add"
        val REQUEST_DELETE = "delete"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_note_detail)

        note = intent.getParcelableExtra(NOTE)
        texte = findViewById(R.id.text_detail_note)
        titre = findViewById(R.id.title_detail_note)

        texte.text = note.corps
        titre.text = note.titre
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        val inflater = menuInflater
        inflater.inflate(R.menu.note_detail_menu, menu)
        return super.onCreateOptionsMenu(menu)
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        when(item?.itemId){
            R.id.add -> {
                note.titre = titre.text.toString()
                note.corps = texte.text.toString()

                intent = Intent(REQUEST_ADD)
                intent.putExtra(NOTE, note as Parcelable)
                setResult(Activity.RESULT_OK, intent)
                finish()
                return true
            }
            R.id.delete -> {
                intent = Intent(REQUEST_DELETE)
                intent.putExtra(NOTE, note as Parcelable)
                setResult(Activity.RESULT_OK, intent)
                finish()
                return true
            }
        }
        return super.onOptionsItemSelected(item)
    }
}
