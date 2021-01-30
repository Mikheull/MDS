package com.appli.picot.notepad

import android.support.v7.widget.CardView
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import java.util.*

class NoteAdapter (val notes: TreeMap<Int, Note>, val itemClickListener: View.OnClickListener) : RecyclerView.Adapter<NoteAdapter.ViewHolder>() {

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val cardview = itemView.findViewById<CardView>(R.id.cardview)
        val titre = itemView.findViewById<TextView>(R.id.title_item_list_note)
        val texte = itemView.findViewById<TextView>(R.id.text_item_list_note)
    }

    override fun onCreateViewHolder(parent: ViewGroup, position: Int): NoteAdapter.ViewHolder {
        val inflater = LayoutInflater.from(parent.context)
        val viewItem = inflater.inflate(R.layout.item_list_note, parent, false)
        return ViewHolder(viewItem)
    }

    override fun getItemCount(): Int {
        return notes.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val note = notes[position]
        holder.titre.text = note?.titre
        holder.texte.text = note?.corps
        holder.cardview.tag = position
        holder.cardview.setOnClickListener(itemClickListener)
    }
}