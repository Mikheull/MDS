package com.appli.picot.notepad

import android.os.Parcel
import android.os.Parcelable
import java.io.Serializable

data class Note (var titre: String, var corps:String, val id: Int): Parcelable, Serializable {
    constructor(parcel: Parcel) : this(
            parcel.readString(),
            parcel.readString(),
            parcel.readInt()) {
    }

    override fun writeToParcel(dest: Parcel?, flags: Int) {
        dest?.writeString(titre)
        dest?.writeString(corps)
        dest?.writeInt(id)
    }

    override fun describeContents(): Int {
        return 0;
    }

    companion object CREATOR : Parcelable.Creator<Note> {
        override fun createFromParcel(parcel: Parcel): Note {
            return Note(parcel)
        }

        override fun newArray(size: Int): Array<Note?> {
            return arrayOfNulls(size)
        }
    }
}